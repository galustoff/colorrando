<template>
  <main>
    <div class="content-line">
      <the-sketches @invert-request="invertMainColors" />
      <the-randomizer @pick-color="addColorToDump" />
      <the-dump :newColor="newDumpColor" @new-color-request="openController" />
    </div>
  </main>
</template>

<script>
  import TheSketches from '../TheSketches/TheSketches.vue'
  import TheRandomizer from '../TheRandomizer/TheRandomizer.vue'
  import TheDump from '../TheDump/TheDump.vue'

  export default {
    components: {
      TheSketches,
      TheRandomizer,
      TheDump
    },

    provide() {
      return {
        mainColors: this.mainColors
      }
    },

    data() {
      return {
        newDumpColor: '',
        mainColors: {
          first: 'rgba(0, 0, 0, 1)',
          second: 'rgba(255, 255, 255, 1)'
        }
      }
    },
    methods: {
      invertMainColors() {
        const tempColor = this.mainColors.first

        this.mainColors.first = this.mainColors.second
        this.mainColors.second = tempColor
      },

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
