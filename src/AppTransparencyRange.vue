<template>
  <div class="transparency-range">
    <div class="transparency-range__container">
      <app-transparency-range-division
        v-for="i in 100"
        :key="i"
        :color="getRgbaColor(i)"
        :alpha="i"
      ></app-transparency-range-division>
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
    width: 400px;
    height: 40px;
    border-radius: 10px;
    background-image: url(./assets/transparency-range_bg.png);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .transparency-range__container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row-reverse;
  }
</style>
