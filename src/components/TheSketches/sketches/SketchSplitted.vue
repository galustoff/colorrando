<template>
  <div class="sketch-splitted">
    <div class="sketch-splitted__half" :style="leftHalfStyle"></div>
    <div class="sketch-splitted__half" :style="rightHalfStyle"></div>
  </div>
</template>

<script>
  export default {
    inject: ['colors'],

    computed: {
      rightHalfStyle() {
        return {
          backgroundColor: this.colors.color1
        }
      },
      leftHalfStyle() {
        return {
          backgroundColor: this.colors.color0
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
