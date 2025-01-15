<template>
  <div :class="['alert', 'alert-dismissible', `alert-${type}`]" role="alert">
    <button type="button" class="close" @click="closeAlert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <strong>提示!</strong> {{ alert }}
  </div>
</template>

<script setup>
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

<style scoped></style>
