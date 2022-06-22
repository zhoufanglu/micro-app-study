<template>
  <div class="vue-3-vite">
    <h1>子应用 - vue3-vite</h1>
    <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`  baseroute="/vue3-vite"
     -->
    <micro-app
      name="vue3-vite"
      url="http://localhost:4001/vue3-vite/"
      inline
      disableSandbox
      baseroute="/vue3-vite"
      @mounted="handleMount"
    ></micro-app>
  </div>
</template>

<script setup>
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'

// 注意：每个vite子应用根据appName单独分配一个通信对象
window.eventCenterForViteApp1 = new EventCenterForMicroApp('vue3-vite')
window.eventCenterForViteApp1.setGlobalData({ token: 'aaa' })

const handleMount = () => {
  console.log('vue3-vite 已经渲染完成')
}
</script>

<style
  scoped
  lang="scss"
>
.vue-3-vite {
}
</style>
