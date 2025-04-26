<template>
  <div class="hga-navbar">
    <div class="navbar-left" @click="onLeftClick">
      <slot name="left">
        <TinyIconPublicHome />
      </slot>
    </div>
    <div class="navbar-center">
      <tiny-tabs v-model="activeTab" @click="handleTabChange">
        <tiny-tab-item
          v-for="(item, index) in tabs"
          :key="index"
          :name="item.path"
          :title="item.title"
        >
          {{ item.title }}
        </tiny-tab-item>
      </tiny-tabs>
    </div>
    <div class="navbar-right" @click="onRightClick">
      <slot name="right">
        <TinyIconUser />
      </slot>
    </div>

    <!-- 添加抽屉组件 -->
    <tiny-drawer
      v-model:visible="showDrawer"
      title="个人中心"
      :show-close="true"
      position="right"
      :width="drawerWidth"
      :z-index="1000"
      @close="onDrawerClose"
    >
      <div class="drawer-content">
        <!-- <hga-cell-group>
          <hga-cell title="我的账户" is-link @click="handleCellClick('account')" />
          <hga-cell title="投注记录" is-link @click="handleCellClick('bet-history')" />
          <hga-cell title="账户明细" is-link @click="handleCellClick('account-detail')" />
          <hga-cell title="设置" is-link @click="handleCellClick('settings')" />
        </hga-cell-group> -->
      </div>
    </tiny-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { TinyTabs, TinyTabItem, TinyDrawer } from '@opentiny/vue'
import { IconPublicHome, IconUser } from '@opentiny/vue-icon'
// import HgaCell from '../hga-cell/index.vue'
// import HgaCellGroup from '../hga-cell-group/index.vue'

const TinyIconPublicHome = IconPublicHome()
const TinyIconUser = IconUser()

interface TabItem {
  title: string
  path: string
}

const props = defineProps({
  tabs: {
    type: Array as () => TabItem[],
    default: () => []
  }
})

const emit = defineEmits(['leftClick', 'rightClick', 'change'])

const router = useRouter()
const activeTab = ref(props.tabs[0]?.path || '')

interface TabChangeEvent {
  name: string
  title: string
  index: number
}

const handleTabChange = (tab: TabChangeEvent) => {
  const { name } = tab as { name: string }
  if (name) {
    router.push(name)
    emit('change', name)
  }
}

const onLeftClick = () => {
  router.push('/')
  emit('leftClick')
}
const onRightClick = () => {
  console.log('rightClick')
  showDrawer.value = true
}
const showDrawer = ref(false)

const onDrawerClose = () => {
  showDrawer.value = false
  emit('rightClick')
}

const handleCellClick = (path: string) => {
  router.push(`/${path}`)
  showDrawer.value = false
}

// 根据屏幕宽度计算抽屉宽度
const drawerWidth = ref(window.innerWidth <= 768 ? '80%' : '400px')

// 监听窗口大小变化
window.addEventListener('resize', () => {
  drawerWidth.value = window.innerWidth <= 768 ? '80%' : '400px'
})
</script>

<style scoped>
.hga-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 44px;
  background: #fff;
  border-bottom: 1px solid var(--tv-border-color);
  padding: 0 12px;
}

.navbar-left,
.navbar-right {
  flex: none;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.navbar-center {
  flex: 1;
  overflow: hidden;
}

:deep(.tiny-tabs) {
  height: 44px;
}

:deep(.tiny-tabs__header) {
  border: none;
}

:deep(.tiny-tabs__nav-wrap) {
  padding: 0;
}

:deep(.tiny-tabs__nav) {
  height: 44px;
}

:deep(.tiny-tab-item) {
  padding: 0 12px;
  font-size: 14px;
  line-height: 44px;
}

:deep(.tiny-tabs__active-bar) {
  background-color: var(--tv-color-primary);
}

.drawer-content {
  padding: 16px 0;
}

:deep(.tiny-drawer__header) {
  padding: 16px;
  border-bottom: 1px solid var(--tv-border-color);
  font-size: 16px;
}

:deep(.tiny-drawer__body) {
  padding: 0;
}

:deep(.tiny-drawer) {
  z-index: 1000;
}

:deep(.tiny-drawer__wrapper) {
  width: var(--drawer-width) !important;
}

/* 移动端样式 */
@media screen and (max-width: 768px) {
  :deep(.tiny-drawer__header) {
    font-size: 14px;
  }

  .drawer-content {
    font-size: 14px;
  }

  :deep(.hga-cell) {
    padding: 12px 16px;
    font-size: 14px;
  }
}

/* PC端样式 */
@media screen and (min-width: 769px) {
  :deep(.tiny-drawer__header) {
    font-size: 16px;
  }

  .drawer-content {
    font-size: 16px;
  }

  :deep(.hga-cell) {
    padding: 16px;
    font-size: 16px;
  }
}
</style>
