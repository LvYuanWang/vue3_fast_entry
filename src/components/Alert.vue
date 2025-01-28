<template>
  <el-card>
    <div class="alert-container">
      <div><el-tag>提示!</el-tag> {{ alert }}</div>
      <el-button :icon="Close" type="danger" circle @click="closeAlert" />
    </div>
  </el-card>
</template>

<script setup>
import { Close } from '@element-plus/icons-vue'

defineProps({
  type: String,
  alert: String,
})

const emits = defineEmits(['closeAlert'])

// 关闭提示
function closeAlert() {
  emits('closeAlert')
}
</script>

<style scoped>
.alert-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
