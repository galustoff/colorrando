<template>
  <main class="the-main">
    <div class="the-main__content-line the-main__content-line_upper">
      <the-sketches
        :color-0="mainColors[0].full"
        :color-1="mainColors[1].full"
      />
      <the-randomizer @pick-color="addColorToDump" />
      <the-dump :newColor="newDumpColor" @new-color-request="openController" />
    </div>

    <!-- <div class="the-main__content-line the-main__content-line_lower">
      <app-trancparency-range :color="mainColors.first" />
      <app-trancparency-range :color="mainColors.second" />
    </div> -->

    <!-- hidden popup element -->
    <the-color-controller
      :newColor="newMainColor"
      :color-0="mainColors[0].full"
      :color-1="mainColors[1].full"
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

    // provide() {
    //   return {
    //     mainColors: this.mainColors
    //   }
    // },

    data() {
      return {
        newDumpColor: '',
        newMainColor: '',
        // mainColors: {
        //   first: 'rgba(0, 0, 0, 1)',
        //   second: 'rgba(255, 255, 255, 1)'
        // }
        mainColors: [
          {
            part: 'rgba(0, 0, 0, ',
            alpha: 1,
            full: 'rgba(0, 0, 0, 1)'
          },

          {
            part: 'rgba(255, 255, 255, ',
            alpha: 1,
            full: 'rgba(255, 255, 255, 1)'
          }
        ]
      }
    },

    methods: {
      addColorToDump(color) {
        this.newDumpColor = color
      },

      openController(newColor) {
        this.newMainColor = newColor
      },

      changeMainColor(idx) {
        const parsedColor = /(rgba\(\d+, \d+, \d+, )(1|(0\.\d+))\)/g.exec(
          this.newMainColor
        )

        this.mainColors[idx].full = parsedColor[0]
        this.mainColors[idx].part = parsedColor[1]
        this.mainColors[idx].alpha =
          parsedColor[2] === '1' ? 1 : Number(parsedColor[2]) * 100
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
