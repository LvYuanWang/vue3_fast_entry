<template>
  <div class="detail-container">
    <h1>详情页面</h1>
    <el-card>
      <template #header> 通过此系统来熟悉 vue 以及 vue router 的使用 </template>
      <div class="content">
        <p>联系方式:</p>
        <div class="btns">
          <RouterLink v-for="(route, index) in routes" :key="index" :to="`/detail/${route.route}`">
            <el-button
              type="primary"
              :plain="!route.route.includes(currentPath)"
              :icon="route.icon"
              circle
            ></el-button>
          </RouterLink>
        </div>
      </div>
      <template #footer>
        <div class="footer">
          <RouterView />
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { PhoneFilled, Message } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const routes = [
  { route: 'tel', icon: PhoneFilled },
  { route: 'email', icon: Message },
]

const currentPath = ref(null)

setCurrentPath()

watch(route, () => {
  setCurrentPath()
})

function setCurrentPath() {
  const fullPath = route.fullPath
  const lastIndex = fullPath.indexOf('/', 1)
  currentPath.value = fullPath.slice(lastIndex).slice(1)
}
</script>

<style scoped>
.detail-container {
  overflow: hidden;
}

.content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btns {
  display: flex;
  gap: 10px;
}
</style>
