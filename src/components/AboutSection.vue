<script setup>
import SectionHeader from './SectionHeader.vue'
import { useIntersection } from '../composables/useIntersection'

const stats = [
  { number: '900k+', label: 'Game Bezoeken', icon: 'bi-controller' },
  { number: '5+', label: 'Projecten', icon: 'bi-folder' },
  { number: '6', label: 'Programmeertalen', icon: 'bi-code-slash' },
]

const { el, isVisible } = useIntersection()
</script>

<template>
  <section id="about" ref="el" class="py-16 sm:py-20 px-5 sm:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div class="lg:col-span-7 fade-in" :class="{ visible: isVisible }">
          <SectionHeader title="Over Mij" />
          <p class="text-sm sm:text-base leading-relaxed mb-3 text-[var(--c-text-secondary)]">
            Ik ben Karsten Lindenburg, 18 jaar oud en studeer Creative Software Development
            aan het Grafisch Lyceum Rotterdam. Ik ben gepassioneerd over het ontwikkelen van
            games en applicaties, met een focus op gebruikerservaring en functionele design.
          </p>
          <p class="text-sm sm:text-base leading-relaxed mb-6 text-[var(--c-text-secondary)]">
            Mijn interesse ligt vooral in game development en het creeren van interactieve
            ervaringen die mensen verbinden en vermaken.
          </p>
          <div class="flex gap-3 flex-wrap">
            <a
              href="https://github.com/Karsten0701"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-accent)] text-[#08080d] no-underline transition-colors duration-300 hover:bg-[var(--color-accent-hover)]"
            >
              <i class="bi bi-github"></i> Personal GitHub
            </a>
            <a
              href="https://github.com/Karsten07011"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium border border-[var(--c-border)] text-[var(--c-text)] no-underline transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <i class="bi bi-github"></i> School GitHub
            </a>
          </div>
        </div>

        <div class="lg:col-span-4 lg:col-start-9">
          <div class="flex flex-row lg:flex-col gap-3">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex-1 rounded-xl p-4 sm:p-5 text-center border border-[var(--c-border)] bg-[var(--c-bg-card)] transition-colors duration-300 hover:border-[var(--c-border-hover)]"
            >
              <i :class="stat.icon" class="bi text-lg mb-2 block text-[var(--c-text-muted)]"></i>
              <div class="text-xl sm:text-2xl font-bold leading-none text-[var(--c-text)]">{{ stat.number }}</div>
              <div class="text-[11px] sm:text-xs mt-1.5 text-[var(--c-text-muted)]">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
