<script setup>
import { computed } from 'vue'
import SectionHeader from './SectionHeader.vue'
import { skills, tools } from '../data/skills'
import { useIntersection } from '../composables/useIntersection'

const { el, isVisible } = useIntersection()

const grouped = computed(() => {
  const map = {}
  for (const s of skills) {
    if (!map[s.category]) map[s.category] = []
    map[s.category].push(s)
  }
  return map
})
</script>

<template>
  <section id="skills" ref="el" class="py-16 sm:py-20 px-5 sm:px-8 bg-[var(--c-bg-alt)]">
    <div class="max-w-5xl mx-auto fade-in" :class="{ visible: isVisible }">
      <SectionHeader title="Vaardigheden" subtitle="Technologieën en tools waar ik mee werk." />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div v-for="(list, category) in grouped" :key="category">
          <h3 class="text-xs font-semibold uppercase tracking-wider mb-3 text-[var(--c-text-muted)]">
            {{ category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in list"
              :key="skill.name"
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-[var(--c-border)] bg-[var(--c-bg-surface)] text-[var(--c-text)]"
            >
              <span
                class="size-2 rounded-full shrink-0"
                :style="{ background: skill.color }"
              />
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-xs font-semibold uppercase tracking-wider mb-3 text-[var(--c-text-muted)]">
          Tools
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tool in tools"
            :key="tool"
            class="px-3 py-1.5 rounded-lg text-sm font-medium border border-[var(--c-border)] bg-[var(--c-bg-surface)] text-[var(--c-text-secondary)]"
          >
            {{ tool }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
