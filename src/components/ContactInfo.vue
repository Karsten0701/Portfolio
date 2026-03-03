<script setup>
import { contactItems } from '../data/contact'
</script>

<template>
  <div class="rounded-2xl p-8 border h-full" style="background: var(--c-bg-card); border-color: var(--c-border)">
    <h5 class="font-semibold mb-6" style="color: var(--c-text)">Contactgegevens</h5>

    <div v-for="item in contactItems" :key="item.label" class="flex items-center mb-5 last:mb-0">
      <div
        class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mr-4 border"
        style="background: var(--c-bg-surface); border-color: var(--c-border); color: var(--c-text-secondary)"
      >
        <i :class="'bi bi-' + item.icon" class="text-lg"></i>
      </div>
      <div>
        <p class="text-xs mb-0" style="color: var(--c-text-muted)">{{ item.label }}</p>
        <a
          v-if="item.href"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener' : undefined"
          class="contact-link text-sm font-medium"
        >
          {{ item.value }}
        </a>
        <span v-else class="text-sm font-medium" style="color: var(--c-text)">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
