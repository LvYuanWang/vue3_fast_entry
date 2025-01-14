<template>
  <div class="footer">
    <span>剩余 {{ activeNum }} 项</span>
    <div class="startList">
      <a href="#/all" :class="{ active: curChooseTodoType === 'all' }">全部</a>
      <a href="#/active" :class="{ active: curChooseTodoType === 'active' }">未完成</a>
      <a href="#/completed" :class="{ active: curChooseTodoType === 'completed' }">已完成</a>
    </div>
    <span v-show="todoListCompletedNum" class="cleanCompleted" @click="$emit('cleanCompleted')">清除已完成</span>
  </div>
</template>

<script setup>
const activeNum = defineModel('activeNum');
const todoListCompletedNum = defineModel('todoListCompletedNum');
const curChooseTodoType = defineModel('curChooseTodoType');
</script>

<style scoped>
@font-face {
  font-family: "newChinaFont";
  src: url("../assets/newChinaFont.ttf");
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  font-family: "newChinaFont";
  position: relative;
  border-bottom: 1px solid #cccccc96;
}

.footer::after,
.footer::before {
  content: "";
  position: absolute;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .2);
}

.footer::after {
  bottom: -7px;
  width: 98.5%;
  height: 5px;
}

.footer::before {
  bottom: -14px;
  width: 96.5%;
  height: 5px;
}

.startList {
  white-space: nowrap;
}

.startList a:nth-child(2) {
  margin: 0 20px;
}

.startList a {
  text-decoration: none;
  color: black;
  padding: 4px 5px 2px 5px;
  border-radius: 5px;
}

.active {
  outline: 1px solid red;
}

.cleanCompleted {
  cursor: pointer;
}

.cleanCompleted:hover {
  color: crimson;
}
</style>