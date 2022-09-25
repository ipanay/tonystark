// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import '../public/main.css'
import router from './router'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.config.productionTip = false
window.vm = new Vue({
  //el:  "#tony_app",//----<----<
  router,            //         ^
  render: h => h(App),//        |
}).$mount('#tony_app')//连接index的容器tony_app
Vue.filter('priceformat',function(val,unit){
  var newUnit = unit || '元';
  return val ? Number(val).toFixed(2) + newUnit : '不知多少钱';
})
