<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>

<template>
  <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-[var(--c-text)]">{{ title }}</h2>
  <div class="w-10 h-[3px] rounded-sm mb-2 bg-[var(--color-accent)]" />
  <p v-if="subtitle" class="text-sm sm:text-base max-w-md mb-8 text-[var(--c-text-muted)]">{{ subtitle }}</p>
</template>
