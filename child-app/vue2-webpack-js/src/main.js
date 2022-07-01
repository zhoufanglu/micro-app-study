import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/configs/public-path.js'

//iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

Vue.config.productionTip = false

Vue.use(ElementUI)

let app = null
/*let app = new Vue({
  router,
  store,
  render: (h) => h(App)
})
app.$mount("#vue2-webpack-app")*/


// 将渲染操作放入 mount 函数
function mount () {
  app = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#vue2-webpack-app')
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
  console.log('微应用vue2-webpack- 卸载了')
  console.log('------------------')
}

// 监听卸载操作
/*window.addEventListener('unmount', function () {
  console.log('微应用vue2-webpack- 卸载了')
  app.$destroy()
})*/
// 微前端环境下，注册mount和unmount方法
console.log(52, window)
if (window.__MICRO_APP_BASE_APPLICATION__) {
  window[`vue2-webpack`] = { mount, unmount }
  console.log(53, window)
  mount()
} else {
  // 非微前端环境直接渲染
  mount()
}
