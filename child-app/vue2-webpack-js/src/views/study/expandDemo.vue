<template>
  <div class="expand-demo">
    <div class="btn">
      <el-button @click="isOpen = !isOpen">
        {{ isOpen ? "打开" : "关闭" }}
      </el-button>
    </div>
    <div class="main">
      <div class="left" :class="isOpen ? 'width-1' : 'width-auto'">
        我是菜单
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "expandDemo",
  components: {},
  data() {
    return {
      path: "/expandDemo",
      isOpen: false,
      imgPath: ''
    }
  },
  created() {},
  mounted() {
  },
  methods: {}
}
</script>
<style lang="scss">
.expand-demo {
  display: flex;
  flex-direction: column;
  .btn {
    text-align: left;
  }
  .width-1 {
    width: 0;
    //transform: scale(1, 0);
    overflow: hidden;
  }
  .width-auto {
    width: 100px;
  }
  .main {
    display: flex;
    .left {
      // border: solid 1px red;
      height: 300px;
      transition: all 1s ease;
      //transition:width 1s;
      // max-height: 0;
    }
    .right {
      margin-left: 20px;
      border: solid 1px red;
      width: calc(100% - 240px);
      height: 300px;
    }
  }
}
</style>
