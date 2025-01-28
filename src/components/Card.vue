<template>
  <el-card>
    <template #header>
      <slot name="title">Header Info</slot>
    </template>
    <template #default>
      <slot>This is Card body container info</slot>
    </template>
    <template #footer>
      <slot name="footer">Footer Info</slot>
    </template>
  </el-card>
</template>

<script setup></script>

<style scoped>
* {
  user-select: none;
}
</style>
