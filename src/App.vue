<template>
  <div class="app-container">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style>
.app-container {
  background-color: rgba(0, 0, 0, 0.04);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 14px;
  padding: 5px 0;
}
</style>
