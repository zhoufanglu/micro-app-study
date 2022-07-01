<template>
  <div id="vue2-webpack-app">
    <div id="nav">
      <template v-for="(i, index) in router">
        <router-link :to="i.path" :key="index">{{ i.name }}</router-link>
        |
      </template>
    </div>
    <router-view />
  </div>
</template>
<script>
import router from "./router"
export default {
  name: "Home",
  data(){
    return {
      router: router.options.routes
    }
  },
  created() {
  },
  components: {}
}

</script>
<style lang="scss">
#vue2-webpack-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
