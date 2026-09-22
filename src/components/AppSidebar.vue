<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { navigationSections } from '../config/sections'
import { useProgress } from '../composables/useProgress'
import SectionProgress from './SectionProgress.vue'
import LocaleToggle from './LocaleToggle.vue'
import { initI18n } from '../i18n'

defineProps<{ searchOpen: boolean }>()
const emit = defineEmits<{ search: [] }>()

const route = useRoute()
const isCollapsed = ref(false)
const { markVisited, isVisited } = useProgress()

onMounted(() => {
  initI18n()
})

watch(
  () => route.name,
  (name) => {
    if (typeof name === 'string') markVisited(name)
  },
  { immediate: true }
)
</script>

<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="sidebar-header">
      <router-link to="/" class="sidebar-logo">
        <span class="logo-prompt">>_</span>
        <span v-if="!isCollapsed" class="logo-name">dev_null</span>
      </router-link>
      <button
        class="collapse-btn"
        :aria-label="isCollapsed ? 'Expandir menú' : 'Colapsar menú'"
        @click="isCollapsed = !isCollapsed"
      >
        {{ isCollapsed ? '»' : '«' }}
      </button>
    </div>

    <button class="sidebar-search" :aria-expanded="searchOpen" @click="emit('search')">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <span v-if="!isCollapsed" class="search-label">Buscar...</span>
      <kbd v-if="!isCollapsed" class="search-kbd">⌘K</kbd>
    </button>

    <nav class="sidebar-nav" aria-label="Navegación lateral">
      <router-link
        v-for="section in navigationSections"
        :key="section.id"
        :to="section.path"
        class="nav-item"
        :class="[`nav-${section.id}`, { active: route.name === section.id }]"
        :title="isCollapsed ? section.name : undefined"
      >
        <span class="nav-icon" :class="`icon-${section.color}`" aria-hidden="true">
          <svg v-if="section.icon === 'layers'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <svg v-else-if="section.icon === 'git-branch'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="6" y1="3" x2="6" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
          </svg>
          <svg v-else-if="section.icon === 'lock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <svg v-else-if="section.icon === 'cpu'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
          <svg v-else-if="section.icon === 'terminal'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        </span>
        <span v-if="!isCollapsed" class="nav-label">{{ section.name }}</span>
        <SectionProgress
          v-if="!isCollapsed"
          :section-id="section.id"
          :visited="isVisited(section.id)"
        />
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <LocaleToggle />
      <a
        v-if="!isCollapsed"
        href="https://youtube.com/@dev_null-b7h"
        target="_blank"
        rel="noopener noreferrer"
        class="footer-link"
      >
        Canal
      </a>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky;
  top: 0;
  height: 100dvh;
  width: 260px;
  background: var(--panel-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  overflow-y: auto;
  flex-shrink: 0;
  transition: width 0.2s ease, padding 0.2s ease;
}

.sidebar.collapsed {
  width: 64px;
  padding: 20px 8px;
}

/* Hide sidebar completely on mobile - mobile nav handles navigation */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 20px;
  padding: 0 4px;
}

.sidebar-logo {
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
}

.logo-prompt {
  font-family: var(--font-code);
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--green);
  flex-shrink: 0;
}

.logo-name {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-main);
  white-space: nowrap;
}

.collapse-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--muted);
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.collapse-btn:hover {
  border-color: var(--green);
  color: var(--green);
}

.sidebar-search {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--muted);
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
  margin-bottom: 20px;
  transition: border-color 0.2s ease;
}

.sidebar-search:hover {
  border-color: var(--green);
}

.search-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.search-label {
  flex: 1;
  text-align: left;
  white-space: nowrap;
}

.search-kbd {
  font-family: var(--font-code);
  font-size: 0.7rem;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 2px 5px;
  color: var(--muted);
}

.sidebar.collapsed .sidebar-search {
  justify-content: center;
  padding: 8px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  border-left: 3px solid transparent;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-main);
}

.nav-item.active {
  background: rgba(46, 160, 67, 0.1);
  border-left-color: var(--green);
  color: var(--green);
}

.nav-item.active.nav-flow {
  background: rgba(210, 153, 34, 0.1);
  border-left-color: var(--yellow);
  color: var(--yellow);
}

.nav-item.active.nav-permissions {
  background: rgba(88, 166, 255, 0.1);
  border-left-color: var(--blue);
  color: var(--blue);
}

.nav-item.active.nav-processes {
  background: rgba(188, 140, 255, 0.1);
  border-left-color: var(--purple);
  color: var(--purple);
}

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon svg {
  width: 18px;
  height: 18px;
}

.icon-green { color: var(--green); }
.icon-blue { color: var(--blue); }
.icon-yellow { color: var(--yellow); }
.icon-purple { color: var(--purple); }

.nav-label {
  flex: 1;
}

.nav-check {
  color: var(--green);
  font-size: 0.85rem;
  font-weight: bold;
}

.sidebar.collapsed .nav-item {
  justify-content: center;
  padding: 10px;
  border-left-width: 0;
}

.sidebar.collapsed .nav-item.active {
  border-left-width: 3px;
}

.sidebar-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.footer-link {
  display: block;
  padding: 8px 12px;
  color: var(--muted);
  font-size: 0.85rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.footer-link:hover {
  color: var(--red);
  background: rgba(248, 81, 73, 0.08);
}
</style>
