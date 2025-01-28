<template>
  <div id="app">
    <el-container class="container">
      <el-header class="title">用户管理系统</el-header>
      <el-container class="box">
        <el-aside width="200px" class="nav">
          <div class="links-container">
            <router-link
              v-for="(route, index) in routes"
              :key="index"
              :to="`/${route.route}`"
              class="navigation"
            >
              <el-button size="large" color="#001529" :plain="!route.route.includes(currentPath)">{{
                route.name
              }}</el-button>
            </router-link>
          </div>
        </el-aside>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPath = ref(null)

const routes = [
  { route: 'home', name: '主页' },
  { route: 'userList', name: '用户列表' },
  { route: 'detail', name: '详情' },
  { route: 'add', name: '添加用户' },
  { route: 'about', name: '关于我们' },
]

watch(route, () => {
  const fullPath = route.fullPath
  const lastIndex = fullPath.indexOf('/', 1) !== -1 ? fullPath.indexOf('/', 1) : fullPath.length
  currentPath.value = fullPath.slice(1, lastIndex)
})
</script>

<style scoped>
.title {
  color: #fff;
  font-size: 24px;
  background-color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  overflow: hidden;
  height: 100%;
}

.container {
  height: 100vh;
}

.nav {
  background-color: #304156ba;
}

.links-container {
  display: grid;
}

.links-container button {
  margin: 0;
  width: 100%;
  border: none;
  border-radius: 0;
}
</style>
