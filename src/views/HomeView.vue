<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Gamepad2, PanelsTopLeft, FlaskConical, LayoutTemplate } from 'lucide-vue-next'
import { projects } from '../data/projects'
import { workAreas, technologies } from '../data/workAreas'
import ProjectArtwork from '../components/ProjectArtwork.vue'
import GitHubActivity from '../components/GitHubActivity.vue'
import { useIntersection } from '../composables/useIntersection'

const featured = computed(() => projects.filter(project => project.featured))
const icons = [PanelsTopLeft, Gamepad2, LayoutTemplate, FlaskConical]
const { el: introEl, isVisible: introVisible } = useIntersection()
</script>

<template>
  <main>
    <section class="page-wrap grid min-h-[690px] items-center gap-10 pb-20 pt-32 md:grid-cols-[1.15fr_.85fr] md:pb-24 md:pt-36">
      <div class="max-w-[670px]">
        <p class="eyebrow mb-7 flex items-center gap-3"><span class="inline-block size-[7px] rounded-full bg-[var(--c-accent)]" />Creative software developer · Rotterdam</p>
        <h1 class="display-title">Ik bouw digitale<br class="hidden sm:block"> producten, games<br class="hidden sm:block"> &amp; ervaringen.</h1>
        <p class="mt-7 max-w-[490px] text-base leading-7 text-[var(--c-text-secondary)] sm:text-lg sm:leading-8">Van complete webapplicaties tot Roblox-games en interactieve experimenten. Ik maak ideeën tastbaar met code, aandacht voor detail en gevoel voor gebruik.</p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <RouterLink to="/projects" class="button-primary arrow-reveal">Bekijk mijn werk <ArrowDownRight :size="16" /></RouterLink>
          <RouterLink to="/contact" class="button-secondary">Neem contact op <ArrowUpRight :size="15" /></RouterLink>
        </div>
        <div class="mt-14 flex items-center gap-4 text-xs text-[var(--c-text-muted)]"><span class="h-px w-10 bg-[var(--c-border-hover)]" />Opleiding Creative Software Development<br class="sm:hidden"> · Grafisch Lyceum Rotterdam</div>
      </div>
      <div class="relative mx-auto w-full max-w-[520px] md:mt-8">
        <div class="absolute -inset-5 -rotate-3 border border-[var(--c-border)]" aria-hidden="true" />
        <RouterLink :to="`/projects/${featured[0].slug}`" class="project-card group relative block overflow-hidden no-underline">
          <ProjectArtwork :project="featured[0]" />
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/65 via-black/25 to-transparent p-5 pt-20 text-white sm:p-7 sm:pt-24">
            <div><p class="mb-2 text-[10px] uppercase tracking-[.16em] text-white/70">Uitgelicht · Roblox</p><h2 class="text-xl font-medium tracking-[-.04em] sm:text-2xl">Build a Theme Park</h2></div>
            <span class="text-right"><strong class="block text-lg font-medium">900k+</strong><small class="text-xs text-white/70">bezoeken</small></span>
          </div>
          <span class="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-stone-900 transition-transform group-hover:rotate-45"><ArrowUpRight :size="16" /></span>
        </RouterLink>
      </div>
    </section>

    <section class="border-y border-[var(--c-border)] py-20 sm:py-28">
      <div class="page-wrap">
        <div class="mb-9 flex items-end justify-between gap-5 sm:mb-12">
          <div><p class="eyebrow mb-4">Geselecteerd werk</p><h2 class="section-title">Ideeën in beweging.</h2></div>
          <RouterLink to="/projects" class="surface-link hidden items-center gap-2 pb-1 text-sm no-underline sm:inline-flex">Alle projecten <ArrowRight :size="15" /></RouterLink>
        </div>
        <div class="grid gap-x-6 gap-y-10 md:grid-cols-2">
          <RouterLink v-for="(project, index) in featured" :key="project.slug" :to="`/projects/${project.slug}`" class="project-card group block no-underline" :class="index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.28fr_.72fr] md:items-center md:gap-8' : ''">
            <ProjectArtwork :project="project" />
            <div class="pt-4" :class="index === 0 ? 'md:py-6' : ''">
              <div class="mb-2 flex items-center justify-between gap-4"><span class="text-xs text-[var(--c-text-muted)]">{{ project.type }}</span><ArrowUpRight :size="16" class="text-[var(--c-text-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
              <h3 class="text-xl font-medium tracking-[-.04em]">{{ project.title }}</h3>
              <p class="mt-2 max-w-lg text-sm leading-6 text-[var(--c-text-secondary)]">{{ project.summary }}</p>
              <div class="mt-4 flex flex-wrap gap-2"><span v-for="tech in project.stack" :key="tech" class="border-b border-[var(--c-border-hover)] pb-1 pr-1 text-[11px] text-[var(--c-text-muted)]">{{ tech }}</span></div>
            </div>
          </RouterLink>
        </div>
        <RouterLink to="/projects" class="button-secondary mt-10 sm:hidden">Alle projecten <ArrowRight :size="15" /></RouterLink>
      </div>
    </section>

    <section ref="introEl" class="page-wrap py-20 sm:py-28" :class="{ 'fade-in': true, visible: introVisible }">
      <div class="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
        <div><p class="eyebrow mb-4">Waar ik aan werk</p><h2 class="section-title max-w-[380px]">Goed werk begint met nieuwsgierigheid.</h2></div>
        <div>
          <div class="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
            <article v-for="(area, index) in workAreas" :key="area.title" class="border-t border-[var(--c-border)] py-5" :class="index > 1 ? 'sm:border-t-0 sm:border-b' : 'sm:border-b'">
              <component :is="icons[index]" :size="18" class="mb-5 text-[var(--c-accent)]" />
              <h3 class="text-base font-medium tracking-tight">{{ area.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-[var(--c-text-secondary)]">{{ area.description }}</p>
            </article>
          </div>
          <div class="mt-8 flex flex-wrap gap-x-5 gap-y-3"> <span v-for="technology in technologies" :key="technology" class="text-xs text-[var(--c-text-muted)]">{{ technology }}</span></div>
          <RouterLink to="/about" class="surface-link mt-8 inline-flex items-center gap-2 text-sm no-underline">Meer over mij <ArrowRight :size="15" /></RouterLink>
        </div>
      </div>
    </section>

    <section class="bg-[var(--c-bg-alt)] py-20 sm:py-24">
      <div class="page-wrap grid gap-10 md:grid-cols-[.7fr_1.3fr] md:items-center">
        <div><p class="eyebrow mb-4">In de praktijk</p><h2 class="section-title">Blijven bouwen,<br>blijven leren.</h2><p class="mt-5 max-w-sm text-sm leading-6 text-[var(--c-text-secondary)]">Bekijk mijn openbare bijdragegeschiedenis op mijn persoonlijke en school GitHub-profiel.</p></div>
        <GitHubActivity />
      </div>
    </section>

    <section class="page-wrap py-20 sm:py-28">
      <div class="flex flex-col items-start justify-between gap-8 border-t border-[var(--c-border)] pt-8 sm:flex-row sm:items-end">
        <div><p class="eyebrow mb-4">Heb je een idee?</p><h2 class="section-title max-w-[600px]">Laten we er iets goeds van maken.</h2></div>
        <RouterLink to="/contact" class="button-primary arrow-reveal">Stuur me een bericht <ArrowUpRight :size="16" /></RouterLink>
      </div>
    </section>
  </main>
</template>
