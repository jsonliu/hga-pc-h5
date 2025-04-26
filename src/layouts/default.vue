<template>
  <div class="layout-default">
    <div class="header">
      <div class="header-left" @click="onHomeClick">
        <van-icon name="wap-home" size="24" />
      </div>
      <div class="header-center">
        <van-tabs v-model:active="tabActive" swipeable>
          <van-tab title="滚球" />
          <van-tab title="即将开赛" />
          <van-tab title="热门" />
          <van-tab title="今日" />
          <van-tab title="早盘" />
          <van-tab title="冠军" />
          <van-tab title="综合过关" />
        </van-tabs>
      </div>
      <div class="header-right" @click="showPopup = true">
        <van-icon name="user-o" size="24" />
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <van-tabbar v-model="active" route safe-area-inset-bottom>
      <van-tabbar-item to="/sports" icon="home-o">
        体育
      </van-tabbar-item>
      <van-tabbar-item to="/schedule" icon="calendar-o">
        赛程
      </van-tabbar-item>
      <van-tabbar-item to="/bet-slip" icon="notes-o">
        注单
      </van-tabbar-item>
      <van-tabbar-item to="/my-match" icon="star-o">
        我的赛事
      </van-tabbar-item>
      <van-tabbar-item to="/bet-history" icon="orders-o">
        投注记录
      </van-tabbar-item>
    </van-tabbar>
    
    <!-- 右侧弹出层 -->
    <van-popup
      v-model:show="showPopup"
      position="right"
      :style="{ width: '80%', height: '100%' }"
    >
      <div class="popup-header">
        <van-nav-bar
          title="个人中心"
          left-arrow
          @click-left="showPopup = false"
        />
      </div>
      <div class="popup-content">
        <van-cell-group>
          <van-cell title="我的账户" is-link />
          <van-cell title="投注记录" is-link />
          <van-cell title="账户明细" is-link />
          <van-cell title="设置" is-link />
        </van-cell-group>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const showPopup = ref(false)
const route = useRoute()
const router = useRouter()
const active = ref(0)
const tabActive = ref(0)

// 点击首页图标
const onHomeClick = () => {
  router.push('/home')
}

// 移除原来的 onUserClick 函数，因为现在直接在模板中处理
</script>

<style scoped>
.layout-default {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f7f8fa;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 44px;
  background: #fff;
  border-bottom: 1px solid #ebedf0;
  padding: 0 12px;
}

.header-left,
.header-right {
  flex: none;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.header-center {
  flex: 1;
  overflow: hidden;
}

:deep(.van-tabs) {
  --van-tabs-line-height: 36px;
}

:deep(.van-tabs__wrap) {
  height: 36px;
}

:deep(.van-tab) {
  padding: 0 12px;
  font-size: 14px;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--van-tabbar-height);
}

:deep(.van-tabbar) {
  border-top: 1px solid #ebedf0;
}

:deep(.van-tabbar-item) {
  color: #646566;
}

:deep(.van-tabbar-item--active) {
  color: var(--van-primary-color);
}

.popup-header {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
}

.popup-content {
  padding: 12px 0;
}

:deep(.van-popup) {
  background: #f7f8fa;
}
</style>