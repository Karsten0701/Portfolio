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
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  mobileOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-[border-color] duration-300"
    :class="scrolled ? 'border-b border-[var(--c-border)]' : 'border-b border-transparent'"
    :style="{ background: 'var(--c-nav-bg)' }"
  >
    <div class="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-lg font-extrabold tracking-widest text-[var(--c-text)] no-underline" @click.prevent="scrollToTop">
        KL<span class="text-[var(--color-accent)]">.</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden lg:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-1.5 text-[13px] font-medium rounded-md text-[var(--c-text-secondary)] no-underline transition-colors duration-300 hover:text-[var(--c-text)]"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Right icons -->
      <div class="flex items-center gap-2">
        <a
          href="https://github.com/Karsten0701"
          target="_blank"
          rel="noopener"
          title="GitHub"
          class="size-8 rounded-lg border border-[var(--c-border)] text-[var(--c-text-secondary)] no-underline inline-flex items-center justify-center transition-all duration-300 hover:border-[var(--c-border-hover)] hover:text-[var(--c-text)]"
        >
          <i class="bi bi-github text-sm"></i>
        </a>

        <button
          :title="isDark ? 'Light mode' : 'Dark mode'"
          class="size-8 rounded-lg border border-[var(--c-border)] bg-transparent text-[var(--c-text-secondary)] cursor-pointer inline-flex items-center justify-center transition-all duration-300 hover:border-[var(--c-border-hover)] hover:text-[var(--c-text)]"
          @click="toggle"
        >
          <i :class="isDark ? 'bi bi-sun' : 'bi bi-moon-fill'" class="text-sm"></i>
        </button>

        <!-- Hamburger: only below lg -->
        <button
          class="lg:hidden size-8 rounded-lg border border-[var(--c-border)] bg-transparent text-[var(--c-text)] cursor-pointer inline-flex items-center justify-center transition-all duration-300 hover:border-[var(--c-border-hover)]"
          aria-label="Menu"
          @click="mobileOpen = !mobileOpen"
        >
          <i :class="mobileOpen ? 'bi bi-x-lg' : 'bi bi-list'" class="text-base"></i>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <Transition
      enter-from-class="opacity-0 -translate-y-2"
      enter-active-class="transition-all duration-200"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden border-t border-[var(--c-border)] px-5 pb-4 pt-2 flex flex-col gap-0.5"
        :style="{ background: 'var(--c-bg-surface)' }"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-2.5 text-sm font-medium rounded-lg text-[var(--c-text-secondary)] no-underline transition-colors duration-300 hover:text-[var(--c-text)]"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>
