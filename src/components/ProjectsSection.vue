<script setup>
import SectionHeader from './SectionHeader.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <section id="projects" class="py-16 sm:py-20 px-5 sm:px-8">
    <div class="max-w-6xl mx-auto">
      <SectionHeader title="Projecten" subtitle="Waar ik aan heb gewerkt en mee bezig ben." />
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>
