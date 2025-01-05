<template>
  <div id="app">
    <table>
      <tr>
        <th>
          <input type="checkbox" v-model="chooseAllShopping" />
          全选
        </th>
        <th>商品</th>
        <th>单价(元)</th>
        <th>数量</th>
        <th>小计(元)</th>
        <th>操作</th>
      </tr>
      <tr v-for="shopping in shoppingData" :key="shopping.id">
        <td>
          <input type="checkbox" v-model="shopping.checked" />
        </td>
        <td>{{ shopping.goods_name }}</td>
        <td>{{ shopping.goods_price }}</td>
        <td>
          <button @click="shopping.goods_num !== 0 && shopping.goods_num--">-</button>
          <input type="text" v-model="shopping.goods_num" class="priceNum" />
          <button @click="shopping.goods_num++">+</button>
        </td>
        <td>{{ shopping.goods_price * shopping.goods_num }}</td>
        <td>
          <button class="delete" @click="deleteShopping(shopping.id)">删除</button>
        </td>
      </tr>
    </table>
    <div class="footer">
      <div class="footer-left">
        <div class="checkboxBtn">
          <input type="checkbox" v-model="chooseAllShopping" />
          全选
        </div>
        <div class="deleteChoose" style="cursor: pointer;" @click="deleteChooseShopping">删除选中的商品</div>
        <div>共{{ shoppingData.length }}件商品, 已选择{{ shoppingData.filter(item => item.checked).length }}件</div>
      </div>
      <div class="footer-right">
        <div>合计(不含运费): <span style="color: red; font-weight: bold;">￥{{ totalPrice }}</span></div>
        <button>去结算</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const shoppingData = ref([
  {
    id: 1,
    goods_name: '华为手环',
    goods_price: 169,
    goods_num: 1,
    checked: true
  },
  {
    id: 2,
    goods_name: '索尼耳机',
    goods_price: 163,
    goods_num: 1,
    checked: true
  },
  {
    id: 3,
    goods_name: '小米汽车',
    goods_price: 1890,
    goods_num: 1,
    checked: false
  },
  {
    id: 4,
    goods_name: 'iPhone14',
    goods_price: 1699,
    goods_num: 1,
    checked: true
  }
]);

// 删除
const deleteShopping = (id) => {
  shoppingData.value = shoppingData.value.filter(item => item.id !== id);
}
// 删除选中的商品
const deleteChooseShopping = () => {
  shoppingData.value = shoppingData.value.filter(item => !item.checked);
}

// 全选
const chooseAllShopping = computed({
  get: () => shoppingData.value.every(item => item.checked),
  set: (val) => {
    shoppingData.value.forEach(item => item.checked = val);
  }
})

// 总价
const totalPrice = computed(() => {
  return shoppingData.value.reduce((total, item) => {
    if (item.checked) {
      total += item.goods_price * item.goods_num;
    }
    return total;
  }, 0);
})
</script>

<style scoped>
@import "./assets/shopping-cart.css";
</style>