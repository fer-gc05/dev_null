<script setup lang="ts">
import { ref, computed } from 'vue'
import { commandsData } from '../data/commands'
import { getColor } from '../utils/colors'

const activeBlock = ref(0)

const currentBlock = computed(() => commandsData[activeBlock.value])

const copyCommand = async (cmd: string) => {
  try {
    await navigator.clipboard.writeText(cmd)
  } catch {
    console.warn('Clipboard not available')
  }
}
</script>

<template>
  <section class="commands-view">
    <div class="tabs">
      <button
        v-for="(block, index) in commandsData"
        :key="block.bloque"
        class="tab"
        :class="{ active: activeBlock === index }"
        :style="
          activeBlock === index
            ? { background: getColor(block.color), borderColor: getColor(block.color), color: 'var(--bg-color)' }
            : { color: getColor(block.color), borderColor: getColor(block.color) }
        "
        @click="activeBlock = index"
      >
        {{ block.bloque }}
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <div :key="activeBlock" class="commands-grid">
        <article
          v-for="cmd in currentBlock.comandos"
          :key="cmd.numero"
          class="command-card"
          :class="`accent-${currentBlock.color}`"
        >
          <div class="card-header">
            <span class="command-number">{{ cmd.numero }}</span>
            <button class="copy-btn" @click="copyCommand(cmd.comando)">Copiar</button>
          </div>
          <div class="command-name">{{ cmd.comando }}</div>
          <div class="command-desc">
            <span class="label">Qué hace:</span> {{ cmd.queHace }}
          </div>
          <div class="command-use">
            <span class="label">Cuándo usarlo:</span> {{ cmd.cuandoUsarlo }}
          </div>
        </article>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.commands-view {
  width: 100%;
  max-width: 1000px;
}

.commands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
}

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

.command-card.accent-green {
  border-left-color: var(--green);
}

.command-card.accent-blue {
  border-left-color: var(--blue);
}

.command-card.accent-yellow {
  border-left-color: var(--yellow);
}

.command-card.accent-purple {
  border-left-color: var(--purple);
}

.command-card.accent-red {
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
</style>
