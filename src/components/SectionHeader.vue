<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>

<template>
  <div class="mb-8">
    <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-1.5 text-[var(--c-text)]">{{ title }}</h2>
    <div class="w-8 h-[2px] rounded-sm mb-2 bg-[var(--color-accent)]" />
    <p v-if="subtitle" class="text-sm sm:text-base max-w-md text-[var(--c-text-muted)]">{{ subtitle }}</p>
  </div>
</template>
