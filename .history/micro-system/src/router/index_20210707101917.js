import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layouts/index.vue";

const routes = [

    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
  ]
  

const router = createRouter({
  history: createWebHistory('/system/'),
  routes,
});

export default router;