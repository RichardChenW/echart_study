const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  // 配置自动打开浏览器
  devServer:{
    host:"localhost", 
    port:6188, // 配置端口
    open:true, // 自动打开浏览器
  }
})
