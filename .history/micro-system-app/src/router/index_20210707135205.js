import Layout from "@/layouts/index.vue";
const routes = [
  {
    path: "/system",
    component: Layout,
    redirect:'/home',
    children:[
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
    ]
  },
  
];
export default routes

