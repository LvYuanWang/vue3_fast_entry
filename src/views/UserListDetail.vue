<template>
  <el-button type="success" :icon="Back" @click="navigateToUserList">返回</el-button>
  <el-card style="margin-top: 28px">
    <template #header>
      <div class="header-container">
        <el-text size="large" tag="b" style="font-size: 24px">{{ user.name }}</el-text>
        <div>
          <el-button type="primary" @click="navigateToEdit" :icon="Edit" circle size="large" />
          <el-button type="danger" @click="deleteUser" :icon="Delete" circle size="large" />
        </div>
      </div>
    </template>
    <el-descriptions label-width="200" column="1" border>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 10px"><Iphone /></el-icon>
            电话:
          </div>
        </template>
        {{ user.phone }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 10px"><Message /></el-icon>
            邮箱:
          </div>
        </template>
        {{ user.email }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 10px"><Flag /></el-icon>
            文化水平:
          </div>
        </template>
        {{ user.education }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 10px"><School /></el-icon>
            毕业院校:
          </div>
        </template>
        {{ user.graduationschool }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-icon style="margin-right: 10px"><Service /></el-icon>
            专业:
          </div>
        </template>
        {{ user.profession }}
      </el-descriptions-item>
    </el-descriptions>
    <template #footer>
      <div style="display: flex; gap: 10px">
        <el-tag effect="dark">
          <el-icon><ChatLineRound /></el-icon>
          个人简介:
        </el-tag>
        <el-text tag="b" type="success">{{ user.profile }}</el-text>
      </div>
    </template>
  </el-card>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import {
  Back,
  Edit,
  Delete,
  Iphone,
  Message,
  Flag,
  School,
  Service,
  ChatLineRound,
} from '@element-plus/icons-vue'
import { onMounted, reactive } from 'vue'
import { getUserByIdApi, deleteUserByIdApi } from '@/api/userApi'

const user = reactive({
  name: '',
  age: '',
  phone: '',
  email: '',
  education: '本科',
  graduationschool: '',
  profession: '',
  profile: '',
})
const route = useRoute()
const router = useRouter()
const id = route.params.id

onMounted(() => {
  if (id) {
    getUserByIdApi(id).then((data) => Object.assign(user, data))
  }
})

// 返回列表页
function navigateToUserList() {
  router.push('/userList')
}

// 跳转到编辑页面
function navigateToEdit() {
  router.push(`/edit/${id}`)
}

// 删除用户
function deleteUser() {
  if (window.confirm('确定要删除该用户吗?')) {
    // 删除用户
    deleteUserByIdApi(id).then(() => {
      router.push({
        path: '/userList',
        query: {
          type: 'warning',
          msg: '删除用户成功',
        },
      })
    })
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
}
.cell-item {
  display: flex;
  align-items: center;
}
</style>
