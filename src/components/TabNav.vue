<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { navigationSections } from '../config/sections'

const route = useRoute()
const activeTab = computed(() => route.name)
</script>

<template>
  <nav class="tabs" aria-label="Navegación principal">
    <router-link
      v-for="tab in navigationSections"
      :key="tab.id"
      :to="tab.path"
      class="tab"
      :class="{ active: activeTab === tab.id }"
    >
      {{ tab.name }}
    </router-link>
  </nav>
</template>
