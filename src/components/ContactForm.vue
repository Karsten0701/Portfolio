<script setup>
import { Send, Loader2 } from 'lucide-vue-next'
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
        class="w-full rounded-lg px-4 py-2.5 text-sm border bg-[var(--c-bg-surface)] text-[var(--c-text)] placeholder-[var(--c-text-muted)] outline-none transition-colors duration-200 focus:border-[var(--color-accent)]"
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
        class="w-full rounded-lg px-4 py-2.5 text-sm border bg-[var(--c-bg-surface)] text-[var(--c-text)] placeholder-[var(--c-text-muted)] outline-none transition-colors duration-200 focus:border-[var(--color-accent)]"
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
        class="w-full rounded-lg px-4 py-2.5 text-sm border bg-[var(--c-bg-surface)] text-[var(--c-text)] placeholder-[var(--c-text-muted)] outline-none transition-colors duration-200 resize-y focus:border-[var(--color-accent)]"
        :class="errors.message ? 'border-red-500 focus:border-red-500' : 'border-[var(--c-border)]'"
        required
        aria-required="true"
      />
      <p v-if="errors.message" class="text-xs mt-1 text-red-500">{{ errors.message }}</p>
    </div>

    <button
      type="submit"
      :disabled="sending"
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--c-text)] text-[var(--c-bg)] cursor-pointer transition-opacity duration-200 hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <template v-if="!sending">
        <Send :size="14" />
        Verstuur
      </template>
      <template v-else>
        <Loader2 :size="14" class="animate-spin" />
        Verzenden...
      </template>
    </button>

    <div
      v-if="status"
      class="mt-4 px-4 py-3 rounded-lg text-sm"
      :class="status === 'success'
        ? 'bg-green-500/10 border border-green-500/20 text-green-600'
        : 'bg-red-500/10 border border-red-500/20 text-red-500'
      "
    >
      {{ statusMessage }}
    </div>
  </form>
</template>
