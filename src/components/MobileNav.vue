<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { sections } from '../config/sections'

const route = useRoute()

const mobileItems = computed(() => sections)
</script>

<template>
  <nav class="mobile-nav" aria-label="Navegación móvil">
    <router-link
      v-for="item in mobileItems"
      :key="item.id"
      :to="item.path"
      class="mobile-nav-item"
      :class="{ active: route.name === item.id }"
    >
      <span class="mobile-icon" :class="`icon-${item.color}`" aria-hidden="true">
        <svg v-if="item.icon === 'home'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <svg v-else-if="item.icon === 'layers'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <svg v-else-if="item.icon === 'git-branch'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
        <svg v-else-if="item.icon === 'lock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <svg v-else-if="item.icon === 'cpu'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
      </span>
      <span class="mobile-label">{{ item.name }}</span>
    </router-link>
  </nav>
</template>

<style scoped>
.mobile-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--panel-bg);
  border-top: 1px solid var(--border-color);
  z-index: 100;
  padding: 6px 4px calc(6px + env(safe-area-inset-bottom));
}

.mobile-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 6px 2px;
  color: var(--muted);
  font-size: 0.65rem;
  transition: color 0.2s ease;
}

.mobile-nav-item.active {
  color: var(--green);
}

.mobile-nav-item.active .mobile-label {
  font-weight: 700;
}

.mobile-icon {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-icon svg {
  width: 20px;
  height: 20px;
}

.icon-green { color: inherit; }
.icon-blue { color: inherit; }
.icon-yellow { color: inherit; }
.icon-purple { color: inherit; }

.mobile-nav-item.active .icon-green { color: var(--green); }
.mobile-nav-item.active .icon-blue { color: var(--blue); }
.mobile-nav-item.active .icon-yellow { color: var(--yellow); }
.mobile-nav-item.active .icon-purple { color: var(--purple); }

@media (max-width: 768px) {
  .mobile-nav {
    display: flex;
  }
}
</style>
