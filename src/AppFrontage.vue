<template>
  <div class="app-frontage">
    <app-title></app-title>
    <app-randomizer></app-randomizer>
  </div>
</template>

<script>
import AppTitle from './AppTitle.vue'
import AppRandomizer from './AppRandomizer.vue'

export default {
  components: {
    AppTitle,
    AppRandomizer
  }
}
</script>

<style>
.app-frontage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
