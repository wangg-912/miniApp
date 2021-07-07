<template>
    <el-container class="micro-container">
    <el-aside width="200px">
      <MainMenus :menus="menus" />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div class="micro-menu-wrapper">
          <!-- 主应用渲染区，用于挂载主应用的路由 -->
          <router-view v-if="!isMain" />
          <!-- 子应用挂载区，用于挂载子应用的路由 -->
          <section v-else  id="microFrsme"></section>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import MainMenus from '../components/Menus.vue'
export default {
  components:{
    MainMenus
  },
  setup() {
    const route = useRoute();
    const menus = [
      {
        key: "Home",
        title: "主页",
        path: "/home"
      },
      {
        key: "About",
        title: "关于",
        path: "/about"
      },
      {
        key: "SA-Home",
        title: "系统管理-主页",
        path: "/system/home"
      },
      {
        key: "SA-About",
        title: "系统管理-关于",
        path: "/system/about"
      }
    ];
    return{
      isMain: computed(() => {
        return route.meta.isMain;
      }),
      menus
    }
  }
}
</script>
<style lang="scss" scoped>
.micro-container{
  height: inherit;
}
</style>