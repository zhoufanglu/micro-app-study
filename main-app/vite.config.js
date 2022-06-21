import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// auto import naive-ui
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量
  return defineConfig({
    // base: './',
    base: '/main-vite/',
    plugins: [
      vue(),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@a': path.resolve(__dirname, 'src/assets'),
        '@c': path.resolve(__dirname, 'src/components')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 全局引入scss入口
          additionalData: `
          @use "@/styles/scss/entrance.scss" as *;
          `
        }
      }
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          // entryFileNames: env.VITE_OUTPUT_DIR
        }
      },
      // 生产环境构建文件的目录 default: dist
      outDir: env.VITE_OUTPUT_DIR,
      // 放置生成的静态文件目录（js css img）
      assetsDir: 'static'
    }
  })
}
