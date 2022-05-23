<template>
  <the-randomizer @pick-color="pickColor" />
</template>

<script>
  import TheRandomizer from '../TheRandomizer/TheRandomizer.vue'

  export default {
    components: {
      TheRandomizer
    },
    methods: {
      pickColor(color) {
        console.log('TheMain, pickColor', color)
      }
    }
  }
</script>

<style></style>
