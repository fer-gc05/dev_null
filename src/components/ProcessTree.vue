<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { processTree } from '../data/process-tree'
import type { ProcessNode } from '../data/types'

const cloneTree = (nodes: ProcessNode[]): ProcessNode[] =>
  nodes.map((n) => ({ ...n, children: n.children ? cloneTree(n.children) : undefined }))

const nodes = ref<ProcessNode[]>(cloneTree(processTree))
const selectedPid = ref<number | null>(null)
const exitingPids = ref<Set<number>>(new Set())
const prefersReducedMotion = ref(false)

interface FlatRow {
  node: ProcessNode
  depth: number
}

const rows = computed<FlatRow[]>(() => {
  const out: FlatRow[] = []
  const walk = (list: ProcessNode[], depth: number) => {
    for (const n of list) {
      out.push({ node: n, depth })
      if (n.children?.length) walk(n.children, depth + 1)
    }
  }
  walk(nodes.value, 0)
  return out
})

const selected = computed(() =>
  rows.value.find((r) => r.node.pid === selectedPid.value)?.node ?? null
)

const findAndRemove = (list: ProcessNode[], pid: number): boolean => {
  const idx = list.findIndex((n) => n.pid === pid)
  if (idx >= 0) {
    list.splice(idx, 1)
    return true
  }
  for (const n of list) {
    if (n.children?.length && findAndRemove(n.children, pid)) return true
  }
  return false
}

const checkReducedMotion = () => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const jitter = (list: ProcessNode[]) => {
  if (prefersReducedMotion.value) return
  for (const n of list) {
    if (n.status === 'running') {
      n.cpu = Math.max(0, Math.min(99, +(n.cpu + (Math.random() - 0.45) * 0.6).toFixed(1)))
      n.memory = Math.max(0.1, +(n.memory + (Math.random() - 0.5) * 0.5).toFixed(1))
    } else {
      n.cpu = Math.max(0, +(n.cpu * 0.5).toFixed(1))
    }
    if (n.children?.length) jitter(n.children)
  }
}

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  checkReducedMotion()
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  mediaQuery.addEventListener('change', checkReducedMotion)
  timer = setInterval(() => jitter(nodes.value), 3000)
  return () => mediaQuery.removeEventListener('change', checkReducedMotion)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const kill = (pid: number) => {
  if (pid === 1 || exitingPids.value.has(pid)) return
  exitingPids.value.add(pid)
  exitingPids.value = new Set(exitingPids.value)
  setTimeout(() => {
    findAndRemove(nodes.value, pid)
    if (selectedPid.value === pid) selectedPid.value = null
    exitingPids.value.delete(pid)
    exitingPids.value = new Set(exitingPids.value)
  }, 350)
}

const statusClass = (status: ProcessNode['status']) => `status-${status}`
</script>

<template>
  <div class="process-tree-view">
    <div class="tree-panel">
      <TransitionGroup name="proc" tag="div" class="tree-rows">
        <div
          v-for="row in rows"
          :key="row.node.pid"
          class="proc-row"
          :class="{
            selected: selectedPid === row.node.pid,
            exiting: exitingPids.has(row.node.pid)
          }"
          :style="{ paddingLeft: row.depth * 24 + 12 + 'px' }"
          role="button"
          tabindex="0"
          @click="selectedPid = row.node.pid"
          @keydown.enter="selectedPid = row.node.pid"
        >
          <span v-if="row.depth > 0" class="tree-guide"></span>
          <span class="proc-pid">PID {{ row.node.pid }}</span>
          <span class="proc-name">{{ row.node.name }}</span>
          <span class="proc-badge" :class="statusClass(row.node.status)">
            {{ row.node.status }}
          </span>
          <span class="proc-stat cpu">{{ row.node.cpu.toFixed(1) }}% CPU</span>
          <span class="proc-stat ram">{{ row.node.memory.toFixed(1) }}% RAM</span>
        </div>
      </TransitionGroup>
      <p v-if="!rows.length" class="tree-empty">No hay procesos. Kill exitoso ✓</p>
      <p class="tree-hint">CPU/RAM se actualizan cada 2s (simulación)</p>
    </div>

    <div v-if="selected" class="proc-info">
      <h3>{{ selected.name }}</h3>
      <dl>
        <dt>PID</dt>
        <dd class="mono">{{ selected.pid }}</dd>
        <dt>Estado</dt>
        <dd>
          <span class="proc-badge" :class="statusClass(selected.status)">
            {{ selected.status }}
          </span>
        </dd>
        <dt>CPU</dt>
        <dd class="mono">{{ selected.cpu.toFixed(1) }}%</dd>
        <dt>Memoria</dt>
        <dd class="mono">{{ selected.memory.toFixed(1) }}%</dd>
      </dl>
      <button
        class="kill-btn"
        :disabled="selected.pid === 1"
        @click="kill(selected.pid)"
      >
        kill -9 {{ selected.pid }}
      </button>
      <p v-if="selected.pid === 1" class="kill-note">
        No puedes matar a systemd (PID 1).
      </p>
    </div>
  </div>
</template>

<style scoped>
.process-tree-view {
  display: flex;
  gap: 24px;
  width: 100%;
  margin-bottom: 32px;
}

.tree-panel {
  flex: 1.5;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 16px;
  min-width: 0;
}

.tree-rows {
  display: flex;
  flex-direction: column;
}

.proc-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-code);
  font-size: 0.85rem;
  position: relative;
  transition: background 0.15s ease;
}

.proc-row:hover {
  background: rgba(188, 140, 255, 0.08);
}

.proc-row.selected {
  background: rgba(188, 140, 255, 0.15);
}

.tree-guide {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--border-color);
}

.proc-pid {
  color: var(--muted);
  min-width: 64px;
}

.proc-name {
  flex: 1;
  color: var(--text-main);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.proc-badge {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.status-running {
  background: rgba(46, 160, 67, 0.15);
  color: var(--green);
}

.status-sleeping {
  background: rgba(210, 153, 34, 0.15);
  color: var(--yellow);
}

.status-zombie {
  background: rgba(248, 81, 73, 0.15);
  color: var(--red);
}

.proc-stat {
  min-width: 72px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.proc-stat.cpu {
  color: var(--purple);
}

.proc-stat.ram {
  color: var(--blue);
}

.tree-hint,
.tree-empty {
  color: var(--muted);
  font-size: 0.8rem;
  margin: 12px 0 0;
}

.tree-empty {
  color: var(--green);
}

.proc-info {
  flex: 1;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  align-self: flex-start;
}

.proc-info h3 {
  margin: 0 0 16px;
  color: var(--purple);
  font-family: var(--font-code);
}

.proc-info dl {
  margin: 0;
}

.proc-info dt {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 12px;
}

.proc-info dd {
  margin: 4px 0 0;
}

.proc-info .mono {
  font-family: var(--font-code);
  color: var(--purple);
}

.kill-btn {
  margin-top: 20px;
  width: 100%;
  background: transparent;
  border: 2px solid var(--red);
  color: var(--red);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--font-code);
  font-size: 0.95rem;
  font-weight: bold;
  transition: all 0.2s ease;
}

.kill-btn:hover:not(:disabled) {
  background: rgba(248, 81, 73, 0.12);
}

.kill-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.kill-note {
  color: var(--muted);
  font-size: 0.8rem;
  margin: 8px 0 0;
}

.proc-enter-active,
.proc-leave-active {
  transition: all 0.35s ease;
}

.proc-enter-from,
.proc-leave-to,
.proc-row.exiting {
  opacity: 0;
  transform: scale(0.85);
}

.proc-leave-active {
  position: absolute;
  width: 100%;
}

@media (max-width: 768px) {
  .process-tree-view {
    flex-direction: column;
  }

  .proc-stat {
    display: none;
  }
}
</style>
