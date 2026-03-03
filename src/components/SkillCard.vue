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
    class="fade-in card-hover rounded-xl p-6 text-center"
    :class="{ visible: isVisible }"
  >
    <div
      class="w-13 h-13 rounded-xl inline-flex items-center justify-center mb-3 text-2xl"
      :style="{ background: skill.color + '15', color: skill.color }"
    >
      <i :class="'bi bi-' + skill.icon"></i>
    </div>
    <h4 class="text-sm font-semibold mb-1" style="color: var(--c-text)">{{ skill.name }}</h4>
    <p class="text-xs" style="color: var(--c-text-muted)">{{ skill.description }}</p>
  </div>
</template>
