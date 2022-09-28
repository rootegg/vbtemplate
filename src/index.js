// import Vue from 'vue'
// import VueApp from './vue/app.vue'
import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactApp from './react/app'
import { f1 } from './util'
console.log(f1)
/**
 * vue
 */
// new Vue({
//   render: h => h(VueApp)
// }).$mount('#root')

/**
 * react
 */
const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<ReactApp />)
