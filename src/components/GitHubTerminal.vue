<script setup>
import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue'
import { useGitHub } from '../composables/useGitHub'
import { useIntersection } from '../composables/useIntersection'
import { projects } from '../data/projects'
import { skills, tools } from '../data/skills'

const { commits, fetchCommits } = useGitHub()
const { el: rootEl, isVisible } = useIntersection()

const terminalBody = ref(null)
const lines = ref([])
const userInput = ref('')
const inputEl = ref(null)
const ready = ref(false)
const cursorBlink = ref(true)

let blinkInterval = null
let hasBooted = false

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
}

function addLine(text, type = 'output') {
  lines.value.push({ text, type, id: uid() })
}

function addPromptLine(text) {
  lines.value.push({ text, type: 'prompt', id: uid() })
}

function scrollToBottom() {
  nextTick(() => {
    if (terminalBody.value) {
      terminalBody.value.scrollTop = terminalBody.value.scrollHeight
    }
  })
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function typeCommand(text) {
  const line = { text: '', type: 'typing', id: uid() }
  lines.value.push(line)
  scrollToBottom()

  for (let i = 0; i < text.length; i++) {
    line.text += text[i]
    scrollToBottom()
    await sleep(25 + Math.random() * 35)
  }
  line.type = 'prompt'
}

function processCommand(cmd) {
  const trimmed = cmd.trim().toLowerCase()

  if (!trimmed) return

  addPromptLine(cmd)

  if (trimmed === 'help') {
    addLine('Beschikbare commando\'s:')
    addLine('  whoami        Wie ik ben')
    addLine('  git log       Laatste GitHub commits')
    addLine('  ls projects   Mijn projecten')
    addLine('  skills        Tech stack')
    addLine('  contact       Contact info')
    addLine('  clear         Terminal leegmaken')
  } else if (trimmed === 'whoami') {
    addLine('Karsten Lindenburg')
    addLine('Creative Software Development @ Grafisch Lyceum Rotterdam')
    addLine('Full-stack developer & game creator')
    addLine('github.com/Karsten0701')
  } else if (trimmed === 'git log' || trimmed.startsWith('git log ')) {
    if (commits.value.length > 0) {
      for (const c of commits.value.slice(0, 8)) {
        lines.value.push({
          text: `${c.sha} ${c.message}`,
          type: 'git-log',
          repo: c.repo,
          id: uid(),
        })
      }
    } else {
      addLine('Geen commits gevonden. Probeer later opnieuw.', 'error')
    }
  } else if (trimmed === 'ls projects' || trimmed === 'ls') {
    for (const p of projects) {
      const extra = p.stat ? `  (${p.stat})` : ''
      addLine(`${p.title.toLowerCase().replace(/\s+/g, '-')}/${extra}`)
    }
  } else if (trimmed === 'skills') {
    const grouped = {}
    for (const s of skills) {
      if (!grouped[s.category]) grouped[s.category] = []
      grouped[s.category].push(s.name)
    }
    for (const [cat, list] of Object.entries(grouped)) {
      addLine(`${cat}: ${list.join(', ')}`)
    }
    addLine(`Tools: ${tools.join(', ')}`)
  } else if (trimmed === 'contact') {
    addLine('Email:  Karstenlindenburg@gmail.com')
    addLine('GitHub: github.com/Karsten0701')
    addLine('School: Grafisch Lyceum Rotterdam')
  } else if (trimmed === 'clear') {
    lines.value = []
    return
  } else {
    addLine(`zsh: command not found: ${cmd.trim()}`, 'error')
    addLine('Typ "help" voor beschikbare commando\'s.')
  }

  addLine('')
  scrollToBottom()
}

function handleKeydown(e) {
  if (e.key === 'Enter') {
    processCommand(userInput.value)
    userInput.value = ''
  }
}

function focusInput() {
  inputEl.value?.focus()
}

async function boot() {
  if (hasBooted) return
  hasBooted = true

  await fetchCommits()
  await sleep(300)

  await typeCommand('git log --oneline -5')
  await sleep(200)

  if (commits.value.length > 0) {
    for (const c of commits.value.slice(0, 5)) {
      lines.value.push({
        text: `${c.sha} ${c.message}`,
        type: 'git-log',
        repo: c.repo,
        id: uid(),
      })
    }
  } else {
    addLine('Geen recente commits gevonden.', 'error')
  }

  addLine('')
  await sleep(200)

  await typeCommand('echo "Typ help voor commando\'s"')
  await sleep(100)
  addLine('Typ help voor commando\'s')
  addLine('')

  ready.value = true
  scrollToBottom()
  nextTick(() => focusInput())
}

onMounted(() => {
  blinkInterval = setInterval(() => {
    cursorBlink.value = !cursorBlink.value
  }, 530)

  watch(isVisible, (val) => {
    if (val) boot()
  }, { immediate: true })
})

onUnmounted(() => {
  if (blinkInterval) clearInterval(blinkInterval)
})

watch(lines, scrollToBottom, { deep: true })
</script>

<template>
  <div ref="rootEl" class="fade-in" :class="{ visible: isVisible }">
    <div
      class="rounded-xl overflow-hidden border border-[var(--c-border)] shadow-sm"
      @click="focusInput"
    >
      <div class="flex items-center gap-2 px-4 py-2.5 bg-[#1e1e2e] border-b border-[#2a2a3c]">
        <span class="size-3 rounded-full bg-[#f38ba8]"></span>
        <span class="size-3 rounded-full bg-[#f9e2af]"></span>
        <span class="size-3 rounded-full bg-[#a6e3a1]"></span>
        <span class="text-xs text-[#6c7086] ml-2 font-mono">~/karsten</span>
      </div>

      <div
        ref="terminalBody"
        class="bg-[#1e1e2e] p-4 font-mono text-sm leading-relaxed max-h-[340px] overflow-y-auto cursor-text min-h-[240px]"
      >
        <div v-for="line in lines" :key="line.id" class="whitespace-pre-wrap">
          <template v-if="line.type === 'prompt' || line.type === 'typing'">
            <span class="text-[#a6e3a1]">$ </span>
            <span class="text-[#cdd6f4]">{{ line.text }}</span>
            <span
              v-if="line.type === 'typing'"
              class="inline-block w-[7px] h-[14px] bg-[#cdd6f4] ml-px align-middle"
              :class="cursorBlink ? 'opacity-100' : 'opacity-0'"
            />
          </template>
          <template v-else-if="line.type === 'git-log'">
            <span class="text-[#f9e2af]">{{ line.text.substring(0, 7) }}</span>
            <span class="text-[#cdd6f4]"> {{ line.text.substring(7) }}</span>
            <span v-if="line.repo" class="text-[#6c7086]"> ({{ line.repo }})</span>
          </template>
          <template v-else-if="line.type === 'error'">
            <span class="text-[#f38ba8]">{{ line.text }}</span>
          </template>
          <template v-else>
            <span class="text-[#bac2de]">{{ line.text }}</span>
          </template>
        </div>

        <div v-if="ready" class="flex items-center">
          <span class="text-[#a6e3a1]">$ </span>
          <div class="relative flex-1">
            <input
              ref="inputEl"
              v-model="userInput"
              type="text"
              class="w-full bg-transparent text-transparent outline-none border-none font-mono text-sm p-0 caret-transparent absolute inset-0"
              spellcheck="false"
              autocomplete="off"
              @keydown="handleKeydown"
            >
            <span
              class="pointer-events-none text-[#cdd6f4] font-mono text-sm whitespace-pre"
              aria-hidden="true"
            >{{ userInput }}<span
                class="inline-block w-[7px] h-[14px] bg-[#cdd6f4] ml-px align-middle transition-opacity duration-100"
                :class="cursorBlink ? 'opacity-100' : 'opacity-0'"
              /></span>
          </div>
        </div>
      </div>
    </div>
    <p class="text-xs text-[var(--c-text-muted)] mt-2">
      Interactieve terminal — typ <span class="font-mono text-[var(--c-text-secondary)]">help</span> voor commando's
    </p>
  </div>
</template>
