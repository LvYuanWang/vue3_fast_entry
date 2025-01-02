<template>
  <div>
    <h1>{{ author.name }}</h1>
    <div>
      <span>Has Published books:</span>
      <div>{{ author.books.length > 0 ? "Yes" : "No" }}</div>
      <div>{{ isBookPublished }}</div>
      <div>{{ isBookPublishedFn() }}</div>
    </div>
    <h1>{{ fullName }}</h1>
    <h2>firstName: {{ firstName }}</h2>
    <h2>lastName: {{ lastName }}</h2>
    <h1>计算属性和方法的区别</h1>
    <button @click="countA++">Add CountA</button>
    <button @click="countB++">Add CountB</button>
    <p>computedA: {{ computedA }}</p>
    <p>computedB: {{ computedB }}</p>
    <p>methodA: {{ methodA() }}</p>
    <p>methodB: {{ methodB() }}</p>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const author = reactive({
  name: "John Dow",
  books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Future"]
})
const isBookPublished = computed(() => author.books.length > 0 ? "Yes" : "No");

// 利用 get 和 set 方法在 computed 中实现更改
const firstName = ref("John");
const lastName = ref("Dow");
const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (value) => {
    [firstName.value, lastName.value] = value.split(" ");
  }
})
setTimeout(() => {
  author.books = [];
  fullName.value = "Li Si";
}, 2000);

// 计算属性和方法
const isBookPublishedFn = () => author.books.length > 0 ? "Yes" : "No";

// 计算属性和方法的区别: 当依赖的数据发生变化时，计算属性会重新计算，而方法不会, 但是方法会在每次重新渲染时都会执行
const countA = ref(1);
const countB = ref(1);

const computedA = computed(() => {
  console.log("computedA");
  return countA.value + 1;
});
const computedB = computed(() => {
  console.log("computedB");
  return countB.value + 1;
});
const methodA = () => {
  console.log("methodA");
  return countA.value + 1;
};
const methodB = () => {
  console.log("methodB");
  return countB.value + 1;
};
</script>

<style lang="scss" scoped></style>