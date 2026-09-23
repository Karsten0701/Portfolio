<script setup>
import { RouterLink } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <main class="page-wrap flex min-h-[72vh] flex-col justify-center pb-16 pt-28">
    <p class="eyebrow mb-5">404 · pagina niet gevonden</p>
    <h1 class="display-title max-w-3xl text-[clamp(3.5rem,9vw,7rem)]">Hier is niets<br>te vinden.</h1>
    <p class="mt-6 text-sm text-[var(--c-text-secondary)]">Misschien vind je wat je zoekt tussen mijn projecten.</p>
    <RouterLink to="/projects" class="button-primary mt-8 w-fit"><ArrowLeft :size="15" /> Naar projecten</RouterLink>
  </main>
</template>
