<template>
  <div class="user-info">
    <h2>User Info</h2>
    <p>name: {{ user.name }}</p>
    <p>age: {{ user.age }}</p>
    <p>gender: {{ user.gender }}</p>
  </div>
</template>

<script setup>
// props写法一
// const user = defineProps(['user']);

// props写法二
defineProps({
  user: {
    type: Object,
    required: true,
    // 自定义校验规则
    validator: (value) => {
      return value.name && value.age && value.gender;
    }
  }
});
</script>

<style scoped>
.user-info {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
}
</style>