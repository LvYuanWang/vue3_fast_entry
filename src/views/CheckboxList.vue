<template>
  <div>
    <h2>复选框列表</h2>
    <ul>
      <li v-for="item in listDataStore.checkboxData" :key="item.id">
        <label :for="item.id">
          <input :id="item.id" type="checkbox" v-model="item.checked" />
          <b>{{ item.name }}</b>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useListDataStore } from '@/stores/useListDataStore'

const listDataStore = useListDataStore()
</script>

<style scoped>
ul {
  user-select: none;
  list-style: none;
  padding: 0;
}

li {
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 0 0 4px #ddd;
  margin-bottom: 10px;
}

li > label {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

input[type='checkbox'] {
  width: 25px;
  height: 25px;
  appearance: none;
}

input[type='checkbox']::before {
  content: '';
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right: 10px;
}

input[type='checkbox']:checked::before {
  background-color: #42b983;
}
</style>
