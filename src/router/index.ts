import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/alphabet',
      name: 'alphabet',
      component: () => import('../views/AlphabetView.vue')
    },
    {
      path: '/georgizator',
      name: 'georgizator',
      component: () => import('../views/GeorgizatorView.vue')
    }
  ]
});

export default router;
