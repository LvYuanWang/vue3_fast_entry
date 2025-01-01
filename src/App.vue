<template>
  <div>

  </div>
</template>

<script setup>
import { ref, shallowRef, toRef, toRefs, reactive, shallowReactive, isRef, isReactive, readonly, isReadonly, shallowReadonly, unref, toValue, isProxy } from "vue";
const value = 0;
const state = reactive({
  count: {
    value
  }
})
// toRef, toRefs
const countRef = toRef(state, 'count'); // 等于: const countRef = ref(state.count);
console.log(countRef.value.value); // 0
console.log(isReactive(state)); // true
console.log(isRef(countRef)); // true

const state2 = reactive({
  name: "John",
  age: 18
});
const state2Refs = toRefs(state2);
console.log(state2Refs); // { name: ref("John"), age: ref(18) }
console.log(state2Refs.name.value); // John
console.log(state2Refs.age.value); // 18

// unref, toValue
console.log(unref(value)); // 0
console.log(unref(countRef)); // 0

// readonly, isReadonly
const readonlyState = readonly(state2);
// readonlyState.age++; // 报错
console.log(isReadonly(readonlyState)); // true
console.log(readonlyState.age); // 18

// isRef, isReactive
const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
};
const state3 = ref(obj)
const state4 = shallowRef(obj)
const state5 = reactive(obj)
const state6 = shallowReactive(obj)
console.log(isRef(state3.value.c)); // false
console.log(isRef(state4.value.c)); // false
console.log(isReactive(state3.value.c)); // true
console.log(isReactive(state4.value.c)); // false
console.log(isReactive(state5.c)); // true
console.log(isReactive(state6.c)); // false

// isProxy: 检查一个对象是否是由 reactive、readonly、shallowReactive、shallowReadonly 创建的代理
const reactiveObject = reactive({ name: "John" });
const readonlyObject = readonly({ name: "John" });
const shallowReactiveObject = shallowReactive({ name: "John" });
const shallowReadonlyObject = shallowReadonly({ name: "John" });
// 普通对象
const normalObject = { name: "John" };

console.log(isProxy(reactiveObject)); // true
console.log(isProxy(readonlyObject)); // true
console.log(isProxy(shallowReactiveObject)); // true
console.log(isProxy(shallowReadonlyObject)); // true
console.log(isProxy(normalObject)); // false

// toValue
const func = () => 30;
console.log(toValue(30)); // 30
console.log(toValue(ref(20))); // 20
console.log(toValue(func)); // 30
</script>

<style lang="scss" scoped></style>