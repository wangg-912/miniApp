import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layouts/index.vue";

const routes = [
  
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
   
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
