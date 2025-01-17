<template>
  <div>
    <h2>计数器</h2>
    <p>当前计数：{{ count }}</p>
    <button @click="count++">增加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<script>
export default {
  name: 'Counter',
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
}
button:hover {
  background-color: #36a373;
}
</style>
