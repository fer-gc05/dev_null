<script setup lang="ts">
import TabNav from './components/TabNav.vue'
</script>

<template>
  <header class="app-header">
    <h1><span class="prompt">~/dev_null$</span> ./linux_interactivo.sh</h1>
    <div class="subtitle">Aprende Linux capa por capa, flujo por flujo.</div>
  </header>

  <TabNav />

  <main class="main-content">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.main-content {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
