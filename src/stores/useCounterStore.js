import { defineStore } from "pinia";

export const useCounterStore = defineStore("count", {
  // 配置数据初始状态
  state: () => ({
    count: 10
  }),
  // 定义修改数据的方法
  actions: {
    // 增加 count
    increment() {
      this.count++;
    },
    // 减少 count
    decrement() {
      this.count--;
    }
  }
})