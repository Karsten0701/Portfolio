<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <div class="project-art" :class="`art-${project.cover || 'portfolio'}`" aria-hidden="true">
    <template v-if="['theme-park', 'horror', 'vikings'].includes(project.cover)">
      <div class="art-game-scene">
        <span class="sun" />
        <span class="art-horizon" />
        <span v-if="project.cover === 'theme-park'" class="art-track" />
        <span v-if="project.cover === 'theme-park'" class="art-tower" />
        <span v-if="project.cover === 'horror'" class="art-tree" />
        <span v-if="project.cover === 'vikings'" class="art-ship" />
      </div>
    </template>
    <template v-else>
      <div class="art-dots" />
      <div class="art-window">
        <div class="art-window-bar"><i /><i /><i /></div>
        <div class="art-window-body">
          <div class="art-sidebar"><i /><i /><i /><i /></div>
          <div class="art-content">
            <span class="art-heading" />
            <div class="art-metric-row"><i /><i /><i /></div>
            <div class="art-chart">
              <svg viewBox="0 0 400 110" preserveAspectRatio="none">
                <path d="M0 83 C50 75 70 89 115 56 S190 79 230 44 S302 63 340 29 S375 38 400 12" fill="none" stroke="currentColor" stroke-width="3" opacity=".56" />
                <path d="M0 83 C50 75 70 89 115 56 S190 79 230 44 S302 63 340 29 S375 38 400 12 L400 110 L0 110Z" fill="currentColor" opacity=".08" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </template>
    <span class="art-label">Conceptillustratie</span>
  </div>
</template>
