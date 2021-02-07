import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Schedule from '@/components/Schedule'
import Memory from '@/components/Memory'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/memory',
      name: 'Memory',
      component: Memory
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})