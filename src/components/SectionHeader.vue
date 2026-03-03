<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>

<template>
  <h2 class="text-3xl font-bold tracking-tight mb-2" style="color: var(--c-text)">
    {{ title }}
  </h2>
  <div class="w-12 h-[3px] rounded-sm mb-2" style="background: var(--color-accent)" />
  <p v-if="subtitle" class="text-base max-w-md mb-10" style="color: var(--c-text-muted)">
    {{ subtitle }}
  </p>
</template>
