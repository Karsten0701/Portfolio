import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/**
 * Sends an email via EmailJS.
 * Returns { success, error } so callers don't need try/catch.
 */
export async function sendEmail(templateParams) {
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    return { success: true }
  } catch (err) {
    return { success: false, error: err?.text || 'Er is iets misgegaan. Probeer het later opnieuw.' }
  }
}
