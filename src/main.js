import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from './components/home.vue'
import HelloWorld from './components/HelloWorld.vue'
import conter from './components/conter.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
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

