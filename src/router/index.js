import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: 'home' */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: 'about' */ '@/views/About.vue')
const Spaces = () =>
  import(/* webpackChunkName: 'spaces' */ '@/views/Spaces.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/parking/:filter',
      name: 'parking',
      component: Spaces,
      params: true
    },
    {
      path: '/parking',
      name: 'parking-all',
      redirect: '/parking/all'
    },
    {
      path: '/parking',
      name: 'parking-nearby',
      redirect: '/parking/nearby'
    },
    {
      path: '/parking',
      name: 'parking-recent',
      redirect: '/parking/recent'
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
