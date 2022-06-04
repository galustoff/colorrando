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
        :isActive="i === colorAlpha * 100"
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
      color: String
    },

    computed: {
      /**
       * this func returns a string like 'rgba(232, 23, 88' based on color prop
       */
      colorParsedPart() {
        return /rgba\((\d+, ){2}\d+/.exec(this.color)[0]
      },

      colorAlpha() {
        return /rgba\((\d+,\s){3}(1|0\.\d+)\)/g.exec(this.color)[2]
      },

      leftEarStyle() {
        return {
          backgroundColor: /rgba\((\d+, ){2}\d+/.exec(this.color)[0] + ', 1)'
        }
      }
    },

    methods: {
      getRgbaColor(i) {
        return this.colorParsedPart + `, ${i / 100})`
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
