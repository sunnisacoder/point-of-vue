const {
  defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:1337", // 後端伺服器地址
        changeOrigin: true, // 允許跨域
      },
      "/upload": {
        target: "http://localhost:1337",
        changeOrigin: true, 
      },
    }
  }
})