const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE' // Vervang met je Web3Forms access key — https://web3forms.com

const RATE_KEY = 'portfolio_rate'
const MAX_MESSAGES = 3
const WINDOW_MS = 5 * 60 * 1000
const COOLDOWN_MS = 30 * 1000

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

export async function sendMessage({ name, email, message }) {
  const rateCheck = checkRateLimit()
  if (!rateCheck.allowed) {
    return { success: false, error: rateCheck.message }
  }

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `Portfolio bericht van ${name}`,
        from_name: name,
        reply_to: email,
        name,
        email,
        message,
      }),
    })

    const result = await response.json()

    if (result.success) {
      recordSubmission()
      return { success: true }
    }

    return { success: false, error: 'Kon het bericht niet versturen. Probeer het later opnieuw.' }
  } catch {
    return { success: false, error: 'Netwerkfout. Controleer je internetverbinding en probeer opnieuw.' }
  }
}
