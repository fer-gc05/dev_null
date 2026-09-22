<script setup lang="ts">
import { ref, computed } from 'vue'
import { flowData } from '../data/flow'
import { getColor } from '../utils/colors'
import InfoPanel from '../components/InfoPanel.vue'
import InteractiveItem from '../components/InteractiveItem.vue'

const selected = ref(0)

const current = computed(() => flowData[selected.value])
const accentColor = computed(() => getColor(current.value.color))
</script>

<template>
  <section class="container">
    <div class="interactive-list">
      <InteractiveItem
        v-for="(item, index) in flowData"
        :key="index"
        :title="`${index + 1}. ${item.title}`"
        :is-active="selected === index"
        :accent="item.color"
        @select="selected = index"
      />
    </div>

    <InfoPanel :title="current.title" :accent-color="accentColor">
      <div class="info-label">Concepto Backend:</div>
      <div class="info-content">{{ current.desc }}</div>

      <div class="info-label">Ejemplo de Código:</div>
      <div class="code-block"><span class="prompt">$</span> {{ current.code }}</div>
      <div class="terminal-output">{{ current.output }}</div>
    </InfoPanel>
  </section>
</template>
