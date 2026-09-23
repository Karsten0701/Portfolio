<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'
import ProjectArtwork from './ProjectArtwork.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <RouterLink :to="`/projects/${project.slug}`" class="project-card group block no-underline">
    <ProjectArtwork :project="project" />
    <div class="pt-4">
      <div class="mb-2 flex items-center justify-between"><span class="text-xs text-[var(--c-text-muted)]">{{ project.category === 'School' ? 'Schoolproject' : project.type || project.category }}</span><ArrowUpRight :size="16" class="text-[var(--c-text-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
      <h2 class="text-lg font-medium tracking-[-.04em]">{{ project.title }}</h2>
      <p class="mt-2 text-sm leading-6 text-[var(--c-text-secondary)]">{{ project.summary }}</p>
      <div class="mt-4 flex flex-wrap gap-x-3 gap-y-2"> <span v-for="tech in project.stack" :key="tech" class="text-[11px] text-[var(--c-text-muted)]">{{ tech }}</span></div>
    </div>
  </RouterLink>
</template>
