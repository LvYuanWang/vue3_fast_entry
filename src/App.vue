<template>
  <div id="app">
    <h1>KeepAlive 内置组件测试</h1>
    <nav>
      <RouterLink to="/">switch-component</RouterLink>
      <RouterLink to="/timer">Timer</RouterLink>
      <RouterLink to="/textInput">TextInput</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/checkboxList">CheckboxList</RouterLink>
    </nav>
    <div class="content-box">
      <RouterView v-slot="{ Component }">
        <!-- 
        <keep-alive>
          <component :is="Component" />
        </keep-alive> 
        -->

        <!-- 配置需要缓存哪些组件的状态 -->
        <!-- 只对 include 内的组件缓存状态 -->
        <!-- 
        <keep-alive include="Timer,TextInput">
          <component :is="Component" />
        </keep-alive>
        -->

        <!-- 配置不需要缓存哪些组件的状态 -->
        <!-- 对 exclude 内的组件不缓存状态 -->
        <keep-alive exclude="Timer,TextInput">
          <component :is="Component" />
        </keep-alive>

        <!-- 当缓存组件状态的数量大于 max 时删除缓存组件的第1个状态 -->
        <!--
        <keep-alive max="3">
          <component :is="Component" />
        </keep-alive>
        -->
      </RouterView>
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
