if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}/`;
    return;
  }
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}