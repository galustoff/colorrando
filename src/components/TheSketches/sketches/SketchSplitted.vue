<template>
  <div class="sketch-splitted">
    <div class="sketch-splitted__half" :style="leftHalfStyle"></div>
    <div class="sketch-splitted__half" :style="rightHalfStyle"></div>
  </div>
</template>

<script>
  export default {
    inject: ['sketchColors'],

    computed: {
      rightHalfStyle() {
        return {
          backgroundColor: this.sketchColors.second
        }
      },
      leftHalfStyle() {
        return {
          backgroundColor: this.sketchColors.first
        }
      }
    }
  }
</script>

<style scoped>
  .sketch-splitted {
    width: 200px;
    display: flex;
  }

  .sketch-splitted__half {
    height: 120px;
    flex-grow: 1;
  }
</style>
