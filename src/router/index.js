import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArchitectureView from '../views/ArchitectureView.vue'
import FlowView from '../views/FlowView.vue'
import PermissionsView from '../views/PermissionsView.vue'
import ProcessesView from '../views/ProcessesView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/arquitectura', name: 'architecture', component: ArchitectureView },
  { path: '/flujo', name: 'flow', component: FlowView },
  { path: '/permisos', name: 'permissions', component: PermissionsView },
  { path: '/procesos', name: 'processes', component: ProcessesView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
