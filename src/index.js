import Vue from 'vue'
// import App from './app.vue'
import Main from './main.vue'
import router from './router/router'
import Vuex from 'vuex'


import "@http"
import "@public/reset.scss"
Vue.config.productionTip = false

import ElementUI from 'element-ui';
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(Main),
}).$mount('#root')
