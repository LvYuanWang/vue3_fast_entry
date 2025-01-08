<template>
  <div>
    <h1>watchEffect</h1>
    <div class="box">
      <h2>团队管理</h2>
      <ul>
        <li v-for="member in team.members" :key="member.id">
          {{ member.name }} - {{ member.role }} - {{ member.status }}
        </li>
      </ul>
      <button @click="updateLeaderStatus">切换领导的状态</button>
      <button @click="updateMemberStatus">切换成员的状态</button>
    </div>
    <div class="box">
      <h2>回调触发的时机</h2>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <div v-if="isShow" ref="divRef">
        <p>this is a test</p>
      </div>
      <p>上面的高度为: {{ height }}</p>
    </div>
    <div class="box">
      <h2>停止侦听器</h2>
      <button @click="num++">{{ num }}</button>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';

const team = reactive({
  members: [
    { id: 1, name: 'Alice', role: 'Leader', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Member', status: 'Active' }
  ]
});

function updateLeaderStatus() {
  const leader = team.members.find(member => member.role === 'Leader');
  // 切换状态
  leader.status = leader.status === 'Active' ? 'Inactive' : 'Active';
}

function updateMemberStatus() {
  const member = team.members.find(member => member.role === 'Member');
  // 切换状态
  member.status = member.status === 'Active' ? 'Inactive' : 'Active';
}

watchEffect(() => {
  const leader = team.members.find(me => me.role === 'Leader');
  console.log('Leader status:', leader.status);
})


// 回调触发的时机
const isShow = ref(false);
const height = ref(0);
const divRef = ref(null);
// watch写法
watch(isShow, () => {
  height.value = divRef.value ? divRef.value.offsetHeight : 0;
  console.log(`当前获取的高度为: ${height.value}`);
}, { flush: 'post' });
// watchEffect写法
// watchEffect(() => {
//   height.value = divRef.value ? divRef.value.offsetHeight : 0;
//   console.log(`当前获取的高度为: ${height.value}`);
// });

// 停止侦听器
const num = ref(0);
const message = ref('');
const unwatch = watch(num, (newValue) => {
  // 当num等于为5时停止侦听
  if (newValue === 5) {
    unwatch();
  }
  message.value = `当前num值为: ${num.value}`;;
})
</script>

<style scoped>
.box {
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>