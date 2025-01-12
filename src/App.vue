<template>
  <div id="app">
    <h1>请对本次服务评分: </h1>
    <!-- <Rating v-model="starNum" /> -->

    <!-- 如果需要传递的值有多个, 则可以设置别名 -->
    <!-- <Rating v-model:starNum="starNum" /> -->

    <!-- 当然也可以使用修饰符(没有特定的作用) -->
    <Rating v-model:starNum.number="starNum" />
    <p v-show="starNum > 0">您当前的评级为: {{ starNum }} 颗星</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Rating from './components/Rating.vue';

const starNum = ref(0);
</script>

<style scoped>
#app {
  width: 70%;
  margin: 0 auto;
}

p {
  font-size: 18px;
  color: #333;
}
</style>