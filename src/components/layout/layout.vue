<template>
  <el-container id="layout">
    <el-aside width="200px" class="leftAside">
      <div class="logo">logo</div>
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo menu-ul"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu
          :index="String(index)"
          v-for="(item,index) in Menulist"
          :key="index"
          v-if="item.children"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="String(index) + '-' + String(ix)"
              v-for="(it,ix) in item.children"
              :key="ix"
              @click="router(it.path)"
            >{{it.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="String(index)" v-else @click="router(item.path)">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import "./layout.scss";
import Menulist from "./layout.config";

export default {
  name: "Layout",
  data() {
    return {
      Menulist
    };
  },
  methods: {
    router(path) {
      this.$router.push(path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>