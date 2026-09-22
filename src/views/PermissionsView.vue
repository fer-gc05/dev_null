<script setup lang="ts">
import { ref } from 'vue'
import { fsData, pmData } from '../data/permissions'
import PermTree from '../components/PermTree.vue'
import FileTree from '../components/FileTree.vue'
import { t } from '../i18n'

const activeTab = ref('archivos')

const tabs = [
  { id: 'archivos', label: 'perm.tab.files' },
  { id: 'permisos', label: 'perm.tab.perms' },
  { id: 'arbol', label: 'perm.tab.tree' }
]
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
        {{ t(tab.label) }}
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="activeTab === 'archivos'" key="archivos">
        <PermTree :items="fsData" accent="blue" title="Sistema de Archivos" />
      </div>

      <div v-else-if="activeTab === 'arbol'" key="arbol" class="tree-tab">
        <FileTree />
      </div>

      <div v-else key="permisos">
        <PermTree :items="pmData" accent="purple-light" title="Usuarios y Permisos" />
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