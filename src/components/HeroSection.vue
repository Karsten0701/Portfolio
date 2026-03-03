<script setup>
import { ArrowDown, Github } from 'lucide-vue-next'

const stats = [
  { number: '900k+', label: 'Game Bezoeken' },
  { number: '5+', label: 'Projecten' },
  { number: '6', label: 'Programmeertalen' },
]

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="relative z-[1] pt-24 pb-14 sm:pt-28 sm:pb-16 border-b border-[var(--c-border)]">
    <div class="max-w-5xl mx-auto px-5 sm:px-8">
      <div class="max-w-2xl">
        <p class="text-sm font-medium mb-3 text-[var(--color-accent)] font-mono tracking-wide">
          Creative Software Development
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4 text-[var(--c-text)]">
          Karsten<br>Lindenburg
        </h1>
        <p class="text-base sm:text-lg leading-relaxed mb-6 text-[var(--c-text-secondary)] max-w-lg">
          Developer en game creator. Ik bouw interactieve ervaringen
          van Roblox games met 900k+ bezoeken tot full-stack webapplicaties.
        </p>
        <div class="flex items-center gap-3 flex-wrap mb-10">
          <button
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--c-text)] text-[var(--c-bg)] cursor-pointer transition-all duration-200 hover:opacity-80"
            @click="scrollTo('#projects')"
          >
            Bekijk Projecten
            <ArrowDown :size="15" />
          </button>
          <a
            href="https://github.com/Karsten0701"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-[var(--c-border)] text-[var(--c-text)] no-underline transition-all duration-200 hover:border-[var(--c-border-hover)]"
          >
            <Github :size="16" />
            GitHub
          </a>
        </div>
      </div>

      <div class="flex flex-wrap gap-6 sm:gap-10">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--c-text)]">{{ stat.number }}</div>
          <div class="text-xs sm:text-sm mt-0.5 text-[var(--c-text-muted)]">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </header>
</template>
