<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { id: 'home', name: 'Inicio', path: '/' },
  { id: 'architecture', name: 'Arquitectura', path: '/arquitectura' },
  { id: 'flow', name: 'Flujo de Datos', path: '/flujo' },
  { id: 'permissions', name: 'Permisos', path: '/permisos' },
  { id: 'processes', name: 'Procesos', path: '/procesos' }
]

const activeTab = computed(() => route.name)
</script>

<template>
  <nav class="tabs" aria-label="Navegación principal">
    <router-link
      v-for="tab in tabs"
      :key="tab.id"
      :to="tab.path"
      class="tab"
      :class="{ active: activeTab === tab.id }"
    >
      {{ tab.name }}
    </router-link>
  </nav>
</template>
