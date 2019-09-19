import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/home.vue'
import HelloWorld from './components/HelloWorld.vue'
import conter from './components/conter.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false



const routes = [
  { path: '/home', component: home },
  { path: '/HelloWorld', component: HelloWorld },
  { path: '/conter/:aid', component: conter }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

