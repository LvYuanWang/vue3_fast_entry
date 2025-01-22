// 获取任务列表
export const getTaskList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const taskList = [
        { id: 1, name: '吃饭', completed: false },
        { id: 2, name: '睡觉', completed: false },
        { id: 3, name: '写代码', completed: true },
      ]
      resolve(taskList)
    }, 1500)
  })
}

// 添加任务
export const addTaskApi = (newTask) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...newTask, id: Date.now() })
    }, 800)
  })
}

// 删除任务
export const deleteTaskApi = (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(taskId)
    }, 800)
  })
}

// 更改任务状态
export const toggleTaskStateApi = (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(taskId)
    }, 800)
  })
}
