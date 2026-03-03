<script setup>
import SectionHeader from './SectionHeader.vue'
import SkillCard from './SkillCard.vue'
import { skills } from '../data/skills'
</script>

<template>
  <section id="skills" class="py-20 px-6" style="background: var(--c-bg-alt)">
    <div class="max-w-6xl mx-auto">
      <SectionHeader title="Vaardigheden" subtitle="Technologieen waar ik mee werk." />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
      </div>
    </div>
  </section>
</template>
