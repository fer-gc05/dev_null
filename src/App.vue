<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'
import AppHeader from './components/AppHeader.vue'
import MobileNav from './components/MobileNav.vue'
import SearchModal from './components/SearchModal.vue'
import BreadcrumbNav from './components/BreadcrumbNav.vue'
import { sections } from './config/sections'
import type { BreadcrumbItem } from './data/types'

const route = useRoute()
const searchOpen = ref(false)

const breadcrumbItems = computed<BreadcrumbItem[]>(() => {
  const current = sections.find((s) => s.id === route.name)
  if (!current || current.id === 'home') return []
  const items: BreadcrumbItem[] = [{ label: 'Inicio', path: '/' }]
  if (route.name === 'about') {
    items.push({ label: 'Sobre dev_null' })
  } else if (current) {
    items.push({ label: current.name })
  }
  return items
})

const openSearch = () => {
  searchOpen.value = true
}

const closeSearch = () => {
  searchOpen.value = false
}

const onGlobalKey = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    searchOpen.value = !searchOpen.value
  }
}

onMounted(() => {
  document.addEventListener('keydown', onGlobalKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onGlobalKey)
})
</script>

<template>
  <div class="app-shell">
    <AppSidebar :search-open="searchOpen" @search="openSearch" />

    <div class="app-main">
      <AppHeader />

      <main class="main-content">
        <BreadcrumbNav v-if="breadcrumbItems.length > 0" :items="breadcrumbItems" />
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>

    <MobileNav />
    <SearchModal :is-open="searchOpen" @close="closeSearch" />
  </div>
</template>

<style scoped>
.app-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  height: 100dvh;
  width: 100%;
  overflow: hidden;
}

.app-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow-y: auto;
  padding: 40px 24px;
}

.main-content {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .app-main {
    padding: 20px 16px calc(88px + env(safe-area-inset-bottom));
  }
}
</style>
