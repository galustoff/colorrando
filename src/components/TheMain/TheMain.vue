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

    <div class="the-main__content-line the-main__content-line_lower">
      <app-trancparency-range
        v-for="color in mainColors"
        :color-idx="color.idx"
        :color-part="color.part"
        :src-alpha="color.alpha"
        @change-main-color-intensity="changeMainColorIntensity"
      />
    </div>

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

    data() {
      return {
        newDumpColor: '',
        newMainColor: '',

        mainColors: [
          {
            idx: 0,
            part: 'rgba(0, 0, 0, ',
            alpha: 100,
            full: 'rgba(0, 0, 0, 1)'
          },

          {
            idx: 1,
            part: 'rgba(255, 255, 255, ',
            alpha: 100,
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
        this.mainColors[idx].alpha = Math.floor(parsedColor[2] * 100)
      },

      changeMainColorIntensity(colorIdx, value) {
        const color = this.mainColors[colorIdx]

        color.alpha = value
        color.full = color.part + `${value === 1 ? 1 : value / 100})`
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
