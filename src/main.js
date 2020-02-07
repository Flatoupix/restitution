import Vue from 'vue'
import App from './App.vue'
import Chartkick from "vue-chartkick";
import Chart from 'chart.js'

Vue.config.productionTip = false
Vue.prototype.$http = window.axios

Chartkick.options = {
  colors: [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#9e9e9e",
    "#607d8b",
    "#ffffff",
    "#000000"
  ]
}
Vue.use(Chartkick.use(Chart))

Vue.prototype.$moment = window.moment


new Vue({
  render: h => h(App),
}).$mount('#app')
