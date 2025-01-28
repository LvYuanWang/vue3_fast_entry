<template>
  <div>
    <Alert v-if="alert" :type="alert.type" :alert="alert.alert" @closeAlert="closeAlert" />
    <h1>用户列表</h1>
    <!-- 表格：显示用户信息 -->
    <el-table :data="list" stripe>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="联系方式" prop="phone"></el-table-column>
      <el-table-column label="职业" prop="profession"></el-table-column>
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="searchContent"
            @input="changeHandle"
            size="small"
            placeholder="查询用户"
            clearable
            :prefix-icon="Search"
          />
        </template>
        <template #default="scope">
          <router-link :to="`/userListDetail/${scope.row.id}`">
            <el-button size="small" type="success">详情</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { getUserInfo } from '@/api/userApi'
import { useRoute } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { computed, onMounted, ref } from 'vue'
import Alert from '@/components/Alert.vue'

const userInfo = ref([])
const searchList = ref([])
const route = useRoute()
const searchContent = ref('')

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

const list = computed(() => (searchList.value.length ? searchList.value : userInfo.value))
const changeHandle = () => {
  searchList.value = userInfo.value.filter(({ name }) => name.includes(searchContent.value))
}

// 关闭提示
function closeAlert() {
  alert.value = null
}
</script>

<style scoped>
.el-notification {
  width: 300px !important;
  position: fixed;
}
</style>
