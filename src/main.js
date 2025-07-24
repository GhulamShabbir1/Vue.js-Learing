import Vue from 'vue'
import App from './App.vue'
import vueRoutes from 'vue-router'

import AppHome from './components/pages/AppHome.vue'
import AppAbout from './components/pages/AppAbout.vue'
import VueRouter from 'vue-router'
Vue.use(vueRoutes)

const routes = [
  {
    path: "/home",
    component: AppHome
  },
  {
    path: "/about",
    component: AppAbout
  }
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
