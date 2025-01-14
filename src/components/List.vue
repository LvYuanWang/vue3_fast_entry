<template>
  <ul class="list-container">
    <li class="todoListItem" v-for="todo in showTodoList" :key="todo.id">
      <input type="checkbox" class="toggle" v-model="todo.completed"
        :style="`display: ${editTodo === todo ? 'none' : 'block'}`" />
      <span @dblclick="editTodoContent(todo)" v-show="editTodo !== todo">{{ todo.content }}</span>
      <input type="text" class="edit" v-model="todo.content" v-if="editTodo === todo" @keyup.enter="editTodoList(todo)"
        @blur="editTodoList(todo)" @keyup.esc="exitEditBox(todo)" @vue:mounted="({ el }) => el.focus()" />
      <button class="delete" @click="deleteTodo(todo)"
        :style="`display: ${editTodo === todo ? 'none' : 'block'}`">×</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits(['deleteTodo']);

const showTodoList = defineModel('showTodoList');

// 当前正在编辑的待办事项
const editTodo = ref(null);

// 编辑待办事项内容前的缓存
let beforeEditContentCache = '';

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

// 删除待办事项
function deleteTodo(todo) {
  emits("deleteTodo", todo);
}
</script>

<style scoped>
@font-face {
  font-family: "Slideyouran-Regular";
  src: url("../assets/Slideyouran-Regular.ttf");
}

.list-container {
  padding: 0;
  margin: 0;
}

.todoListItem {
  display: flex;
  border-bottom: 2px solid #cccccc96;
}

.list-container li {
  align-items: center;
  padding: 10px 5px 10px 0;
  font-size: 25px;
}

.list-container li:hover>.delete {
  opacity: 1;
}

.list-container li span,
.edit {
  flex-grow: 1;
  text-align: left;
  padding: 5px 0 10px 10px;
  font-size: 28px;
  cursor: pointer;
  font-family: "Slideyouran-Regular";
  border: none;
}

.toggle {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin: 0 10px;
  appearance: none;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
}

.toggle:checked {
  border: 1px solid #14dc17;
}

.toggle:checked+span {
  text-decoration: line-through;
  color: #ccc;
}

.toggle:checked::after {
  color: #14dc17;
}

.toggle::after {
  content: '✔';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: white;
}

.edit {
  margin-left: 50px;
  outline: 1px solid red;
}

.delete {
  flex-shrink: 0;
  cursor: pointer;
  font-size: 35px;
  border: none;
  background-color: transparent;
  color: purple;
  opacity: 0;
}

.delete:hover {
  color: crimson;
}
</style>