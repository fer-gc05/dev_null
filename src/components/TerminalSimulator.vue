<script setup lang="ts">
import { ref, nextTick, watch, onUnmounted, onMounted } from 'vue'
import { t } from '../i18n'

interface TermLine {
  type: 'prompt' | 'output'
  text: string
}

const lines = ref<TermLine[]>([])
const isTyping = ref(false)
const currentLine = ref('')
const terminalBody = ref<HTMLElement | null>(null)
const typingTimers: number[] = []
const prefersReducedMotion = ref(false)

const sleep = (ms: number) => new Promise((resolve) => {
  const id = setTimeout(resolve, ms)
  typingTimers.push(id)
})

const checkReducedMotion = () => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

onMounted(() => {
  checkReducedMotion()
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  mediaQuery.addEventListener('change', checkReducedMotion)
  return () => mediaQuery.removeEventListener('change', checkReducedMotion)
})

const scrollToBottom = async () => {
  await nextTick()
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}

watch([lines, currentLine], scrollToBottom)

const typeCommand = async (command: string, output: string[]) => {
  isTyping.value = true
  currentLine.value = ''

  if (!prefersReducedMotion.value) {
    for (const char of command) {
      currentLine.value += char
      await sleep(50 + Math.random() * 30)
    }
  } else {
    currentLine.value = command
  }

  isTyping.value = false
  lines.value.push({ type: 'prompt', text: command })
  currentLine.value = ''

  if (!prefersReducedMotion.value) {
    for (const line of output) {
      await sleep(200)
      lines.value.push({ type: 'output', text: line })
    }
  } else {
    output.forEach(line => lines.value.push({ type: 'output', text: line }))
  }
}

const clear = () => {
  lines.value = []
  currentLine.value = ''
  isTyping.value = false
}

onUnmounted(() => {
  typingTimers.forEach(clearTimeout)
  typingTimers.length = 0
})

defineExpose({ typeCommand, clear })
</script>

<template>
  <div class="terminal-simulator">
    <div class="terminal-header">
      <div class="traffic-lights">
        <span class="light red"></span>
        <span class="light yellow"></span>
        <span class="light green"></span>
      </div>
      <span class="terminal-title">{{ t('terminal.title') }}</span>
      <button class="clear-btn" @click="clear" :aria-label="t('terminal.clear')" :title="t('terminal.clear')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
    <div ref="terminalBody" class="terminal-body">
      <div
        v-for="(line, index) in lines"
        :key="index"
        class="terminal-line"
        :class="line.type"
      >
        <span v-if="line.type === 'prompt'" class="prompt">$ </span>
        <span class="command-text">{{ line.text }}</span>
      </div>
      <div v-if="isTyping" class="terminal-line prompt-line">
        <span class="prompt">$ </span>
        <span class="command-text">{{ currentLine }}</span>
        <span class="cursor">▋</span>
      </div>
      <div v-if="!lines.length && !isTyping" class="terminal-line idle">
        <span class="muted">{{ t('terminal.idle') }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terminal-simulator {
  width: 100%;
  max-width: 1000px;
  background: #000;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 32px;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--panel-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 10px 14px;
}

.traffic-lights {
  display: flex;
  gap: 6px;
}

.light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.light.red {
  background: #ff5f56;
}

.light.yellow {
  background: #ffbd2e;
}

.light.green {
  background: #27c93f;
}

.terminal-title {
  color: var(--muted);
  font-family: var(--font-code);
  font-size: 0.8rem;
}

.terminal-body {
  padding: 16px;
  height: 220px;
  overflow-y: auto;
  font-family: var(--font-code);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .terminal-body {
    height: 180px;
  }
}

.clear-btn {
  margin-left: auto;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--muted);
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  border-color: var(--red);
  color: var(--red);
  background: rgba(248, 81, 73, 0.1);
}

.clear-btn svg {
  width: 14px;
  height: 14px;
}

.terminal-line {
  white-space: pre-wrap;
  word-break: break-all;
}

.terminal-line.output .command-text {
  color: var(--muted);
}

.terminal-line.prompt .command-text,
.prompt-line .command-text {
  color: var(--text-main);
}

.cursor {
  color: var(--green);
  animation: blink 1s step-end infinite;
}

.idle .muted {
  color: var(--muted);
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
