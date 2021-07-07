import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect:'/home',
    children:[
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: { isMain: true },
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
      {
        path: '/app:catchAll(.*)',
        name: 'Child',
        component: () => import('@/views/Empty.vue')
      },
      {
        path:'/system/home',
        component: Layout,
      },
      {
        path:'/system/about',
        component: Layout,
      }
    ]
  },
  
  
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
