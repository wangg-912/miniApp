<template>
    <el-menu
      default-active="/home"
      router>
      <!-- <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item v-for="menu in menus" :key="menu.path" :index="menu.path">
        <i class="el-icon-menu"></i>
        <template #title>{{menu.title}}</template>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name:'MainMenus',
    props:{
      menus:{
        type:Array,
        dafault:[]
      }
    },
    data() {
        return {
            
        }
    },
    setup() {
      
    }
}
</script>