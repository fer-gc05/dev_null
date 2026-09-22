<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { commandsData } from '../data/commands'
import { getColor } from '../utils/colors'
import TerminalSimulator from '../components/TerminalSimulator.vue'
import CommandCard from '../components/CommandCard.vue'
import type { Command } from '../data/types'

const activeBlock = ref(0)
const termRef = ref<InstanceType<typeof TerminalSimulator> | null>(null)

const currentBlock = computed(() => commandsData[activeBlock.value])

const copyCommand = async (cmd: string) => {
  try {
    await navigator.clipboard.writeText(cmd)
  } catch {
    console.warn('Clipboard not available')
  }
}

const tryCommand = async (cmd: Command) => {
  await termRef.value?.typeCommand(cmd.comando, cmd.output)
  await nextTick()
  termRef.value?.$el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}
</script>

<template>
  <section class="commands-view">
    <TerminalSimulator ref="termRef" />

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
        <CommandCard
          v-for="cmd in currentBlock.comandos"
          :key="cmd.numero"
          :command="cmd"
          :accent="currentBlock.color"
          @copy="copyCommand"
          @try="tryCommand"
        />
      </div>
    </transition>
  </section>
</template>

<style scoped>
.commands-view {
  width: 100%;
  max-width: 1000px;
}

.tabs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-bottom: 4px;
  margin-bottom: 24px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}

.tabs::-webkit-scrollbar {
  height: 6px;
}

.tabs::-webkit-scrollbar-track {
  background: transparent;
}

.tabs::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.tab {
  flex-shrink: 0;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab:hover {
  border-color: var(--green);
  color: var(--green);
}

.tab.active {
  background: var(--green);
  border-color: var(--green);
  color: var(--bg-color);
}

.commands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 20px;
  width: 100%;
}
</style>
