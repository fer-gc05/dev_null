<script setup lang="ts">
import type { Command } from '../data/types'
import { t, L } from '../i18n'

defineProps<{
  command: Command
  accent?: string
}>()

const emit = defineEmits<{ copy: [cmd: string]; try: [cmd: Command] }>()
</script>

<template>
  <article class="command-card" :class="`accent-${accent || 'green'}`">
    <div class="card-header">
      <span class="command-number">{{ command.numero }}</span>
      <button
        class="copy-btn"
        type="button"
        :aria-label="t('footer.copy')"
        @click="emit('copy', command.comando)"
      >
        {{ t('footer.copy') }}
      </button>
    </div>
    <div class="command-name">{{ command.comando }}</div>
    <div class="command-desc">
      <span class="label">{{ t('cmd.label.what') }}</span> {{ L(command.queHace) }}
    </div>
    <div class="command-use">
      <span class="label">{{ t('cmd.label.when') }}</span> {{ L(command.cuandoUsarlo) }}
    </div>
    <button class="try-btn" type="button" @click="emit('try', command)">
      {{ t('footer.try') }} <span class="arrow">→</span>
    </button>
    <slot name="actions" />
  </article>
</template>

<style scoped>
.command-card {
  background-color: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all var(--transition);
  border-left: 4px solid transparent;
}

.command-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.accent-green {
  border-left-color: var(--green);
}

.accent-blue {
  border-left-color: var(--blue);
}

.accent-yellow {
  border-left-color: var(--yellow);
}

.accent-purple {
  border-left-color: var(--purple);
}

.accent-red {
  border-left-color: var(--red);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.command-number {
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: bold;
}

.copy-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--muted);
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  font-family: inherit;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  border-color: var(--green);
  color: var(--green);
}

.command-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--green);
  font-family: var(--font-code, 'Courier New', Courier, monospace);
  word-break: break-word;
}

.command-desc,
.command-use {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-main);
}

.label {
  color: var(--muted);
  font-weight: bold;
  font-size: 0.85rem;
}

.try-btn {
  background: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: inherit;
  font-weight: bold;
  transition: all 0.2s ease;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.try-btn:hover {
  background: rgba(46, 160, 67, 0.12);
}

.arrow {
  font-size: 0.9em;
}
</style>