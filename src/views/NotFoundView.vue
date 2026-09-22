<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="not-found">
    <div class="terminal-error">
      <span class="prompt">$</span> ls {{ route.path }}<span class="cursor">▋</span>
    </div>
    <p class="error-code">
      bash: ls {{ route.path }}: No such file or directory
    </p>
    <p class="error-hint">La ruta que buscas no existe en este servidor.</p>
    <router-link to="/" class="home-link">← Volver al inicio</router-link>
  </section>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 20px;
  text-align: center;
}

.terminal-error {
  background: #000;
  padding: 20px;
  border-radius: 8px;
  font-family: var(--font-code, monospace);
  font-size: 1.2rem;
  border: 1px solid var(--border-color);
}

.cursor {
  animation: blink 1s step-end infinite;
  color: var(--green);
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}

.error-code {
  color: var(--red);
  font-family: var(--font-code, monospace);
  font-size: 1rem;
  margin: 0;
}

.error-hint {
  color: var(--muted);
  margin: 0;
}

.home-link {
  color: var(--green);
  font-weight: bold;
  padding: 12px 24px;
  border: 2px solid var(--green);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.home-link:hover {
  background: rgba(46, 160, 67, 0.1);
}
</style>
