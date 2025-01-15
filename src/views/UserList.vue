<template>
  <div>
    <Alert v-if="alert" :type="alert.type" :alert="alert.alert" @closeAlert="closeAlert" />
    <h1>用户列表</h1>
    <!-- 搜索框 -->
    <input type="text" class="form-control" placeholder="搜索内容" @input="changeHandle" />
    <!-- 表格：显示用户信息 -->
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>联系方式</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.phone }}</td>
          <td>
            <router-link :to="`/userListDetail/${item.id}`">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { getUserInfo } from '@/api/userApi'
import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import Alert from '@/components/Alert.vue'

const userInfo = ref([])
const searchContent = ref([])
const route = useRoute()

const alert = ref(null)

onMounted(() => {
  getUserInfo().then((data) => (userInfo.value = data))

  if (route.query && route.query.msg) {
    alert.value = {
      type: 'success',
      alert: route.query.msg,
    }
  }
})

const list = computed(() => (searchContent.value.length ? searchContent.value : userInfo.value))
const changeHandle = (e) => {
  searchContent.value = userInfo.value.filter(({ name }) => name.includes(e.target.value))
}

// 关闭提示
function closeAlert() {
  alert.value = null
}
</script>

<style lang="scss" scoped></style>
