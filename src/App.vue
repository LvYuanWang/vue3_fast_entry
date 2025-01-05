<template>
  <h1 style="text-align: center;">表单处理</h1>
  <div class="container">
    <hr class="hr" />
    <div>
      <h1>表单元素的数据绑定</h1>
      <h2>文本域</h2>
      <textarea cols="30" rows="5" v-model="textContent"></textarea>
      <p>你当前输入的内容为: {{ textContent }}</p>
      <hr>
      <h2>复选框</h2>
      <input type="checkbox" v-model="isChecked" />
      <button @click="isChecked = !isChecked">{{ !isChecked }}</button>
      <hr>
      <h2>自定义真假值</h2>
      <input type="checkbox" true-value="yes" false-value="no" v-model="checkedValue" />
      <button
        @click="checkedValue === 'yes' ? (checkedValue = 'no') : (checkedValue = 'yes')">{{ checkedValue }}</button>
      <hr>
      <h2>多复选框</h2>
      <div v-for="(item, index) in checkedArrData" :key="index">
        <label for="item.id">{{ item.title }}</label>
        <input type="checkbox" :id="item.id" :value="item.value" v-model="hobby" />
      </div>
      <p>{{ message || "请选择爱好!!" }}</p>
      <hr>
      <h2>单选框</h2>
      <input type="radio" id="male" value="男" v-model="gender">
      <label for="male">男</label>
      <input type="radio" id="female" value="女" v-model="gender">
      <label for="female">女</label>
      <input type="radio" id="hiddenVal" value="保密" v-model="gender">
      <label for="hiddenVal">保密</label>
      <hr>
      <h2>下拉列表</h2>
      <select v-model="selectValue">
        <option value="" disabled>请选择</option>
        <option v-for="(item, index) in selectArrData" :key="index" :value="item.key">{{ item.value }}</option>
      </select>
      <p>你选择的英雄类型是: {{ selectValue }}</p>
      <hr>
      <h2>多下拉列表</h2>
      <select v-model="selectValues" multiple>
        <option value="" disabled>请选择</option>
        <option v-for="(item, index) in selectArrData" :key="index" :value="item.key">{{ item.value }}</option>
      </select>
      <p>你喜欢玩的英雄类型有: {{ selectValues }}</p>
    </div>
    <div>
      <h1>表单相关修饰符</h1>
      <h2>v-model.lazy</h2>
      <input type="text" v-model.lazy="formContent" />
      <p>输入的内容: {{ formContent }}</p>
      <p>内容的类型: {{ typeof formContent }}</p>
      <p>内容的长度: {{ formContent.length }}</p>
      <h2>v-model.number</h2>
      <input type="text" v-model.number="formContent2" />
      <p>输入的内容: {{ formContent2 }}</p>
      <p>内容的类型: {{ typeof formContent2 }}</p>
      <p>内容的长度: {{ formContent2.length }}</p>
      <h2>v-model.trim</h2>
      <input type="text" v-model.trim="formContent3" />
      <p>输入的内容: {{ formContent3 }}</p>
      <p>内容的类型: {{ typeof formContent3 }}</p>
      <p>内容的长度: {{ formContent3.length }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const textContent = ref('');
const isChecked = ref(false);
const checkedValue = ref('yes');
const hobby = ref([]);
const checkedArrData = ref([
  { id: 'swim', title: '游泳', value: '游个泳' },
  { id: 'run', title: '跑步', value: '跑个步' },
  { id: 'ride', title: '骑行', value: '骑个行' },
  { id: 'jump', title: '跳绳', value: '跳个绳' },
  { id: 'basketball', title: '打篮球', value: '打个球' }
]);
const message = computed(() => {
  if (hobby.value.length === 0) return;
  else return hobby.value.join('、');
})

const gender = ref('保密');
const selectArrData = ref([
  { key: '射手', value: '百里守约' },
  { key: '法师', value: '王昭君' },
  { key: '坦克', value: '程咬金' },
  { key: '辅助', value: '大乔' },
  { key: '刺客', value: '兰陵王' },
  { key: '战士', value: '铠' }
]);
const selectValue = ref('');
const selectValues = ref([]);
setTimeout(() => {
  gender.value = '男';
}, 2000);

// 表单相关修饰符
const formContent = ref('');
const formContent2 = ref('');
const formContent3 = ref('');
</script>

<style scoped>
* {
  transition: all 1s;
}

input {
  padding: 5px 0 5px 5px;
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