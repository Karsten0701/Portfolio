import { ref } from 'vue'

const ACCOUNTS = ['Karsten0701', 'Karsten07011']

const commits = ref([])
const contributionWeeks = ref([])
const totalContributions = ref(0)
const loaded = ref(false)
const error = ref(false)

function buildFullYearGrid(dayMap) {
  const now = new Date()
  const oneDay = 86400000
  const startDate = new Date(now.getTime() - 52 * 7 * oneDay)
  startDate.setDate(startDate.getDate() - startDate.getDay())

  const weeks = []
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

async function fetchContributionsForAccount(username) {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
    if (!res.ok) return []
    const data = await res.json()
    return data.contributions || []
  } catch {
    return []
  }
}

async function fetchEventsForAccount(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`)
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

export function useGitHub() {
  async function fetchCommits() {
    if (loaded.value) return

    try {
      const contribResults = await Promise.all(
        ACCOUNTS.map(acc => fetchContributionsForAccount(acc))
      )

      const dayMap = {}
      for (const contributions of contribResults) {
        for (const entry of contributions) {
          dayMap[entry.date] = (dayMap[entry.date] || 0) + entry.count
        }
      }

      if (Object.keys(dayMap).length > 0) {
        const { weeks, total } = buildFullYearGrid(dayMap)
        contributionWeeks.value = weeks
        totalContributions.value = total
      } else {
        const allEvents = await Promise.all(
          ACCOUNTS.map(acc => fetchEventsForAccount(acc))
        )
        for (const events of allEvents) {
          for (const event of events) {
            if (event.type !== 'PushEvent') continue
            const key = new Date(event.created_at).toISOString().slice(0, 10)
            dayMap[key] = (dayMap[key] || 0) + (event.payload.commits?.length || 1)
          }
        }
        const { weeks, total } = buildFullYearGrid(dayMap)
        contributionWeeks.value = weeks
        totalContributions.value = total
      }

      const allEvents = await Promise.all(
        ACCOUNTS.map(acc => fetchEventsForAccount(acc))
      )
      const result = []
      for (const events of allEvents) {
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
      }

      commits.value = result
        .sort((a, b) => b.date - a.date)
        .slice(0, 20)

      loaded.value = true
    } catch {
      error.value = true
      loaded.value = true
    }
  }

  return { commits, contributionWeeks, totalContributions, loaded, error, fetchCommits }
}
