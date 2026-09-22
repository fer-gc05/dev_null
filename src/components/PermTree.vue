<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PermissionItem } from '../data/types'

interface Props {
  items: PermissionItem[]
  accent: string
  title: string
}

const props = defineProps<Props>()

const selectedIndex = ref(0)
const mode = ref<'symbols' | 'octal'>('symbols')

const selected = computed(() => props.items[selectedIndex.value])

const onSelect = (index: number) => {
  selectedIndex.value = index
}
</script>

<template>
  <div class="perm-tree-view">
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
        <div class="perm-list" role="listbox" aria-label="Elementos">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="perm-node"
            :class="{ active: selectedIndex === index }"
            role="option"
            :aria-selected="selectedIndex === index"
            tabindex="0"
            @click="onSelect(index)"
            @keydown.enter="onSelect(index)"
            @keydown.space.prevent="onSelect(index)"
          >
            <span class="perm-icon" :class="`icon-${accent}`">
              <svg v-if="accent === 'blue'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="22" y1="11" x2="22" y2="11" />
                <path d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.5L14.5 0H5a2 2 0 0 0-2 2v2" />
                <path d="M14 2v6h6" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span class="perm-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="tree-info">
      <h3>{{ selected.title }}</h3>
      <dl>
        <dt v-if="accent === 'blue'">Directorio</dt>
        <dt v-else>Concepto</dt>
        <dd class="mono">{{ selected.title }}</dd>
      </dl>

      <div class="info-label">Explicación:</div>
      <div class="info-content">{{ selected.desc }}</div>

      <div class="info-label" v-if="accent === 'blue'">Relevancia para un Dev:</div>
      <div class="info-label" v-else>Ejemplo en Terminal:</div>
      <div class="info-content">{{ selected.dev || selected.code }}</div>

      <div v-if="selected.code" class="info-label">Comando chmod:</div>
      <div v-if="selected.code" class="code-block">{{ selected.code }}</div>
    </div>
  </div>
</template>

<style scoped>
.perm-tree-view {
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
  border: 2px solid var(--border-color);
  color: var(--muted);
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--font-code);
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.2s ease;
}

.toggle-btn:hover {
  border-color: var(--green);
  color: var(--green);
}

.toggle-btn.active {
  background: var(--green);
  border-color: var(--green);
  color: var(--bg-color);
}

.tree-panel {
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 12px 8px;
  overflow-x: auto;
  flex: 1;
}

.perm-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.perm-node {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--muted);
  transition: all 0.15s ease;
  white-space: nowrap;
  border-left: 3px solid transparent;
}

.perm-node:hover {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-main);
}

.perm-node.active {
  background: rgba(46, 160, 67, 0.1);
  border-left-color: var(--green);
  color: var(--green);
}

.perm-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.perm-icon svg {
  width: 18px;
  height: 18px;
}

.icon-blue { color: var(--blue); }
.icon-purple-light { color: var(--purple-light); }

.tree-info {
  flex: 1;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  align-self: flex-start;
  min-width: 280px;
}

.tree-info h3 {
  margin: 0 0 16px;
  color: var(--text-main);
  font-family: var(--font-code);
  font-size: 1rem;
}

.tree-info dl {
  margin: 0 0 20px;
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

.info-content {
  margin-top: 10px;
  line-height: 1.6;
  white-space: pre-line;
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
  .perm-tree-view {
    flex-direction: column;
  }
  
  .tree-info {
    min-width: 0;
  }
}
</style>