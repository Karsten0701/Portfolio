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
    class="fade-in rounded-2xl p-7 flex flex-col h-full border t"
    :class="{ visible: isVisible }"
    style="background: var(--c-bg-card); border-color: var(--c-border)"
    @mouseenter="$event.currentTarget.style.borderColor = 'var(--c-border-hover)'"
    @mouseleave="$event.currentTarget.style.borderColor = 'var(--c-border)'"
  >
    <div class="flex justify-between items-start mb-3">
      <h3 class="text-lg font-semibold" style="color: var(--c-text)">{{ project.title }}</h3>
      <span
        class="text-[0.68rem] px-3 py-1 rounded-full font-semibold uppercase tracking-wide whitespace-nowrap shrink-0 ml-3"
        :style="project.badgeColor
          ? { background: project.badgeColor, color: '#fff' }
          : { background: 'transparent', color: 'var(--c-text-secondary)', border: '1.5px solid var(--c-border)' }
        "
      >
        {{ project.badge }}
      </span>
    </div>

    <p class="text-sm leading-relaxed mb-4 flex-1" style="color: var(--c-text-muted)">
      {{ project.description }}
    </p>

    <div v-if="project.stat || project.github" class="border-t pt-3 mt-auto" style="border-color: var(--c-border)">
      <span v-if="project.stat" class="text-sm font-semibold" :style="{ color: project.badgeColor }">
        {{ project.stat }}
      </span>
      <a
        v-else-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener"
        class="text-sm font-medium inline-flex items-center gap-1 t"
        style="color: var(--c-text-secondary); text-decoration: none"
        @mouseenter="$event.currentTarget.style.color = 'var(--c-text)'"
        @mouseleave="$event.currentTarget.style.color = 'var(--c-text-secondary)'"
      >
        Bekijk op GitHub &rarr;
      </a>
    </div>
  </div>
</template>
