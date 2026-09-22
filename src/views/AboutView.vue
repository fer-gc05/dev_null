<template>
  <section class="about">
    <div class="about-hero">
      <div class="hero-prompt">
        <span class="prompt">~/dev_null$</span> cat ./sobre.md
      </div>
    </div>

    <article class="about-content">
      <h1>¿Qué es dev_null?</h1>
      <p>
        dev_null es un sitio interactivo para aprender Linux como un backend
        developer: arquitectura del sistema, flujo de datos, permisos y
        procesos, explicados capa por capa con analogías y ejemplos reales.
      </p>

      <h2>Canal de YouTube</h2>
      <p>
        Todo el contenido nace en el canal.
        <a
          href="https://youtube.com/@dev_null"
          target="_blank"
          rel="noopener noreferrer"
          >Suscríbete a dev_null en YouTube →</a
        >
      </p>

      <h2>Stack del sitio</h2>
      <ul>
        <li>Vue 3 + Vite + TypeScript</li>
        <li>Vue Router (SPA con history mode)</li>
        <li>CSS puro con variables (tema terminal)</li>
        <li>Google Fonts: Inter + JetBrains Mono</li>
        <li>Deploy en Netlify</li>
      </ul>

      <h2>Contribuir / reportar bugs</h2>
      <p>
        ¿Encontraste un error o tienes una idea?
        <a
          href="https://github.com/fer-gc05/dev_null/issues"
          target="_blank"
          rel="noopener noreferrer"
          >Abre un issue en GitHub →</a
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
