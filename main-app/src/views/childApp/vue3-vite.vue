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
      :data="mainViteValue"
      @created="handleCreated"
      @mounted="handleMount"
      @unmount="unmount"
      @datachange="handleDataChange"
    ></micro-app>
  </div>
</template>

<script setup>
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import { ref } from 'vue'

const mainViteValue = ref({})

const handleCreated = () => {
  // 注意：每个vite子应用根据appName单独分配一个通信对象
  window.eventCenterFor_vue3Vite = new EventCenterForMicroApp('vue3-vite')
  // console.log('vue3-vite 已经渲染完成')
  mainViteValue.value = { token: 123455678 }
}

const handleMount = () => {}

const unmount = () => {
  console.log(39, window['vue3-vite'])
  window['vue3-vite'].unmount()
  // window.dispatchEvent(new Event('unmount-bakingVue'))
}
const handleDataChange = e => {
  console.log('来自子组件vue3-vite的数据', e.detail.data)
}
</script>

<style
  scoped
  lang="scss"
>
.vue-3-vite {
}
</style>
