import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'
import App from './App.vue'
import router from './router'

// store
import { setupStore } from './store'

// console.log(8, process.env.NODE_ENV)
// 微前端-microApp-注入
// microApp.start()
microApp.start({
  plugins: {
    modules: {
      'appname-vite': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              // eslint-disable-next-line no-param-reassign
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
                return all.replace('/vue3-vite/', 'http://localhost:3001/vue3-vite/')
              })
            }

            return code
          }
        }
      ]
    }
  }
})

const app = createApp(App)

setupStore(app)

app.use(router).mount('#app')
