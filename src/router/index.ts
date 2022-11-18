import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '@/layout/index.vue'),
    redirect: '/rabbit',
    children: [
      {
        path: '/rabbit',
        name: '首页',
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
