<script setup>
import { computed } from 'vue'
import { Github, ArrowUpRight, TrendingUp } from 'lucide-vue-next'
import { useIntersection } from '../composables/useIntersection'

const props = defineProps({
  project: Object,
  featured: Boolean,
  compact: Boolean,
})

const { el, isVisible } = useIntersection()

const cardLink = computed(() => props.project.link || props.project.github || null)
</script>

<template>
  <component
    :is="cardLink ? 'a' : 'div'"
    ref="el"
    :href="cardLink"
    :target="cardLink ? '_blank' : undefined"
    :rel="cardLink ? 'noopener' : undefined"
    class="fade-in group rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-card)] transition-all duration-200 hover:border-[var(--c-border-hover)] overflow-hidden relative block no-underline"
    :class="[
      { visible: isVisible },
      cardLink ? 'cursor-pointer hover:shadow-lg hover:-translate-y-0.5' : '',
    ]"
  >
    <div
      class="relative z-[1]"
      :class="compact ? 'p-4' : featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'"
    >
      <div class="flex justify-between items-start mb-3 gap-3">
        <h3
          class="font-semibold text-[var(--c-text)]"
          :class="compact ? 'text-sm' : featured ? 'text-lg sm:text-xl' : 'text-base'"
        >
          {{ project.title }}
        </h3>
        <div class="flex items-center gap-2 shrink-0">
          <span
            class="text-[0.65rem] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wide whitespace-nowrap"
            :style="project.badgeColor
              ? { background: project.badgeColor + '18', color: project.badgeColor }
              : { background: 'var(--c-bg-alt)', color: 'var(--c-text-muted)' }
            "
          >
            {{ project.badge }}
          </span>
          <ArrowUpRight
            v-if="cardLink"
            :size="compact ? 14 : 16"
            class="shrink-0 text-[var(--c-text-muted)] transition-all duration-200 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>

      <p
        class="leading-relaxed mb-4 text-[var(--c-text-secondary)]"
        :class="compact ? 'text-xs line-clamp-2' : featured ? 'text-sm sm:text-base max-w-xl' : 'text-xs sm:text-sm'"
      >
        {{ project.description }}
      </p>

      <div v-if="project.tech?.length" class="flex flex-wrap gap-1.5" :class="{ 'mb-4': !compact && (project.stat || project.github) }">
        <span
          v-for="t in project.tech"
          :key="t"
          class="text-[11px] px-2 py-0.5 rounded-md font-medium bg-[var(--c-bg-alt)] text-[var(--c-text-muted)]"
          :class="compact ? 'text-[10px] px-1.5' : ''"
        >
          {{ t }}
        </span>
      </div>

      <div v-if="!compact && (project.stat || project.github)" class="flex items-center gap-4 pt-3 border-t border-[var(--c-border)]">
        <span
          v-if="project.stat"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]"
        >
          <TrendingUp :size="14" />
          {{ project.stat }}
        </span>
        <span
          v-if="project.github"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--c-text-secondary)] transition-colors duration-200 group-hover:text-[var(--c-text)]"
        >
          <Github :size="14" />
          GitHub
        </span>
      </div>
    </div>
  </component>
</template>
