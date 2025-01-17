import { createRouter, createWebHistory } from 'vue-router';

import SwitchComponent from '@/views/SwitchComponent.vue';
import Timer from '@/views/Timer.vue';
import TextInput from '@/views/TextInput.vue';
import Counter from '@/views/Counter.vue';
import CheckboxList from '@/views/CheckboxList.vue';

const routes = [
  { path: '/',name: "SwitchComponent", component: SwitchComponent },
  { path: '/timer', name: 'Timer', component: Timer },
  { path: '/textInput', name: 'TextInput', component: TextInput },
  { path: '/counter', name: 'Counter', component: Counter },
  { path: '/checkboxList', name: 'CheckboxList', component: CheckboxList }
];

const router = createRouter({
  history: createWebHistory(),  // 表示使用 HTML5 history 模式
  routes
});

export default router;