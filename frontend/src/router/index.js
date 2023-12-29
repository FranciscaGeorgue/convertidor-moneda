import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '../views/auth/AuthLayout.vue'
import { nextTick } from 'vue'
import AuthAPI from '../api/AuthAPI.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },

    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/AuthLayout.vue'),
      children: [
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        }
      ]
    }
  ]
})

router.beforeEach( async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)

  if (requiresAuth) {
    try {
      await AuthAPI.auth()
      next()
    } catch (error) {
      // console.log(error.response.data.msg);
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
