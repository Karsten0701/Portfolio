import { reactive, ref } from 'vue'
import { sendMessage } from '../services/contactService'

export function useContactForm() {
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const errors = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const sending = ref(false)
  const status = ref(null)
  const statusMessage = ref('')

  function clearErrors() {
    errors.name = ''
    errors.email = ''
    errors.subject = ''
    errors.message = ''
  }

  function validate() {
    clearErrors()
    let valid = true

    if (!form.name.trim()) {
      errors.name = 'Naam is verplicht.'
      valid = false
    }

    if (!form.email.trim()) {
      errors.email = 'Email is verplicht.'
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Voer een geldig e-mailadres in.'
      valid = false
    }

    if (!form.subject.trim()) {
      errors.subject = 'Kies waar je bericht over gaat.'
      valid = false
    }

    if (!form.message.trim()) {
      errors.message = 'Bericht is verplicht.'
      valid = false
    }

    return valid
  }

  async function submit() {
    if (!validate()) return

    sending.value = true
    status.value = null

    const result = await sendMessage({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    })

    sending.value = false

    if (result.success) {
      status.value = result.fallback ? 'fallback' : 'success'
      statusMessage.value = result.fallback
        ? 'Je e-mailprogramma is geopend. Verstuur het bericht daar om het naar mij te mailen.'
        : 'Bericht verstuurd! Ik neem zo snel mogelijk contact op.'
      if (!result.fallback) {
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''
        clearErrors()
      }
    } else {
      status.value = 'error'
      statusMessage.value = result.error
    }

    setTimeout(() => {
      status.value = null
      statusMessage.value = ''
    }, 5000)
  }

  return { form, errors, sending, status, statusMessage, submit }
}
