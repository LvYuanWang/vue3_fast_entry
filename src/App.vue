<template>
  <div id="app">
    <div class="totoList-title">待办事项</div>
    <div class="todoList-container">
      <div class="createTodo-container todoListItem">
        <input type="checkbox" class="chooseAll" v-model="chooseAll" />
        <input type="text" class="createTodo" placeholder="添加新的待办事项" @keyup.enter="addTodoList" />
      </div>
      <ul class="list-container">
        <li class="todoListItem" v-for="todo in showTodoList" :key="todo.id">
          <input type="checkbox" class="toggle" v-model="todo.completed"
            :style="`display: ${editTodo === todo ? 'none' : 'block'}`" />
          <span @dblclick="editTodoContent(todo)" v-show="editTodo !== todo">{{ todo.content }}</span>
          <input type="text" class="edit" v-model="todo.content" v-if="editTodo === todo"
            @keyup.enter="editTodoList(todo)" @blur="editTodoList(todo)" @keyup.esc="exitEditBox(todo)"
            @vue:mounted="({ el }) => el.focus()" />
          <button class="delete" @click="deleteTodo(todo)"
            :style="`display: ${editTodo === todo ? 'none' : 'block'}`">×</button>
        </li>
      </ul>
      <div class="footer">
        <span>剩余 {{ filters["active"](todoList).length }} 项</span>
        <div class="startList">
          <a href="#/all" :class="{ active: curChooseTodoType === 'all' }">全部</a>
          <a href="#/active" :class="{ active: curChooseTodoType === 'active' }">未完成</a>
          <a href="#/completed" :class="{ active: curChooseTodoType === 'completed' }">已完成</a>
        </div>
        <span v-show="todoListCompletedNum" class="cleanCompleted" @click="cleanCompleted">清除已完成</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';

// [{id: 1, content: '睡觉', completed: false}]
// localStorage 存储的 key
const STORAGE_KEY = 'todoList';
// 待办事项列表
const todoList = ref(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
// 当前选中的待办事项类型
const curChooseTodoType = ref('all');
// 编辑待办事项内容前的缓存
let beforeEditContentCache = '';
// 当前正在编辑的待办事项
const editTodo = ref(null);
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

// 添加新的待办事项
const addTodoList = ({ target }) => {
  if (target.value.trim()) {
    todoList.value.unshift({
      id: Date.now(),
      content: target.value,
      completed: false
    });
    target.value = '';
  }
};

// 删除待办事项
const deleteTodo = (todo) => {
  const index = todoList.value.indexOf(todo);
  todoList.value.splice(index, 1);
};

// 全选/全不选
const chooseAll = computed({
  get: () => todoList.value.length && todoList.value.every(todo => todo.completed),
  set: (value) => todoList.value.forEach(todo => todo.completed = value)
});

// 编辑待办事项内容
function editTodoContent(todo) {
  editTodo.value = todo;
  beforeEditContentCache = todo.content;
}

// 编辑待办事项
function editTodoList(todo) {
  if (editTodo.value) {
    editTodo.value = null;
    todo.content = todo.content.trim();
    if (!todo.content) {
      deleteTodo(todo);
    }
  }
}

// 退出编辑框
function exitEditBox(todo) {
  editTodo.value = null;
  todo.content = beforeEditContentCache;
}

// 清除已完成
function cleanCompleted() {
  filters['completed'](todoList.value).map(todo => deleteTodo(todo));
}

// 已完成的待办事项数量
const todoListCompletedNum = computed(() => filters['completed'](todoList.value).length !== 0);

// 监听 hash 变化，根据 hash 值切换待办事项类型
window.addEventListener('hashchange', () => {
  curChooseTodoType.value = location.hash.slice(2) || 'all';
});
</script>

<style scoped>
@import "./assets/totoList.css";
</style>