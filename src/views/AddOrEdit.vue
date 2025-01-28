<template>
  <div class="container">
    <h1 class="page-header">{{ id ? '修改用户' : '添加用户' }}</h1>
    <el-form
      ref="formRef"
      :model="user"
      :rules
      label-width="auto"
      label-position="left"
      status-icon
    >
      <el-form-item label="姓名: " prop="name">
        <el-input clearable autofocus placeholder="请输入用户姓名" v-model.trim="user.name">
          <template #prepend>
            <el-icon><User /></el-icon>
          </template>
          <template #append>CH</template>
        </el-input>
      </el-form-item>
      <el-form-item label="年龄: " prop="age">
        <el-input type="number" min="1" max="120" placeholder="请填写用户年龄" v-model="user.age">
          <template #prepend>
            <el-icon><ZoomIn /></el-icon>
          </template>
          <template #append>Age</template>
        </el-input>
      </el-form-item>
      <el-form-item label="电话: " prop="phone">
        <el-input placeholder="请填写用户电话号码" v-model="user.phone">
          <template #prepend>
            <el-icon><Phone /></el-icon>
          </template>
          <template #append>Tel</template>
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱: " prop="email">
        <el-input placeholder="请填写用户邮箱" v-model="user.email">
          <template #prepend>
            <el-icon><Message /></el-icon>
          </template>
          <template #append>.com</template>
        </el-input>
      </el-form-item>
      <el-form-item label="学历: " prop="education">
        <el-select v-model="user.education" placeholder="请选择学历">
          <el-option value="小学"></el-option>
          <el-option value="初中"></el-option>
          <el-option value="高中"></el-option>
          <el-option value="中专"></el-option>
          <el-option value="大专"></el-option>
          <el-option value="大学"></el-option>
          <el-option value="研究生"></el-option>
          <el-option value="博士"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="毕业学校: " prop="graduationschool">
        <el-input placeholder="请填写用户毕业院校" v-model.trim="user.graduationschool">
          <template #prepend>
            <el-icon><School /></el-icon>
          </template>
          <template #append>School</template>
        </el-input>
      </el-form-item>
      <el-form-item label="职业: " prop="profession">
        <el-input placeholder="请填写用户职业" v-model.trim="user.profession">
          <template #prepend>
            <el-icon><Position /></el-icon>
          </template>
          <template #append>Profession</template>
        </el-input>
      </el-form-item>
      <el-form-item label="个人介绍: " prop="profile">
        <el-input
          v-model.trim="user.profile"
          maxlength="100"
          type="textarea"
          show-word-limit
          placeholder="请简单的介绍一下你自己，包括兴趣、爱好等信息..."
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitUserInfo">{{
          id ? '确认修改' : '确认新增'
        }}</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { User, ZoomIn, Phone, Message, School, Position } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { getUserByIdApi, addUserApi, editUserByIdApi } from '@/api/userApi'

const formRef = ref(null)

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
const id = ref(route.params.id)

const rules = {
  name: [{ required: true, message: 'User Name Not Null!', trigger: 'blur' }],
  age: [
    { required: true, message: 'User Age Not Null!', trigger: 'blur' },
    { min: 1, max: 120, message: 'User Age Must Between 1 and 120!', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: 'User Tel Not Null!', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: 'User Tel Must Be Correct!', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'User Email Not Null!', trigger: 'blur' },
    { type: 'email', message: 'User Email Must Be Correct!', trigger: 'blur' },
  ],
  graduationschool: [{ required: true, message: 'GraduationSchool Not Null!', trigger: 'blur' }],
  profession: [{ required: true, message: 'Profession Not Null!', trigger: 'blur' }],
  profile: [{ required: true, message: 'Profile Not Null!', trigger: 'blur' }],
}

// 如果有 id，就获取用户信息
if (id.value) {
  getUserByIdApi(id.value).then((data) => Object.assign(user, data))
}

// 重置表单
function resetForm() {
  user.name = ''
  user.age = ''
  user.phone = ''
  user.email = ''
  user.education = '本科'
  user.graduationschool = ''
  user.profession = ''
  user.profile = ''
}

// 提交用户信息
function submitUserInfo() {
  for (const key in user) {
    if (!user[key]) {
      alert('用户信息不能有空!!')
      return
    }
  }
  formRef.value.validate((valid) => {
    if (valid) {
      if (id.value) {
        // 修改用户信息
        editUserByIdApi(id.value, user).then(() => {
          router.push({
            path: '/userList',
            query: {
              type: 'success',
              msg: '修改用户成功',
            },
          })
        })
      } else {
        // 新增用户信息
        addUserApi(user).then(() => {
          router.push({
            path: '/userList',
            query: {
              type: 'success',
              msg: '新增用户成功',
            },
          })
        })
      }
    } else {
      alert('请填写完整的用户信息')
      return false
    }
  })
}

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      getUserByIdApi(newId).then((data) => Object.assign(user, data))
    } else {
      id.value = ''
      resetForm()
    }
  },
)
</script>

<style lang="scss" scoped></style>
