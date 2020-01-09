import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
