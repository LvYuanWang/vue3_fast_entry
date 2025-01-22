import { defineStore } from 'pinia'
import { getTaskList, addTaskApi, deleteTaskApi, toggleTaskStateApi } from '@/api/taskApi'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    isLoading: false,
  }),
  getters: {
    // 未完成的任务
    getUncompletedTask() {
      return this.tasks.filter((item) => !item.completed)
    },
    // 已完成的任务
    getCompletedTask() {
      return this.tasks.filter((item) => item.completed)
    },
    // 已完成的任务数
    getCompletedTaskCount() {
      return this.getCompletedTask.length
    },
  },
  actions: {
    // 获取任务列表
    async getTaskList() {
      this.isLoading = true
      const taskList = await getTaskList()
      this.tasks = taskList
      this.isLoading = false
    },
    // 添加任务
    async addTask(newTask) {
      this.isLoading = true
      const newTaskObj = await addTaskApi(newTask)
      this.tasks.unshift(newTaskObj)
      this.isLoading = false
    },
    // 删除任务
    async deleteTask(taskId) {
      this.isLoading = true
      const deleteTaskId = await deleteTaskApi(taskId)
      this.tasks = this.tasks.filter((task) => task.id !== deleteTaskId)
      this.isLoading = false
    },
    // 切换任务状态
    async toggleTaskState(taskId) {
      this.isLoading = true
      const toggleTaskId = await toggleTaskStateApi(taskId)
      const task = this.tasks.find((task) => task.id === toggleTaskId)
      if (task) {
        task.completed = !task.completed
      }
      this.isLoading = false
    },
  },
})
