import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
/* import startQiankun from "./micro"; */

/* startQiankun(); */
const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
