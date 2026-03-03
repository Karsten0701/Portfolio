<script setup>
import { ref, computed } from 'vue'
import SectionHeader from './SectionHeader.vue'
import { skills, tools } from '../data/skills'
import { useIntersection } from '../composables/useIntersection'
import { Code, ArrowUpRight } from 'lucide-vue-next'

const { el, isVisible } = useIntersection()
const activeSkill = ref(null)

const grouped = computed(() => {
  const map = {}
  for (const s of skills) {
    if (!map[s.category]) map[s.category] = []
    map[s.category].push(s)
  }
  return map
})

function setActive(skill) {
  activeSkill.value = skill
}

function clearActive() {
  activeSkill.value = null
}
</script>

<template>
  <section id="skills" ref="el" class="py-16 sm:py-20 px-5 sm:px-8 bg-[var(--c-bg-alt)]">
    <div class="max-w-5xl mx-auto fade-in" :class="{ visible: isVisible }">
      <SectionHeader title="Vaardigheden" subtitle="Technologieen en tools waar ik mee werk." />

      <div class="grid lg:grid-cols-[1fr,280px] gap-8">
        <div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div v-for="(list, category) in grouped" :key="category">
              <h3 class="text-xs font-semibold uppercase tracking-wider mb-3 text-[var(--c-text-muted)]">
                {{ category }}
              </h3>
              <div class="flex flex-col gap-2">
                <button
                  v-for="skill in list"
                  :key="skill.name"
                  class="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-sm font-medium border text-left bg-[var(--c-bg-surface)] text-[var(--c-text)] cursor-pointer transition-all duration-200 w-full"
                  :class="activeSkill?.name === skill.name
                    ? 'border-[var(--color-accent)]'
                    : 'border-[var(--c-border)] hover:border-[var(--c-border-hover)]'
                  "
                  @mouseenter="setActive(skill)"
                  @focus="setActive(skill)"
                  @mouseleave="clearActive"
                  @blur="clearActive"
                >
                  <span
                    class="size-2.5 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125"
                    :style="{ background: skill.color }"
                  />
                  <span class="flex-1">{{ skill.name }}</span>
                  <span class="text-xs text-[var(--c-text-muted)] font-mono">{{ skill.level }}%</span>
                </button>
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

        <div class="hidden lg:block">
          <div class="sticky top-24">
            <Transition
              enter-from-class="opacity-0 translate-y-2"
              enter-active-class="transition-all duration-200"
              enter-to-class="opacity-100 translate-y-0"
              leave-from-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150"
              leave-to-class="opacity-0 translate-y-2"
              mode="out-in"
            >
              <div
                v-if="activeSkill"
                :key="activeSkill.name"
                class="rounded-xl border border-[var(--c-border)] bg-[var(--c-bg-surface)] p-5 overflow-hidden"
              >
                <div class="flex items-center gap-2 mb-3">
                  <span
                    class="size-3 rounded-full"
                    :style="{ background: activeSkill.color }"
                  />
                  <h4 class="font-semibold text-[var(--c-text)]">{{ activeSkill.name }}</h4>
                </div>

                <div class="mb-3">
                  <div class="flex justify-between text-xs mb-1">
                    <span class="text-[var(--c-text-muted)]">Niveau</span>
                    <span class="font-mono font-semibold" :style="{ color: activeSkill.color }">{{ activeSkill.level }}%</span>
                  </div>
                  <div class="h-1.5 rounded-full bg-[var(--c-bg-alt)] overflow-hidden">
                    <div
                      class="h-full rounded-full transition-all duration-500"
                      :style="{ width: activeSkill.level + '%', background: activeSkill.color }"
                    />
                  </div>
                </div>

                <p class="text-xs text-[var(--c-text-secondary)] mb-3 leading-relaxed">
                  {{ activeSkill.description }}
                </p>

                <div v-if="activeSkill.usedIn?.length">
                  <p class="text-[10px] uppercase tracking-wider text-[var(--c-text-muted)] mb-1.5 font-semibold">Gebruikt in</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="proj in activeSkill.usedIn"
                      :key="proj"
                      class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md font-medium bg-[var(--c-bg-alt)] text-[var(--c-text-muted)]"
                    >
                      <Code :size="10" />
                      {{ proj }}
                    </span>
                  </div>
                </div>
              </div>

              <div
                v-else
                key="placeholder"
                class="rounded-xl border border-dashed border-[var(--c-border)] bg-[var(--c-bg-surface)] p-5 flex flex-col items-center justify-center text-center min-h-[180px]"
              >
                <ArrowUpRight :size="20" class="text-[var(--c-text-muted)] mb-2" />
                <p class="text-xs text-[var(--c-text-muted)]">Hover over een skill<br>voor meer details</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
