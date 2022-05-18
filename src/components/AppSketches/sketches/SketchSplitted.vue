<template>
  <div class="sketch-splitted">
    <div class="sketch-splitted__half" :style="leftHalfStyle"></div>
    <div class="sketch-splitted__half" :style="rightHalfStyle"></div>
  </div>
</template>

<script>
  export default {
    inject: ['frontColor', 'backColor'],
    data() {
      return {
        leftHalfStyle: {
          backgroundColor: this.backColor
        },
        rightHalfStyle: {
          backgroundColor: this.frontColor
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
