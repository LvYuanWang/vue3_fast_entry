<template>
  <div>
    <h2>Switch Component</h2>
    <button @click="toggleComponent">switchComponent</button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import Home from './Home.vue'
import About from './About.vue'

const currentComponent = shallowRef(Home)

function toggleComponent() {
  currentComponent.value = currentComponent.value === Home ? About : Home
}
</script>

<script>
export default {
  name: 'SwitchComponent',
}
</script>

<style scoped>
button {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
