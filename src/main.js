import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
const axiosJSON = axios.create({
  baseURL:'http://localhost:8080',
  timeout:2000
});

const axiosUPLOAD = axios.create({
  baseURL:'http://localhost:8080',
  timeout:3000,
  headers:{'Content-Type':'multipart/form-data'}
});
//把Axios的对象注册到Vue对象上
Vue.prototype.axiosJSON = axiosJSON;
Vue.prototype.axiosUPLOAD = axiosUPLOAD;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
