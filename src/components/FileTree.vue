<script setup lang="ts">
import { ref, computed } from 'vue'
import { fileTree } from '../data/filesystem'
import type { FileNode } from '../data/types'
import FileTreeNode from './FileTreeNode.vue'

const mode = ref<'symbols' | 'octal'>('symbols')
const selectedNode = ref<FileNode | null>(fileTree[0])
const selectedKey = ref('/')

const onSelect = (node: FileNode, key: string) => {
  selectedNode.value = node
  selectedKey.value = key
}

const octalOf = (p: string | undefined) => {
  if (!p) return ''
  const s = p.length === 10 ? p.slice(1) : p.padStart(9, '-')
  const g = (c: string) =>
    (c[0] === 'r' ? 4 : 0) + (c[1] === 'w' ? 2 : 0) + (c[2] === 'x' || c[2] === 's' || c[2] === 't' ? 1 : 0)
  return `${g(s.slice(0, 3))}${g(s.slice(3, 6))}${g(s.slice(6, 9))}`
}

const detail = computed(() => {
  const n = selectedNode.value
  if (!n) return null
  return {
    name: n.name,
    path: selectedKey.value,
    type: n.type === 'directory' ? 'directorio' : 'archivo',
    symbols: n.permissions ?? '—',
    octal: octalOf(n.permissions)
  }
})
</script>

<template>
  <div class="file-tree-view">
    <div class="tree-main">
      <div class="permission-toggle">
        <button
          class="toggle-btn"
          :class="{ active: mode === 'symbols' }"
          @click="mode = 'symbols'"
        >
          rwxr-xr-x
        </button>
        <button
          class="toggle-btn"
          :class="{ active: mode === 'octal' }"
          @click="mode = 'octal'"
        >
          755
        </button>
      </div>

      <div class="tree-panel">
        <FileTreeNode
          v-for="root in fileTree"
          :key="root.name"
          :node="root"
          :depth="0"
          path-key="/"
          :mode="mode"
          :selected-key="selectedKey"
          @select="onSelect"
        />
      </div>
    </div>

    <div v-if="detail" class="tree-info">
      <h3>{{ detail.name }}</h3>
      <dl>
        <dt>Ruta</dt>
        <dd>{{ detail.path }}</dd>
        <dt>Tipo</dt>
        <dd>{{ detail.type }}</dd>
        <dt>Permisos (símbolos)</dt>
        <dd class="mono">{{ detail.symbols }}</dd>
        <dt>Permisos (octal)</dt>
        <dd class="mono">{{ detail.octal }}</dd>
      </dl>
      <div class="info-label">Equivalencia chmod:</div>
      <div class="code-block">chmod {{ detail.octal }} {{ detail.path }}</div>
    </div>
  </div>
</template>

<style scoped>
.file-tree-view {
  display: flex;
  gap: 24px;
  width: 100%;
}

.tree-main {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.permission-toggle {
  display: flex;
  gap: 8px;
}

.toggle-btn {
  background: transparent;
  border: 2px solid var(--blue);
  color: var(--blue);
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--font-code);
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.2s ease;
}

.toggle-btn.active {
  background: var(--blue);
  color: var(--bg-color);
}

.tree-panel {
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 12px 8px;
  overflow-x: auto;
}

.tree-info {
  flex: 1;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  align-self: flex-start;
}

.tree-info h3 {
  margin: 0 0 16px;
  color: var(--blue);
  font-family: var(--font-code);
}

.tree-info dl {
  margin: 0;
}

.tree-info dt {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 12px;
}

.tree-info dd {
  margin: 4px 0 0;
}

.tree-info .mono {
  font-family: var(--font-code);
  color: var(--green);
}

.info-label {
  color: var(--muted);
  font-weight: bold;
  margin-top: 20px;
  font-size: 0.9rem;
}

.code-block {
  background: #000;
  padding: 12px;
  border-radius: 5px;
  font-family: var(--font-code);
  margin-top: 8px;
  border: 1px solid #222;
  color: var(--text-main);
  word-break: break-all;
}

@media (max-width: 768px) {
  .file-tree-view {
    flex-direction: column;
  }
}
</style>
