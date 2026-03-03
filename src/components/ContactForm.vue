<script setup>
import { useContactForm } from '../composables/useContactForm'

const { form, errors, sending, status, statusMessage, submit } = useContactForm()
</script>

<template>
  <form @submit.prevent="submit" novalidate>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium mb-1.5" style="color: var(--c-text-secondary)">Naam</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        placeholder="Je naam"
        class="form-input"
        :class="{ 'is-error': errors.name }"
        required
        aria-required="true"
      >
      <p v-if="errors.name" class="text-xs mt-1 text-red-500">{{ errors.name }}</p>
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-medium mb-1.5" style="color: var(--c-text-secondary)">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        placeholder="je@email.com"
        class="form-input"
        :class="{ 'is-error': errors.email }"
        required
        aria-required="true"
      >
      <p v-if="errors.email" class="text-xs mt-1 text-red-500">{{ errors.email }}</p>
    </div>

    <div class="mb-5">
      <label for="message" class="block text-sm font-medium mb-1.5" style="color: var(--c-text-secondary)">Bericht</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        placeholder="Waar kan ik je mee helpen?"
        class="form-input resize-y"
        :class="{ 'is-error': errors.message }"
        required
        aria-required="true"
      />
      <p v-if="errors.message" class="text-xs mt-1 text-red-500">{{ errors.message }}</p>
    </div>

    <button type="submit" :disabled="sending" class="btn-primary">
      <span v-if="!sending">Verstuur</span>
      <span v-else class="flex items-center gap-2">
        <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Verzenden...
      </span>
    </button>

    <div
      v-if="status"
      class="mt-4 px-4 py-3 rounded-xl text-sm"
      :class="status === 'success'
        ? 'bg-green-500/10 border border-green-500/20 text-green-500'
        : 'bg-red-500/10 border border-red-500/20 text-red-500'
      "
    >
      {{ statusMessage }}
    </div>
  </form>
</template>
