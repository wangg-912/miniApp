import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";

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
        component: () => import("@/views/About.vue"),
      },
      {
        path: "/sub01/home",
        component: Layout,
      },
    ]
  },
  
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
