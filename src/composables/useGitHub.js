import { ref } from 'vue'

const commits = ref([])
const loaded = ref(false)
const error = ref(false)

export function useGitHub() {
  async function fetchCommits() {
    if (loaded.value) return

    try {
      const res = await fetch(
        'https://api.github.com/users/Karsten0701/events/public?per_page=30'
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
            message: commit.message.split('\n')[0].substring(0, 60),
            repo,
            date: new Date(event.created_at),
          })
        }
      }

      commits.value = result.slice(0, 15)
      loaded.value = true
    } catch {
      error.value = true
      loaded.value = true
    }
  }

  return { commits, loaded, error, fetchCommits }
}
