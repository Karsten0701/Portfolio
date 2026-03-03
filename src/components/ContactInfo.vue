<script setup>
import { contactItems } from '../data/contact'
</script>

<template>
  <div class="rounded-2xl p-6 sm:p-8 border border-[var(--c-border)] bg-[var(--c-bg-card)] h-full">
    <h5 class="font-semibold mb-5 text-[var(--c-text)]">Contactgegevens</h5>

    <div v-for="(item, i) in contactItems" :key="item.label" :class="i < contactItems.length - 1 ? 'mb-4' : ''" class="flex items-center">
      <div class="size-10 rounded-lg flex items-center justify-center shrink-0 mr-3 border border-[var(--c-border)] bg-[var(--c-bg-surface)] text-[var(--c-text-secondary)]">
        <i :class="'bi bi-' + item.icon" class="text-base"></i>
      </div>
      <div class="min-w-0">
        <p class="text-xs text-[var(--c-text-muted)]">{{ item.label }}</p>
        <a
          v-if="item.href"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener' : undefined"
          class="text-sm font-medium text-[var(--c-text)] no-underline transition-colors duration-300 hover:text-[var(--c-text-secondary)] truncate block"
        >
          {{ item.value }}
        </a>
        <span v-else class="text-sm font-medium text-[var(--c-text)]">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
