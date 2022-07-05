<template>
  <div class="side-bar">
    <!--    <br />
    <router-link to="/page-A">page-A</router-link>
    <br />
    <router-link to="/page-B">page-B</router-link>-->
    <el-menu
      :default-openeds="openMenuIndexList"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu
        v-for="(menu, index) in menuList"
        :key="index"
        :index="menu.name"
      >
        <template #title>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="menuChild in menu.children"
          :key="menuChild.path"
          :index="menuChild.path"
          @click="menuItemClick(menuChild)"
        >
          {{ menuChild.name }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import microApp, { EventCenterForMicroApp } from '@micro-zoe/micro-app'

import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// 因为vite子应用关闭了沙箱，我们需要为子应用child-app-1 创建EventCenterForMicroApp对象来实现数据通信
console.log(39, window)
window.eventCenterForChildApp_1 = new EventCenterForMicroApp('child-app-1')

const router = useRouter()
const route = useRoute()

const menuList = ref([])
menuList.value = [
  {
    name: '主-app',
    children: [
      {
        name: 'page-A',
        path: '/page-A',
        appFrom: 'main'
      },
      {
        name: 'page-B',
        path: '/page-B',
        appFrom: 'main'
      }
    ]
  },
  {
    name: '子-child-app-1',
    children: [
      {
        name: 'home',
        path: '/',
        appFrom: 'child-app-1'
      },
      {
        name: 'childRoute',
        path: '/childRoute',
        appFrom: 'child-app-1'
      }
    ]
  },
  {
    name: '子-bdcp',
    children: [
      {
        name: 'home',
        path: '/',
        appFrom: 'bdcp'
      }
    ]
  }
]
const openMenuIndexList = menuList.value.map(i => i.name)

/** ********************获取选中项********************** */
let activeIndex = ''
const getActiveIndex = () => {
  activeIndex = route.path
  // 遍历第二层菜单menu， 如果路由包含 path, activeIndex就是该path
  menuList.value.forEach(menu => {
    menu.children.forEach(subMenu => {
      if (route.path.includes(subMenu.path)) {
        activeIndex = subMenu.path
      }
    })
  })
}
getActiveIndex()
/** ********************事件********************** */
const menuItemClick = item => {
  // 如果是主应用地址 就正常跳转
  if (item.appFrom === 'main') {
    router.push(item.path)
    if (window.eventCenterForChildApp_1) {
      window.eventCenterForChildApp_1.clearDataListener()
    }
  }
  //  如果是子应用 child-app-1
  else if (item.appFrom === 'child-app-1') {
    console.log(102, window)
    router.push('child-app-1')
    // 向子应用传递路由 让子路由进行跳转
    microApp.setData('child-app-1', { path: item.path })
  } else if (item.appFrom === 'bdcp') {
    router.push('/bdcp')
  }
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
