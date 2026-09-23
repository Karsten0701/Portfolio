<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { technologies } from '../data/workAreas'
import GitHubActivity from '../components/GitHubActivity.vue'
</script>

<template>
  <main>
    <section class="page-wrap pb-16 pt-36 sm:pb-24 sm:pt-44">
      <p class="eyebrow mb-5">Over mij</p>
      <div class="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
        <h1 class="display-title text-[clamp(3.25rem,8vw,7rem)]">Nieuwsgierig.<br>Maker. Developer.</h1>
        <p class="max-w-lg text-base leading-7 text-[var(--c-text-secondary)]">Ik ben Karsten Lindenburg, creative software development-student aan het Grafisch Lyceum Rotterdam. Ik vind het leuk om ideeën om te zetten in dingen die werken: van een gamewereld tot een complete webapplicatie.</p>
      </div>
    </section>
    <section class="border-y border-[var(--c-border)] py-16 sm:py-20">
      <div class="page-wrap grid gap-12 md:grid-cols-[.65fr_1.35fr] md:gap-20">
        <div><p class="eyebrow mb-4">Hoe ik werk</p><h2 class="section-title">Eerst begrijpen.<br>Dan bouwen.</h2></div>
        <div class="max-w-2xl space-y-5 text-sm leading-7 text-[var(--c-text-secondary)]"><p>Ik werk graag aan projecten waarin techniek en ervaring samenkomen. Ik begin bij het probleem en de mensen die ermee aan de slag gaan, maak de belangrijkste onderdelen tastbaar en verbeter ze terwijl ik leer.</p><p>Mijn werk loopt uiteen van PHP-webapplicaties en interfaces tot Roblox-games met Luau en Python-experimenten. Juist die afwisseling houdt me nieuwsgierig.</p><p>Ik studeer Creative Software Development aan het <strong class="font-medium text-[var(--c-text)]">Grafisch Lyceum Rotterdam</strong> en werk aan persoonlijke en schoolprojecten naast mijn opleiding.</p><RouterLink to="/projects" class="surface-link inline-flex items-center gap-2 pt-2 text-sm text-[var(--c-text)] no-underline">Bekijk mijn projecten <ArrowRight :size="15" /></RouterLink></div>
      </div>
    </section>
    <section class="page-wrap grid gap-10 py-16 sm:py-20 md:grid-cols-[.65fr_1.35fr] md:gap-20">
      <div><p class="eyebrow mb-4">Gereedschap</p><h2 class="section-title">Waarmee ik bouw.</h2></div>
      <div class="grid grid-cols-2 gap-x-6 border-t border-[var(--c-border)] sm:grid-cols-3"> <span v-for="technology in technologies" :key="technology" class="border-b border-[var(--c-border)] py-4 text-sm">{{ technology }}</span></div>
    </section>
    <section class="bg-[var(--c-bg-alt)] py-14 sm:py-20"><div class="page-wrap"><div class="mb-7 flex items-end justify-between gap-5"><div><p class="eyebrow mb-3">Open source</p><h2 class="section-title">GitHub-activiteit.</h2></div><a href="https://github.com/Karsten0701" target="_blank" rel="noopener noreferrer" class="surface-link hidden items-center gap-2 text-sm no-underline sm:inline-flex">Bekijk GitHub <ArrowUpRight :size="15" /></a></div><GitHubActivity /><a href="https://github.com/Karsten0701" target="_blank" rel="noopener noreferrer" class="surface-link mt-5 inline-flex items-center gap-2 text-sm no-underline sm:hidden">Bekijk GitHub <ArrowUpRight :size="15" /></a></div></section>
    <section class="page-wrap py-16 sm:py-20"><p class="eyebrow mb-4">Samen iets maken?</p><h2 class="section-title">Ik hoor graag van je.</h2><RouterLink to="/contact" class="button-primary mt-7">Neem contact op <ArrowUpRight :size="15" /></RouterLink></section>
  </main>
</template>
