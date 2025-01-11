<template>
  <div>
    <h1>Test Component</h1>
    <button @click="count++">countNum: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style scoped>
button {
  color: red;
  padding: 5px 10px;
  font-size: 20px;
}
</style>