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
        :key="color"
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

  import MainColor from '../../js/MainColor.js'

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
          new MainColor(0, 0, 0, 100),
          new MainColor(255, 255, 255, 100)
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
        this.mainColors[idx].full = this.newMainColor
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
