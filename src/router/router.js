import Vue from 'vue'
// import Router from 'vue-router'

import About from '@pages/about/about.vue'
import Text from '@pages/text/text.vue'
import Text2 from '@pages/text/text2.vue'
import Text3 from '@pages/text/text3.vue'



import VueRouter from 'vue-router'      // 引入路由
Vue.use(VueRouter)      // 使用中间件使用路由
// Vue.use(Router)

// const router = 

export default new VueRouter({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: About,
    },{
      path: '/about',
      component: About,
    },{
      path: '/text',
      component: Text,
      children:[
        // {path:'/',component:Text},
        {path:'text2',component:Text2},
        {path:'text3',component:Text3},
      ]
    }

  ]
})