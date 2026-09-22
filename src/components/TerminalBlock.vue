<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  lines: string[]
  typewriter?: boolean
}>()

const typedCount = ref(props.typewriter ? 0 : props.lines.length)
let timer: ReturnType<typeof setInterval> | undefined

const startTyping = () => {
  if (timer) clearInterval(timer)
  typedCount.value = 0
  timer = setInterval(() => {
    if (typedCount.value >= props.lines.length) {
      if (timer) clearInterval(timer)
      return
    }
    typedCount.value++
  }, 120)
}

onMounted(() => {
  if (props.typewriter) startTyping()
})

watch(
  () => props.lines,
  () => {
    if (props.typewriter) startTyping()
    else {
      if (timer) clearInterval(timer)
      typedCount.value = props.lines.length
    }
  }
)

const visibleLines = () => props.lines.slice(0, typedCount.value)
</script>

<template>
  <div class="terminal-block">
    <div
      v-for="(line, i) in visibleLines()"
      :key="i"
      class="tb-line"
      :class="{ comment: line.startsWith('#') }"
    >
      {{ line }}
    </div>
    <span v-if="typewriter && typedCount < lines.length" class="cursor">▋</span>
  </div>
</template>

<style scoped>
.terminal-block {
  background: #000;
  padding: 15px;
  border-radius: 5px;
  font-family: var(--font-code);
  margin-top: 10px;
  border: 1px solid #222;
  color: var(--text-main);
  font-size: 0.9rem;
  line-height: 1.6;
  white-space: pre-wrap;
}

.tb-line.comment {
  color: var(--muted);
  font-style: italic;
}

.cursor {
  color: var(--green);
  animation: blink 1s step-end infinite;
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
