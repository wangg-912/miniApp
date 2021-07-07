const { name } = require('./package');
const path = require("path");

const port = 4042; // dev port
const dev = process.env.NODE_ENV === 'development'
module.exports = {
  publicPath: dev ? `//localhost:${port}` : '/',
  devServer: {
    port,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};