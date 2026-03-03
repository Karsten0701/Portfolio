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
            <a
              href="https://github.com/Karsten0701"
              target="_blank"
              rel="noopener"
              class="px-4 py-2 rounded-xl text-xs font-semibold t"
              style="background: var(--color-accent); color: #08080d; text-decoration: none"
              @mouseenter="$event.target.style.background = 'var(--color-accent-hover)'"
              @mouseleave="$event.target.style.background = 'var(--color-accent)'"
            >
              Personal GitHub
            </a>
            <a
              href="https://github.com/Karsten07011"
              target="_blank"
              rel="noopener"
              class="px-4 py-2 rounded-xl text-xs font-medium border t"
              style="border-color: var(--c-border); color: var(--c-text); text-decoration: none"
              @mouseenter="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.color = 'var(--color-accent)'"
              @mouseleave="$event.target.style.borderColor = 'var(--c-border)'; $event.target.style.color = 'var(--c-text)'"
            >
              School GitHub
            </a>
          </div>
        </div>

        <div class="lg:col-span-4 lg:col-start-9">
          <div class="flex flex-col gap-3">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-xl p-5 text-center border t"
              style="background: var(--c-bg-card); border-color: var(--c-border)"
              @mouseenter="$event.currentTarget.style.borderColor = 'var(--c-border-hover)'"
              @mouseleave="$event.currentTarget.style.borderColor = 'var(--c-border)'"
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
