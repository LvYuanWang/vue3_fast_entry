<template>
  <div class="container">
    <div>
      <h1>使用ref响应式</h1>
      <div>{{ name }}</div>
      <h2>嵌套响应式</h2>
      <div>{{ Bill.name }}</div>
      <div>{{ Bill.age }}</div>
      <div>{{ Bill.count + 4 }}</div>
      <div>{{ Bill.nested.count + 1 }}</div>
      <h2>表层响应式</h2>
      <div id="BillTow">{{ BillTwo.name }}</div>
      <div>{{ BillTwo.age }}</div>
      <div>{{ BillTwo.nested.count }}</div>
      <h2>数组响应式</h2>
      <div v-for="(color, index) in colorArr" :key="index" :style="{ backgroundColor: color }" class="color_item">
        {{ color }}</div>
    </div>
    <div>
      <h1>使用reactive响应式</h1>
      <h2>嵌套响应式</h2>
      <div>{{ state.count1 }}</div>
      <div>{{ state.nested.count2 }}</div>
      <h2>表层响应式</h2>
      <div>{{ shallowState.count1 }}</div>
      <div>{{ shallowState.nested.count2 }}</div>
      <hr>
      <h2>{{ obj.name }}</h2>
      <h2>{{ nameThree.nameOne }}</h2>
    </div>
    <hr id="hr" />
  </div>
</template>

<script setup>
// ref: 深层响应式
// shallowRef: 浅层响应式
// nextTick: 下一次DOM更新循环结束之后执行延迟回调
// onMounted: 在挂载之后执行回调
// reactive: 深层响应式, 将对象转换为响应式对象
// shallowReactive: 浅层响应式, 将对象转换为响应式对象, 只监听对象的第一层属性
import { ref, shallowRef, reactive, shallowReactive, nextTick, onMounted } from 'vue';

// 使用ref响应式
// 现在的name就是一个响应式的数据
let name = ref("Bill"); // 顶级ref, 在模板中会自动解包
let colorArr = ref(["red", "green", "blue"]);
let BillTwoElement = null;
let Bill = ref({
  name: "Bill",
  age: 18,
  count: ref(1), // 非顶级ref, 新版本的vue会自动解包
  nested: {
    count: 0
  }
});
let BillTwo = shallowRef({
  name: "BillTwo",
  age: 20,
  nested: {
    count: 5,
  }
});
// setInterval(() => {
//   colorArr.value.push(`#${Math.random().toString(16).slice(2, 8)}`);
// }, 1000);
setTimeout(() => {
  // name.value = "Tom";
  Bill.value.name = "Tom";
  Bill.value.age = 20;
  Bill.value.nested.count = 1;
}, 2000);
// 不能更改
setTimeout(() => {
  BillTwo.value.name = "Tom";
  BillTwo.value.age = 20;
  BillTwo.value.nested.count = 1;
}, 2000);
// 可以更改
setTimeout(async () => {
  BillTwo.value = {
    name: "Tom",
    age: 20,
    nested: {
      count: 1
    }
  }
  // 等待DOM更新
  await nextTick();
  console.log(BillTwoElement.innerText);
}, 4000);
onMounted(() => {
  BillTwoElement = document.getElementById("BillTow");
  console.log(BillTwoElement.innerText);
})

// 使用reactive响应式
const state = reactive({
  count1: 0,
  nested: {
    count2: 1
  }
});
const shallowState = shallowReactive({
  count1: 3,
  nested: {
    count2: 3
  }
});
const obj = shallowReactive({
  name
});
const nameOne = ref("Alice");
const nameTwo = ref("Bob");
const nameThree = shallowReactive({ nameOne });

nameThree.nameOne = nameTwo;

setTimeout(() => {
  state.count1++;
  state.nested.count2++;
  shallowState.count1++;
}, 2000);
setTimeout(() => {
  obj.name.value = "John";
  nameOne.value = "Smith";
}, 3000);
setTimeout(() => {
  shallowState.nested.count2++;
  name.value = "Smith";
  nameTwo.value = "John";
}, 4000);
</script>

<style scoped>
.color_item {
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
  float: left;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 9px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative;
}

#hr {
  position: absolute;
  height: 100%;
  left: 50%;
  top: -10px;
  transform: translateX(-50%) rotate(180deg);
  border-width: 1px;
  border-style: dashed;
}
</style>