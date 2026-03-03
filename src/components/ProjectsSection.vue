<script setup>
import { computed } from 'vue'
import SectionHeader from './SectionHeader.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'

const featured = computed(() => projects.find(p => p.featured))
const rest = computed(() => projects.filter(p => !p.featured))
</script>

<template>
  <section id="projects" class="py-16 sm:py-20 px-5 sm:px-8">
    <div class="max-w-5xl mx-auto">
      <SectionHeader title="Projecten" subtitle="Waar ik aan heb gewerkt en mee bezig ben." />

      <ProjectCard v-if="featured" :project="featured" featured class="mb-5" />

      <div class="grid sm:grid-cols-2 gap-4">
        <ProjectCard v-for="project in rest" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>
