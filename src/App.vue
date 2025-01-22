<template>
  <div class="task-manager-container">
    <h1>任务管理器</h1>
    <div class="task-completed-info">
      <p>
        任务总数: <b>{{ totalTaskLen }}</b>
      </p>
      <p>
        已完成数: <b>{{ completedTaskLen }}</b>
      </p>
    </div>
    <div class="add-task-container">
      <input type="text" placeholder="请输入任务名称" v-model="taskText" @keyup.enter="addTask" />
      <button @click="addTask">添加</button>
    </div>
    <template v-if="!loading">
      <viewTaskContainer taskTitle="未完成的任务" :tasks="unCompletedTask" />
      <viewTaskContainer taskTitle="已完成的任务" :tasks="completedTask" />
    </template>
    <!-- loading框 -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
    </div>
    <div class="footer">
      <p>2025 @ 由 Vue3 + Vite 驱动</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import viewTaskContainer from './components/viewTaskContainer.vue'
import { useTaskStore } from './stores/useTaskStore'

const taskStore = useTaskStore()
const taskText = ref('')
const loading = computed(() => taskStore.isLoading)

// 任务总数
const totalTaskLen = computed(() => taskStore.$state.tasks.length)
// 已完成任务的数量
const completedTaskLen = computed(() => taskStore.getCompletedTaskCount)
// 已完成的任务
const completedTask = computed(() => taskStore.getCompletedTask)
// 未完成的任务
const unCompletedTask = computed(() => taskStore.getUncompletedTask)

onMounted(() => {
  taskStore.getTaskList()
})

function addTask() {
  if (taskText.value.trim()) {
    taskStore.addTask({ name: taskText.value, completed: false })
  } else {
    alert('添加的任务不能为空!!')
  }
  taskText.value = ''
}
</script>

<style scoped>
.task-manager-container {
  width: 60%;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #4386ef;
}

.task-completed-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.add-task-container {
  display: flex;
  margin-top: 10px;
  border-radius: 6px;
  overflow: hidden;
}

input {
  font-size: 16px;
  flex: 1;
  border: none;
  padding: 0 0 0 10px;
  outline: none;
}

button {
  font-size: 18px;
  padding: 8px 25px;
  border: none;
  background: #4386ef;
  color: #fff;
  cursor: pointer;
  white-space: nowrap;
}

button:hover {
  opacity: 0.8;
}

.footer {
  text-align: center;
  font-size: 12px;
  color: #666;
}

.loading {
  text-align: center;
  color: #999;
  font-size: 1.2em;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
