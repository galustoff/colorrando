<template>
  <main class="the-main">
    <div class="the-main__content-line the-main__content-line_upper">
      <the-sketches
        :color-0-part="mainColors[0].part"
        :color-0-alpha="mainColors[0].alpha"
        :color-1-part="mainColors[1].part"
        :color-1-alpha="mainColors[1].alpha"
      />
      <the-randomizer @pick-color="addColorToDump" />
      <the-dump :newColor="newDumpColor" @new-color-request="openController" />
    </div>

    <div class="the-main__content-line the-main__content-line_lower">
      <app-trancparency-range
        v-for="color in mainColors"
        :key="color.key"
        :color-part="color.part"
        :src-alpha="color.alpha"
        @wheel="mouseWheel($event, color)"
      />
    </div>

    <div class="the-main__content-line the-main__content-line_lower">
      <app-color-string
        v-for="color in mainColors"
        :key="color.key"
        :color-string="color.full"
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
  import AppColorString from '../../AppColorString.vue'

  export default {
    components: {
      TheSketches,
      TheRandomizer,
      TheDump,
      TheColorController,
      AppTrancparencyRange,
      AppColorString
    },

    data() {
      return {
        newDumpColor: '',
        newMainColor: '',

        mainColors: [
          {
            key: 0,
            part: 'rgba(0, 0, 0, ',
            alpha: 100,
            full: 'rgba(0, 0, 0, 1)'
          },

          {
            key: 1,
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
      },

      mouseWheel(e, color) {
        let newAlpha = (color.alpha += Math.floor(e.deltaY / 25))

        if (newAlpha < 1) newAlpha = 1
        if (newAlpha > 100) newAlpha = 100

        color.alpha = newAlpha
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
