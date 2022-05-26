<template>
  <div class="transparency-range">
    <div class="transparency-range__color" :style="style"></div>
  </div>
</template>

<script>
  export default {
    props: {
      color: String
    },
    computed: {
      style() {
        return {
          backgroundColor: this.color
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

  .transparency-range__color {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
