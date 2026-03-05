<script setup>
import { ref, computed } from 'vue'
import { GraduationCap, Briefcase } from 'lucide-vue-next'
import SectionHeader from './SectionHeader.vue'
import ProjectCard from './ProjectCard.vue'
import { projects, schoolProjects } from '../data/projects'

const activeTab = ref('personal')

const featured = computed(() => projects.find(p => p.featured))
const rest = computed(() => projects.filter(p => !p.featured))
</script>

<template>
  <section id="projects" class="py-16 sm:py-20 px-5 sm:px-8">
    <div class="max-w-5xl mx-auto">
      <SectionHeader title="Projecten" subtitle="Waar ik aan heb gewerkt en mee bezig ben." />

      <div class="flex gap-2 mb-8">
        <button
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border"
          :class="activeTab === 'personal'
            ? 'bg-[var(--c-text)] text-[var(--c-bg)] border-[var(--c-text)]'
            : 'bg-transparent text-[var(--c-text-secondary)] border-[var(--c-border)] hover:border-[var(--c-border-hover)] hover:text-[var(--c-text)]'
          "
          @click="activeTab = 'personal'"
        >
          <Briefcase :size="15" />
          Persoonlijk
        </button>
        <button
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border"
          :class="activeTab === 'school'
            ? 'bg-[var(--c-text)] text-[var(--c-bg)] border-[var(--c-text)]'
            : 'bg-transparent text-[var(--c-text-secondary)] border-[var(--c-border)] hover:border-[var(--c-border-hover)] hover:text-[var(--c-text)]'
          "
          @click="activeTab = 'school'"
        >
          <GraduationCap :size="15" />
          School
        </button>
      </div>

      <Transition
        enter-from-class="opacity-0 translate-y-2"
        enter-active-class="transition-all duration-300"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 absolute inset-x-0"
        leave-to-class="opacity-0 -translate-y-2"
        mode="out-in"
      >
        <div v-if="activeTab === 'personal'" key="personal">
          <ProjectCard v-if="featured" :project="featured" featured class="mb-5" />
          <div class="grid sm:grid-cols-2 gap-4">
            <ProjectCard v-for="project in rest" :key="project.title" :project="project" />
          </div>
        </div>

        <div v-else key="school">
          <p class="text-sm text-[var(--c-text-muted)] mb-5">
            Projecten gemaakt tijdens mijn opleiding Creative Software Development aan het Grafisch Lyceum Rotterdam.
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <ProjectCard
              v-for="project in schoolProjects"
              :key="project.title"
              :project="project"
              compact
            />
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
