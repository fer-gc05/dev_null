<script setup lang="ts">
import { computed } from 'vue'
import type { ArchitectureLayer } from '../data/types'
import { t, L } from '../i18n'

const props = defineProps<{
  layers: ArchitectureLayer[]
  selected: number
}>()

const emit = defineEmits<{ select: [index: number] }>()

const layerHeight = 64
const gap = 24
const padding = 20
const width = 560

const layerColors = ['#bc8cff', '#58a6ff', '#2ea043', '#f85149']

const displayOrder = computed(() =>
  props.layers.map((layer, index) => ({ layer, index })).reverse()
)

const height = computed(
  () => props.layers.length * (layerHeight + gap) - gap + padding * 2
)

const shortTitle = (title: { es: string; en: string }) => L.value(title).replace(/^\d+\.\s*/, '')

const yOf = (displayIndex: number) => displayIndex * (layerHeight + gap) + padding

const connectionY = (displayIndex: number) =>
  yOf(displayIndex) + layerHeight + gap / 2
</script>

<template>
  <div class="layer-diagram-wrap">
    <svg
      class="layer-diagram"
      :viewBox="`0 0 ${width} ${height}`"
      role="img"
      :aria-label="t('arch.aria')"
    >
      <g
        v-for="(item, displayIndex) in displayOrder"
        :key="item.layer.title.en"
        class="layer-group"
        @click="emit('select', item.index)"
      >
        <rect
          :x="padding"
          :y="yOf(displayIndex)"
          :width="width - padding * 2"
          :height="layerHeight"
          :fill="layerColors[displayIndex]"
          :opacity="selected === item.index ? 1 : 0.55"
          rx="8"
          class="layer-rect"
          :class="{ active: selected === item.index }"
        />
        <text
          :x="width / 2"
          :y="yOf(displayIndex) + layerHeight / 2 + 5"
          text-anchor="middle"
          class="layer-label"
        >
          {{ shortTitle(item.layer.title) }}
        </text>
      </g>

      <g
        v-for="displayIndex in displayOrder.length - 1"
        :key="`conn-${displayIndex}`"
        class="connection"
      >
        <line
          :x1="width / 2"
          :y1="connectionY(displayIndex - 1)"
          :x2="width / 2"
          :y2="connectionY(displayIndex - 1) + gap"
          stroke="var(--muted)"
          stroke-width="2"
          stroke-dasharray="4,4"
          class="pulse-line"
        />
      </g>
    </svg>
    <p class="diagram-hint">{{ t('arch.hint') }}</p>
  </div>
</template>

<style scoped>
.layer-diagram-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.layer-diagram {
  width: 100%;
  height: auto;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 8px;
}

.layer-group {
  cursor: pointer;
}

.layer-rect {
  transition:
    opacity 0.25s ease,
    filter 0.25s ease;
}

.layer-group:hover .layer-rect {
  filter: drop-shadow(0 0 10px currentColor);
}

.layer-group:hover .layer-rect {
  opacity: 1;
}

.layer-label {
  fill: #0d1117;
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 700;
  pointer-events: none;
}

.pulse-line {
  animation: dash-flow 1.2s linear infinite;
}

@keyframes dash-flow {
  to {
    stroke-dashoffset: -16;
  }
}

.diagram-hint {
  color: var(--muted);
  font-size: 0.85rem;
  margin: 0;
  text-align: center;
}
</style>
