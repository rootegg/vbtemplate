import Vue from 'vue'
import App from './app.vue'
import { f1 } from './util'
console.log(f1)
new Vue({
  render: h => h(App)
}).$mount('#root')
