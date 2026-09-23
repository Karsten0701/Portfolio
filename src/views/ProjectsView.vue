<script setup>
import { computed, ref } from 'vue'
import { projects, schoolProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const filters = ['Alles', 'Web', 'Games', 'AI / Experiments', 'School']
const activeFilter = ref('Alles')
const allProjects = [...projects, ...schoolProjects]
const visibleProjects = computed(() => activeFilter.value === 'Alles' ? allProjects : allProjects.filter(project => project.category === activeFilter.value))
</script>

<template>
  <main class="page-wrap min-h-[70vh] pb-24 pt-36 sm:pt-44">
    <p class="eyebrow mb-5">Werk & experimenten</p>
    <div class="flex flex-col justify-between gap-7 md:flex-row md:items-end">
      <div><h1 class="display-title text-[clamp(3.4rem,8vw,6rem)]">Projecten.</h1><p class="mt-5 max-w-xl text-base leading-7 text-[var(--c-text-secondary)]">Games, applicaties en experimenten waar ik ideeën in omzet naar iets dat je kunt gebruiken of beleven.</p></div>
      <p class="text-sm text-[var(--c-text-muted)]">{{ visibleProjects.length }} projecten</p>
    </div>
    <div class="mt-12 flex flex-wrap gap-2 border-b border-[var(--c-border)] pb-5" aria-label="Projecten filteren">
      <button v-for="filter in filters" :key="filter" class="rounded-full border px-4 py-2 text-xs cursor-pointer" :class="activeFilter === filter ? 'border-[var(--c-text)] bg-[var(--c-text)] text-[var(--c-bg)]' : 'border-[var(--c-border)] bg-transparent text-[var(--c-text-secondary)] hover:border-[var(--c-border-hover)]'" :aria-pressed="activeFilter === filter" @click="activeFilter = filter">{{ filter }}</button>
    </div>
    <TransitionGroup name="project" tag="div" class="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in visibleProjects" :key="project.slug" :project="project" />
    </TransitionGroup>
  </main>
</template>

<style scoped>
.project-enter-active,.project-leave-active{transition:opacity .2s ease,transform .2s ease}.project-enter-from,.project-leave-to{opacity:0;transform:translateY(8px)}
</style>
