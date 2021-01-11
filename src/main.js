import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routers from "./routers"

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueMaterial)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.use(VueVideoPlayer)


const router = new VueRouter({
  mode: 'history',
  routes: routers
})

import store from "@/store";

new Vue({
  el:'#app',
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')


