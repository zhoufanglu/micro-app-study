<template>
  <div class="p-debounce">
    debounce
    <input type="text" />
    <button>click</button>
  </div>
</template>
<script>
export default {
  name: "debounce",
  components: {},
  data() {
    return {
      path: "/debounce"
    }
  },
  created() {},
  mounted() {
    //window.onscroll = debounce(this.showTop)
    window.onscroll = throttle(this.showTop)
    /**防抖，操作完毕后，过一段时间进行执行，一直操作就不执行，input查询可以使用**/
    /*function debounce(fn, delay = 1000) {
      //做个闭包来缓存定时器
      let timer = null
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fn()
        }, delay)
      }
    }*/

    /**节流，每隔一段时间执行一次，类似于技能冷却时间**/
    function throttle(fn, delay = 1000) {
      let valid = true
      return function () {
        if (!valid) {
          return false
        }
        valid = false
        setTimeout(() => {
          fn()
          valid = true
        }, delay)
      }
    }

    //this.debounceTest()
    //this.throttleTest()
  },
  methods: {
    showTop() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      console.log("滚动条位置：" + scrollTop)
    },
    debounceTest() {
      let timer = null
      document.querySelector("input").oninput = function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          console.log("aa")
        }, 1000)
      }
      /**********************按钮点击***********************/
      document.querySelector("button").onclick = function () {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          console.log("aa")
        }, 1000)
      }
    },
    throttleTest() {
      let valid = true
      document.querySelector("button").onclick = function () {
        throttle(function () {
          console.log("ssss")
        }, 1000)
      }
      function throttle(fn, delay) {
        //设置开关
        if (valid === false) {
          return false
        }
        valid = false
        setTimeout(() => {
          fn()
          valid = true
        }, delay)
      }
    }
  },
  destroyed() {
    console.log(96, this)
  }
}
</script>
<style lang="scss" scoped>
.p-debounce {
  height: 2500px;
}
</style>
