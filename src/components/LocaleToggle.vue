<script setup lang="ts">
import { useLocale } from '../i18n'

const { current, toggleLocale } = useLocale()
</script>

<template>
  <button
    class="locale-toggle"
    @click="toggleLocale"
    :aria-label="current === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'"
    :title="current === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'"
  >
    {{ current === 'es' ? 'EN' : 'ES' }}
  </button>
</template>

<style scoped>
.locale-toggle {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--muted);
  padding: 4px 10px;
  border-radius: 4px;
  font-family: var(--font-code);
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.locale-toggle:hover {
  border-color: var(--green);
  color: var(--green);
  background: rgba(46, 160, 67, 0.08);
}
</style>