import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { navigationSections } from '../config/sections'
import HomeView from '../views/HomeView.vue'
import ArchitectureView from '../views/ArchitectureView.vue'
import FlowView from '../views/FlowView.vue'
import PermissionsView from '../views/PermissionsView.vue'
import ProcessesView from '../views/ProcessesView.vue'
import CommandsView from '../views/CommandsView.vue'
import AboutView from '../views/AboutView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const componentMap: Record<string, typeof HomeView> = {
  home: HomeView,
  architecture: ArchitectureView,
  flow: FlowView,
  permissions: PermissionsView,
  processes: ProcessesView,
  commands: CommandsView,
  about: AboutView
}

const routes: RouteRecordRaw[] = navigationSections.map((section) => ({
  path: section.path,
  name: section.id,
  component: componentMap[section.id],
  meta: {
    title: `${section.name} | dev_null`,
    description: section.description
  }
}))

routes.unshift({
  path: '/',
  name: 'home',
  component: HomeView,
  meta: {
    title: 'dev_null | Linux Interactivo',
    description: 'Aprende Linux capa por capa, flujo por flujo.'
  }
})

routes.push({
  path: '/sobre',
  name: 'about',
  component: AboutView,
  meta: {
    title: 'Sobre dev_null | Linux Interactivo',
    description:
      'Qué es dev_null, el canal de YouTube, el stack del sitio y cómo contribuir.'
  }
})

routes.push({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView,
  meta: {
    title: '404 | dev_null',
    description: 'Página no encontrada'
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

router.beforeEach((to) => {
  const title = to.meta.title as string | undefined
  const description = to.meta.description as string | undefined

  if (title) {
    document.title = title
    upsertMeta('property', 'og:title', title)
  }
  if (description) {
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:description', description)
  }
})

export default router
