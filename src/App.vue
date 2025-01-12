<template>
  <div id="app">
    <h1>请对本次服务评分: </h1>
    <Rating @rating-star="setRatingStar" :starNum />
    <p v-show="starNum > 0">您当前的评级为: {{ starNum }} 颗星</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Rating from './components/Rating.vue';

const starNum = ref(0);

function setRatingStar(newStarNum) {
  starNum.value = newStarNum;
}
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