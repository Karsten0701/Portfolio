<script setup>
import { Github, Mail, GraduationCap } from 'lucide-vue-next'
import { socialLinks } from '../data/contact'

const iconMap = {
  github: Github,
  envelope: Mail,
  mortarboard: GraduationCap,
}
</script>

<template>
  <footer class="relative z-[1]">
    <div class="relative" aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        class="block w-full h-10 sm:h-14"
        fill="none"
      >
        <path d="M0 0 Q720 60 1440 0 L1440 60 L0 60 Z" fill="var(--c-bg-alt)" />
      </svg>
    </div>

    <div class="bg-[var(--c-bg-alt)] pb-8 pt-4 px-5 sm:px-8">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span class="text-lg font-extrabold tracking-widest text-[var(--c-text)]">
            KL<span class="text-[var(--color-accent)]">.</span>
          </span>

          <div class="flex gap-1.5">
            <a
              v-for="link in socialLinks"
              :key="link.title"
              :href="link.href"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noopener' : undefined"
              :title="link.title"
              class="size-9 rounded-lg border border-[var(--c-border)] text-[var(--c-text-secondary)] no-underline inline-flex items-center justify-center transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <component :is="iconMap[link.icon] || Mail" :size="15" />
            </a>
          </div>

          <p class="text-xs text-[var(--c-text-muted)]">&copy; 2026 Karsten Lindenburg</p>
        </div>
      </div>
    </div>
  </footer>
</template>
