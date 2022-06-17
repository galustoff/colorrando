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

    <div class="the-main__content-line the-main__content-line_middle">
      <app-trancparency-range
        :color-part="mainColors[0].part"
        :src-alpha="mainColors[0].alpha"
        @wheel.exact="changeTransparency($event, mainColors[0])"
        @wheel.shift="changeSaturation($event, mainColors[0])"
      />

      <div class="the-main-range-explanation">
        <div class="the-main-range-explanation_pic"></div>
        <p class="the-main-range-explanation_text">&nbsp;or Shift +</p>
        <div class="the-main-range-explanation_pic"></div>
      </div>

      <app-trancparency-range
        :color-part="mainColors[1].part"
        :src-alpha="mainColors[1].alpha"
        @wheel.exact="changeTransparency($event, mainColors[1])"
        @wheel.shift="changeSaturation($event, mainColors[1])"
      />
    </div>

    <div class="the-main__content-line the-main__content-line_lower">
      <app-color-string
        v-for="color in mainColors"
        :key="color"
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

      changeTransparency(e, color) {
        let newAlpha = (color.alpha += Math.floor(e.deltaY / 25))

        if (newAlpha < 1) newAlpha = 1
        if (newAlpha > 100) newAlpha = 100

        color.alpha = newAlpha
      },

      changeSaturation(e, color) {
        color.changeIntensity(-e.deltaY)
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

  .the-main__content-line_middle {
    justify-content: center;
    align-items: center;
    column-gap: 24px;
  }

  .the-main-range-explanation {
    display: flex;
    column-gap: 12px;
  }

  .the-main-range-explanation_pic {
    width: 50px;
    height: 50px;
    background-image: url(../../assets/mousewheel_bg.png);
  }

  .the-main-range-explanation_text {
    color: var(--dark-brown);
    font-family: sans-serif;
    font-size: 24px;
    margin-top: 10px;
  }
</style>
