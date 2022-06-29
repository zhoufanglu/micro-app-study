<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-link to="/HelloWorld">HelloWorld</router-link> |
  <router-link to="/childRoute">childRoute</router-link>
  <br>
  <img alt="Vue logo" src="src/assets/logo.png" />
  <router-view></router-view>
</template>

<style>
#vue3-vite {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
