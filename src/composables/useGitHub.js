import { ref } from 'vue'

const commits = ref([])
const contributionWeeks = ref([])
const totalContributions = ref(0)
const loaded = ref(false)
const error = ref(false)

function buildContributionGrid(events) {
  const now = new Date()
  const dayMap = {}

  for (const event of events) {
    if (event.type !== 'PushEvent') continue
    const date = new Date(event.created_at)
    const key = date.toISOString().slice(0, 10)
    dayMap[key] = (dayMap[key] || 0) + (event.payload.commits?.length || 1)
  }

  const weeks = []
  const oneDay = 86400000
  const startDate = new Date(now.getTime() - 52 * 7 * oneDay)
  startDate.setDate(startDate.getDate() - startDate.getDay())

  let total = 0
  let currentWeek = []

  for (let d = new Date(startDate); d <= now; d = new Date(d.getTime() + oneDay)) {
    const key = d.toISOString().slice(0, 10)
    const count = dayMap[key] || 0
    total += count
    currentWeek.push({ date: key, count, day: d.getDay() })

    if (d.getDay() === 6 || d.getTime() >= now.getTime()) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  }

  if (currentWeek.length) weeks.push(currentWeek)
  return { weeks, total }
}

export function useGitHub() {
  async function fetchCommits() {
    if (loaded.value) return

    try {
      const res = await fetch(
        'https://api.github.com/users/Karsten0701/events/public?per_page=100'
      )
      if (!res.ok) throw new Error('API error')

      const events = await res.json()
      const result = []

      for (const event of events) {
        if (event.type !== 'PushEvent') continue
        const repo = event.repo.name.split('/')[1]
        for (const commit of event.payload.commits || []) {
          result.push({
            sha: commit.sha.substring(0, 7),
            message: commit.message.split('\n')[0].substring(0, 56),
            repo,
            date: new Date(event.created_at),
          })
        }
      }

      commits.value = result.slice(0, 20)

      const { weeks, total } = buildContributionGrid(events)
      contributionWeeks.value = weeks
      totalContributions.value = total

      loaded.value = true
    } catch {
      error.value = true
      loaded.value = true
    }
  }

  return { commits, contributionWeeks, totalContributions, loaded, error, fetchCommits }
}
