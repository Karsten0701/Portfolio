<script setup>
function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header
    class="min-h-[92vh] flex items-center justify-center pt-28 pb-20 border-b"
    style="border-color: var(--c-border)"
  >
    <div class="text-center px-6 max-w-2xl mx-auto">
      <span
        class="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-wider border mb-6"
        style="font-family: 'Courier New', Courier, monospace; color: var(--c-text-secondary); border-color: var(--c-border)"
      >
        // creative developer
      </span>
      <h1 class="text-5xl sm:text-6xl font-extrabold leading-none tracking-tighter mb-4" style="color: var(--c-text)">
        Karsten<br>Lindenburg
      </h1>
      <p class="text-lg mb-1" style="color: var(--c-text-secondary)">Creative Software Development</p>
      <p class="text-sm mb-8" style="color: var(--c-text-muted)">Grafisch Lyceum Rotterdam</p>
      <div class="flex justify-center gap-3 flex-wrap">
        <button
          class="px-5 py-3 rounded-xl text-sm font-semibold t cursor-pointer"
          style="background: var(--color-accent); border: 2px solid var(--color-accent); color: #08080d"
          @mouseenter="$event.target.style.background = 'var(--color-accent-hover)'; $event.target.style.borderColor = 'var(--color-accent-hover)'"
          @mouseleave="$event.target.style.background = 'var(--color-accent)'; $event.target.style.borderColor = 'var(--color-accent)'"
          @click="scrollTo('#projects')"
        >
          Projecten
        </button>
        <button
          class="px-5 py-3 rounded-xl text-sm font-medium border-2 t cursor-pointer"
          style="border-color: var(--c-border); color: var(--c-text); background: transparent"
          @mouseenter="$event.target.style.borderColor = 'var(--color-accent)'; $event.target.style.color = 'var(--color-accent)'"
          @mouseleave="$event.target.style.borderColor = 'var(--c-border)'; $event.target.style.color = 'var(--c-text)'"
          @click="scrollTo('#contact')"
        >
          Contact
        </button>
      </div>
    </div>
  </header>
</template>
