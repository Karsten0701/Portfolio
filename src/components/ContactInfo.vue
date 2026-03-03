<script setup>
import { Mail, Github, GraduationCap, MapPin } from 'lucide-vue-next'
import { contactItems } from '../data/contact'

const iconMap = {
  'envelope-fill': Mail,
  'mortarboard-fill': GraduationCap,
  'github': Github,
  'geo-alt-fill': MapPin,
}
</script>

<template>
  <div class="rounded-xl p-6 sm:p-8 border border-[var(--c-border)] bg-[var(--c-bg-card)] h-full">
    <h3 class="font-semibold mb-5 text-[var(--c-text)]">Contactgegevens</h3>

    <div class="space-y-4">
      <div v-for="item in contactItems" :key="item.label" class="flex items-center">
        <div class="size-10 rounded-lg flex items-center justify-center shrink-0 mr-3 border border-[var(--c-border)] bg-[var(--c-bg-surface)] text-[var(--c-text-muted)]">
          <component :is="iconMap[item.icon] || Mail" :size="16" />
        </div>
        <div class="min-w-0">
          <p class="text-xs text-[var(--c-text-muted)]">{{ item.label }}</p>
          <a
            v-if="item.href"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener' : undefined"
            class="text-sm font-medium text-[var(--c-text)] no-underline transition-colors duration-200 hover:text-[var(--c-text-secondary)] truncate block"
          >
            {{ item.value }}
          </a>
          <span v-else class="text-sm font-medium text-[var(--c-text)]">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
