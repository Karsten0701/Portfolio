<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'
import { useScroll } from '../composables/useScroll'

const { isDark, toggle } = useTheme()
const { scrolled } = useScroll()
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Over Mij', href: '#about' },
  { label: 'Projecten', href: '#projects' },
  { label: 'Vaardigheden', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  mobileOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b t"
    :style="{
      background: 'var(--c-nav-bg)',
      borderColor: scrolled ? 'var(--c-border)' : 'transparent',
    }"
  >
    <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      <a
        href="#"
        class="text-xl font-extrabold tracking-widest"
        style="color: var(--c-text); text-decoration: none"
        @click.prevent="scrollToTop"
      >
        KL<span style="color: var(--color-accent)">.</span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-2 text-sm font-medium rounded-lg t"
          style="color: var(--c-text-secondary); text-decoration: none"
          @mouseenter="$event.target.style.color = 'var(--c-text)'"
          @mouseleave="$event.target.style.color = 'var(--c-text-secondary)'"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-2">
        <a
          href="https://github.com/Karsten0701"
          target="_blank"
          rel="noopener"
          class="w-9 h-9 rounded-lg border flex items-center justify-center t"
          style="border-color: var(--c-border); color: var(--c-text-secondary); text-decoration: none"
          title="GitHub"
          @mouseenter="$event.currentTarget.style.borderColor = 'var(--c-border-hover)'; $event.currentTarget.style.color = 'var(--c-text)'"
          @mouseleave="$event.currentTarget.style.borderColor = 'var(--c-border)'; $event.currentTarget.style.color = 'var(--c-text-secondary)'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <button
          class="w-9 h-9 rounded-lg border flex items-center justify-center t cursor-pointer"
          style="border-color: var(--c-border); color: var(--c-text-secondary); background: transparent"
          :title="isDark ? 'Light mode' : 'Dark mode'"
          @click="toggle"
          @mouseenter="$event.currentTarget.style.borderColor = 'var(--c-border-hover)'; $event.currentTarget.style.color = 'var(--c-text)'"
          @mouseleave="$event.currentTarget.style.borderColor = 'var(--c-border)'; $event.currentTarget.style.color = 'var(--c-text-secondary)'"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden w-9 h-9 rounded-lg border flex items-center justify-center t cursor-pointer"
          style="border-color: var(--c-border); color: var(--c-text); background: transparent"
          aria-label="Navigatie"
          @click="mobileOpen = !mobileOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path v-if="!mobileOpen" fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            <path v-else fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden px-6 pb-4 flex flex-col gap-1 border-t mt-1"
      :style="{ borderColor: 'var(--c-border)', background: 'var(--c-bg-surface)' }"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="px-3 py-2.5 text-sm font-medium rounded-lg t"
        style="color: var(--c-text-secondary); text-decoration: none"
        @click.prevent="scrollTo(link.href)"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>
