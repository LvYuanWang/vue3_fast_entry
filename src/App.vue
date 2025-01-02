<template>
  <div class="container">
    <hr class="hr" />
    <div>
      <h1>绑定类</h1>
      <h2>对象方法</h2>
      <div class="demo" :class="{ active: isActive, 'text-danger': hasError }">绑定样式类</div>
      <div class="demo" :class="classObj">绑定样式类(对象语法)</div>
      <div class="demo" :class="computedClassObj">绑定样式类(计算属性)</div>
      <h2>数组方法</h2>
      <div :class="[isActive ? 'active' : '', errorClass]">绑定样式类</div>
      <div :class="[{ 'active': isActive }, errorClass]">绑定样式类(数组嵌套对象)</div>
    </div>
    <div>
      <h1>绑定内联样式</h1>
      <h2>对象方法</h2>
      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定内联样式</div>
      <div :style="styleObj">绑定内联样式</div>
      <h2>数组方法</h2>
      <div :style="styleArr">绑定内联样式</div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

const isActive = ref(true);
const hasError = ref(false);
const errorClass = ref('text-danger');
// 类名绑定(对象语法)
const classObj = reactive({
  active: true,
  'text-danger': hasError.value
});
// 计算属性方式
const computedClassObj = computed(() => {
  return {
    active: isActive.value && !hasError.value,
    'text-danger': hasError.value && hasError.value.type === 'fatal'
  }
});

// 绑定内联样式
const activeColor = ref('red');
const fontSize = ref(20);
const styleObj = reactive({
  color: 'blue',
  fontSize: fontSize.value + 'px'
});
// 数组方法
const styleArr = ref([styleObj, { backgroundColor: 'green', textDecoration: 'underline' }]);

setTimeout(() => {
  hasError.value = { type: 'fatal' };
  classObj['text-danger'] = true;
}, 2000);
setInterval(() => {
  fontSize.value = Math.floor(Math.random() * 50);
  isActive.value = [true, false][Math.floor(Math.random() * 2)];
  activeColor.value = `#${Math.random().toString(16).substring(2, 8)}`;
}, 3000);
setTimeout(() => {
  styleArr.value.pop();
}, 3000);
</script>

<style scoped>
* {
  transition: all 1s;
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

.text-danger {
  color: red;
}

.active {
  background-color: blue;
}
</style>