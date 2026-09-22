<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import TabNav from './components/TabNav.vue'
</script>

<template>
  <AppHeader />

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
.main-content {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
