import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from './store/app'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('@/pages/Register.vue'),
  },
  {
    path: '/items/:category',
    component: () => import('@/pages/Items.vue'),
  },
  {
    path: '/item/create',
    component: () => import('@/pages/ItemForm.vue'),
  },
  {
    path: '/item/:id',
    component: () => import('@/pages/ItemForm.vue'),
  },
  {
    path: '/profile',
    component: () => import('@/pages/Profile.vue'),
  },
  {
    path: '/cart',
    component: () => import('@/pages/Cart.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from) => {
  if (!localStorage.getItem('token') && to.path !== '/login') {
    return to.path === '/register' ? true : '/login'
  }

  if (localStorage.getItem('token') && to.path === '/login') {
    return '/'
  }
})

export default router
