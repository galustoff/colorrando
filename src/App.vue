<template>
  <div class="app-container">
    <app-sketches></app-sketches>
    <app-frontage></app-frontage>
    <app-dump></app-dump>
  </div>
</template>

<script>
import AppSketches from './AppSketches.vue'
import AppFrontage from './AppFrontage.vue'
import AppDump from './AppDump.vue'

export default {
  components: {
    AppSketches,
    AppFrontage,
    AppDump
  }
}
</script>

<style>
.app-container {
  background-color: rgba(0, 0, 0, 0.04);
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
