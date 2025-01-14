<template>
  <div class="card-container">
    <div class="card-header">
      <slot name="header">Header Info</slot>
    </div>
    <div class="card-body">
      <slot>This is Card body container info</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Footer Info</slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  user-select: none;
}

.card-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header,
.card-footer {
  background-color: #f0f0f0;
}

.card-header {
  border-bottom: 1px solid #ccc;
}

.card-body {
  background-color: #f9f9f9;
  flex: 1;
}

.card-footer {
  border-top: 1px solid #ccc;
}
</style>
