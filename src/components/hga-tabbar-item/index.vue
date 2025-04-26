<template>
  <div class="hga-tabbar-item" :class="{ active: isActive }" @click="onClick">
    <div class="icon-wrapper">
      <slot name="icon">
        <component :is="`Icon${icon}`" :class="{ active: isActive }" />
      </slot>
      <div v-if="badge" class="badge">{{ badge }}</div>
      <div v-if="dot" class="dot"></div>
    </div>
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { TinyIcon } from '@opentiny/vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object],
    default: ''
  },
  badge: {
    type: [Number, String],
    default: ''
  },
  dot: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
const route = useRoute()

const isActive = computed(() => {
  return route.path === props.to
})

const onClick = () => {
  if (props.to) {
    router.push(props.to)
  }
}
</script>

<style scoped>
.hga-tabbar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--tv-color-text);
  cursor: pointer;
  padding: 4px 0;
}

.icon-wrapper {
  position: relative;
  margin-bottom: 4px;
  font-size: 22px;
}

.text {
  font-size: 12px;
}

.active {
  color: var(--tv-color-primary);
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 0 4px;
  min-width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  background: var(--tv-color-error);
  color: #fff;
  border-radius: 8px;
}

.dot {
  position: absolute;
  top: 0;
  right: -4px;
  width: 8px;
  height: 8px;
  background: var(--tv-color-error);
  border-radius: 50%;
}
</style>