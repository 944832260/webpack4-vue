import Vue from 'vue'
// import App from './app.vue'
import Main from './main.vue'
import Routers from './router/router'
import "@http"
Vue.config.productionTip = false

import ElementUI from 'element-ui';
Vue.use(ElementUI);
new Vue({
  render: h => h(Main),
}).$mount('#root')
