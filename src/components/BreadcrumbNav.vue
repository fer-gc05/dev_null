<script setup lang="ts">
import type { BreadcrumbItem } from '../data/types'

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <router-link v-if="item.path" :to="item.path" class="crumb-link">
        {{ item.label }}
      </router-link>
      <span v-else class="current">{{ item.label }}</span>
      <span v-if="index < items.length - 1" class="separator" aria-hidden="true">/</span>
    </template>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  margin-bottom: 24px;
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap;
}

.crumb-link {
  color: var(--muted);
  transition: color 0.15s ease;
}

.crumb-link:hover {
  color: var(--green);
}

.separator {
  color: var(--border-color);
}

.current {
  color: var(--text-main);
  font-weight: 600;
}
</style>
