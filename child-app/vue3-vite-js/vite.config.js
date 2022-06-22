import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import { writeFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: `${process.env.NODE_ENV === 'production' ? 'http://www.micro-zoe.com' : ''}/vue3-vite/`,
  plugins: [
    vue(),
    // 自定义插件
    (function () {
      let basePath = "";
      return {
        name: "vue3-vite",
        apply: "build",
        configResolved(config) {
          basePath = `${config.base}${config.build.assetsDir}/`;
        },
        writeBundle(options, bundle) {
          for (const chunkName in bundle) {
            if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
              const chunk = bundle[chunkName];
              if (chunk.fileName && chunk.fileName.endsWith(".js")) {
                chunk.code = chunk.code.replace(
                  /(from|import\()(\s*['"])(\.\.?\/)/g,
                  (all, $1, $2, $3) => {
                    return all.replace($3, new URL($3, basePath));
                  }
                );
                const fullPath = join(options.dir, chunk.fileName);
                writeFileSync(fullPath, chunk.code);
              }
            }
          }
        },
      };
    })(),
  ],
  server: {
    host: '0.0.0.0',
    port: 4001
  }
});
