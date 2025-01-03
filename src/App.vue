<template>
  <div class="container">
    <hr class="hr" />
    <div>
      <h1>{{ Message }}</h1>
      <h2>事件传参</h2>
      <button @click="addNum(Math.random() * 10)">{{ count }}</button>
      <h2>事件对象</h2>
      <button @click="add('Hello Event!', $event)">changeMessage</button>
      <button @click="(event) => add('hello Func!', event)">箭头函数</button>
    </div>
    <div>
      <h1>修饰符</h1>
      <button @click.once.right="handleRightClick">右键点击(只能点击一次)</button>
      <button @click.ctrl="onClick">keydown ctrl and mouse Leftclick(ctrl+alt+click也能触发)</button>
      <button @click.ctrl.exact="onClick">keydown ctrl and mouse Leftclick(必须只能按住ctrl+click)</button>
      <h1>键盘事件</h1>
      <input type="text" @keyup.enter="submitText('Enter Key Pressed!', $event)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const Message = ref('Hello Vue 3');

function addNum(num) {
  count.value += num;
}
function add(message, event) {
  Message.value = message;
  console.log(event);
}
function onClick() {
  console.log('click');
}
function handleRightClick() {
  console.log("Right Click");
}
function submitText(message, event) {
  console.log(message);
  console.log(event.key);
}
</script>

<style scoped>
* {
  transition: all 1s;
}

button {
  padding: 5px 15px;
  margin: 10px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative;
}

.hr {
  position: absolute;
  height: 100%;
  left: 50%;
  top: -10px;
  transform: translateX(-50%) rotate(180deg);
  border-width: 1px;
  border-style: dashed;
}
</style>