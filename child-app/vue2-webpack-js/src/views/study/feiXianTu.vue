<template>
  <div class="fei-xian">
    <div class="pop-out">
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference" @click="test">hover 激活</el-button>
      </el-popover>
    </div>
    <!--飞线图-->
    <div class="line-panel">
      <div class="round-1"></div>
      <div class="round-2"></div>
      <div class="round-3"></div>
      <div class="round-4"></div>
      <div class="round-5"></div>
      <svg width="400" height="600">
        <path
          d="M41 236 C65 118 244 112 213 327 L176 341 123 529 74 342 37 325 Z"
          stroke="#333"
          stroke-width="2"
          fill="none"
        />
      </svg>
    </div>
    <!--元素上下跳动-->
    <div class="jump-panel">
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fei-xian",
  components: {},
  data() {
    return {
      path: "/fei-xian-tu"
    }
  },
  created() {
    let val = bigNumberTransform(222)
    console.log(36, val)
    /**
     * 数字转换，将大额数字转换为万、亿、万亿等
     * @param value 数字值
     * @param finalUnit 单位 默认无
     */
    function bigNumberTransform(value, finalUnit = "") {
      let finalValue = 0
      let unit = ""
      let k = 10000
      let sizes = ["", "万", "亿", "万亿"]
      let i
      if (value < k) {
        // eslint-disable-next-line no-self-assign
        finalValue = value
      } else {
        i = Math.floor(Math.log(value) / Math.log(k))
        finalValue = (value / Math.pow(k, i)).toFixed(2)
        unit = sizes[i]
      }
      return finalValue + unit + finalUnit
    }
  },
  mounted() {},
  methods: {
    test() {
      console.log("xxx")
    }
  }
}
</script>
<style lang="scss" scoped>
.fei-xian {
  .pop-out {
    position: absolute;
    border: solid 1px red;
    left: 50%;
    top: 10%;
  }
  //统一原点的路径，和动画时间
  $svg-path: "M41 236 C65 118 244 112 213 327 L176 341 123 529 74 342 37 325 Z"; //此path对应svg内的path
  /*
     $color: 圆点背景颜色
     $path: 圆点行走路径
     $duration跑完需要多久时间
     $delay延迟多久开始跑
   */
  @mixin move-round($color, $path, $duration, $delay) {
    z-index: 2;
    position: absolute;
    left: 0;
    border-radius: 50%;
    background-color: $color;
    width: 10px;
    height: 10px;
    //移动
    offset-path: path($path);
    animation: move $duration $delay linear infinite;
  }
  .line-panel {
    .round-1 {
      @include move-round(blue, $svg-path, 5s, 0s);
    }
    .round-2 {
      @include move-round(green, $svg-path, 5s, 1s);
    }
    .round-3 {
      @include move-round(red, $svg-path, 5s, 2s);
    }
    .round-4 {
      @include move-round(black, $svg-path, 5s, 3s);
    }
    .round-5 {
      @include move-round(yellow, $svg-path, 5s, 4s);
    }

    svg {
      position: absolute;
      left: 0;
    }
  }

  @keyframes move {
    100% {
      offset-distance: 100%;
    }
  }
  .jump-panel {
    width: 100px;
    height: 100px;
    border: solid 1px green;
    position: absolute;
    top: 20px;
    left: 20px;
    > div {
      border: solid 1px red;
      width: 10px;
      height: 10px;
      animation: myfirst 2s infinite;
    }
  }
  @keyframes myfirst {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(0px, -10px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
}
</style>
