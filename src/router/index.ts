import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { navigationSections } from '../config/sections'
import HomeView from '../views/HomeView.vue'
import ArchitectureView from '../views/ArchitectureView.vue'
import FlowView from '../views/FlowView.vue'
import PermissionsView from '../views/PermissionsView.vue'
import ProcessesView from '../views/ProcessesView.vue'
import CommandsView from '../views/CommandsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const componentMap: Record<string, typeof HomeView> = {
  home: HomeView,
  architecture: ArchitectureView,
  flow: FlowView,
  permissions: PermissionsView,
  processes: ProcessesView,
  commands: CommandsView
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

router.beforeEach((to) => {
  const title = to.meta.title as string | undefined
  if (title) {
    document.title = title
  }
})

export default router
