<script setup lang="ts">
import { computed } from 'vue'
import { t } from '../i18n'

const props = defineProps<{
  selected: number
}>()

const emit = defineEmits<{ select: [index: number] }>()

// Use relative sizing based on container width
const rowHeight = 48
const rowGap = 22
const padding = 16
const height = computed(() => 4 * (rowHeight + rowGap) - rowGap + padding * 2)

const rows = computed(() => [
  { command: t.value('flow.cmd'), node: 'stdout', dest: t.value('flow.file'), color: 'var(--green)' },
  { command: t.value('flow.cmd'), node: 'stderr', dest: '/dev/null', color: 'var(--red)' },
  { command: t.value('flow.cmdA'), node: 'pipe |', dest: t.value('flow.cmdB'), color: 'var(--yellow)' },
  { command: t.value('flow.cmd'), node: '> /dev/null', dest: t.value('flow.discard'), color: 'var(--green)' }
])

// Relative positions (percentage-based)
const cmdX = 12
const cmdW = 110
const nodeX = 170
const nodeW = 180
const destX = 420
const destW = 100

const yOf = (i: number) => padding + i * (rowHeight + rowGap)
const cyOf = (i: number) => yOf(i) + rowHeight / 2

const edgePath1 = (i: number) => `M ${cmdX + cmdW} ${cyOf(i)} L ${nodeX} ${cyOf(i)}`
const edgePath2 = (i: number) => `M ${nodeX + nodeW} ${cyOf(i)} L ${destX} ${cyOf(i)}`

const width = computed(() => destX + destW + 12)
</script>

<template>
  <div class="flow-diagram-wrap">
    <svg
      class="flow-diagram"
      :viewBox="`0 0 ${width} ${height}`"
      role="img"
      :aria-label="t('flow.aria')"
    >
      <g v-for="(row, i) in rows" :key="i">
        <rect
          :x="cmdX"
          :y="yOf(i)"
          :width="cmdW"
          :height="rowHeight"
          class="cmd-rect"
          rx="8"
        />
        <text
          :x="cmdX + cmdW / 2"
          :y="cyOf(i) + 5"
          text-anchor="middle"
          class="node-label dim"
        >
          {{ row.command }}
        </text>

        <path :d="edgePath1(i)" fill="none" :stroke="row.color" stroke-width="2" />
        <circle r="4" :fill="row.color" class="data-pulse">
          <animateMotion :path="edgePath1(i)" dur="2s" repeatCount="indefinite" />
        </circle>

        <g class="flow-node" @click="emit('select', i)">
          <rect
            :x="nodeX"
            :y="yOf(i)"
            :width="nodeW"
            :height="rowHeight"
            :fill="row.color"
            :opacity="selected === i ? 1 : 0.6"
            rx="8"
            class="node-rect"
            :class="{ active: selected === i }"
          />
          <text
            :x="nodeX + nodeW / 2"
            :y="cyOf(i) + 5"
            text-anchor="middle"
            class="node-label"
          >
            {{ row.node }}
          </text>
        </g>

        <path :d="edgePath2(i)" fill="none" :stroke="row.color" stroke-width="2" />
        <circle r="4" :fill="row.color" class="data-pulse">
          <animateMotion :path="edgePath2(i)" dur="2s" repeatCount="indefinite" />
        </circle>

        <rect
          :x="destX"
          :y="yOf(i)"
          :width="destW"
          :height="rowHeight"
          class="dest-rect"
          rx="8"
        />
        <text
          :x="destX + destW / 2"
          :y="cyOf(i) + 5"
          text-anchor="middle"
          class="node-label dim"
        >
          {{ row.dest }}
        </text>
      </g>
    </svg>
    <p class="diagram-hint">{{ t('flow.hint') }}</p>
  </div>
</template>

<style scoped>
.flow-diagram-wrap {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.flow-diagram {
  flex: 1;
  width: 100%;
  min-height: 0;
  height: 100%;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 8px;
}

.cmd-rect,
.dest-rect {
  fill: var(--bg-color);
  stroke: var(--border-color);
  stroke-width: 1;
}

.flow-node {
  cursor: pointer;
}

.node-rect {
  transition:
    opacity 0.25s ease,
    filter 0.25s ease;
}

.flow-node:hover .node-rect {
  opacity: 1;
  filter: drop-shadow(0 0 8px currentColor);
}

.node-label {
  fill: #0d1117;
  font-family: var(--font-code);
  font-size: 13px;
  font-weight: 700;
  pointer-events: none;
}

.node-label.dim {
  fill: var(--text-main);
  font-weight: 500;
}

.data-pulse {
  opacity: 0.9;
}

.diagram-hint {
  color: var(--muted);
  font-size: 0.85rem;
  margin: 0;
  text-align: center;
}
</style>
