<template>
  <main class="app-main">
    <app-color-set :picked-color="pickedColor"></app-color-set>
    <app-color-randomizer @pick-color="pickColor"></app-color-randomizer>
    <app-color-set :picked-color="pickedColor"></app-color-set>
  </main>
</template>

<script>
import AppColorRandomizer from './AppColorRandomizer.vue'
import AppColorSet from './AppColorSet.vue'

export default {
  data() {
    return {
      pickedColor: ''
    }
  },
  components: {
    AppColorRandomizer,
    AppColorSet
  },
  methods: {
    pickColor(color) {
      this.pickedColor = color
    }
  }
}
</script>

<style>
.app-main {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: hidden;
}
</style>
