//1.引入vue
import Vue from 'vue'
//2.引入axios库
import axios from 'axios'
//3.设置跨域请求保护session
axios.defaults.withCredentials=true;
//4.设置请求服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//5.将axios注册  Vue示例
Vue.prototype.axios=axios
//7.在main.js 引入axios即可


