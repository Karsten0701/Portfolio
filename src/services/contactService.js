const STORAGE_KEY = 'portfolio_messages'
const RATE_KEY = 'portfolio_rate'
const MAX_MESSAGES = 3
const WINDOW_MS = 5 * 60 * 1000
const COOLDOWN_MS = 30 * 1000

function getMessages() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

function saveMessages(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
}

function getRateData() {
  try {
    return JSON.parse(localStorage.getItem(RATE_KEY)) || { timestamps: [] }
  } catch {
    return { timestamps: [] }
  }
}

function saveRateData(data) {
  localStorage.setItem(RATE_KEY, JSON.stringify(data))
}

export function checkRateLimit() {
  const now = Date.now()
  const data = getRateData()
  const recent = data.timestamps.filter(t => now - t < WINDOW_MS)

  if (recent.length >= MAX_MESSAGES) {
    const oldestInWindow = Math.min(...recent)
    const waitSec = Math.ceil((WINDOW_MS - (now - oldestInWindow)) / 1000)
    return {
      allowed: false,
      message: `Te veel berichten. Wacht ${waitSec} seconden.`,
    }
  }

  if (recent.length > 0) {
    const lastSent = Math.max(...recent)
    if (now - lastSent < COOLDOWN_MS) {
      const waitSec = Math.ceil((COOLDOWN_MS - (now - lastSent)) / 1000)
      return {
        allowed: false,
        message: `Wacht ${waitSec} seconden voor je nog een bericht stuurt.`,
      }
    }
  }

  return { allowed: true }
}

function recordSubmission() {
  const now = Date.now()
  const data = getRateData()
  data.timestamps = data.timestamps.filter(t => now - t < WINDOW_MS)
  data.timestamps.push(now)
  saveRateData(data)
}

export async function saveMessage({ name, email, message }) {
  const rateCheck = checkRateLimit()
  if (!rateCheck.allowed) {
    return { success: false, error: rateCheck.message }
  }

  try {
    const messages = getMessages()

    messages.push({
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    })

    saveMessages(messages)
    recordSubmission()
    return { success: true }
  } catch {
    return { success: false, error: 'Kon het bericht niet opslaan. Probeer het opnieuw.' }
  }
}
