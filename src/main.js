import { createApp } from 'vue'
import App from './App.vue'
// import TestCom from './components/TestCom.vue';

const app = createApp(App);

app.config.globalProperties.Test = {
  msg: 'Hello from Test'
}

// 全局注册组件(谨慎使用)
// app.component('TestCom', TestCom);

app.mount('#app');
