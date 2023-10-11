const { defineConfig } = require("@vue/cli-service");
const ENV = process.env.NODE_ENV;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (ENV !== "production") {
      // 非生产环境下开启缓存
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      };
    }
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
