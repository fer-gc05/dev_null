<script setup>
import { ref } from 'vue'
import { architectureData } from '../data/architecture'
import InfoPanel from '../components/InfoPanel.vue'
import InteractiveItem from '../components/InteractiveItem.vue'

const selected = ref(0)
</script>

<template>
  <section class="container">
    <div class="diagram">
      <InteractiveItem
        v-for="(layer, index) in architectureData"
        :key="index"
        :title="layer.title"
        :is-active="selected === index"
        accent="green"
        @select="selected = index"
      />
    </div>

    <InfoPanel :title="architectureData[selected].title" accent-color="var(--green)">
      <div class="info-label">Analogía del Restaurante:</div>
      <div class="info-content">{{ architectureData[selected].analogy }}</div>

      <div class="info-label">Ejemplos Reales:</div>
      <div class="info-content">{{ architectureData[selected].examples }}</div>

      <div class="info-label">Función Técnica:</div>
      <div class="info-content">{{ architectureData[selected].function }}</div>
    </InfoPanel>
  </section>
</template>
