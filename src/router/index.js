import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import introduce from '../views/IntroduceView.vue';
import solution from '../views/SolutionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/introduce',
      name: 'IntroduceView',
      component: introduce
    },
    {
      path:'/solution',
      name: 'SolutionView',
      component: solution
    }
  ]
})

export default router
