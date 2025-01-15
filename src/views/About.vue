<template>
  <div class="about-container">
    <h1>关于我们</h1>
    <ShowBox>
      <template #title="{ title }">{{ title }}</template>
      <template #default="{ src }">
        <img :src="src" />
      </template>
    </ShowBox>
    <p>该页面显示一些其他详细的信息!!</p>
  </div>
</template>

<script setup>
import ShowBox from '@/components/ShowBox.vue'
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
