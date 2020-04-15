<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/a.png">
    <p  v-bind:class="isText?'text_active ppp':'text'"  >{{total}}1ds5</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@components/hello/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      total:99999,
      isText:true,
    }
  },
  created(){
    this.getinfo()
  },
  methods:{
    getinfo(){
      axios.get('/weixin_40755688/phoenix/comment/list/91489538',{
        params:{
          page:1,
          size:10,
          tree_type:1
        }
      })
      .then(res=>{
        console.log(res,'6666')
        this.total = res.content
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

    .text{
        font-size: 20px;
        color: blue;
    }
    .text_active{
      color: red;
    }
    .ppp{
      font-weight: bold;
    }
</style>
