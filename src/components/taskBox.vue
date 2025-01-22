<template>
  <div class="task-box">
    <span v-if="!task.completed">{{ task.name }}</span>
    <del v-else>
      <em>{{ task.name }}</em>
    </del>
    <div class="btns">
      <button class="finish-btn" @click="toggleTaskState">切换</button>
      <button class="delete-btn" @click="deleteTask">删除</button>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/useTaskStore'

const taskStore = useTaskStore()

const { task } = defineProps(['task'])

function deleteTask() {
  taskStore.deleteTask(task.id)
}

function toggleTaskState() {
  taskStore.toggleTaskState(task.id)
}
</script>

<style scoped>
.task-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 6px;
}

.btns {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

del {
  color: #c3c3c3;
}

.finish-btn {
  background: #4386ef;
  color: #fff;
}

.delete-btn {
  background: #ff4d4f;
  color: #fff;
}
</style>
