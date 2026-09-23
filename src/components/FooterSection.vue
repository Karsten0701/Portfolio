<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRight, Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-[var(--c-border)] py-7">
    <div class="page-wrap flex flex-col items-start justify-between gap-5 text-xs text-[var(--c-text-muted)] sm:flex-row sm:items-center">
      <RouterLink to="/" class="font-medium text-[var(--c-text)] no-underline">Karsten Lindenburg<span class="ml-1 text-[var(--c-accent)]">.</span></RouterLink>
      <p>Creative Software Development · Rotterdam</p>
      <div class="flex items-center gap-4"><a href="https://github.com/Karsten0701" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="surface-link inline-flex items-center gap-1.5 no-underline"><Github :size="14" />GitHub<ArrowUpRight :size="11" /></a><RouterLink to="/contact" class="surface-link inline-flex items-center gap-1.5 no-underline"><Mail :size="14" />Contact</RouterLink></div>
      <span>© {{ new Date().getFullYear() }} Karsten</span>
    </div>
  </footer>
</template>
