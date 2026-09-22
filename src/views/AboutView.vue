<script setup lang="ts">
import { t } from '../i18n'
</script>

<template>
  <section class="about">
    <div class="about-hero">
      <div class="hero-prompt">
        <span class="prompt">~/dev_null$</span> cat ./sobre.md
      </div>
    </div>

    <article class="about-content">
      <h1>{{ t('about.title') }}</h1>
      <p>{{ t('about.intro') }}</p>

      <h2>{{ t('about.youtube') }}</h2>
      <p>
        {{ t('about.youtube.body') }}
        <a
          href="https://youtube.com/@dev_null-b7h"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t('about.subscribe') }}</a
        >
      </p>

      <h2>{{ t('about.stack') }}</h2>
      <ul>
        <li>Vue 3 + Vite + TypeScript</li>
        <li>Vue Router (SPA with history mode)</li>
        <li>{{ t('about.stack.css') }}</li>
        <li>Google Fonts: Inter + JetBrains Mono</li>
        <li>{{ t('about.stack.deploy') }}</li>
      </ul>

      <h2>{{ t('about.contribute') }}</h2>
      <p>
        {{ t('about.bugs') }}
        <a
          href="https://github.com/fer-gc05/dev_null/issues"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t('about.issue') }}</a
        >
      </p>
    </article>
  </section>
</template>

<style scoped>
.about {
  max-width: 760px;
}

.about-hero {
  margin-bottom: 32px;
}

.hero-prompt {
  font-family: var(--font-code, monospace);
  font-size: 1.1rem;
  color: var(--green);
}

.about-content h1 {
  font-size: 1.8rem;
  margin: 0 0 16px;
  color: var(--text, #e6edf3);
}

.about-content h2 {
  font-size: 1.2rem;
  margin: 32px 0 12px;
  color: var(--green);
}

.about-content p {
  color: var(--muted, #8b949e);
  line-height: 1.7;
  margin: 0 0 12px;
}

.about-content ul {
  color: var(--muted, #8b949e);
  line-height: 1.9;
  padding-left: 24px;
}

.about-content a {
  color: var(--green);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.about-content a:hover {
  border-bottom-color: var(--green);
}
</style>
