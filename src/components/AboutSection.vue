<script setup>
import SectionHeader from './SectionHeader.vue'
import { useIntersection } from '../composables/useIntersection'

const stats = [
  { number: '900k+', label: 'Game Bezoeken' },
  { number: '5+', label: 'Projecten' },
  { number: '6', label: 'Programmeertalen' },
]

const { el, isVisible } = useIntersection()
</script>

<template>
  <section id="about" ref="el" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 fade-in" :class="{ visible: isVisible }">
          <SectionHeader title="Over Mij" />
          <p class="text-base leading-relaxed mb-4" style="color: var(--c-text-secondary)">
            Ik ben Karsten Lindenburg, 18 jaar oud en studeer Creative Software Development
            aan het Grafisch Lyceum Rotterdam. Ik ben gepassioneerd over het ontwikkelen van
            games en applicaties, met een focus op gebruikerservaring en functionele design.
          </p>
          <p class="text-base leading-relaxed mb-6" style="color: var(--c-text-secondary)">
            Mijn interesse ligt vooral in game development en het creeren van interactieve
            ervaringen die mensen verbinden en vermaken.
          </p>
          <div class="flex gap-3 flex-wrap">
            <a href="https://github.com/Karsten0701" target="_blank" rel="noopener" class="btn-primary-sm">
              Personal GitHub
            </a>
            <a href="https://github.com/Karsten07011" target="_blank" rel="noopener" class="btn-outline-sm">
              School GitHub
            </a>
          </div>
        </div>

        <div class="lg:col-span-4 lg:col-start-9">
          <div class="flex flex-col gap-3">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="card-hover rounded-xl p-5 text-center"
            >
              <div class="text-2xl font-bold leading-none" style="color: var(--c-text)">{{ stat.number }}</div>
              <div class="text-xs mt-1.5" style="color: var(--c-text-muted)">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
