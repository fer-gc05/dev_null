<script setup lang="ts">
import { useRouter } from 'vue-router'
import { navigationSections } from '../config/sections'

const router = useRouter()

const navigate = (path: string) => {
  router.push(path)
}
</script>

<template>
  <section class="home">
    <div class="hero">
      <div class="hero-prompt">
        <span class="prompt">~/dev_null$</span> ./linux_interactivo.sh
      </div>
      <p class="hero-desc">Aprende Linux como un backend developer.</p>
    </div>
    <div class="section-grid">
      <article
        v-for="section in navigationSections"
        :key="section.id"
        class="section-card"
        :class="`section-${section.id}`"
        role="button"
        tabindex="0"
        @click="navigate(section.path)"
        @keydown.enter="navigate(section.path)"
      >
        <div class="card-icon" :class="`icon-${section.color}`">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <template v-if="section.icon === 'layers'">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </template>
            <template v-else-if="section.icon === 'git-branch'">
              <line x1="6" y1="3" x2="6" y2="15" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 9a9 9 0 0 1-9 9" />
            </template>
            <template v-else-if="section.icon === 'lock'">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </template>
            <template v-else-if="section.icon === 'cpu'">
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
            </template>
            <template v-else-if="section.icon === 'terminal'">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </template>
          </svg>
        </div>
        <h3>{{ section.name }}</h3>
        <p>{{ section.description }}</p>
        <span class="card-arrow">→</span>
      </article>
    </div>
  </section>
</template>
