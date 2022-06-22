<!--<template>
  <div class="side-bar">
    <div>左侧导航</div>
    <br />
    <router-link to="/page-A">page-A</router-link>
    <br />
    <router-link to="/page-B">page-B</router-link>
    &lt;!&ndash;menu&ndash;&gt;
    &lt;!&ndash;    {{ counterDom }}&ndash;&gt;
  </div>
</template>-->
<template>
  <div class="side-bar">
    <n-menu
      :default-expand-all="true"
      :options="menuOptions"
      :value="menuActiveKey"
      @update:value="handleUpdateValue"
    />
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const menuActiveKey = ref()

const menuList = [
  {
    label: '主app',
    id: 1,
    icon: '&#xe60c;',
    children: [
      { label: 'page-a', id: 11, icon: '&#xe60c;', path: '/page-A' },
      { label: 'page-b', id: 12, icon: '&#xe60c;', path: '/page-B' }
    ]
  },
  {
    label: '子app',
    id: 2,
    icon: '&#xe60c;',
    children: [{ label: 'vue3-vite', id: 21, icon: '&#xe60c;', path: '/vue3-vite' }]
  }
]

const route = useRoute()

menuActiveKey.value = route.path

// menu
const menuOptions = menuList.map(menu => {
  return {
    label: menu.label,
    key: menu.id,
    icon: () => h('i', { class: 'iconfont', innerHTML: menu.icon }),
    children: menu.children.map(menuChild => {
      return {
        label: () => h(RouterLink, { to: { path: menuChild.path } }, () => menuChild.label),
        key: menuChild.path,
        icon: () => h('i', { class: 'iconfont', innerHTML: menuChild.icon })
      }
    })
  }
})

console.log(32, menuOptions)

const handleUpdateValue = (key, item) => {
  console.log(key, item)
  menuActiveKey.value = key
}
</script>

<style
  scoped
  lang="scss"
>
.side-bar {
  width: 200px;
  height: 100%;
  //box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
