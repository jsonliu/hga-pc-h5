<template>
  <div class="hga-cell-group">
    <slot />
  </div>
</template>

<style scoped>
.hga-cell-group {
  background: #fff;
}

.hga-cell-group :deep(.hga-cell:not(:last-child)) {
  border-bottom: 1px solid var(--tv-border-color);
}
</style>