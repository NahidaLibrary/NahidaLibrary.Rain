import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('@/views/index/Index.vue') },
  { path: '/music', name: 'music', component: () => import('@/views/music/Index.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/about/Index.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
