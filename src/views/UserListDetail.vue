<template>
  <div class="details container">
    <button class="btn btn-default" @click="navigateToUserList">返回</button>
    <h1 class="page-header">
      {{ user.name }}
      <span class="pull-right">
        <button class="btn btn-primary" @click="navigateToEdit" style="margin-right: 10px">
          修改
        </button>
        <button class="btn btn-danger" @click="deleteUser">删除</button>
      </span>
    </h1>
    <!-- 第一组 -->
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">电话：{{ user.phone }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope">邮箱：{{ user.email }}</span>
      </li>
    </ul>
    <!-- 第二组 -->
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-book">文化水平：{{ user.education }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-flag">毕业院校：{{ user.graduationschool }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-briefcase">专业：{{ user.profession }}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-user">个人简介：{{ user.profile }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
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

<style scoped></style>
