<template>
  <div :id :disabled="isDisable">{{ msg.split('').reverse().join('') }}</div>
  <div v-html="htmlCode" :id="`list-${number}`"></div>
  <div v-bind="attributeObj">{{ isDoing ? "正在进行" : "已经结束" }}</div>
  <div>{{ handleClick() }}</div>
  <h2>{{ Math.random() }}</h2>
  <h3>{{ Test.msg }}</h3>
</template>

<script>
export default {
  setup() {
    const msg = 'Hello Vue 3.0';
    const htmlCode = '<h1 style="color: red;">HTML Code</h1>';
    const id = 'my-id';
    const isDisable = null;
    const number = 1;
    const isDoing = true;
    const attributeObj = {
      id: "my-id",
      class: "my-class"
    };
    return {
      msg,
      htmlCode,
      id,
      isDisable,
      attributeObj,
      number,
      isDoing
    }
  },
  methods: {
    handleClick() {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>

<style scoped>
.my-class {
  color: red;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

#my-id {
  background-color: rgb(91, 91, 209);
}
</style>