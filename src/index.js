import Vue from 'vue'
import App from './app.vue'
import "@http"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#root')
