import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use((config) => {
  // 发送请求前做些什么
  return config;
}, (error) => {
  // 请求错误
  return Promise.reject(error);
});


// 响应拦截器
request.interceptors.response.use((response) => {
  // 响应数据
  return response.data;
}, (error) => {
  // 响应错误
  return Promise.reject(error);
});

export default request;