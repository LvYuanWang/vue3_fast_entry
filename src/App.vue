<template>
  <div>
    <h1>onMounted</h1>
    <ul v-if="!loading">
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
    <div v-if="loading">加载中...</div>
    <div v-if="error">出错了!!</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const data = ref(null);
const loading = ref(false);
const error = ref(null);
onMounted(async () => {
  loading.value = true;
  // try {
  //   const res = await fetch("https://mock.presstime.cn/mock/677b87037856fb05b0249d73/vue3/lifeCycle").then(res => res.json());
  //   if (res.code === 200) {
  //     data.value = res.data;
  //   } else {
  //     throw new Error("请求失败!");
  //   }
  // } catch (error) {
  //   error.value = true;
  // } finally {
  //   loading.value = false;
  // }

  try {
    const res = await fetch("https://mock.presstime.cn/mock/677b87037856fb05b0249d73/vue3/lifeCycle").then(res => res.json());
    if (res.code === 200) {
      setTimeout(() => {
        loading.value = false;
        data.value = res.data;
      }, 3000);
    } else {
      throw new Error("请求失败!");
    }
  } catch (error) {
    error.value = true;
  }
})
</script>

<style scoped></style>