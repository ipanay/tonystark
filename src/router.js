import Vue from 'vue/dist/vue.js';
// import Vue from 'vue';//报编译
import VueRouter from 'vue-router';
import home from './components/home';//首页
import jarvis from './components/611life';//jarvis
import canvas from './components/canvas';//canvas
import loveU3000 from './components/loveU3000';//loveU3000
import leaning from './components/leaning';
import htmlCss from './components/htmlCss';
import luo from './components/luo';
let routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/jarvis',
    component: jarvis
  },
  {
    path: '/canvas',
    component: canvas
  },
  {
    path: '/you3000',
    component: loveU3000,
  },
  {
    path: '/itLeaning',
    component: leaning,
  },
  {
    path: '/htmlCss',
    component: htmlCss,
  },
  {
    path: '/luo',
    component: luo,
  }
]
Vue.use(VueRouter);
let router = new VueRouter({
  baseUrl: '/',
  mode: 'history',//去掉地址栏#
  routes: routes
})
export default router;