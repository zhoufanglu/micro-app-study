<template>
  <div class="lazy-tree">
    <el-tree :props="props" :load="loadNode" lazy show-checkbox>
      <!--eslint-disable -->
      <div class="custom-tree-node" slot-scope="{ node, data }">
        <span>icon</span>
        <span>
        {{ node.label }}
      </span>
      </div>
    </el-tree>
  </div>
</template>
<script>
export default {
  name: "lazyTree",
  components: {},
  data() {
    return {
      path: "/lazyTree",
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf"
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    loadNode(node, resolve) {
      console.log("load", node)
      if (node.level === 0) {
        return resolve([{ name: "wogan" }])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [
          {
            name: "leaf",
            leaf: true
          },
          {
            name: "zone"
          }
        ]

        resolve(data)
      }, 500)
    }
  }
}
</script>
<style lang="scss"></style>
