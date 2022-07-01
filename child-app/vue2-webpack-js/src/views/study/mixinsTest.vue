<template>
  <div class="p-name">
    mixins 测试,今天面试，有个人说了可以用mixins进行抽离window.onresize方法，当时我也没多考虑，没有否定她的回答，
    其实是错误的
    <mixinCom_1></mixinCom_1>
    <mixinCom_2></mixinCom_2>
  </div>
</template>
<script>
import mixinCom_1 from "../component/mixinCom_1"
import mixinCom_2 from "../component/mixinCom_2"
export default {
  name: "mixinsTest",
  components: { mixinCom_1, mixinCom_2 },
  data() {
    return {
      path: "/mixinsTest"
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
