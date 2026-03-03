<script setup>
import { Github, ArrowUpRight, TrendingUp } from 'lucide-vue-next'
import { useIntersection } from '../composables/useIntersection'

defineProps({
  project: Object,
  featured: Boolean,
})

const { el, isVisible } = useIntersection()
</script>

<template>
  <div
    ref="el"
    class="fade-in group rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-card)] transition-all duration-200 hover:border-[var(--c-border-hover)] overflow-hidden relative"
    :class="{ visible: isVisible }"
  >
    <img
      v-if="featured && project.image"
      :src="project.image"
      :alt="project.title"
      class="absolute inset-0 w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none"
    >

    <div
      class="relative z-[1]"
      :class="featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'"
    >
      <div class="flex justify-between items-start mb-3 gap-3">
        <h3
          class="font-semibold text-[var(--c-text)]"
          :class="featured ? 'text-lg sm:text-xl' : 'text-base'"
        >
          {{ project.title }}
        </h3>
        <span
          class="text-[0.65rem] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wide whitespace-nowrap shrink-0"
          :style="project.badgeColor
            ? { background: project.badgeColor + '18', color: project.badgeColor }
            : { background: 'var(--c-bg-alt)', color: 'var(--c-text-muted)' }
          "
        >
          {{ project.badge }}
        </span>
      </div>

      <p
        class="leading-relaxed mb-4 text-[var(--c-text-secondary)]"
        :class="featured ? 'text-sm sm:text-base max-w-xl' : 'text-xs sm:text-sm'"
      >
        {{ project.description }}
      </p>

      <div v-if="project.tech?.length" class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="t in project.tech"
          :key="t"
          class="text-[11px] px-2 py-0.5 rounded-md font-medium bg-[var(--c-bg-alt)] text-[var(--c-text-muted)]"
        >
          {{ t }}
        </span>
      </div>

      <div v-if="project.stat || project.github" class="flex items-center gap-4 pt-3 border-t border-[var(--c-border)]">
        <span
          v-if="project.stat"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]"
        >
          <TrendingUp :size="14" />
          {{ project.stat }}
        </span>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--c-text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--c-text)]"
        >
          <Github :size="14" />
          Bekijk op GitHub
          <ArrowUpRight :size="12" />
        </a>
      </div>
    </div>
  </div>
</template>
