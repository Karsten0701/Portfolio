<script setup>
import { socialLinks } from '../data/contact'
</script>

<template>
  <footer class="relative z-[1] border-t py-12 px-6" style="background: var(--c-bg-alt); border-color: var(--c-border)">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <span class="text-xl font-extrabold tracking-widest" style="color: var(--c-text)">
        KL<span style="color: var(--color-accent)">.</span>
      </span>

      <div class="flex gap-2">
        <a
          v-for="link in socialLinks"
          :key="link.title"
          :href="link.href"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener' : undefined"
          :title="link.title"
          class="icon-btn-lg"
        >
          <i :class="'bi bi-' + link.icon"></i>
        </a>
      </div>

      <p class="text-sm" style="color: var(--c-text-muted)">&copy; 2026 Karsten Lindenburg</p>
    </div>
  </footer>
</template>
