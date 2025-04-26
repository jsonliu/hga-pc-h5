<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f7f8fa;
}
html { font-size: 10px; }
@media screen and (min-width: 321px) and (max-width: 375px) {
  html { font-size: 11px; }
}
@media screen and (min-width: 376px) and (max-width: 414px) {
  html { font-size: 12px; }
}
@media screen and (min-width: 415px) and (max-width: 639px) {
  html { font-size: 15px; }
}
@media screen and (min-width: 640px) and (max-width: 719px) {
  html { font-size: 20px; }
}
@media screen and (min-width: 720px) and (max-width: 749px) {
  html { font-size: 22.5px; }
}
@media screen and (min-width: 750px) and (max-width: 799px) {
  html { font-size: 23.5px; }
}

#app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
