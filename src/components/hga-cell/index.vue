<template>
  <div class="hga-cell" :class="{ 'is-link': isLink }" @click="onClick">
    <div class="cell-title">{{ title }}</div>
    <div v-if="isLink" class="cell-right">
      <TinyIconChevronRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconChevronRight } from '@opentiny/vue-icon'

const TinyIconChevronRight = IconChevronRight()

defineProps({
  title: {
    type: String,
    default: ''
  },
  isLink: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>

<style scoped>
.hga-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #fff;
  cursor: pointer;
}

.hga-cell:active {
  background: #f2f3f5;
}

.cell-title {
  font-size: 14px;
  color: var(--tv-text-color);
}

.cell-right {
  color: #969799;
}
</style>