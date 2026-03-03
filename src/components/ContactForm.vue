<script setup>
import { useContactForm } from '../composables/useContactForm'

const { form, errors, sending, status, statusMessage, submit } = useContactForm()
</script>

<template>
  <form @submit.prevent="submit" novalidate>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium mb-1.5 text-[var(--c-text-secondary)]">Naam</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        placeholder="Je naam"
        class="w-full rounded-lg px-4 py-2.5 text-sm border bg-[var(--c-bg-surface)] text-[var(--c-text)] placeholder-[var(--c-text-muted)] outline-none transition-colors duration-300 focus:border-[var(--color-accent)]"
        :class="errors.name ? 'border-red-500 focus:border-red-500' : 'border-[var(--c-border)]'"
        required
        aria-required="true"
      >
      <p v-if="errors.name" class="text-xs mt-1 text-red-500">{{ errors.name }}</p>
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-medium mb-1.5 text-[var(--c-text-secondary)]">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        placeholder="je@email.com"
        class="w-full rounded-lg px-4 py-2.5 text-sm border bg-[var(--c-bg-surface)] text-[var(--c-text)] placeholder-[var(--c-text-muted)] outline-none transition-colors duration-300 focus:border-[var(--color-accent)]"
        :class="errors.email ? 'border-red-500 focus:border-red-500' : 'border-[var(--c-border)]'"
        required
        aria-required="true"
      >
      <p v-if="errors.email" class="text-xs mt-1 text-red-500">{{ errors.email }}</p>
    </div>

    <div class="mb-5">
      <label for="message" class="block text-sm font-medium mb-1.5 text-[var(--c-text-secondary)]">Bericht</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        placeholder="Waar kan ik je mee helpen?"
        class="w-full rounded-lg px-4 py-2.5 text-sm border bg-[var(--c-bg-surface)] text-[var(--c-text)] placeholder-[var(--c-text-muted)] outline-none transition-colors duration-300 resize-y focus:border-[var(--color-accent)]"
        :class="errors.message ? 'border-red-500 focus:border-red-500' : 'border-[var(--c-border)]'"
        required
        aria-required="true"
      />
      <p v-if="errors.message" class="text-xs mt-1 text-red-500">{{ errors.message }}</p>
    </div>

    <button
      type="submit"
      :disabled="sending"
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--color-accent)] border-2 border-[var(--color-accent)] text-[#08080d] cursor-pointer transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <template v-if="!sending">
        <i class="bi bi-send"></i> Verstuur
      </template>
      <template v-else>
        <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Verzenden...
      </template>
    </button>

    <div
      v-if="status"
      class="mt-4 px-4 py-3 rounded-lg text-sm"
      :class="status === 'success'
        ? 'bg-green-500/10 border border-green-500/20 text-green-500'
        : 'bg-red-500/10 border border-red-500/20 text-red-500'
      "
    >
      {{ statusMessage }}
    </div>
  </form>
</template>
