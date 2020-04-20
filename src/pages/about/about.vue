<template>
  <div>
    about
    <el-button type="primary" @click="routerText(2)">点我跳转了</el-button>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
  </div>
</template>

<script>
import "./about.scss";
import { Button, Select } from "element-ui";

export default {
  name: "about",
  data() {
    return {
      value: true
    };
  },
  created() {
    console.log("a is: ", this.$route.params);
    console.log("a is: ", this);
  },
  methods:{
    routerText(id){
      this.$router.push('/admin/setting')
    }
  }
};
</script>

<style scoped>
</style>