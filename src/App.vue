<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <NavBar />
  <RouterView v-slot="{ Component, route }">
    <Transition name="route" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  <FooterSection />
</template>

<style>
.route-enter-active,.route-leave-active{transition:opacity .16s ease}.route-enter-from,.route-leave-to{opacity:0}
</style>
