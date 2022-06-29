import { createApp } from "vue";
import App from "./App.vue";
// let app = createApp(App);
// 引入路由对象实例
// import router from "./router/index.js";
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/index.js'
//app.use(router);
//app.mount("#vue3-vite");


// 与基座进行数据交互
function handleMicroData () {
  console.log(12, window)
  // 接收数据 eventCenterForAppNameVite 是基座添加到window的数据通信对象
  if (window.eventCenterFor_vue3Vite) {
    // 主动获取基座下发的数据
    const {token} = window.eventCenterFor_vue3Vite.getData()
    console.log('vue3-vite getData:', token)

    // 监听基座下发的数据变化
    /*window.eventCenterForAppNameVite.addDataListener((data: Record<string, unknown>) => {
      console.log('child-vite addDataListener:', data)

      if (data.path && typeof data.path === 'string') {
        data.path = data.path.replace(/^#/, '')
        // 当基座下发path时进行跳转
        if (data.path && data.path !== router.currentRoute.value.path) {
          router.push(data.path as string)
        }
      }
    })*/

    // 向基座发送数据
    /*setTimeout(() => {
      window.eventCenterForAppNameVite.dispatch({ myname: 'child-vite' })
    }, 3000)*/
  }
  // 传递数据
  // window.eventCenterFor_vue3Vite.dispatch({myname: 'vue3-vite'})
}


/** ----------分割线---umd模式------两种模式任选其一-------------- **/
let app = null
let router = null
let history = null
function mount() {
  history = createWebHashHistory()
  router = createRouter({
    history,
    routes,
  })
  app = createApp(App)
  app.use(router)
  app.mount('#vue3-vite')
  console.log('微应用vue3-vite渲染了')
  // 响应数据
  handleMicroData()
  fixBugForVueRouter4(router)
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app?.unmount()
  history?.destroy()
  // 卸载所有数据监听函数
  window.eventCenterFor_vue3Vite?.clearDataListener()
  app = null
  router = null
  history = null
  console.log('微应用vue-vite卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_BASE_APPLICATION__) {
  window['vue3-vite'] = { mount, unmount }
  console.log(78, window)
  mount()
} else {
  // 非微前端环境直接渲染
  mount()
}


// 子应用卸载
/*const  unmountFn = () => {
  console.log('子应用vue3-vite卸载钩子函数-------------')
  window.removeEventListener('unmount-bakingVue', unmountFn, false)
}

window.addEventListener('unmount-bakingVue', unmountFn)*/

//function () {
//   // 执行卸载相关操作
//   console.log('子应用vue3-vite卸载钩子函数-------------')
//   // window.removeEventListener('unmount-bakingVue',null, true)
// }

/**
 * 用于解决主应用和子应用都是vue-router4时相互冲突，导致点击浏览器返回按钮，路由错误的问题。
 * 相关issue：https://github.com/micro-zoe/micro-app/issues/155
 * 当前vue-router版本：4.0.12
 */
function fixBugForVueRouter4 (router) {
  // 判断主应用是main-vite，因为这这两个主应用是 vue-router4
  if (window.location.href.includes('/main-vite')) {
    // console.log(15, '主应用是main-vite')
    /**
     * 重要说明：
     * 1、这里主应用下发的基础路由为：`/main-xxx/app-vite`，其中 `/main-xxx` 是主应用的基础路由，需要去掉，我们只取`/app-vite`，不同项目根据实际情况调整
     *
     * 2、因为vite关闭了沙箱，又是hash路由，我们这里写死realBaseRoute为：/vue3-vite/#
     */
    const realBaseRoute = '/vue3-vite#'

    router.beforeEach(() => {
      console.log(118, window.history.state.current)
      console.log(119, typeof window.history.state?.current)
      if (typeof window.history.state?.current === 'string') {
        window.history.state.current = window.history.state.current.replace(new RegExp(realBaseRoute, 'g'), '')
        console.log(121, window.history.state.current)
      }
    })

    router.afterEach(() => {
      if (typeof window.history.state === 'object') {
        window.history.state.current = realBaseRoute +  (window.history.state.current || '')
      }
    })
  }
}
