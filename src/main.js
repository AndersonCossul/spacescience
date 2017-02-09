
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MyHeader from './components/MyHeader'
import Home from './components/Home'
import './assets/css/base.css'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
