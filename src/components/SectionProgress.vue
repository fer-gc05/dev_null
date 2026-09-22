<script setup lang="ts">
import { t } from '../i18n'

defineProps<{
  sectionId: string
  visited: boolean
}>()
</script>

<template>
  <span
    class="section-progress"
    :class="{ visited }"
    :aria-label="visited ? t('progress.visited') : t('progress.pending')"
  >
    {{ visited ? '✓' : '○' }}
  </span>
</template>

<style scoped>
.section-progress {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  color: var(--muted);
  font-size: 0.75rem;
  flex-shrink: 0;
}

.section-progress.visited {
  border-color: var(--green);
  color: var(--green);
  background: rgba(46, 160, 67, 0.12);
}
</style>
