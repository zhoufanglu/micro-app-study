<template>
  <div class="child-app">
    <span>子路由</span>
    <button @click="$router.go(-1)">go -1 ----回退</button>
  </div>
</template>

<script setup>
console.log('child-route')
const res = {
  data: null
}
const data = res && res.data && res.data
// console.log(16, data)
</script>

<style scoped>
button{
  color: red;
}
</style>
