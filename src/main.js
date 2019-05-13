import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//CHANGE ME!!!
Vue.prototype.$apiKey = '####';


new Vue({
  el: '#app',
  render: h => h(App)
})
