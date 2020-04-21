import Vue from 'vue'
// import Router from 'vue-router'

import About from '@pages/about/about.vue'
import Layout from '../components/layout/layout.vue'
import Setting from '../pages/setting/setting.vue'
import Table from '../pages/table/table.vue'
import Tabledetail from '../pages/table/tabledetail.vue'

import Text from '@pages/text/text.vue'
import Text2 from '@pages/text/text2.vue'
import Text3 from '@pages/text/text3.vue'



import VueRouter from 'vue-router'      // 引入路由
Vue.use(VueRouter)      // 使用中间件使用路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: About,
    },{
      path: '/about/:id',
      component: About,
    },{
      path: '/admin',
      component: Layout,
      children:[
        {path:'about',component:Text2},
        {path:'table',component:Table},
        {path:'table/:id',component:Tabledetail},
        {path:'setting',component:Setting},
      ]
    }

  ]
})