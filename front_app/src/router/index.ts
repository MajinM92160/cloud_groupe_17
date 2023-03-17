import { createRouter, createWebHistory, Router } from 'vue-router'
import { useAuth } from '../composable/useAuth'

const { isAuthenticated } = useAuth()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Auth.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Auth.vue')
  }
]
const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from) => {
  if (to.name === 'Home' && isAuthenticated.value === false) {
    alert('Vous n\'êtes pas connecté pour accéder à la home')
    return { name: 'Login'}
  }
})

export default router