<template>
    <div class="layouts-container">
        <!-- 头部avba-->
        <hga-navbar :tabs="navTabs" @leftClick="onHomeClick" @rightClick="showPopup = true" />
        <!-- main内容 -->
        <tiny-container :pattern="pattern">
            <div class="common-center">
                <div class="content">
                    <router-view />
                </div>
            </div>
            <template #header>
                <div class="common-center">Header</div>
            </template>
            <template #footer>
                <div class="common-center">Footer</div>
            </template>
        </tiny-container>
        <!-- 底部tabbar -->
        <template v-if="true">
            <div class="common-center">
                <!-- 图表库的使用 -->
                <TinyIconClose @click="cancel"></TinyIconClose>
                <hga-tabbar>
                    <hga-tabbar-item to="/sports" icon="sport">
                        体育
                    </hga-tabbar-item>
                    <hga-tabbar-item to="/schedule" icon="calendar">
                        赛程
                    </hga-tabbar-item>
                    <hga-tabbar-item to="/bet-slip" icon="list">
                        注单
                    </hga-tabbar-item>
                    <hga-tabbar-item to="/my-match" icon="star">
                        我的赛事
                    </hga-tabbar-item>
                    <hga-tabbar-item to="/bet-history" icon="time">
                        投注记录
                    </hga-tabbar-item>
                </hga-tabbar>
            </div>
        </template>
    </div>
</template>
  
<script setup lang="ts">
import HgaNavbar from '../components/hga-navbar/index.vue'
import HgaTabbar from '../components/hga-tabbar/index.vue'
import HgaTabbarItem from '../components/hga-tabbar-item/index.vue'
import { ref } from 'vue'
import { TinyContainer, TinyTabs, TinyTabItem } from '@opentiny/vue'
import { IconClose } from '@opentiny/vue-icon'
const TinyIconClose = IconClose()
const activeTab = ref(0)
const navTabs = [
  { title: '滚球', path: '/live-betting' },
  { title: '即将开赛', path: '/upcoming' },
  { title: '热门', path: '/hot' },
  { title: '今日', path: '/today' },
  { title: '早盘', path: '/early' },
  { title: '冠军', path: '/champion' },
  { title: '综合过关', path: '/parlay' }
]
const pattern = ref('classic')

// 移除不必要的图标实例化
const cancel = () => {
  // 处理取消事件
}
</script>
  
  <style scoped>
  .option-row {
    display: flex;
    align-items: center;
  }
  .option-row > span {
    display: inline-block;
    flex-shrink: 0;
    width: 100px;
    font-size: 16px;
    font-weight: bold;
  }
  .option-row .tiny-radio-group {
    flex-wrap: wrap;
    height: 60px;
  }
  .layouts-container .tiny-container {
    height: 300px;
    color: #5f6774;
    text-align: center;
    font-size: 18px;
    position: relative;
    margin-top: 24px;
  }
  
  .layouts-container .tiny-container :deep(.tiny-container__header) {
    background-color: var(--tv-color-info-bg-light);
    border: 3px solid var(--tv-color-border-container);
    color: var(--tv-color-info-text);
    line-height: 48px;
  }
  
  .layouts-container .tiny-container :deep(.tiny-container__aside) {
    background-color: var(--tv-color-error-bg-light);
    border: 3px solid var(--tv-color-border-container);
    color: var(--tv-color-error-text);
  }
  
  .layouts-container .tiny-container :deep(.tiny-container__main) {
    background-color: var(--tv-color-warn-bg-light);
    border: 3px solid var(--tv-color-border-container);
    color: var(--tv-color-warn-text);
  }
  
  .layouts-container .tiny-container :deep(.tiny-container__footer) {
    background-color: var(--tv-color-success-bg-light);
    border: 3px solid var(--tv-color-border-container);
    color: var(--tv-color-success-text);
  }
  .common-center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
<style scoped>
.layouts-container {
  width: 100%;
  min-height: 100vh;
  padding-top: 44px;
  display: flex;
  flex-direction: column;
  background: #f7f8fa;
}
</style>
  
