import { reactive, ref } from 'vue'
import { sendMessage } from '../services/contactService'

export function useContactForm() {
  const form = reactive({
    name: '',
    email: '',
    message: '',
  })

  const errors = reactive({
    name: '',
    email: '',
    message: '',
  })

  const sending = ref(false)
  const status = ref(null)
  const statusMessage = ref('')

  function clearErrors() {
    errors.name = ''
    errors.email = ''
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
      message: form.message,
    })

    sending.value = false

    if (result.success) {
      status.value = 'success'
      statusMessage.value = 'Bericht verstuurd! Ik neem zo snel mogelijk contact op.'
      form.name = ''
      form.email = ''
      form.message = ''
      clearErrors()
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
