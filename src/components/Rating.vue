<template>
  <div class="stars-container">
    <span v-for="star in 5" :key="star" @click="setRatingStar(star)">
      {{ star <= starNum ? '★' : '☆' }}
    </span>
    <!-- 第二种写法 -->
    <!-- <span v-for="star in 5" :key="star" @click="$emit('rating-star', star)">
      {{ star <= starNum ? '★' : '☆' }}
    </span> -->
  </div>
</template>

<script setup>
// import { ref } from 'vue';

// const starNum = ref(0);

// const emits = defineEmits(['rating-star']);

// function setRatingStar(star) {
//   starNum.value = star;
//   emits('rating-star', star);
// }

// 第二种写法
defineProps(['starNum']);

// 事件校验
const emits = defineEmits({
  'rating-star': (star) => {
    if (star < 0 || star > 5) {
      console.error('star must be between 0 and 5');
      return false;
    }
    return true;
  }
});

function setRatingStar(star) {
  emits('rating-star', star);
}
</script>

<style scoped>
.stars-container {
  font-size: 30px;
  color: orange;
}

.stars-container span {
  cursor: pointer;
  margin: 0 1.5px;
}

.stars-container span:hover {
  color: red;
}
</style>