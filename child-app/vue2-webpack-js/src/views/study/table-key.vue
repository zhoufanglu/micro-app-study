<template>
  <div class="company-operate">
    <div class="operate-panel">
      <div class="row">
        <div></div>
        <div>企业/机构名称</div>
        <div>18位统一信用代码</div>
        <div></div>
      </div>
      <div class="row" v-for="(i, index) in list" :key="Math.random()+index">
        <div>{{ index + 1 }}</div>
        <div>
          <el-input v-model="i.name"></el-input>
        </div>
        <div>
          <el-input v-model="i.code"></el-input>
        </div>
        <button @click="deleteItem(index)">删除</button>
      </div>
      <div class="add-btn" @click="addItem">
        +
        <span>增加一行</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      list: [],
      path: "/table-key"
    }
  },
  created() {
    this.list = [
      { id: 1, name: "A", code: "12345677" },
      { id: 2, name: "B", code: "12345677" },
    ]
  },
  mounted() {},
  methods: {
    addItem() {
      this.list.push({
        code: "",
        name: ""
      })
    },
    deleteItem(index) {
      this.list.splice(index, 1)
    },
  }
}
</script>
<style lang="scss" scoped>
.company-operate {
  .title {
    font-size: 14px;
    font-weight: bolder;
    text-align: left;
  }
  .operate-panel {
    display: flex;
    flex-direction: column;
    .row:first-child {
      //margin: 6px !important;
      > div:nth-child(2) {
        margin: 30px 12px 0 12px !important;
      }
      > div:nth-child(3) {
        margin: 30px 12px 0 12px !important;
      }
    }
    .row {
      display: flex;
      justify-content: flex-start;
      > div {
        display: flex;
        justify-content: flex-start;
        font-size: 14px;
      }
      > div:first-child {
        width: 30px;
      }
      > div:nth-child(2) {
        width: calc(50% - 60px);
        text-align: left;
        margin: 12px;
      }
      > div:nth-child(3) {
        text-align: left;
        width: calc(50% - 60px);
        margin: 12px;
      }
      > div:nth-child(4) {
        width: 30px;
        i {
          font-size: 20px;
          cursor: pointer;
          color: red;
        }
      }
    }
    .add-btn {
      cursor: pointer;
      color: blue;
      margin-top: 6px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 14px;
      i {
        margin-right: 6px;
      }
    }
  }
}
</style>
<style lang="scss">
.company-operate {
  .is-disabled {
    input,
    textarea {
      color: #333333 !important;
    }
  }
}
</style>
