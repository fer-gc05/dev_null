<script setup lang="ts">
import { ref } from 'vue'
import { architectureData } from '../data/architecture'
import InfoPanel from '../components/InfoPanel.vue'
import LayerDiagram from '../components/LayerDiagram.vue'
import { t, L } from '../i18n'

const selected = ref(0)
</script>

<template>
  <section class="container">
    <LayerDiagram :layers="architectureData" :selected="selected" @select="selected = $event" />

    <InfoPanel :title="L(architectureData[selected].title)" accent-color="var(--green)">
      <div class="info-label">{{ t('arch.analogy') }}</div>
      <div class="info-content">{{ L(architectureData[selected].analogy) }}</div>

      <div class="info-label">{{ t('arch.examples') }}</div>
      <div class="info-content">{{ L(architectureData[selected].examples) }}</div>

      <div class="info-label">{{ t('arch.function') }}</div>
      <div class="info-content">{{ L(architectureData[selected].function) }}</div>
    </InfoPanel>
  </section>
</template>
