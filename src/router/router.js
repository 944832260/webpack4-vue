import Vue from 'vue'
import Router from 'vue-router'

import About from '@pages/about/about.vue'
import Text from '@pages/text/text.vue'
import Text2 from '@pages/text/text2.vue'
import Text3 from '@pages/text/text3.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      components: About,
    },{
      path: '/text',
      components: Text,
    //   children:[
    //     {path:'/',component:Text},
    //     {path:'text2',component:Text2},
    //     {path:'text3',component:Text3},
    //   ]
    }

  ]
})