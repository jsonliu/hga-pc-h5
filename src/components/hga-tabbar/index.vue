<template>
  <div class="hga-tabbar">
    <div class="tabbar-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// 移除 TinyContainer 导入
</script>

<style scoped>
.hga-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 50px;
  background: #fff;
}

.tabbar-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  border-top: 1px solid #ebedf0;
}
</style>