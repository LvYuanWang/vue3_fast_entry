<template>
  <div class="home-container">
    <h1>主页</h1>
    <div class="content-box">
      <el-card>
        <template #header>
          <div class="header">今日壁纸分享</div>
        </template>
        <div class="body">
          <img src="../assets/蜘蛛侠.jpg" alt="蜘蛛侠" />
          <div class="wallpaper-info">
            <span>不要随波逐流,寻找你自己的路。—— 《蜘蛛侠》</span>
          </div>
        </div>
        <template #footer>
          <div class="footer">2025/1/13</div>
        </template>
      </el-card>
      <div class="switch-slot">
        <el-card>
          <div class="body">
            <img src="../assets/海贼王图片.png" alt="海贼王" />
            <div class="wallpaper-info">
              <span>我是要成为海贼王的男人！ ——蒙奇·d·路飞</span>
            </div>
          </div>
          <template #[switchSlot]>
            <div class="footer">2025/1/13</div>
          </template>
        </el-card>
        <button @click="toggleSlot">show card header/footer</button>
      </div>
    </div>
    <p>该页面显示一些主页的信息!!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const switchSlot = ref('footer')

const toggleSlot = () => {
  switchSlot.value = switchSlot.value === 'footer' ? 'header' : 'footer'
}
</script>

<style scoped>
.content-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

img {
  width: 100%;
  height: auto;
}

.header {
  font-weight: bold;
  text-align: center;
  font-size: 14px;
}

.wallpaper-info {
  padding: 5px;
  font-size: 16px;
}

.footer {
  text-align: right;
  font-size: 12px;
}

.switch-slot {
  text-align: center;
}

.switch-slot button {
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;
  transition: all 0.4s;
}

.switch-slot button:hover {
  background-color: rgb(177, 88, 177);
  color: white;
}

.switch-slot .body {
  padding: 5px;
}

.switch-slot .body > div {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: purple;
}
</style>
