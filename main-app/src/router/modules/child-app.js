const vue3Vite = () => import('@/views/childApp/vue3-vite.vue')

const childApp = [
  {
    name: 'vue3-vite',
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: '/vue3-vite/:page*',
    component: vue3Vite
  }
]

export default childApp
