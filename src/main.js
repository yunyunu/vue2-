import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// console.log(App)
Vue.use(ElementUI); 

// 引入 vue-l18n
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
// const messages={
//   en:{
//     message:{
//       login:'login in'
//     }
//   },
//   zh:{
//     message:{
//       登录:'登录'
//     }
//   },
//   ja:{
//     message:'ログイン'
//   }
// }
// //初始化
// const i18n=new VueI18n({
//   locale:'ja',
//   message,
// })

new Vue({
  render: h => h(App),
  //  i18n,
}).$mount('#app')

