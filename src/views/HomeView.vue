<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import GitHubTerminal from '../components/GitHubTerminal.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <div class="bg-dots" aria-hidden="true" />
  <NavBar />
  <HeroSection />
  <main class="relative z-[1]">
    <ProjectsSection />
    <section id="about" class="py-16 sm:py-20 px-5 sm:px-8">
      <div class="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <AboutSection />
        <GitHubTerminal />
      </div>
    </section>
    <SkillsSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>
