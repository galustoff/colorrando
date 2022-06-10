<template>
  <div class="transparency-range">
    <div class="transparency-range__bg">
      <div class="transparency-range__ear" :style="leftEarStyle"></div>
      <div class="transparency-range__ear"></div>
    </div>
    <div class="transparency-range__container">
      <app-transparency-range-division
        v-for="i in 100"
        :key="i"
        :color="getRgbaColor(i)"
        :isActive="intensityScale[i]"
        @click="changeIntensity(i)"
      />
    </div>
  </div>
</template>

<script>
  import AppTransparencyRangeDivision from './AppTransparencyRangeDivision.vue'

  export default {
    components: {
      AppTransparencyRangeDivision
    },

    props: {
      colorIdx: Number,
      colorPart: String,
      srcAlpha: Number
    },

    data() {
      return {
        currentAlpha: this.srcAlpha,
        intensityScale: []
      }
    },

    computed: {
      leftEarStyle() {
        return {
          backgroundColor: this.colorPart + '1)'
        }
      }
    },

    watch: {
      srcAlpha(value) {
        if (value !== this.currentAlpha) this.changeScaleIntensity(value)
      }
    },

    mounted() {
      this.fillIntensityScale()
    },

    methods: {
      getRgbaColor(i) {
        return this.colorPart + `${i / 100})`
      },

      fillIntensityScale() {
        this.intensityScale[0] = this.srcAlpha

        for (let i = 1; i < 101; i++) {
          this.intensityScale[i] = false
        }

        this.intensityScale[this.srcAlpha] = true
      },

      changeScaleIntensity(value) {
        this.intensityScale[this.intensityScale[0]] = false
        this.intensityScale[value] = true
        this.intensityScale[0] = value
      },

      changeIntensity(value) {
        this.changeScaleIntensity(value)
        this.$emit('changeMainColorIntensity', this.colorIdx, value)
      }
    }
  }
</script>

<style scoped>
  .transparency-range {
    width: 416px;
    height: 40px;
    position: relative;
  }

  .transparency-range__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(./assets/transparency-range_bg.png);
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    overflow: hidden;
  }

  .transparency-range__ear {
    width: 8px;
    height: 40px;
  }

  .transparency-range__container {
    position: absolute;
    top: 0;
    right: 8px;
    bottom: 0;
    left: 8px;
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    width: 400px;
    height: 40px;
    overflow: visible;
  }
</style>
