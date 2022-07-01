<template>
  <div class="view-tree">
    <Tree :data="data2" show-checkbox :render="renderContent"></Tree>
  </div>
</template>
<script>
export default {
  name: "viewTree",
  components: {},
  data() {
    return {
      path: "/viewTree",
      data2: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    /*root <Array>：树的根节点
node <Object>：当前节点
data <Object>：当前节点的数据*/
    renderContent(h, { root, node, data }) {
      console.log('-----')
      console.log(53, data)
      console.log(56, node)
      let bgCol = 'white'
      if(data.checked){
        bgCol = '#eef3fa'
      }
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%",
            paddingLeft: '6px',
            paddingRight: '6px',
            backgroundColor: bgCol
          }
        },
        [
          h("span", [
            h(
              "span",
              {
                // 如果需要配合点击事件获得节点信息，这里可以用a标签
                style: {
                  // color: col, //这里设置title的颜色
                  // backgroundColor: bgCol
                }
              },
              data.title
            )
          ])
        ]
      )
    }
  }
}
</script>
<style lang="scss">
.view-tree {
}
</style>
