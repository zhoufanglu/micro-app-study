<template>
  <div class="fan-pai">
    <div class="wrapper">
      <div
        class="card"
        :class="triggle ? 'active' : null"
        @click="triggle = !triggle"
      >
        <div class="card-face card-front">front</div>
        <!--        <div class="card-face card-back">back</div>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fanpai",
  components: {},
  data() {
    return {
      path: "/fanpai",
      triggle: false,
      inerval: null
    }
  },
  created() {
    this.inerval = setInterval(() => {
      this.triggle = !this.triggle
    }, 1000)
  },
  mounted() {},
  methods: {},
  beforeDestory() {
    clearInterval(this.interval)
  }
}
</script>
<style lang="scss" scoped>
.fan-pai {
  .wrapper {
    margin: 100px auto;
    border: 1px solid #ccc;
    width: 200px;
    height: 300px;
    perspective: 600px;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    &.active {
      transform: rotateY(180deg);
    }
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 260px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    backface-visibility: hidden;
    &.card-front {
      background-color: #f00;
    }
    &.card-back {
      background-color: #4577dc;
      transform: rotateY(180deg);
    }
  }
}
</style>
