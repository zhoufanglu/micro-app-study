import microApp from '@micro-zoe/micro-app'
// 微前端-microApp-注入
microApp.start({
  plugins: {
    modules: {
      // vue3 + vite的子应用
      'vue3-vite': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              // eslint-disable-next-line no-param-reassign
              code = code.replace(/(from|import)(\s*['"])(\/vue3-vite\/)/g, all => {
                // 子应用启动地址
                return all.replace('/vue3-vite/', 'http://localhost:4001/vue3-vite/')
              })
            }
            return code
          }
        }
      ]
    }
  }
})
