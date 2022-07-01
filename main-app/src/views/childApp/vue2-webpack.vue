<template>
  <div class="vue-2-webpack">
    <h1>子应用 - vue2-webpack -- {{ loading }}</h1>
    <n-spin
      :show="loading"
      size="large"
    >
      <!--
     name(必传)：应用名称
     url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
     baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`  baseroute="/vue2-webpack"
    -->
      <micro-app
        name="vue2-webpack"
        url="http://localhost:4002/vue2-webpack/"
        inline
        disableSandbox
        baseroute="/vue2-webpack"
        @mounted="handleMount"
        @unmount="unmount"
      ></micro-app>
    </n-spin>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)
const handleMount = () => {
  loading.value = false
  console.log('vue2-webpack-渲染完成')
}
const unmount = () => {
  console.log(35, 'vue2-webpack- 从父页面卸载了')
}
</script>

<style
  scoped
  lang="scss"
>
.vue-2-webpack {
}
</style>
