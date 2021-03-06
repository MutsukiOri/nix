// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMq from 'vue-mq'
import Slide from 'vue-burger-menu'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// const {Slide} = window['vue-burger-menu'];

Vue.component('slide', Slide);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
