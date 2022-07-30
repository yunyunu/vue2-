<template>
  <!-- <div class="hello"> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
       <!-- <div><h1>晴天</h1></div> -->
<div>
  <div v-if="hello"><HelloWorld  msg="哈哈哈" :cakeName="anyone" :cake="any" ></HelloWorld></div>
  <!-- <div v-if="hello"><HelloWorld></HelloWorld></div>复制一份，两个组件之间互不干扰 -->
  <div ><TwoPage @LOVE="accept" ></TwoPage></div>

  </div>
</template>

<script>
// import { runInThisContext } from 'vm'
import HelloWorld from './components/HelloWorld.vue'
import TwoPage from './components/TwoPage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TwoPage
},
  //data是双向数据绑定
  data:function(){
    return{
      hello:true,
      anyone:'爱你哦',
      any:''
    }
  },

  methods:{
accept(info){
  console.log('我接受你的LOVE了',info)
}
  },

  mounted(){
    // setTimeout (()=>this.hello=false,3000)
setTimeout(()=>{
  console.log('执行完了，有结果了吗,我看到美食博主了 啊')
  this.any='美食博主'
  // this.$I18n.locale='ja'
},5000);
  },

  // beforeCreate(){
  //   console.log('beforeCreat')
  // },
  //  created(){
  //   console.log('created')
  // },
  //  beforeMount(){
  //   console.log('beforeMount')
  // },
  //  beforeUpdate(){
  //   console.log('mbeforeUpdate')
  // }, 
  // updated(){
  //   console.log('updated')
  // }, 
  // beforedestroyed(){
  //   console.log('beforedestroyed')
  // },
  // destroyed(){
  //   console.log('destroyed')
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
