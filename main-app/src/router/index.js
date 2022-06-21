import { createRouter, createWebHistory } from 'vue-router'
// 模块引入
import test from '@/router/modules/test'
import childApp from '@/router/modules/child-app'

// 布局页面
const layout = () => import('@/layout/layout.vue') // 作业管理

const routes = [
  {
    path: '/layout',
    component: layout,
    name: 'layout',
    children: [...test, ...childApp]
  },
  {
    path: '/',
    redirect: '/layout'
  }
]
// console.log(103, routes)
// console.log(22, import.meta.env.BASE_URL)
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: createWebHashHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes // `routes: routes` 的缩写
})

export default router
