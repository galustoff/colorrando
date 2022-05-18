<template>
  <div class="app-frontage">
    <app-title></app-title>
    <app-randomizer @pick-color="pickColor"></app-randomizer>
  </div>
</template>

<script>
  import AppTitle from './AppTitle.vue'
  import AppRandomizer from './components/AppRandomizer/AppRandomizer.vue'

  export default {
    emits: ['pickColor'],
    components: {
      AppTitle,
      AppRandomizer
    },
    methods: {
      pickColor(color) {
        this.$emit('pickColor', color)
      }
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
