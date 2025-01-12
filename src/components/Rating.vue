<template>
  <div class="stars-container">
    <span v-for="star in 5" :key="star" @click="setRatingStar(star)">
      {{ star <= starNum ? '★' : '☆' }}
    </span>
  </div>
  <input type="number" v-model="starNum" />
</template>

<script setup>
// 最新版的 组件v-model 写法
// const model = defineModel();

// function setRatingStar(star) {
//   model.value = star;
// }

// vue3.4 版本之前的写法
// const { modelValue } = defineProps(['modelValue']);
// const emit = defineEmits(['update:modelValue']);

// function setRatingStar(star) {
//   emit('update:modelValue', star);
// }



// 如果父组件设置了别名, 则需要使用别名
// const { starNum } = defineProps(['starNum']);
// const emit = defineEmits(['update:starNum']);
// function setRatingStar(newStar) {
//   emit('update:starNum', newStar);
// }


// defineModel 同样也可以设置验证规则
// const starNum = defineModel("starNum", {
//   type: Number,
//   required: true,
//   validator: (value) => {
//     if (value < 0 || value > 5) {
//       console.error('评分数值必须在0-5之间');
//       return false;
//     }
//     return true;
//   },
// });

// function setRatingStar(star) {
//   starNum.value = star;
// }


// 如果需要限制父组件传过来的值, 则可以配合父组件的修饰符使用
const [starNum, modifiers] = defineModel("starNum", {
  type: Number,
  required: true,
  // 更具父组件传的修饰符配合setter函数进行限制, 每次修改值都会触发setter函数
  set(value) {
    console.log(value);
    if (modifiers.number) {
      if (isNaN(value)) {
        console.error('评分数值必须是数字');
        value = 0;
      } else {
        value = Number(value);
      }
      if (value < 0) {
        value = 0
      } else if (value > 5) {
        value = 5;
      }
    }
    return value;
  }
});

function setRatingStar(star) {
  starNum.value = star;
}
</script>

<style scoped>
.stars-container {
  font-size: 30px;
  color: orange;
}

.stars-container span {
  cursor: pointer;
  margin: 0 1.5px;
}

.stars-container span:hover {
  color: red;
}
</style>