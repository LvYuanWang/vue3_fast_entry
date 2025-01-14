<template>
  <div class="createTodo-container todoListItem">
    <input type="checkbox" class="chooseAll" v-model="chooseAll" />
    <input type="text" class="createTodo" placeholder="添加新的待办事项" @keyup.enter="addTodoList" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
const todoList = defineModel('todoList');

// 全选/全不选
const chooseAll = computed({
  get: () => todoList.value.length && todoList.value.every(todo => todo.completed),
  set: (value) => todoList.value.forEach(todo => todo.completed = value)
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
</script>

<style scoped>
.createTodo-container {
  padding: 8px 5px;
}

.todoListItem {
  display: flex;
  border-bottom: 2px solid #cccccc96;
}

.chooseAll {
  width: 50px;
  flex-shrink: 0;
  height: 50px;
  margin: 0 5px 0 0;
  appearance: none;
  position: relative;
  cursor: pointer;
  border-radius: 30%;
}

.chooseAll:hover {
  background-color: rgb(218, 215, 250);
}

.chooseAll::after {
  content: '✖';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}

.chooseAll:checked::after {
  content: '✔';
}

.createTodo {
  flex-grow: 1;
  font-size: 25px;
  border: none;
  outline: none;
  font-style: italic;
  padding-left: 5px;
}
</style>