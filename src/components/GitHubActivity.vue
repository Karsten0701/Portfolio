<script setup>
import { onMounted } from 'vue'
import { Github, ArrowUpRight, RotateCw } from 'lucide-vue-next'
import { useGitHub } from '../composables/useGitHub'

const { contributionWeeks, totalContributions, accounts, recentCommits, commitsLoading, commitsError, loading, error, fetchContributions, fetchRecentCommits, contributionColor, monthLabels } = useGitHub()
const profiles = ['Karsten0701', 'Karsten07011']
onMounted(() => { fetchContributions(); fetchRecentCommits() })
function readableCount(count) { return `${count} bijdrage${count === 1 ? '' : 'n'}` }
function readableDate(date) { return new Intl.DateTimeFormat('nl-NL', { day: 'numeric', month: 'short' }).format(new Date(date)) }
</script>

<template>
  <section class="rounded-[4px] border border-[var(--c-border)] bg-[var(--c-bg-card)] p-5 sm:p-7" aria-labelledby="github-activity-title">
    <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p class="eyebrow mb-3">Open source</p>
        <h2 id="github-activity-title" class="text-2xl font-medium tracking-[-.045em]">GitHub-activiteit</h2>
        <p class="mt-2 text-sm text-[var(--c-text-secondary)]">{{ loading ? 'Activiteit van het afgelopen jaar ophalen…' : accounts.length ? `${totalContributions.toLocaleString('nl-NL')} bijdragen ${accounts.length === 1 ? 'op één openbaar profiel' : 'samen op twee openbare profielen'} in het afgelopen jaar` : 'Openbare GitHub-activiteit niet beschikbaar' }}</p>
      </div>
      <button v-if="error" class="inline-flex items-center gap-2 self-start text-xs text-[var(--c-text-secondary)] bg-transparent border-0 cursor-pointer" @click="fetchContributions"><RotateCw :size="13" />{{ contributionWeeks.length ? 'Een profiel tijdelijk niet beschikbaar · opnieuw laden' : 'Laden opnieuw proberen' }}</button>
    </div>
    <div v-if="loading && !contributionWeeks.length" class="mt-7 h-[104px] animate-pulse rounded-sm bg-[var(--c-bg-alt)]" aria-label="Activiteit wordt geladen" />
    <div v-else-if="contributionWeeks.length" class="mt-7 overflow-x-auto pb-2" tabindex="0" role="img" :aria-label="`${totalContributions} GitHub-bijdragen samen van de afgelopen 12 maanden. Scroll horizontaal om alle weken te bekijken.`">
      <div class="min-w-[710px]">
        <div class="mb-2 grid grid-cols-[24px_1fr] text-[10px] text-[var(--c-text-muted)]">
          <span />
          <div class="grid" :style="{ gridTemplateColumns: `repeat(${contributionWeeks.length}, minmax(0, 1fr))` }"><span v-for="month in monthLabels" :key="month.weekIndex" :style="{ gridColumn: `${month.weekIndex + 1} / span 4` }">{{ month.label }}</span></div>
        </div>
        <div class="grid grid-cols-[24px_1fr] gap-1.5">
          <div class="flex flex-col justify-between py-[2px] text-[9px] text-[var(--c-text-muted)]"><span>ma</span><span>wo</span><span>vr</span></div>
          <div class="flex gap-[3px]">
            <div v-for="(week, wi) in contributionWeeks" :key="wi" class="grid flex-1 grid-rows-7 gap-[3px]">
              <span v-for="(day, di) in week" :key="di" class="aspect-square min-w-[7px] rounded-[2px]" :style="{ background: contributionColor(day.count) }" :title="`${day.date}: ${readableCount(day.count)}`" :aria-label="`${day.date}: ${readableCount(day.count)}`" />
              <span v-for="empty in 7 - week.length" :key="`empty-${empty}`" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!loading" class="mt-6 rounded-sm bg-[var(--c-bg-alt)] px-4 py-5 text-sm text-[var(--c-text-secondary)]">GitHub-activiteit is op dit moment niet beschikbaar. Bekijk mijn profiel voor de meest recente activiteit.</div>
    <div class="mt-5 border-t border-[var(--c-border)] pt-4">
      <h3 class="mb-3 text-xs font-medium text-[var(--c-text-secondary)]">Recente openbare commits</h3>
      <div v-if="recentCommits.length" class="divide-y divide-[var(--c-border)]">
        <a v-for="commit in recentCommits" :key="`${commit.repo}/${commit.sha}`" :href="`https://github.com/${commit.repo}/commit/${commit.sha}`" target="_blank" rel="noopener noreferrer" class="group flex items-start justify-between gap-4 py-3 no-underline">
          <span class="min-w-0"><span class="block truncate text-xs text-[var(--c-text)] group-hover:text-[var(--c-accent)]">{{ commit.message }}</span><span class="mt-1 block truncate font-mono text-[10px] text-[var(--c-text-muted)]">{{ commit.repo }}</span></span>
          <span class="shrink-0 text-[10px] text-[var(--c-text-muted)]">{{ readableDate(commit.date) }} <ArrowUpRight :size="11" class="inline" /></span>
        </a>
      </div>
      <p v-else-if="commitsLoading" class="text-xs text-[var(--c-text-muted)]">Openbare commits ophalen…</p>
      <p v-else-if="commitsError" class="text-xs text-[var(--c-text-muted)]">Geen recente openbare commits beschikbaar. <button class="ml-1 border-0 bg-transparent p-0 underline underline-offset-2 text-inherit cursor-pointer" @click="fetchRecentCommits">Opnieuw proberen</button> · <a href="https://github.com/Karsten0701" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2">Bekijk GitHub</a></p>
    </div>
    <div class="mt-5 flex flex-col gap-4 border-t border-[var(--c-border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--c-text-secondary)]">
        <a v-for="profile in profiles" :key="profile" :href="`https://github.com/${profile}`" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 no-underline hover:text-[var(--c-text)]"><Github :size="13" />{{ profile }}<ArrowUpRight :size="11" /></a>
      </div>
      <div v-if="contributionWeeks.length" class="flex items-center gap-1.5 text-[10px] text-[var(--c-text-muted)]"><span>Minder</span><i v-for="count in [0, 1, 2, 4, 7]" :key="count" class="size-[10px] rounded-[2px]" :style="{ background: contributionColor(count) }" /><span>Meer</span></div>
    </div>
    <p v-if="accounts.length" class="sr-only">Activiteit geladen voor {{ accounts.join(' en ') }}.</p>
  </section>
</template>
