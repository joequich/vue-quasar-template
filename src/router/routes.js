import MainLayout from '../layouts/MainLayout.vue'

const routes = [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: () => import('@/views/Home.vue') }
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/Error404.vue')
    }
]

export default routes

