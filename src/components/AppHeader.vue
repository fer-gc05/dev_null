<script setup lang="ts">
import LocaleToggle from './LocaleToggle.vue'
</script>

<template>
  <header class="app-header">
    <div class="header-row">
      <div class="logo">
        <span class="logo-icon">>_<span class="cursor"></span></span>
        <span class="logo-text">dev_null</span>
      </div>
      <LocaleToggle />
    </div>
    <div class="tagline">Aprende Linux capa por capa, flujo por flujo.</div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.logo-icon {
  font-family: var(--font-code);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--green);
}

.cursor {
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  background: var(--green);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.logo-text {
  font-family: var(--font-ui);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.tagline {
  color: var(--muted);
  font-size: 0.95rem;
  text-align: center;
}

@media (max-width: 768px) {
  .logo-icon {
    font-size: 1.3rem;
  }

  .logo-text {
    font-size: 1.4rem;
  }

  .tagline {
    font-size: 0.85rem;
  }
}
</style>
