<template>
  <div id="app">
    <UserCard name="LvBu" email="LvBu123@outlook.com" avatar-url="./src/assets/蜘蛛侠.jpg" />
    <UserCard :name="user.name" :email="`${user.name}123@outlook.com`" avatar-url="./src/assets/海绵bao.jpg" />
    <ShowUserInfo :user="user" />
    <div class="input-group">
      <input type="text" placeholder="请输入新的名字" v-model="newName" />
      <button @click="changeName">确定修改</button>
    </div>
  </div>
</template>

<script setup>
// 局部注册组件
import UserCard from './components/UserCard.vue';
import ShowUserInfo from './components/ShowUserInfo.vue';

import { ref } from 'vue';

const user = ref({
  name: 'Jack',
  age: 18,
  gender: '女'
});
const newName = ref('');

const changeName = () => {
  user.value.name = newName.value;
  newName.value = '';
};
</script>

<style scoped>
#app {
  width: 70%;
  margin: 0 auto;
}

.input-group {
  display: flex;
  margin-top: 20px;
}

input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>