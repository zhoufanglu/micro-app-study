<template>
  <div class="vue3-vite">
    <h1>child-app-1子应用</h1>
    <!--      baseroute="/child-app-1"-->
    <micro-app
      name="child-app-1"
      url="http://localhost:4001/child-app-1/"
      inline
      disableSandbox
      @mounted="handleMount"
      @unmount="handleUnmount"
    ></micro-app>
  </div>
</template>

<script setup>
const handleMount = () => {
  console.log('子应用-child-app-1渲染了')
}
const handleUnmount = () => {
  console.log('子应用-child-app-1卸载了')
}
</script>

<style
  scoped
  lang="scss"
>
.test {
}
</style>
