import { createRouter, createWebHistory } from 'vue-router';

import StoreTotalData from '@/views/StoreTotalData.vue';
import Counter from '@/views/Counter.vue';
import CheckboxList from '@/views/CheckboxList.vue';
import EditCheckboxList from '@/views/EditCheckboxList.vue';

const routes = [
  { path: '/', name: 'StoreTotalData', component: StoreTotalData },
  { path: '/counter', name: 'Counter', component: Counter },
  { path: '/checkboxList', name: 'CheckboxList', component: CheckboxList },
  { path: '/editCheckboxList', component: EditCheckboxList }
];

const router = createRouter({
  history: createWebHistory(),  // 表示使用 HTML5 history 模式
  routes
});

export default router;