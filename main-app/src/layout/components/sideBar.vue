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
import { RouterLink, useRoute, useRouter } from 'vue-router'
import microApp from '@micro-zoe/micro-app'

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
    label: '子-vue3-vite-app',
    id: 2,
    icon: '&#xe60c;',
    children: [
      { label: 'vue3-vite', id: 21, icon: '&#xe60c;', path: '/vue3-vite/', appName: 'vue3-vite' },
      {
        label: 'vue3-vite-childRoute',
        id: 22,
        icon: '&#xe60c;',
        path: '/vue3-vite/childRoute',
        appName: 'vue3-vite'
      }
    ]
  },
  {
    label: '子-vue2-webpack-app',
    id: 3,
    icon: '&#xe60c;',
    children: [
      {
        label: 'vue2-webpack-index',
        id: 31,
        icon: '&#xe60c;',
        path: '/vue2-webpack/',
        appName: 'vue2-webpack'
      }
      // { label: 'vue3-vite-childRoute', id: 22, icon: '&#xe60c;', path: '/vue3-vite/childRoute' }
    ]
  }
]

const [route, router] = [useRoute(), useRouter()]

menuActiveKey.value = route.path

// menu
const menuOptions = menuList.map(menu => {
  return {
    label: menu.label,
    key: menu.id,
    icon: () => h('i', { class: 'iconfont', innerHTML: menu.icon }),
    children: menu.children.map(menuChild => {
      return {
        // label: () => h(RouterLink, { to: { path: menuChild.path } }, () => menuChild.label),
        label: () => h('span', {}, menuChild.label),
        key: menuChild.path,
        icon: () => h('i', { class: 'iconfont', innerHTML: menuChild.icon }),
        appName: menuChild.appName
      }
    })
  }
})

console.log(32, menuOptions)

const handleUpdateValue = (path, item) => {
  // console.log(83, path)
  // console.log(84, item)
  menuActiveKey.value = path
  // 由于子应用是hash， 我们需要去掉路由前缀进行跳转
  // 向子应用传递事件进行跳转
  const hashPath = path.replace(`/${item.appName}`, '')
  console.log(103, hashPath)
  // console.log(102, item.appName)
  router.push(path)
  microApp.setData(item.appName, {
    path
  })
}
</script>

<style
  scoped
  lang="scss"
>
.side-bar {
  width: 300px;
  height: 100%;
  //box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
