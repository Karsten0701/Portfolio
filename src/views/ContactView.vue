<script setup>
import { ref } from 'vue'
import { Check, Copy, Github, GraduationCap, Mail, MapPin } from 'lucide-vue-next'
import ContactForm from '../components/ContactForm.vue'

const email = 'Karstenlindenburg@gmail.com'
const copied = ref(false)
let resetTimer
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => { copied.value = false }, 2200)
  } catch {
    window.location.href = `mailto:${email}`
  }
}
</script>

<template>
  <main class="page-wrap pb-24 pt-36 sm:pt-44">
    <p class="eyebrow mb-5">Contact</p>
    <div class="grid gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-20">
      <div>
        <h1 class="display-title text-[clamp(3.3rem,8vw,6.4rem)]">Iets moois<br>maken?</h1>
        <p class="mt-6 max-w-sm text-base leading-7 text-[var(--c-text-secondary)]">Een project, een idee of gewoon even kennismaken? Stuur me een bericht. Ik lees het graag.</p>
        <div class="mt-12 border-t border-[var(--c-border)] pt-5">
          <p class="eyebrow mb-3">E-mail</p>
          <div class="flex flex-wrap items-center gap-3"><a :href="`mailto:${email}`" class="text-base font-medium no-underline hover:underline">{{ email }}</a><button class="inline-flex items-center gap-2 border-0 bg-transparent p-2 text-xs text-[var(--c-text-muted)] cursor-pointer hover:text-[var(--c-text)]" :aria-label="copied ? 'E-mailadres gekopieerd' : 'E-mailadres kopiëren'" @click="copyEmail"><Check v-if="copied" :size="14" /><Copy v-else :size="14" />{{ copied ? 'Gekopieerd' : 'Kopieer' }}</button></div>
        </div>
        <div class="mt-8 space-y-4 text-sm text-[var(--c-text-secondary)]">
          <a href="https://github.com/Karsten0701" target="_blank" rel="noopener noreferrer" class="surface-link flex items-center gap-3 no-underline"><Github :size="16" />GitHub · Karsten0701</a>
          <a href="https://github.com/Karsten07011" target="_blank" rel="noopener noreferrer" class="surface-link flex items-center gap-3 no-underline"><Github :size="16" />School GitHub · Karsten07011</a>
          <a href="mailto:102625@glr.nl" class="surface-link flex items-center gap-3 no-underline"><GraduationCap :size="16" />102625@glr.nl</a>
          <p class="flex items-center gap-3"><MapPin :size="16" />Grafisch Lyceum Rotterdam</p>
        </div>
      </div>
      <div class="border-t border-[var(--c-border)] pt-6 sm:pt-7"><p class="eyebrow mb-6">Stuur een bericht</p><ContactForm /></div>
    </div>
  </main>
</template>
