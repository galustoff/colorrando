<template>
  <main class="the-main">
    <div class="the-main__content-line the-main__content-line_upper">
      <the-sketches @invert-request="invertMainColors" />
      <the-randomizer @pick-color="addColorToDump" />
      <the-dump :newColor="newDumpColor" @new-color-request="openController" />
    </div>

    <div class="the-main__content-line the-main__content-line_lower">
      <app-trancparency-range
        :color="mainColors.first"
        :shadow="mainColors.second"
      />

      <app-trancparency-range
        :color="mainColors.second"
        :shadow="mainColors.first"
      />
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
  import AppTrancparencyRange from '../../AppTransparencyRange.vue'

  export default {
    components: {
      TheSketches,
      TheRandomizer,
      TheDump,
      TheColorController,
      AppTrancparencyRange
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
  .the-main {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }

  .the-main__content-line {
    width: 100%;
    display: flex;
  }

  .the-main__content-line_upper {
    justify-content: space-evenly;
  }

  .the-main__content-line_lower {
    justify-content: center;
    column-gap: 160px;
  }
</style>
