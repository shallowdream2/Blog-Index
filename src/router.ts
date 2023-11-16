/*
 * @Description: 路由配置
 */
// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/HomePage.vue"),
  },
  {
    path: "/addpage",
    name: "AddPage",
    component: () => import("./views/AddPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
