<template>
  <div>
    <h1>StoreTotalData</h1>
    <div class="store-total-container">
      <div>
        <h2>Counter Store</h2>
        <p>当前计数：{{ counterStore.count }}</p>
        <button @click="counterStore.increment">增加</button>
        <button @click="counterStore.decrement">减少</button>
      </div>
      <div>
        <h2>Checkbox Store</h2>
        <div class="buttons-box">
          <button
            v-for="item in listDataStore.checkboxData"
            :key="item.id"
            @click="editChooseData(item.id)"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/useCounterStore'
import { useListDataStore } from '@/stores/useListDataStore'
import { useRouter } from 'vue-router'

const counterStore = useCounterStore()
const listDataStore = useListDataStore()
const router = useRouter()

function editChooseData(id) {
  router.push(`/editCheckboxList?id=${id}`)
}
</script>

<style scoped>
.store-total-container > div {
  box-shadow: 0 0 4px #a0a0a0;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
}
button:hover {
  background-color: #36a373;
}

.buttons-box {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 5px;
}

.buttons-box button {
  font-size: 30%;
}

@media (max-width: 1150px) {
  .buttons-box {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
