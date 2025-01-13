<template>
  <div id="app">
    <!-- 具名插槽 -->
    <Card>
      <template #header>
        <div class="header">今日壁纸分享</div>
      </template>
      <div class="body">
        <img src="./assets/蜘蛛侠.jpg" alt="蜘蛛侠" />
        <div class="wallpaper-info">
          <span>帅帅帅, 帅呆了!!!</span>
        </div>
      </div>
      <template #footer>
        <div class="footer">2025/1/13</div>
      </template>
    </Card>
    <!-- 动态插槽 -->
    <div class="switch-slot">
      <Card>
        <div class="body">
          <img src="./assets/海贼王图片.png" alt="海贼王" />
          <div class="wallpaper-info">
            <span>我是要成为海贼王的男人！ ——蒙奇·d·路飞</span>
          </div>
        </div>
        <template #[switchSlot]>
          <div class="footer">2025/1/13</div>
        </template>
      </Card>
      <button @click="toggleSlot">show card header/footer</button>
    </div>
    <!-- 作用域插槽 -->
    <ShowBox>
      <template #title="{ title }">{{ title }}</template>
      <template #default="{ src }">
        <img :src="src" />
      </template>
    </ShowBox>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';
import ShowBox from './components/ShowBox.vue';

const switchSlot = ref('footer');
// 切换插槽
const toggleSlot = () => {
  switchSlot.value = switchSlot.value === 'footer' ? 'header' : 'footer';
};
</script>

<style scoped>
#app {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.header {
  padding: 5px;
  font-size: 23px;
  font-weight: bold;
}

img {
  width: 100%;
  height: auto;
}

.wallpaper-info {
  padding: 5px;
  font-size: 16px;
}

.footer {
  padding: 5px;
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
  transition: all .4s;
}

.switch-slot button:hover {
  background-color: rgb(177, 88, 177);
  color: white;
}

.switch-slot .body {
  padding: 5px;
}

.switch-slot .body>div {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: purple;
}
</style>