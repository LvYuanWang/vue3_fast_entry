<template>
  <div>
    <h2>文本输入框</h2>
    <input type="text" v-model="msg" />
    <p>
      输入的内容是：<b>{{ msg }}</b>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const msg = ref('')
</script>

<script>
export default {
  name: 'TextInput',
}
</script>

<style scoped>
input {
  padding: 5px 10px;
  border: none;
  box-shadow: 0 0 4px #ddd;
  border-radius: 5px;
  margin: 0 10px;
  outline: none;
  width: 40%;
  font-size: 20px;
}
</style>
