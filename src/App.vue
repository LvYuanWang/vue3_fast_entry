<template>
  <div id="app">
    <div class="totoList-title">待办事项</div>
    <div class="todoList-container">
      <CreateTodo v-model:todoList="todoList" />
      <List v-model:showTodoList="showTodoList" @deleteTodo="deleteTodo" />
      <Footer v-model:activeNum="filters['active'](todoList).length" v-model:todoListCompletedNum="todoListCompletedNum"
        v-model:curChooseTodoType="curChooseTodoType" @cleanCompleted="cleanCompleted" />
    </div>
  </div>
</template>

<script setup>
import CreateTodo from './components/CreateTodo.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
import { computed, ref, watchEffect } from 'vue';

// [{id: 1, content: '睡觉', completed: false}]
// localStorage 存储的 key
const STORAGE_KEY = 'todoList';
// 待办事项列表
const todoList = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
// 当前选中的待办事项类型
const curChooseTodoType = ref('all');
// 过滤待办事项列表
const filters = {
  all: (todoList) => todoList,  // 全部
  active: (todoList) => todoList.filter(todo => !todo.completed),  // 未完成
  completed: (todoList) => todoList.filter(todo => todo.completed)  // 已完成
};
// 根据当前选中的待办事项类型过滤后的待办事项列表
const showTodoList = computed(() => filters[curChooseTodoType.value](todoList.value));

// 侦听 todoList 的变化，当 todoList 变化时，将 todoList 存储到 localStorage 中
watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList.value));
});

// 删除待办事项
const deleteTodo = (todo) => {
  const index = todoList.value.indexOf(todo);
  todoList.value.splice(index, 1);
};

// 清除已完成
function cleanCompleted() {
  filters['completed'](todoList.value).map(todo => deleteTodo(todo));
}

// 是否存在已完成的待办事项
const todoListCompletedNum = computed(() => filters['completed'](todoList.value).length !== 0);

// 监听 hash 变化，根据 hash 值切换待办事项类型
window.addEventListener('hashchange', () => {
  curChooseTodoType.value = location.hash.slice(2) || 'all';
});
</script>

<style scoped>
#app {
  width: 80%;
  margin: 50px auto;
}

.totoList-title {
  text-align: center;
  font-size: 50px;
  color: crimson;
  margin-bottom: 10px;
}

.todoList-container {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .2);
}
</style>