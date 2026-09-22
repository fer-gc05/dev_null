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
    <span class="label">{{ current === 'es' ? 'EN' : 'ES' }}</span>
  </button>
</template>

<style scoped>
.locale-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 6px 12px;
  border-radius: 6px;
  font-family: var(--font-ui);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.locale-toggle:hover {
  border-color: var(--green);
  color: var(--green);
  background: rgba(46, 160, 67, 0.1);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(46, 160, 67, 0.15);
}

.locale-toggle:active {
  transform: translateY(0);
}

.label {
  font-family: var(--font-code);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  min-width: 28px;
  text-align: center;
}

@media (max-width: 768px) {
  .locale-toggle {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
}
</style>