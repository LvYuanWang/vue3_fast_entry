<template>
  <div>
    <h2>计数器</h2>
    <p>当前计数：{{ counterStore.count }}</p>
    <button @click="counterStore.increment">增加</button>
    <button @click="counterStore.decrement">减少</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/useCounterStore'

const counterStore = useCounterStore()
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
