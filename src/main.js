import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$http = window.axios
// Vue.prototype.$vueCharts = window.VueChartJs

Vue.prototype.$moment = window.moment


new Vue({
  render: h => h(App),
}).$mount('#app')
