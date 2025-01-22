<template>
  <div>
    <h2>{{ taskTitle }}</h2>
    <div class="task-container">
      <TaskBox v-for="task of tasks" :key="task.id" :task />
      <h3 v-if="!tasks.length">没有{{ taskTitle }}</h3>
    </div>
  </div>
</template>

<script setup>
import TaskBox from './taskBox.vue'

defineProps({
  taskTitle: String,
  tasks: Array,
})
</script>

<style scoped>
h2 {
  text-align: center;
  color: #fb95ff;
}

h3 {
  text-align: center;
  color: #fff;
}

.task-container {
  display: grid;
  gap: 5px;
}
</style>
