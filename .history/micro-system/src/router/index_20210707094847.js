import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layouts/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect:'/home',
    children:[
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/About.vue"),
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
