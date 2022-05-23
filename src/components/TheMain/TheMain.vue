<template>
  <main>
    <div class="content-line">
      <the-randomizer @pick-color="addColorToDump" />
      <the-dump :newColor="newDumpColor" @new-color-request="openController" />
    </div>
  </main>
</template>

<script>
  import TheRandomizer from '../TheRandomizer/TheRandomizer.vue'
  import TheDump from '../TheDump/TheDump.vue'

  export default {
    components: {
      TheRandomizer,
      TheDump
    },
    data() {
      return {
        newDumpColor: ''
      }
    },
    methods: {
      addColorToDump(color) {
        this.newDumpColor = color
      },

      openController(newColor) {
        console.log('Opening controller with new color:', newColor)
      }
    }
  }
</script>

<style>
  .content-line {
    display: flex;
    justify-content: space-evenly;
  }
</style>
