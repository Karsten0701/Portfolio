import { computed, ref } from 'vue'

const ACCOUNTS = ['Karsten0701', 'Karsten07011']
const contributionWeeks = ref([])
const totalContributions = ref(0)
const accounts = ref([])
const recentCommits = ref([])
const commitsLoading = ref(false)
const commitsError = ref(false)
const loading = ref(false)
const error = ref(false)
let request
let commitsRequest

function makeYearGrid(dayMap) {
  const today = new Date()
  const end = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  const cutoff = end - 364 * 86400000
  const startDate = new Date(cutoff)
  startDate.setUTCDate(startDate.getUTCDate() - startDate.getUTCDay())
  const weeks = []
  let week = []
  let total = 0

  for (let time = startDate.getTime(); time <= end; time += 86400000) {
    const date = new Date(time).toISOString().slice(0, 10)
    const count = time < cutoff ? 0 : dayMap[date] || 0
    total += count
    week.push({ date, count })
    if (new Date(time).getUTCDay() === 6 || time === end) {
      weeks.push(week)
      week = []
    }
  }
  return { weeks, total }
}

async function fetchAccount(username) {
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
  if (!response.ok) throw new Error(`GitHub-activiteit voor ${username} is niet beschikbaar.`)
  const data = await response.json()
  return { username, contributions: data.contributions || [] }
}

async function fetchRecentCommits() {
  if (commitsRequest) return commitsRequest
  commitsLoading.value = true
  commitsError.value = false
  commitsRequest = Promise.allSettled(ACCOUNTS.map(async username => {
    const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`)
    if (!response.ok) throw new Error('GitHub-events niet beschikbaar.')
    return { username, events: await response.json() }
  })).then(results => {
    const commitMap = new Map()
    for (const result of results) {
      if (result.status !== 'fulfilled') continue
      for (const event of result.value.events) {
        if (event.type !== 'PushEvent') continue
        for (const commit of event.payload?.commits || []) {
          if (!commit.sha || !commit.message) continue
          if (!event.repo?.name) continue
          const key = `${event.repo.name}/${commit.sha}`
          commitMap.set(key, {
            sha: commit.sha,
            message: commit.message.split('\n')[0],
            repo: event.repo.name,
            date: event.created_at,
          })
        }
      }
    }
    recentCommits.value = [...commitMap.values()].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4)
    commitsError.value = !recentCommits.value.length
  }).catch(() => { commitsError.value = true }).finally(() => {
    commitsLoading.value = false
    if (commitsError.value) commitsRequest = null
  })
  return commitsRequest
}

function fetchContributions() {
  if (request) return request
  loading.value = true
  error.value = false
  request = Promise.allSettled(ACCOUNTS.map(fetchAccount)).then(results => {
    const successful = results.filter(result => result.status === 'fulfilled').map(result => result.value)
    accounts.value = successful.map(account => account.username)
    const dayMap = {}
    for (const account of successful) {
      for (const item of account.contributions) dayMap[item.date] = (dayMap[item.date] || 0) + item.count
    }
    if (!successful.length) throw new Error('GitHub-activiteit kon niet worden geladen.')
    const grid = makeYearGrid(dayMap)
    contributionWeeks.value = grid.weeks
    totalContributions.value = grid.total
    error.value = successful.length !== ACCOUNTS.length
  }).catch(() => {
    contributionWeeks.value = []
    totalContributions.value = 0
    error.value = true
  }).finally(() => {
    loading.value = false
    if (error.value) request = null
  })
  return request
}

export function useGitHub() {
  const monthLabels = computed(() => contributionWeeks.value.flatMap((week, weekIndex) => {
    const firstDay = week.find(day => new Date(`${day.date}T00:00:00Z`).getUTCDate() === 1)
    return firstDay ? [{ weekIndex, label: new Intl.DateTimeFormat('nl-NL', { month: 'short', timeZone: 'UTC' }).format(new Date(`${firstDay.date}T00:00:00Z`)) }] : []
  }))
  function contributionColor(count) {
    if (!count) return 'var(--c-bg-alt)'
    if (count <= 1) return 'color-mix(in srgb, var(--c-accent) 28%, var(--c-bg-alt))'
    if (count <= 3) return 'color-mix(in srgb, var(--c-accent) 52%, var(--c-bg-alt))'
    if (count <= 6) return 'color-mix(in srgb, var(--c-accent) 76%, var(--c-bg-alt))'
    return 'var(--c-accent)'
  }
  return { contributionWeeks, totalContributions, accounts, recentCommits, commitsLoading, commitsError, loading, error, fetchContributions, fetchRecentCommits, contributionColor, monthLabels }
}
