import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.Test = {
  msg: 'Hello from Test'
}

app.use(pinia).mount('#app');
