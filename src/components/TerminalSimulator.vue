<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'

interface TermLine {
  type: 'prompt' | 'output'
  text: string
}

const lines = ref<TermLine[]>([])
const isTyping = ref(false)
const currentLine = ref('')
const terminalBody = ref<HTMLElement | null>(null)

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

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

  for (const char of command) {
    currentLine.value += char
    await sleep(50 + Math.random() * 30)
  }

  isTyping.value = false
  lines.value.push({ type: 'prompt', text: command })
  currentLine.value = ''

  for (const line of output) {
    await sleep(200)
    lines.value.push({ type: 'output', text: line })
  }
}

defineExpose({ typeCommand })
</script>

<template>
  <div class="terminal-simulator">
    <div class="terminal-header">
      <div class="traffic-lights">
        <span class="light red"></span>
        <span class="light yellow"></span>
        <span class="light green"></span>
      </div>
      <span class="terminal-title">bash — 80×24</span>
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
        <span class="muted">Selecciona "Probar en terminal" en un comando de abajo…</span>
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
  min-height: 140px;
  max-height: 260px;
  overflow-y: auto;
  font-family: var(--font-code);
  font-size: 0.9rem;
  line-height: 1.6;
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
