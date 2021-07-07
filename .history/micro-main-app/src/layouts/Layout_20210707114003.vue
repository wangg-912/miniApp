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
          <router-view v-show="$route.name" />
          <!-- 子应用挂载区，用于挂载子应用的路由 -->
          <section v-show="!$route.name" id="micro_sub"></section>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import MainMenus from '../components/Menus.vue'
export default {
  components:{
    MainMenus
  },
  setup() {
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
        key: "systemApp",
        title: "系统管理",
        path: "/system"
      }
    ];
    return{
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