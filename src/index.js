import Vue from 'vue'
// import App from './app.vue'
import Main from './main.vue'
import router from './router/router'
import "@http"
Vue.config.productionTip = false

import ElementUI from 'element-ui';
Vue.use(ElementUI);
// new Vue({
//   router,
//   render: h => h(Main),
// }).$mount('#root')

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  // store,
  template: '<Main />',
  components: { Main }
})