const STORAGE_KEY = 'portfolio_messages'

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

export async function saveMessage({ name, email, message }) {
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
    return { success: true }
  } catch {
    return { success: false, error: 'Kon het bericht niet opslaan. Probeer het opnieuw.' }
  }
}
