<script setup lang="ts">
import { ref, computed } from 'vue'
import type { FileNode } from '../data/types'

const props = defineProps<{
  node: FileNode
  depth: number
  pathKey: string
  mode: 'symbols' | 'octal'
  selectedKey: string
}>()

const emit = defineEmits<{
  select: [node: FileNode, pathKey: string]
}>()

const isExpanded = ref(props.depth < 2)

const toggle = () => {
  if (props.node.type === 'directory') {
    isExpanded.value = !isExpanded.value
  }
}

const select = () => {
  emit('select', props.node, props.pathKey)
}

const octal = computed(() => {
  const p = props.node.permissions
  if (!p) return ''
  const s = p.length === 10 ? p.slice(1) : p.padStart(9, '-')
  const group = (chunk: string) =>
    (chunk[0] === 'r' ? 4 : 0) + (chunk[1] === 'w' ? 2 : 0) + (chunk[2] === 'x' || chunk[2] === 's' || chunk[2] === 't' ? 1 : 0)
  return group(s.slice(0, 3)) + '' + group(s.slice(3, 6)) + '' + group(s.slice(6, 9))
})

const displayPerm = computed(() =>
  props.mode === 'octal' ? octal.value : props.node.permissions ?? ''
)

const permissionClass = computed(() => {
  const p = props.node.permissions
  if (!p) return 'perm-none'
  const others = p.slice(-3)
  if (others.includes('w')) return 'perm-danger'
  if (others.includes('x')) return 'perm-warn'
  return 'perm-safe'
})
</script>

<template>
  <div class="file-node">
    <div
      class="node-row"
      :class="{ active: selectedKey === pathKey }"
      :style="{ paddingLeft: depth * 16 + 8 + 'px' }"
      role="button"
      tabindex="0"
      @click="select"
      @keydown.enter="select"
    >
      <span
        v-if="node.type === 'directory'"
        class="chevron"
        @click.stop="toggle"
      >
        {{ isExpanded ? '▼' : '▶' }}
      </span>
      <span v-else class="chevron"></span>
      <span class="node-icon">{{ node.type === 'directory' ? '📁' : '📄' }}</span>
      <span class="node-name">{{ node.name }}</span>
      <span class="permission-badge" :class="permissionClass">
        {{ displayPerm }}
      </span>
    </div>
    <div v-if="isExpanded && node.children && node.children.length" class="node-children">
      <FileTreeNode
        v-for="child in node.children"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
        :path-key="`${pathKey === '/' ? '' : pathKey}/${child.name}`"
        :mode="mode"
        :selected-key="selectedKey"
        @select="(n, k) => emit('select', n, k)"
      />
    </div>
  </div>
</template>

<style scoped>
.node-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-code);
  font-size: 0.9rem;
  transition: background 0.15s ease;
}

.node-row:hover {
  background: rgba(88, 166, 255, 0.08);
}

.node-row.active {
  background: rgba(88, 166, 255, 0.15);
  color: var(--blue);
}

.chevron {
  width: 14px;
  color: var(--muted);
  font-size: 0.7rem;
  flex-shrink: 0;
}

.node-icon {
  flex-shrink: 0;
}

.node-name {
  flex: 1;
}

.permission-badge {
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.perm-safe {
  color: var(--green);
  border-color: rgba(46, 160, 67, 0.4);
}

.perm-warn {
  color: var(--yellow);
  border-color: rgba(210, 153, 34, 0.4);
}

.perm-danger {
  color: var(--red);
  border-color: rgba(248, 81, 73, 0.4);
}

.perm-none {
  color: var(--muted);
}
</style>
