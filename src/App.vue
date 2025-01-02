<template>
  <div class="container">
    <hr class="hr" />
    <div>
      <h1>条件渲染</h1>
      <div v-if="isShow">使用 v-if 来做条件渲染</div>
      <div v-show="isShow">使用 v-show 来做条件渲染</div>
      <template v-if="type === 1">
        <div>晴天</div>
        <p>出去旅游</p>
        <p>玩的开心</p>
      </template>
      <template v-else-if="type === 2">
        <div>下雨</div>
        <p>在家看电影</p>
        <p>吃爆米花</p>
      </template>
      <template v-else-if="type === 3">
        <div>下雪</div>
        <p>出去堆雪人</p>
        <p>打雪仗</p>
      </template>
      <template v-else-if="type === 4">
        <div>阴天</div>
        <p>在家吃火锅</p>
        <p>看电视</p>
      </template>
      <div v-else>未知天气!!!</div>
    </div>
    <div>
      <h1>列表渲染</h1>
      <h2>商品列表</h2>
      <template v-for="(item, index) in shoppingArr" :key="index">
        <div>{{ index + 1 }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.price }}</div>
        <hr />
      </template>
      <h2>渲染对象</h2>
      <div v-for="(value, key, index) in obj" :key="index">
        {{ index }} - {{ key }}: {{ value }}
      </div>
      <h2>存在作用域</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.name }}
          <ul>
            <li v-for="task in project.tasks" :key="task.id">
              {{ task.name }}
              <ul>
                <li v-for="subtask in task.subtasks" :key="subtask">
                  {{ project.id }} - {{ subtask }} - {{ task.id }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const type = ref(1);
const isShow = ref(true);

const shoppingArr = ref([
  { name: '键盘', price: 99.99 },
  { name: '鼠标', price: 19.99 },
  { name: '显示器', price: 199.99 },
  { name: '主机', price: 999.99 },
  { name: '耳机', price: 49.99 }
]);
const obj = reactive({
  name: "张三",
  age: 18,
  sex: "男",
  address: "北京市朝阳区"
});
const projects = ref([
  {
    id: 1,
    name: "Project A",
    tasks: [
      {
        id: 1,
        name: "Task A1",
        subtasks: ['Subtask A1.1', 'Subtask A1.2']
      },
      {
        id: 2,
        name: "Task A2",
        subtasks: ['Subtask A2.1', 'Subtask A2.2']
      }
    ]
  },
  {
    id: 2,
    name: "Project B",
    tasks: [
      {
        id: 1,
        name: "Task B1",
        subtasks: ['Subtask B1.1', 'Subtask B1.2']
      },
      {
        id: 2,
        name: "Task B2",
        subtasks: ['Subtask B2.1', 'Subtask B2.2']
      }
    ]
  }
]);

setInterval(() => {
  type.value = Math.floor(Math.random() * 5) + 1;
}, 3000);
setTimeout(() => {
  isShow.value = false;
  projects.value.push({
    id: 3,
    name: '这是一个大项目',
    tasks: [
      {
        id: 1,
        name: '搭建工程',
        subtasks: ['🧵调研框架', '熟悉框架']
      },
      {
        id: 2,
        name: '分解模块',
        subtasks: ['先调研', '分析']
      }
    ]
  })
}, 2000);
</script>

<style scoped>
* {
  transition: all 1s;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative;
}

.hr {
  position: absolute;
  height: 100%;
  left: 50%;
  top: -10px;
  transform: translateX(-50%) rotate(180deg);
  border-width: 1px;
  border-style: dashed;
}
</style>