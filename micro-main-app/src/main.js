import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import startQiankun from "./micro";
const app = createApp(App);
startQiankun()

app.use(ElementPlus).use(store).use(router).mount("#app");

