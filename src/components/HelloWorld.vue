<template>
  <div class="hello">

    <!-- 这是vue3 -->
   
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
          rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
          rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->

<el-input
  type="text"
  placeholder="请输入内容"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input> 

<div><h1>{{msg}}</h1></div>
<div><h1>{{cakeName}}</h1></div>
<div><h1>{{cake}}</h1></div>

<el-input v-model="message"/>
<div>反转后的数据：{{messageReverse}}</div>
<!-- <div>反转后的数据：{{message.split('').reverse().join('')}}</div> -->
<!--v-model是数据双向绑定-->
<el-input v-if="true"  v-model="city" placeholder="当前城市"></el-input>

<div v-for="(todo ,index) in todos"  v-bind:key="index">{{index+1}}.{{todo.text}}</div>
<!-- 标签上面的变量绑定使用v-bind:(可简写为:)，不然可能是字符串 -->

<div>{{learn}}</div>
<!-- 把它显示出来 -->
<el-button v-model="learn" v-on:click="reverseStr" >点击会反转的字符串哇</el-button>
<!-- v-on：用户事件，可简写为@ ，click是点击事件 -->

<el-input @keypress.enter.native ="three"></el-input>

 <div v-if="today"><h1>晴天</h1>
 <el-button>草原吖~</el-button> 
 </div>
 <!-- <img src="https://www.zhifure.com/upload/images/2017/7/19125539200.jpg"> -->
 <!-- 跨域只限制于自己发起的请求，即三方发起的请求有跨域问题，所有标签里面的链接不受跨域影响 -->
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  props:["msg","cakeName","cake"],//父向子传递,预留一个位置
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      text: '',
      textarea: '',
      today:'true',
      message:'',
      city:'',
      learn:'小谢小傻子',
      todos:[{text:'学习使我快乐'},{text:'学习使我忧伤'}],
    
    }},

  mounted(){
    // setTimeout(()=>this.today=false,3000)
    // setTimeout(()=>console.log(this.message),3000)
    setTimeout(()=>{
      this.todos.push({text:'都替换了诶'})//添加数组
      this.todos[1].text='哇哦，只改了一个诶'
      // this.todos=[{text:'hahhhhhh'}]更换数组
    })
this.print()
  },

  computed:{
    messageReverse(){
     return this.message.split('').reverse().join('')
    }
  },

  watch:{
    message:function(one,two){
console.log(one,two)
    }
  },

  methods:{
   async print(){
const res=await axios.get('http://learn.api.futureruntime.com')
console.log(res)
this.city=res.data.data.location;
    },
    reverseStr(){
         this.learn=this.learn.split('').reverse().join('')
         //split之后变成数组，然后调用数组的reverse(反转，相反)的方法，然后再把它变成字符串join
    },
    three(){
      console.log('I Love You')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
