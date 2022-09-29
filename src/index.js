import Vue from 'vue'
import VueApp from './vue/app.vue'
import { f1 } from './util'
console.log(f1)
/**
 * vue
 */
new Vue({
  render: h => h(VueApp)
}).$mount('#root')
