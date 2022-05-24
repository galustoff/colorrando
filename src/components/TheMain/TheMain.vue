<template>
  <main>
    <div class="content-line">
      <the-sketches @invert-request="invertMainColors" />
      <the-randomizer @pick-color="addColorToDump" />
      <the-dump :newColor="newDumpColor" @new-color-request="openController" />
    </div>

    <!-- hidden popup element -->
    <the-color-controller
      :newColor="newMainColor"
      @closing-popup="newMainColor = ''"
      @change-color-request="changeMainColor"
    />
  </main>
</template>

<script>
  import TheSketches from '../TheSketches/TheSketches.vue'
  import TheRandomizer from '../TheRandomizer/TheRandomizer.vue'
  import TheDump from '../TheDump/TheDump.vue'
  import TheColorController from '../TheColorController/TheColorController.vue'

  export default {
    components: {
      TheSketches,
      TheRandomizer,
      TheDump,
      TheColorController
    },

    provide() {
      return {
        mainColors: this.mainColors
      }
    },

    data() {
      return {
        newDumpColor: '',
        newMainColor: '',
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
        this.newMainColor = newColor
      },

      changeMainColor(colorKey) {
        this.mainColors[colorKey] = this.newMainColor
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
