<script setup>
import { useIntersection } from '../composables/useIntersection'

defineProps({
  project: Object,
})

const { el, isVisible } = useIntersection()
</script>

<template>
  <div
    ref="el"
    class="fade-in rounded-2xl p-6 sm:p-7 flex flex-col h-full border border-[var(--c-border)] bg-[var(--c-bg-card)] transition-colors duration-300 hover:border-[var(--c-border-hover)]"
    :class="{ visible: isVisible }"
  >
    <div class="flex justify-between items-start mb-3 gap-3">
      <h3 class="text-base sm:text-lg font-semibold text-[var(--c-text)]">{{ project.title }}</h3>
      <span
        class="text-[0.65rem] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wide whitespace-nowrap shrink-0"
        :style="project.badgeColor
          ? { background: project.badgeColor, color: '#fff' }
          : { background: 'transparent', color: 'var(--c-text-secondary)', border: '1.5px solid var(--c-border)' }
        "
      >
        {{ project.badge }}
      </span>
    </div>

    <p class="text-xs sm:text-sm leading-relaxed mb-4 flex-1 text-[var(--c-text-muted)]">
      {{ project.description }}
    </p>

    <div v-if="project.stat || project.github" class="border-t border-[var(--c-border)] pt-3 mt-auto">
      <span v-if="project.stat" class="inline-flex items-center gap-1.5 text-sm font-semibold" :style="{ color: project.badgeColor }">
        <i class="bi bi-graph-up"></i> {{ project.stat }}
      </span>
      <a
        v-else-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--c-text-secondary)] no-underline transition-colors duration-300 hover:text-[var(--c-text)]"
      >
        <i class="bi bi-github"></i> Bekijk op GitHub
        <i class="bi bi-arrow-right text-xs"></i>
      </a>
    </div>
  </div>
</template>
