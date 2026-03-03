<script setup>
import { socialLinks } from '../data/contact'
</script>

<template>
  <footer class="relative z-[1] border-t border-[var(--c-border)] py-10 px-5 sm:px-8 bg-[var(--c-bg-alt)]">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
      <span class="text-lg font-extrabold tracking-widest text-[var(--c-text)]">
        KL<span class="text-[var(--color-accent)]">.</span>
      </span>

      <div class="flex gap-2">
        <a
          v-for="link in socialLinks"
          :key="link.title"
          :href="link.href"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener' : undefined"
          :title="link.title"
          class="size-9 rounded-lg border border-[var(--c-border)] text-[var(--c-text-secondary)] no-underline inline-flex items-center justify-center transition-all duration-300 hover:border-[var(--c-border-hover)] hover:text-[var(--c-text)]"
        >
          <i :class="'bi bi-' + link.icon" class="text-sm"></i>
        </a>
      </div>

      <p class="text-xs sm:text-sm text-[var(--c-text-muted)]">&copy; 2026 Karsten Lindenburg</p>
    </div>
  </footer>
</template>
