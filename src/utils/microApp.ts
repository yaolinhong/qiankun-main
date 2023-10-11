import { registerMicroApps, start } from "qiankun";
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default function () {
  registerMicroApps([
    {
      name: "sub-app-name", // app name registered
      entry: "//localhost:8991",
      container: "#sub-app",
      activeRule: "/sub-app-name",
      props: {
        routerBase: "/sub-app-name",
      },
    },
  ]);

  start({
    sandbox: {
      // strictStyleIsolation: true,
    },
  });
}
