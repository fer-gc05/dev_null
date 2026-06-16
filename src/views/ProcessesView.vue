<script setup>
import { ref, computed } from 'vue'
import { processesData } from '../data/processes'
import InfoPanel from '../components/InfoPanel.vue'
import InteractiveItem from '../components/InteractiveItem.vue'

const selected = ref(0)
const current = computed(() => processesData[selected.value])
</script>

<template>
  <section class="container">
    <div class="interactive-list">
      <InteractiveItem
        v-for="(item, index) in processesData"
        :key="index"
        :title="item.title"
        :is-active="selected === index"
        accent="purple"
        @select="selected = index"
      />
    </div>

    <InfoPanel :title="current.title" accent-color="var(--purple)">
      <div class="info-label">¿Qué es?</div>
      <div class="info-content">{{ current.desc }}</div>

      <div class="info-label">Ejemplo en Terminal:</div>
      <div class="code-block" v-html="current.code" />
    </InfoPanel>
  </section>
</template>
