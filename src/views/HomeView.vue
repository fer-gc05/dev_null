<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const cards = [
  {
    id: 'architecture',
    icon: '🏗️',
    title: 'Arquitectura Linux',
    desc: 'Desarma el sistema operativo capa por capa: Hardware, Kernel, Shell y Espacio de Usuario.',
    path: '/arquitectura'
  },
  {
    id: 'flow',
    icon: '🔀',
    title: 'Flujo de Datos',
    desc: 'Entiende stdout, stderr, pipes y el famoso agujero negro /dev/null.',
    path: '/flujo'
  },
  {
    id: 'permissions',
    icon: '🔐',
    title: 'Permisos y Archivos',
    desc: 'Sistema de archivos, usuarios, grupos y el control de acceso en Linux.',
    path: '/permisos'
  },
  {
    id: 'processes',
    icon: '⚙️',
    title: 'Procesos y Daemons',
    desc: 'PID, demonios, monitoreo con htop y cómo matar procesos rebeldes.',
    path: '/procesos'
  },
  {
    id: 'commands',
    icon: '⌨️',
    title: 'Comandos Backend',
    desc: 'Los 25 comandos de Linux más usados por un desarrollador backend, organizados por categoría.',
    path: '/comandos-backend'
  }
]

const navigate = (path) => {
  router.push(path)
}
</script>

<template>
  <section class="home">
    <div class="hero-cards">
      <article
        v-for="card in cards"
        :key="card.id"
        class="hero-card"
        role="button"
        tabindex="0"
        @click="navigate(card.path)"
        @keydown.enter="navigate(card.path)"
      >
        <span class="icon" aria-hidden="true">{{ card.icon }}</span>
        <h3>{{ card.title }}</h3>
        <p>{{ card.desc }}</p>
      </article>
    </div>
  </section>
</template>
