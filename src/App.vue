<template>
  <div>
    <div class="box">
      <h2>智能机器人</h2>
      <input type="text" placeholder="请输入问题" v-model.lazy.trim="question" />
      <div v-if="loading">正在加载中...</div>
      <div v-else>{{ answer }}</div>
    </div>
    <div class="box">
      <h2>侦听计算属性</h2>
      <input type="text" v-model.lazy.trim="firstName" />
      <input type="text" v-model.lazy.trim="lastName" />
      <div>{{ fullName }}</div>
    </div>
    <div class="box">
      <h2>侦听计算属性</h2>
      <ul>
        <li v-for="task in tasks.list" :key="task.id">
          {{ task.title }} - {{ task.completed ? '已完成' : '未完成' }}
          <button @click="task.completed = !task.completed">切换状态</button>
        </li>
      </ul>
    </div>
    <div class="box">
      <h2>侦听Getter函数</h2>
      <input type="number" v-model.number="count1" />
      <input type="number" v-model.number="count2" />
      <div>{{ count1 }} - {{ count2 }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue';

const question = ref('');
const loading = ref(false);
const answer = ref('');
const options = {
  method: 'POST',
  headers: {
    'Api-Key': 'd5j1si4pap69q3dp',
    'Api-Secret': 'yxmk8ld5',
    'Content-Type': 'application/json;charset=UTF-8'
  }
};

watch(question, async (newVal) => {
  if (!newVal) {
    answer.value = '';
    return;
  }
  loading.value = true;
  try {
    const res = await fetch('/reply', {
      ...options,
      body: JSON.stringify({
        content: question.value,
        type: 1,
        from: Math.random().toString(36).substr(2)
      })
    }).then(res => res.json());
    answer.value = res.data[0].content;
  } catch {
    answer.value = '请求失败';
  } finally {
    loading.value = false;
  }
});

// 侦听计算属性
const firstName = ref('John');
const lastName = ref('Doe');
const fullName = computed(() => `${firstName.value} ${lastName.value}`);
watch(fullName, (newValue, oldValue) => {
  console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
});

// 侦听reactive响应式对象
const tasks = reactive({
  list: [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false }
  ]
});
watch(tasks, () => {
  console.log('tasks 发生了变化');
});

// 侦听Getter函数
const count1 = ref(0);
const count2 = ref(0);
function isEven() {
  console.log('isEven 函数执行了');
  console.log(count2.value);
  return count1.value % 2 === 0;
}
watch(isEven, () => {
  console.log("触发了 isEven 的侦听器");
});
watch([count1, count2], () => {
  console.log("触发了 count1 或 count2 的侦听器");
})
</script>

<style scoped>
.box {
  padding: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
</style>