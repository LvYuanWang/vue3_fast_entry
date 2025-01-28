<template>
  <el-card class="show-box-container" v-for="info in dataArr" :key="info.id">
    <template #header>
      <slot name="title" :title="info.title">Header Info</slot>
    </template>
    <template #default>
      <slot :src="info.src">This is ShowBox body container info</slot>
    </template>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const dataArr = ref([
  { id: 1, title: '以绝望挥剑,着逝者为铠! —— 《铠》', src: './src/assets/机甲.jpg' },
  { id: 2, title: '心怀不惧,才能翱翔于天际! —— 《赵云》', src: './src/assets/机械武士.jpg' },
  {
    id: 3,
    title: '无论发生什么,一切都是最好的安排! —— 《铠甲勇士》',
    src: './src/assets/铠甲.jpg',
  },
  { id: 3, title: '这是最好的时代，这是最坏的时代! —— 《李信》', src: './src/assets/科技.jpg' },
])
</script>

<style scoped>
* {
  user-select: none;
}

.show-box-container {
  margin-bottom: 10px;
}

.title {
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  padding: 5px 0;
}

.body {
  background-color: #f9f9f9;
  flex: 1;
  padding: 10px;
}
</style>
