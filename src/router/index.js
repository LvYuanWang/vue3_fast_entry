import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Detail from '@/views/Detail.vue';
import Email from '@/views/Email.vue';
import Tel from '@/views/Tel.vue';
import UserList from '@/views/UserList.vue';
import AddOrEdit from '@/views/AddOrEdit.vue';
import UserListDetail from '@/views/UserListDetail.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    children: [
      { path: 'email', name: 'Email', component: Email },
      { path: 'tel', name: 'Tel', component: Tel },
      { path: '', redirect: 'detail/tel' }
    ]
  },
  { path: '/userList', name: 'UserList', component: UserList },
  { path: '/userListDetail/:id', component: UserListDetail },
  { path: '/add', name: 'AddOrEdit', component: AddOrEdit },
  { path: '/edit/:id', component: AddOrEdit }
];

const router = createRouter({
  history: createWebHistory(),  // 表示使用 HTML5 history 模式
  routes
});

export default router;