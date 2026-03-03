<script setup>
function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="relative z-[1] min-h-[90vh] flex items-center justify-center pt-24 pb-16 border-b border-[var(--c-border)]">
    <div class="text-center px-5 sm:px-8 max-w-xl mx-auto">
      <h1 class="text-5xl sm:text-7xl font-extrabold leading-[1.02] tracking-tighter mb-4 text-[var(--c-text)]">
        Karsten<br>Lindenburg
      </h1>
      <p class="text-base sm:text-lg mb-1 text-[var(--c-text-secondary)]">Creative Software Development</p>
      <p class="text-sm mb-8 text-[var(--c-text-muted)]">
        <i class="bi bi-geo-alt mr-1"></i>Grafisch Lyceum Rotterdam
      </p>
      <div class="flex justify-center gap-3 flex-wrap">
        <button
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--color-accent)] border-2 border-[var(--color-accent)] text-[#08080d] cursor-pointer transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)]"
          @click="scrollTo('#projects')"
        >
          <i class="bi bi-grid"></i> Projecten
        </button>
        <button
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-transparent border-2 border-[var(--c-border)] text-[var(--c-text)] cursor-pointer transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          @click="scrollTo('#contact')"
        >
          <i class="bi bi-send"></i> Contact
        </button>
      </div>
    </div>
  </header>
</template>
