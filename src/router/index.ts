import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { watch } from 'vue'
import { navigationSections } from '../config/sections'
import { t, L, locale } from '../i18n'
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
    titleKey: section.name,
    description: section.description
  }
}))

routes.unshift({
  path: '/',
  name: 'home',
  component: HomeView,
  meta: {
    titleKey: 'meta.home',
    descriptionKey: 'meta.home.desc'
  }
})

routes.push({
  path: '/sobre',
  name: 'about',
  component: AboutView,
  meta: {
    titleKey: 'meta.about',
    descriptionKey: 'meta.about.desc'
  }
})

routes.push({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView,
  meta: {
    titleKey: 'meta.404',
    descriptionKey: 'meta.404.desc'
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

function applyMeta(to: { meta: Record<string, unknown> }) {
  const titleKey = to.meta.titleKey as string | undefined
  const descriptionKey = to.meta.descriptionKey as string | undefined
  const descriptionBi = to.meta.description as { es: string; en: string } | undefined

  if (titleKey) {
    const finalTitle = titleKey.startsWith('meta.')
      ? t.value(titleKey)
      : `${t.value(titleKey)} | dev_null`
    document.title = finalTitle
    upsertMeta('property', 'og:title', finalTitle)
  }

  const description = descriptionKey
    ? t.value(descriptionKey)
    : descriptionBi
      ? L.value(descriptionBi)
      : undefined
  if (description) {
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:description', description)
  }
}

router.beforeEach((to) => {
  applyMeta({ meta: to.meta as Record<string, unknown> })
})

watch(locale, () => {
  applyMeta({ meta: router.currentRoute.value.meta as Record<string, unknown> })
})

export default router
