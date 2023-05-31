import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import DeliveryView from '@/views/DeliveryView.vue'
import InstitutionsView from '@/views/InstitutionsView.vue'
import SharesView from '@/views/SharesView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          component: HomeView,
        },
        {
          path: '/institutions',
          component: InstitutionsView,
        },
        {
          path: '/delivery',
          component: DeliveryView,
        },
        {
          path: '/shares',
          component: SharesView,
        },
        {
          path: '/about',
          component: AboutView,
        },
      ],
    },
  ],
})

export default router
