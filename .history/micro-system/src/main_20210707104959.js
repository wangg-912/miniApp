
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import routes from './router'
import store from './store'
import './public-path';

const{name} = require('../package.json');
const app = createApp(App);
let router = null;

/* createApp(App).use(store).use(router).mount('#system_app'); */

function render(props) {
    const { container } = props;
    router = createRouter({
      history: createWebHistory( window.__POWERED_BY_QIANKUN__ ? `/${name}/` : '/'),
      routes
    })
  
    app.use(store)
    .use(router)
    .mount(container ? container.querySelector('#system_app') : '#system_app')
  }

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
  }

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
 export async function bootstrap() {
    console.log("systemApp bootstraped");
}


export async function mount(props) {
    console.log('systemApp is mounted',props)
    render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
 export async function unmount(props) {
    console.log('systemApp is unmounted',props)
}


