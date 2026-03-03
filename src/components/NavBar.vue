<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'
import { useScroll } from '../composables/useScroll'
import { Github, Sun, Moon, Menu, X } from 'lucide-vue-next'

const { isDark, toggle } = useTheme()
const { scrolled } = useScroll()
const mobileOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { label: 'Projecten', href: '#projects' },
  { label: 'Over Mij', href: '#about' },
  { label: 'Skills', href: '#skills' },
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

function updateActiveSection() {
  const sections = ['contact', 'skills', 'about', 'projects']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120) {
        activeSection.value = `#${id}`
        return
      }
    }
  }
  activeSection.value = ''
}

onMounted(() => window.addEventListener('scroll', updateActiveSection, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateActiveSection))
</script>

<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-all duration-300"
    :class="scrolled ? 'border-b border-[var(--c-border)]' : 'border-b border-transparent'"
    :style="{ background: 'var(--c-nav-bg)' }"
  >
    <div class="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
      <a
        href="#"
        class="text-lg font-extrabold tracking-widest text-[var(--c-text)] no-underline"
        @click.prevent="scrollToTop"
      >
        KL<span class="text-[var(--color-accent)]">.</span>
      </a>

      <div class="hidden md:flex items-center gap-0.5">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-1.5 text-[13px] font-medium rounded-md no-underline transition-all duration-200"
          :class="activeSection === link.href
            ? 'text-[var(--color-accent)] bg-[var(--color-accent-soft)]'
            : 'text-[var(--c-text-secondary)] hover:text-[var(--c-text)]'
          "
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-1.5">
        <a
          href="https://github.com/Karsten0701"
          target="_blank"
          rel="noopener"
          title="GitHub"
          class="size-8 rounded-lg border border-[var(--c-border)] text-[var(--c-text-secondary)] no-underline inline-flex items-center justify-center transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Github :size="15" />
        </a>

        <button
          :title="isDark ? 'Light mode' : 'Dark mode'"
          class="size-8 rounded-lg border border-[var(--c-border)] bg-transparent text-[var(--c-text-secondary)] cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          @click="toggle"
        >
          <Moon v-if="!isDark" :size="15" />
          <Sun v-else :size="15" />
        </button>

        <button
          class="md:hidden size-8 rounded-lg border border-[var(--c-border)] bg-transparent text-[var(--c-text)] cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:border-[var(--c-border-hover)]"
          aria-label="Menu"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" :size="16" />
          <Menu v-else :size="16" />
        </button>
      </div>
    </div>

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
        class="md:hidden border-t border-[var(--c-border)] px-5 pb-4 pt-2 flex flex-col gap-0.5"
        :style="{ background: 'var(--c-bg-surface)' }"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3 py-2.5 text-sm font-medium rounded-lg no-underline transition-all duration-200"
          :class="activeSection === link.href
            ? 'text-[var(--color-accent)]'
            : 'text-[var(--c-text-secondary)] hover:text-[var(--c-text)]'
          "
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>
