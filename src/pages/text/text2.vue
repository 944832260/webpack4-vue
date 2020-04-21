<template>
  <div>
      <p>请求状态：{{content}}</p>
      <p>count：{{count}}</p>
      <p v-for="(item,index) in list" :key="index">
          {{item.info.Content}}
      </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Text2",
  data() {
    return {
      content: '',
      count: '',
      list: [],
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      axios
        .get("/weixin_40755688/phoenix/comment/list/91489538", {
          params: {
            page: 1,
            size: 10,
            tree_type: 1
          }
        })
        .then(res => {
          console.log(res, "6666");
          if (res.content == 'success') {
              this.content = res.content;
              this.count = res.data.count;
              this.list = res.data.list;

          }
          
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>