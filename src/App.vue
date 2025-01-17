<template>
  <div id="app">
    <h1>KeepAlive 内置组件测试</h1>
    <nav>
      <RouterLink to="/">StoreTotal</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/checkboxList">CheckboxList</RouterLink>
    </nav>
    <div class="content-box">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}

nav a {
  padding: 5px 10px;
  color: blueviolet;
  text-decoration: none;
  border: 1px solid blueviolet;
  margin: 0 10px;
  border-radius: 5px;
}

.content-box {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
