<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { flowData } from '../data/flow'
import { getColor } from '../utils/colors'
import InfoPanel from '../components/InfoPanel.vue'
import FlowDiagram from '../components/FlowDiagram.vue'
import { t, L } from '../i18n'

const selected = ref(0)

const current = computed(() => flowData[selected.value])
const accentColor = computed(() => getColor(current.value.color))

const typedCode = ref('')
let generation = 0

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

watch(
  selected,
  async () => {
    const my = ++generation
    typedCode.value = ''
    for (const char of current.value.code) {
      if (my !== generation) return
      typedCode.value += char
      await sleep(22)
    }
  },
  { immediate: true }
)
</script>

<template>
  <section class="container">
    <FlowDiagram :selected="selected" @select="selected = $event" />

    <InfoPanel :title="L(current.title)" :accent-color="accentColor">
      <div class="info-label">{{ t('flow.concept') }}</div>
      <div class="info-content">{{ L(current.desc) }}</div>

      <div class="info-label">{{ t('flow.code') }}</div>
      <div class="code-block"><span class="prompt">$</span> {{ typedCode }}<span class="type-cursor">▋</span></div>
      <div class="terminal-output">{{ L(current.output) }}</div>
    </InfoPanel>
  </section>
</template>

<style scoped>
.type-cursor {
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
