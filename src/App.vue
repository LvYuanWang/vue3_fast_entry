<template>
  <div id="app">
    <h1>欢迎来到Vue-router快速入门示例</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup></script>

<style scoped>
#app {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}

nav a {
  padding: 0 10px;
}
</style>
