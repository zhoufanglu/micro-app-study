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
      url="http://localhost:3001/vue3-vite/"
      inline
      disableSandbox
      baseroute="/vue3-vite"
      @mounted="handleMount"
    ></micro-app>
  </div>
</template>

<script setup>
// import microApp from '@micro-zoe/micro-app'

// import microApp from '@micro-zoe/micro-app'

// microApp.start()
/* microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      appName: [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              // eslint-disable-next-line no-param-reassign
              code = code.replace(/(from|import)(\s*['"])(\/vue3-vite\/)/g, all => {
                return all.replace('/vue3-vite/', 'http://localhost:3001/vue3-vite/')
              })
            }

            return code
          }
        }
      ]
    }
  }
}) */

const handleMount = () => {
  console.log('child-vite 已经渲染完成')
}
</script>

<style
  scoped
  lang="scss"
>
.vue-3-vite {
}
</style>
