import Vue from 'vue'
import Axios from 'axios'

var instance = axios.create();


instance.interceptors.response.use(function (response) {
  let data = response.data

  if (data.code === 600) {

  }
  response.data = data
  return response
}, function (error) {
  v.$message.error('请求失败')
  return Promise.reject(error)
})

export default instance
