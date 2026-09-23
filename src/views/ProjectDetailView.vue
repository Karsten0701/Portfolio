<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-vue-next'
import { allProjects } from '../data/projects'
import ProjectArtwork from '../components/ProjectArtwork.vue'

const route = useRoute()
const project = computed(() => allProjects.find(item => item.slug === route.params.slug))
const nextProject = computed(() => {
  if (!project.value) return allProjects[0]
  return allProjects[(allProjects.indexOf(project.value) + 1) % allProjects.length]
})
</script>

<template>
  <main v-if="project" class="page-wrap pb-24 pt-36 sm:pt-44">
    <RouterLink to="/projects" class="surface-link inline-flex items-center gap-2 text-sm no-underline"><ArrowLeft :size="15" /> Alle projecten</RouterLink>
    <div class="mt-12 grid gap-9 md:grid-cols-[1fr_.7fr] md:items-end">
      <div><p class="eyebrow mb-5">{{ project.type || project.category }} <span v-if="project.status">· {{ project.status }}</span></p><h1 class="display-title text-[clamp(3.1rem,7vw,6.6rem)]">{{ project.title }}<span class="text-[var(--c-text-muted)]">.</span></h1></div>
      <div><p class="text-base leading-7 text-[var(--c-text-secondary)]">{{ project.description }}</p><div class="mt-6 flex flex-wrap gap-4"><a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="surface-link inline-flex items-center gap-2 text-sm no-underline">Bekijk live <ArrowUpRight :size="15" /></a><a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="surface-link inline-flex items-center gap-2 text-sm no-underline"><Github :size="15" /> Bekijk op GitHub <ArrowUpRight :size="15" /></a></div></div>
    </div>
    <div class="mt-10 overflow-hidden"><ProjectArtwork :project="project" /></div>
    <div class="mt-12 grid gap-12 md:grid-cols-[.65fr_1.35fr] md:gap-20">
      <aside class="h-fit border-t border-[var(--c-border)] pt-5 md:sticky md:top-28">
        <p class="eyebrow mb-4">Projectinformatie</p>
        <div class="grid grid-cols-2 gap-y-5 text-sm"><div><p class="mb-1 text-xs text-[var(--c-text-muted)]">Type</p><span>{{ project.type || project.category }}</span></div><div v-if="project.status"><p class="mb-1 text-xs text-[var(--c-text-muted)]">Status</p><span>{{ project.status }}</span></div><div v-if="project.result"><p class="mb-1 text-xs text-[var(--c-text-muted)]">Bereik</p><span>{{ project.result }} {{ project.resultLabel }}</span></div></div>
        <div v-if="project.stack?.length" class="mt-6 border-t border-[var(--c-border)] pt-5"><p class="mb-3 text-xs text-[var(--c-text-muted)]">Gebouwd met</p><div class="flex flex-wrap gap-x-4 gap-y-2 text-xs"> <span v-for="tech in project.stack" :key="tech">{{ tech }}</span></div></div>
      </aside>
      <div>
        <section class="border-t border-[var(--c-border)] py-6"><p class="eyebrow mb-3">Het project</p><h2 class="text-2xl font-medium tracking-tight">{{ project.summary }}</h2><p class="mt-4 text-sm leading-7 text-[var(--c-text-secondary)]">{{ project.description }}</p></section>
        <section v-for="section in project.sections || []" :key="section.title" class="border-t border-[var(--c-border)] py-6"><p class="eyebrow mb-3">{{ section.title }}</p><p class="max-w-2xl text-sm leading-7 text-[var(--c-text-secondary)]">{{ section.body }}</p></section>
        <section v-if="project.highlights?.length" class="border-t border-[var(--c-border)] py-6"><p class="eyebrow mb-4">In het kort</p><ul class="space-y-3 p-0 text-sm text-[var(--c-text-secondary)] list-none"><li v-for="highlight in project.highlights" :key="highlight" class="flex gap-3"><span class="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--c-accent)]" />{{ highlight }}</li></ul></section>
        <section class="mt-6 border-t border-[var(--c-border)] pt-6"><p class="eyebrow mb-3">Wat volgt</p><RouterLink :to="`/projects/${nextProject.slug}`" class="group flex items-center justify-between text-2xl font-medium tracking-tight no-underline"><span>{{ nextProject.title }}</span><ArrowRight :size="22" class="transition-transform group-hover:translate-x-1" /></RouterLink></section>
      </div>
    </div>
  </main>
  <main v-else class="page-wrap min-h-[70vh] pb-24 pt-44"><p class="eyebrow mb-4">Project niet gevonden</p><h1 class="section-title">Deze pagina bestaat niet (meer).</h1><RouterLink to="/projects" class="button-primary mt-8">Terug naar projecten <ArrowLeft :size="15" /></RouterLink></main>
</template>
