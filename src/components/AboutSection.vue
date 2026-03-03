<script setup>
import { Github, ArrowUpRight } from 'lucide-vue-next'
import { useIntersection } from '../composables/useIntersection'

const { el, isVisible } = useIntersection()
</script>

<template>
  <div ref="el" class="fade-in" :class="{ visible: isVisible }">
    <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-1.5 text-[var(--c-text)]">Over Mij</h2>
    <div class="w-8 h-[2px] rounded-sm mb-4 bg-[var(--color-accent)]" />

    <p class="text-sm sm:text-base leading-relaxed mb-3 text-[var(--c-text-secondary)]">
      Ik ben <span class="text-[var(--color-accent)] font-semibold">Karsten Lindenburg</span>,
      18 jaar en studeer Creative Software Development aan het
      Grafisch Lyceum Rotterdam. Ik bouw games en applicaties met een
      focus op goede gebruikerservaring en functioneel design.
    </p>
    <p class="text-sm sm:text-base leading-relaxed mb-6 text-[var(--c-text-secondary)]">
      Mijn focus ligt op <span class="text-[var(--color-accent)] font-semibold">game development</span>
      en het maken van interactieve ervaringen die mensen verbinden.
    </p>

    <div class="flex gap-3 flex-wrap">
      <a
        href="https://github.com/Karsten0701"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--color-accent)] text-[#1c1917] no-underline transition-all duration-200 hover:bg-[var(--color-accent-hover)]"
      >
        <Github :size="14" />
        Personal GitHub
        <ArrowUpRight :size="12" />
      </a>
      <a
        href="https://github.com/Karsten07011"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium border border-[var(--c-border)] text-[var(--c-text)] no-underline transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        <Github :size="14" />
        School GitHub
        <ArrowUpRight :size="12" />
      </a>
    </div>
  </div>
</template>
