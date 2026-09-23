<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import { useScroll } from '../composables/useScroll'
import { Github, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-vue-next'

const { isDark, toggle } = useTheme()
const { scrolled } = useScroll()
const route = useRoute()
const mobileOpen = ref(false)
const navLinks = [
  { label: 'Werk', to: '/projects' },
  { label: 'Over mij', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
function closeMenu() { mobileOpen.value = false }
function onKeydown(event) { if (event.key === 'Escape') closeMenu() }
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b transition-all duration-300" :class="scrolled ? 'border-[var(--c-border)]' : 'border-transparent'" :style="{ background: scrolled ? 'var(--c-nav-bg)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none' }">
    <div class="page-wrap flex h-[72px] items-center justify-between">
      <RouterLink to="/" class="text-[14px] font-semibold tracking-[-.03em] no-underline" @click="closeMenu">Karsten Lindenburg</RouterLink>
      <nav class="hidden items-center gap-8 md:flex" aria-label="Hoofdnavigatie">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="text-[13px] no-underline transition-colors hover:text-[var(--c-text)]" :class="route.path.startsWith(link.to) ? 'text-[var(--c-text)]' : 'text-[var(--c-text-secondary)]'">{{ link.label }}</RouterLink>
      </nav>
      <div class="flex items-center gap-2">
        <a href="https://github.com/Karsten0701" target="_blank" rel="noopener noreferrer" aria-label="GitHub profiel" class="hidden size-9 items-center justify-center rounded-full border border-[var(--c-border)] sm:inline-flex"><Github :size="15" /></a>
        <button class="size-9 rounded-full border border-[var(--c-border)] bg-transparent inline-flex items-center justify-center cursor-pointer" :aria-label="isDark ? 'Licht thema inschakelen' : 'Donker thema inschakelen'" @click="toggle"><Sun v-if="isDark" :size="15" /><Moon v-else :size="15" /></button>
        <RouterLink to="/contact" class="hidden sm:inline-flex button-primary min-h-9 px-4 text-xs">Laten we praten <ArrowUpRight :size="14" /></RouterLink>
        <button class="md:hidden size-9 rounded-full border border-[var(--c-border)] bg-transparent inline-flex items-center justify-center cursor-pointer" :aria-label="mobileOpen ? 'Menu sluiten' : 'Menu openen'" :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen"><X v-if="mobileOpen" :size="17" /><Menu v-else :size="17" /></button>
      </div>
    </div>
    <Transition name="menu">
      <nav v-if="mobileOpen" class="absolute inset-x-0 top-full border-b border-[var(--c-border)] bg-[var(--c-bg)] px-5 pb-6 pt-2 md:hidden" aria-label="Mobiele navigatie">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="block border-b border-[var(--c-border)] py-4 text-2xl tracking-tight no-underline" @click="closeMenu">{{ link.label }}</RouterLink>
        <a href="https://github.com/Karsten0701" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex items-center gap-2 text-sm no-underline" @click="closeMenu"><Github :size="16" /> GitHub profiel <ArrowUpRight :size="13" /></a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,.menu-leave-active{transition:opacity .18s ease,transform .18s ease}.menu-enter-from,.menu-leave-to{opacity:0;transform:translateY(-8px)}
</style>
