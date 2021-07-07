import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ElMessage } from 'element-plus';
import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start
  } from "qiankun";
//   微应用的注册信息
  import apps from "./apps";
  /**
   * 注册微应用
   * 第一个参数 - 微应用的注册信息
   * 第二个参数 - 全局生命周期钩子
   */
  registerMicroApps(apps,{
    beforeLoad:(app)=>{
        // 加载微应用前，加载进度条
        NProgress.start();
        console.log("before load", app.name);
        return Promise.resolve();
    },
    afterMount:(app)=>{
        // 加载微应用前，进度条加载完成
        NProgress.done();
        console.log("after mount", app.name);
        return Promise.resolve();
    }
  })
  /**
   * 
   */
   addGlobalUncaughtErrorHandler((event)=>{
        console.error(event);
        const {message} = event;
        // 加载失败时提示
        if (message && message.includes("died in status LOADING_SOURCE_CODE")) {
            ElMessage.error("微应用加载失败，请检查应用是否可运行");
        }

    })

    export default start;