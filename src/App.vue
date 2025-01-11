<template>
  <div id="app">
    <h1>App Component</h1>
    <hr />
    <TestCom />
  </div>
</template>

<script setup>
// 局部注册组件
import TestCom from './components/TestCom.vue';
</script>

<style scoped>
#app {
  border: 1px solid #000;
  padding: 10px;
}
</style>