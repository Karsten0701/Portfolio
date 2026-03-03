<script setup>
import { useIntersection } from '../composables/useIntersection'

defineProps({
  skill: Object,
})

const { el, isVisible } = useIntersection()
</script>

<template>
  <div
    ref="el"
    class="fade-in rounded-xl p-5 sm:p-6 text-center border border-[var(--c-border)] bg-[var(--c-bg-card)] transition-colors duration-300 hover:border-[var(--c-border-hover)]"
    :class="{ visible: isVisible }"
  >
    <div
      class="w-12 h-12 rounded-xl inline-flex items-center justify-center mb-3 text-xl"
      :style="{ background: skill.color + '15', color: skill.color }"
    >
      <i :class="'bi bi-' + skill.icon"></i>
    </div>
    <h4 class="text-sm font-semibold mb-0.5 text-[var(--c-text)]">{{ skill.name }}</h4>
    <p class="text-xs text-[var(--c-text-muted)]">{{ skill.description }}</p>
  </div>
</template>
