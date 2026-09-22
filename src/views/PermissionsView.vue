<script setup lang="ts">
import { ref, computed } from 'vue'
import { fsData, pmData } from '../data/permissions'
import InfoPanel from '../components/InfoPanel.vue'
import InteractiveItem from '../components/InteractiveItem.vue'
import FileTree from '../components/FileTree.vue'
import TerminalBlock from '../components/TerminalBlock.vue'

const activeTab = ref('archivos')
const selectedFs = ref(0)
const selectedPm = ref(0)

const tabs = [
  { id: 'archivos', label: '📂 Sistema de Archivos' },
  { id: 'permisos', label: '🔐 Usuarios y Permisos' },
  { id: 'arbol', label: '🌳 File Tree' }
]

const currentFs = computed(() => fsData[selectedFs.value])
const currentPm = computed(() => pmData[selectedPm.value])
</script>

<template>
  <section class="permissions-view">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="activeTab === 'archivos'" key="archivos" class="container">
        <div class="interactive-list">
          <InteractiveItem
            v-for="(item, index) in fsData"
            :key="index"
            :title="item.title"
            :is-active="selectedFs === index"
            accent="blue"
            @select="selectedFs = index"
          />
        </div>

        <InfoPanel :title="currentFs.title" accent-color="var(--blue)">
          <div class="info-label">¿Qué contiene?</div>
          <div class="info-content">{{ currentFs.desc }}</div>

          <div class="info-label">Relevancia para un Dev:</div>
          <div class="info-content">{{ currentFs.dev }}</div>
        </InfoPanel>
      </div>

      <div v-else-if="activeTab === 'arbol'" key="arbol" class="tree-tab">
        <FileTree />
      </div>

      <div v-else key="permisos" class="container">
        <div class="interactive-list">
          <InteractiveItem
            v-for="(item, index) in pmData"
            :key="index"
            :title="item.title"
            :is-active="selectedPm === index"
            accent="purple-light"
            @select="selectedPm = index"
          />
        </div>

        <InfoPanel :title="currentPm.title" accent-color="var(--purple-light)">
          <div class="info-label">Explicación:</div>
          <div class="info-content">{{ currentPm.desc }}</div>

          <div class="info-label">Ejemplo en Terminal:</div>
          <TerminalBlock :lines="String(currentPm.code || '').split('\n')" />
        </InfoPanel>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.permissions-view {
  width: 100%;
  max-width: 1000px;
}

.tree-tab {
  width: 100%;
}
</style>
