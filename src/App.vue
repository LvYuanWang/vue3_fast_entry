<template>
  <div id="app">
    <h1>Vue 3 Element Plus</h1>
    <ElementButton />
    <hr />
    <ElementForm />
  </div>
</template>

<script setup>
import ElementButton from './components/ElementButton.vue'
import ElementForm from './components/ElementForm.vue'
</script>

<style scoped>
#app {
  padding: 10px;
}
</style>
