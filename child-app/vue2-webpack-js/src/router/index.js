import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

//学习路由引入
const requireComponent = require.context(
  // 其组件目录的相对路径,这里根据实际目录而定
  "@/views/study",
  // 是否查询其子目录,我这里有两层，所以true
  true,
  // 匹配基础组件文件名的正则表达式，我这里vue文件都要
  /\.vue$/
)

let modules = {} //组件模块

requireComponent.keys().forEach((ele) => {
  let key = ele.split("/")[1]
  key = key.substring(0, key.length - 4) //获取文件名，不包含.vue,其实是模块名、PD1,PD2,PD3,ST1...
  modules[key] = requireComponent(ele).default //模块实例赋值
})
console.log(24, modules)
//根据Modules生成路由
let studyRouter = []
for(let i in modules) {
  studyRouter.push({
    path: modules[i].data().path,
    name: modules[i].name,
    component: modules[i]
  })
}

const routes = [
  ...studyRouter,
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
