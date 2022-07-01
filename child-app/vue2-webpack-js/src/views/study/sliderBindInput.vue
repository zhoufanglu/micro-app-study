<template>
  <div class="p-slider-input">
    <h1>单个input</h1>
    <el-slider v-model="sliderVal" :min="1" :max="100"></el-slider>
    <el-input-number
      controls-position="right"
      v-model="sliderVal"
      :min="1"
      :max="100"
    ></el-input-number>
    <hr />
    <h2>双input</h2>
    <el-slider
      v-model="sliderRange"
      range
      show-stops
      :min="0"
      :max="100"
      :key="sliderKey"
    ></el-slider>
    <el-input-number
      controls-position="right"
      v-model="sliderRange[0]"
      @change="inputChange"
      :min="1"
      :max="100"
    ></el-input-number>
    <el-input-number
      controls-position="right"
      v-model="sliderRange[1]"
      :min="1"
      :max="100"
      @change="inputChange"
    ></el-input-number>
  </div>
</template>
<script>
export default {
  name: "slider绑定input",
  components: {},
  data() {
    return {
      path: "/sliderBindInput",
      sliderVal: 1,
      inputVal: 1,
      // 范围选择
      sliderRange: [0, 50],
      inputStart: 0,
      inputEnd: 50,
      sliderKey: 0
    }
  },
  created() {},
  mounted() {},
  methods: {
    inputChange() {
      this.sliderKey++
    }
  },
  watch: {
  }
}
</script>
<style lang="scss" scoped>
.p-slider-input {
  width: 200px;
}
</style>
<style lang="scss">
.p-slider-input {
  .el-input-number__decrease {
    display: none;
  }
  .el-input-number__increase {
    display: none;
  }
}
</style>
