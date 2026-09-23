<script setup>
import { Send, Loader2, Check } from 'lucide-vue-next'
import { useContactForm } from '../composables/useContactForm'

const { form, errors, sending, status, statusMessage, submit } = useContactForm()
</script>

<template>
  <form class="space-y-5" @submit.prevent="submit" novalidate>
    <div class="grid gap-5 sm:grid-cols-2">
      <div><label for="name" class="mb-2 block text-xs text-[var(--c-text-secondary)]">Naam</label><input id="name" v-model="form.name" autocomplete="name" type="text" placeholder="Je naam" required :aria-invalid="!!errors.name" aria-describedby="name-error" class="contact-field" /><p v-if="errors.name" id="name-error" class="mt-1.5 text-xs text-red-500">{{ errors.name }}</p></div>
      <div><label for="email" class="mb-2 block text-xs text-[var(--c-text-secondary)]">E-mailadres</label><input id="email" v-model="form.email" autocomplete="email" type="email" placeholder="je@email.com" required :aria-invalid="!!errors.email" aria-describedby="email-error" class="contact-field" /><p v-if="errors.email" id="email-error" class="mt-1.5 text-xs text-red-500">{{ errors.email }}</p></div>
    </div>
    <div><label for="subject" class="mb-2 block text-xs text-[var(--c-text-secondary)]">Waar gaat je bericht over?</label><select id="subject" v-model="form.subject" required :aria-invalid="!!errors.subject" aria-describedby="subject-error" class="contact-field"><option value="" disabled>Kies een onderwerp</option><option>Een project</option><option>Samenwerken</option><option>Een vraag</option><option>Anders</option></select><p v-if="errors.subject" id="subject-error" class="mt-1.5 text-xs text-red-500">{{ errors.subject }}</p></div>
    <div><label for="message" class="mb-2 block text-xs text-[var(--c-text-secondary)]">Bericht</label><textarea id="message" v-model="form.message" rows="5" placeholder="Vertel me waar je aan denkt…" required :aria-invalid="!!errors.message" aria-describedby="message-error" class="contact-field resize-y" /><p v-if="errors.message" id="message-error" class="mt-1.5 text-xs text-red-500">{{ errors.message }}</p></div>
    <button type="submit" :disabled="sending" class="button-primary disabled:cursor-wait disabled:opacity-60"><Loader2 v-if="sending" :size="15" class="animate-spin" /><Check v-else-if="status === 'success'" :size="15" /><Send v-else :size="15" />{{ sending ? 'Versturen…' : 'Verstuur bericht' }}</button>
    <p v-if="status" role="status" aria-live="polite" class="border-l-2 pl-3 text-sm leading-6" :class="status === 'error' ? 'border-red-500 text-red-500' : 'border-[var(--c-accent)] text-[var(--c-text-secondary)]'">{{ statusMessage }}</p>
  </form>
</template>

<style scoped>
.contact-field{width:100%;min-height:48px;border:1px solid var(--c-border);border-radius:3px;background:var(--c-bg-card);padding:12px 13px;color:var(--c-text);font:inherit;font-size:13px;outline:none}.contact-field:focus{border-color:var(--c-text)}.contact-field::placeholder{color:var(--c-text-muted)}select.contact-field{color:var(--c-text-secondary)}
</style>
