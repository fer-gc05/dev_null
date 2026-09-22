<script setup lang="ts">
import { ref } from 'vue'
import { architectureData } from '../data/architecture'
import InfoPanel from '../components/InfoPanel.vue'
import LayerDiagram from '../components/LayerDiagram.vue'

const selected = ref(0)
</script>

<template>
  <section class="container">
    <LayerDiagram :layers="architectureData" :selected="selected" @select="selected = $event" />

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
