import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
// 引入路由对象实例
import router from "./router/index.js";
app.use(router);

app.mount("#vue3-vite");
