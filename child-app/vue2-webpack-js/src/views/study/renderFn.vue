<!--<template>
  <div class="p-name">render函数</div>
</template>-->
<script>
export default {
  name: "render函数",
  components: {},
  data() {
    return {
      path: "/render",
      isRed: true,
      isShowChild: true
    }
  },
  // render 中的渲染结果与上面等价
  //createElement(renderElement: String | Component, definition: Object, children: String | Array)
  //
  render(h) {
    console.log("触发render")
    return h(
      "div",
      {
        class: {
          "is-red": this.isRed
        }
      },
      [h(this.isShowChild ? "p" : null, "这是一个 render 事例")]
    )
  },
  created() {
    async function f1() {
      return new Promise((resolve) => {
        console.log(4)
        resolve()
      }).then(() => {
        console.log(5)
      })
    }
    async function run() {
      console.log(1)
      new Promise((resolve) => {
        console.log(2)
        resolve()
      }).then(() => {
        console.log(3)
      })
      await f1()
      setTimeout(() => {
        console.log(6)
      }, 0)
      console.log(7)
    }
    run()
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
