// main.ts
import { createApp } from "vue";
import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import HomePage from "./views/HomePage.vue";
import GLOBAL_CONFIG from "./config";
import router from "./router";
import "@/assets/css/index.scss"; //index.html中引入的css文件

const app = createApp(App);

// Use the router in the app
app.use(router);
app.config.globalProperties.$config = GLOBAL_CONFIG;
// Mount the app to the DOM
app.mount("#app");

//const app = createApp(App);

// Use the router in the app
//app.use(router);

// Set global properties

// Create the app instance for ViteSSG
// const viteSSGApp = ViteSSG(
//   // Pass the original app instance
//   HomePage,
//   ({ app }) => {
//     // Additional setup if needed
//     app.config.globalProperties.$config = GLOBAL_CONFIG;
//     app.use(router);
//   }
// );

// // Export the app instance created by ViteSSG
// export { viteSSGApp };

/*
import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import GLOBAL_CONFIG from "./config";
import "@/assets/css/index.scss";

export const createApp = ViteSSG(App, ({ app }) => {
  app.config.globalProperties.$config = GLOBAL_CONFIG;
});

*/
