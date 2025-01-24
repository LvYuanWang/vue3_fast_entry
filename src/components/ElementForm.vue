<template>
  <el-card style="max-width: 600px">
    <template #header>
      <h2 style="margin: 0">User Info Form</h2>
    </template>
    <el-form
      label-position="left"
      ref="formRef"
      status-icon
      label-width="auto"
      :model="formInfo"
      :rules="rules"
    >
      <!-- avatar -->
      <el-form-item label="Avatar: " prop="avatar">
        <div class="avatar-box">
          <el-avatar :src="formInfo.avatar" class="avatar" style="flex-shrink: 0" />
          <el-input
            v-model="formInfo.avatar"
            placeholder="Avatar URL"
            class="urlInput"
            :prefixIcon="PictureFilled"
          ></el-input>
        </div>
      </el-form-item>
      <!-- name -->
      <el-form-item label="Name: " prop="name">
        <el-input
          v-model="formInfo.name"
          placeholder="Please Input Your Name"
          :prefixIcon="User"
        ></el-input>
      </el-form-item>
      <!-- Email -->
      <el-form-item label="Email: " prop="email">
        <el-input
          v-model="formInfo.email"
          placeholder="Please Input Your Email"
          :prefix-icon="Message"
        ></el-input>
      </el-form-item>
      <!-- Birthday -->
      <el-form-item label="Birthday: " prop="birthday">
        <el-date-picker
          v-model="formInfo.birthday"
          type="date"
          placeholder="Please Input Your Birth Day"
        />
      </el-form-item>
      <!-- Gender -->
      <el-form-item label="Gender: " prop="gender">
        <el-radio-group v-model="formInfo.gender">
          <el-radio value="male">male</el-radio>
          <el-radio value="female">female</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- Hobbies -->
      <el-form-item label="Hobbies: " prop="hobbies">
        <el-select
          v-model="formInfo.hobbies"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="Please Input You Hobbies"
        >
          <el-option label="Reading" value="reading"></el-option>
          <el-option label="Writing" value="writing"></el-option>
          <el-option label="Coding" value="coding"></el-option>
          <el-option label="Traveling" value="traveling"></el-option>
          <el-option label="Swimming" value="swimming"></el-option>
          <el-option label="Running" value="Running"></el-option>
        </el-select>
      </el-form-item>
      <!-- Notifications -->
      <el-form-item label="Notifications: " prop="notifications">
        <el-switch
          v-model="formInfo.notifications"
          class="ml-2"
          inline-prompt
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          active-text="Notify"
          inactive-text="Secrecy"
        />
      </el-form-item>
      <!-- LuckyColor -->
      <el-form-item label="LuckyColor: " prop="luckyColor">
        <el-color-picker v-model="formInfo.luckyColor" />
      </el-form-item>
      <!-- LuckyTime -->
      <el-form-item label="LuckyTime: " prop="luckyTime">
        <el-time-picker
          v-model="formInfo.luckyTime"
          is-range
          arrow-control
          range-separator="To"
          placeholder="Pick a Time"
        />
      </el-form-item>
      <!-- Rating -->
      <el-form-item label="Rating: " prop="rating">
        <el-rate v-model="formInfo.rating" show-score allow-half />
      </el-form-item>
      <!-- submit button -->
      <el-form-item>
        <el-button type="primary" :icon="Upload" @click="submitForm">Submit</el-button>
        <el-button type="danger" :icon="RefreshRight" @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
    <template #footer>
      <pre>{{ formInfo }}</pre>
    </template>
  </el-card>
</template>

<script setup>
import { PictureFilled, User, Message, Upload, RefreshRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
const formInfo = ref({
  avatar: '',
  name: '',
  email: '',
  birthday: '',
  gender: 'male',
  hobbies: [],
  notifications: false,
  luckyColor: '',
  luckyTime: [],
  rating: 0,
})

const formRef = ref(null)

// 规则
const rules = {
  avatar: [
    { required: true, message: 'Please Input Your Avatar Url!', trigger: 'blur' },
    { type: 'url', message: 'Please Input Effective Avatar Url Value!', trigger: 'blur' },
  ],
  name: [{ required: true, message: 'Please Input Your Name!', trigger: 'blur' }],
  email: [
    { required: true, message: 'Please Input Your Email!', trigger: 'blur' },
    { type: 'email', message: 'Please Input Your Effective Email Value', trigger: 'blue' },
  ],
  birthday: [{ required: true, message: 'Please Add Your Birthday Date', trigger: 'blur' }],
  hobbies: [{ required: true, message: 'Please Add Your Hobby Text', trigger: 'change' }],
  luckyColor: [
    { required: true, message: 'Please Choose Your luckyColor Value!', trigger: 'change' },
  ],
  luckyTime: [{ required: true, message: 'Please Add Your luckyTime Value!', trigger: 'blur' }],
  rating: [{ required: true, message: 'Please Make Rating', trigger: 'change' }],
}

// 提交表单
function submitForm() {
  formRef.value.validate((valid) => {
    if (valid) {
      alert('验证通过')
    } else {
      alert('表单验证不通过')
      return false
    }
  })
}

// 重置表单
function resetForm() {
  formInfo.value = {
    avatar: '',
    name: '',
    email: '',
    birthday: '',
    gender: 'male',
    hobbies: [],
    notifications: false,
    luckyColor: '',
    luckyTime: [],
    rating: 0,
  }
}
</script>

<style scoped>
.avatar-box {
  width: 100%;
  display: flex;
  gap: 10px;
}
</style>
