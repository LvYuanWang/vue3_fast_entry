<template>
  <div class="edit-checkbox-list">
    <h2>编辑复选框列表</h2>
    <input type="text" placeholder="请输入你要更改的爱好" v-model="hobby" class="item" />
    <select v-model="isChoose" class="item">
      <option :value="null" disabled>Please Select</option>
      <option :value="true">True</option>
      <option :value="false">False</option>
    </select>
    <button @click="updateData">更新</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useListDataStore } from '@/stores/useListDataStore'
import { useRoute, useRouter } from 'vue-router'

const hobby = ref('')
const isChoose = ref(null)
const listDataStore = useListDataStore()
const route = useRoute()
const router = useRouter()

const id = Number(route.query.id)

onMounted(() => {
  if (id && listDataStore.checkboxData.some((item) => item.id === id)) {
    listDataStore.checkboxData.map((item) => {
      if (item.id === id) {
        hobby.value = item.name
        isChoose.value = item.checked
      }
    })
  } else {
    alert('数据不存在')
    router.push('/')
  }
})

const updateData = () => {
  if (hobby.value && isChoose.value !== null) {
    listDataStore.updateCheckboxData({ id, name: hobby.value, checked: isChoose.value })
    router.push('/')
  } else {
    alert('请填写完整信息')
  }
}
</script>

<style scoped>
.edit-checkbox-list {
  display: flex;
  flex-direction: column;
}

.item {
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 0 0 4px #c8c7c7;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0px 10px;
  margin-top: 15px;
  width: 15%;
}

button:hover {
  background-color: #36a373;
}
</style>
