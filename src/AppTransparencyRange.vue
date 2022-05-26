<template>
  <div class="transparency-range">
    <div class="transparency-range__container">
      <div
        class="transparency-range__color"
        v-for="i in 100"
        :key="i"
        :style="getStyle(101 - i)"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      color: String
    },

    computed: {
      /**
       * this func returns a string like 'rgba(232, 23, 88' based on color prop
       */
      colorParsedPart() {
        return /rgba\((\d+, ){2}\d+/.exec(this.color)[0]
      }
    },

    methods: {
      getStyle(i) {
        const alpha = i / 100
        const color = this.colorParsedPart + `, ${alpha})`

        return {
          backgroundColor: color
        }
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
  }

  .transparency-range__container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
  }

  .transparency-range__color {
    flex-grow: 1;
  }
</style>
