<template>
  <div class="scale-div">
    <div class="item-out"
      v-for="(i, index) in list"
         :key="index"
    >
      <div class="item">
        <div class="content">
          content, 保持纵横比
        </div>
        <div class="info-row">信息行</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "scale-div",
  components: {},
  data() {
    return {
      path: "/scale-div",
      list: []
    }
  },
  created() {
    this.list = new Array(17)
  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.scale-div{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  .item-out{
    $infoHeight: 30px;
    border: solid 1px red;
    height: 0;
    position: relative;
    box-sizing: border-box;
    // 1366 +
    @media screen and (min-width: 1366px){
      width: 20%;
      padding-bottom: calc(20% * 0.56 + #{$infoHeight});
    }
    // 0 - 1366
    @media screen and (min-width: 0px) and (max-width: 1366px){
      width: 25%;
      padding-bottom: calc(25% * 0.56 + #{$infoHeight});
    }
    .item{
      position: absolute;
      left: 4px;
      top: 4px;
      height: calc(100% - 8px);
      width: calc(100% - 8px);
      background-color: #42b983;
      display: flex;
      flex-direction: column;
      .content{
        height: calc(100% - #{$infoHeight});
        width: 100%;
      }
      .info-row{
        height: $infoHeight;
        width: 100%;
        background: yellow;
        line-height: $infoHeight;
      }
    }
  }
}
// 1366 +
@media screen and (min-width: 1366px){

}
// 0 - 1366
@media screen and (min-width: 0px) and (max-width: 1366px){

}
</style>
