<template>
  <div
    :class="{
      'color-controller': true,
      'color-controller_opened': isOpened
    }"
  >
    <div class="color-controller__container">
      <div class="color-controller__sketch-colors">
        <div class="color-controller__color" :style="firstColorStyle"></div>
        <div class="color-controller__color" :style="secondColorStyle"></div>
      </div>
      <div class="color-controller__color" :style="newColorStyle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpened: false,
        firstColorStyle: {
          backgroundColor: ''
        },
        secondColorStyle: {
          backgroundColor: ''
        },
        newColorStyle: {
          backgroundColor: ''
        }
      }
    },
    inject: ['sketchColors'],
    props: ['newColor'],
    watch: {
      newColor() {
        this.firstColorStyle.backgroundColor = this.sketchColors.first
        this.secondColorStyle.backgroundColor = this.sketchColors.second
        this.newColorStyle.backgroundColor = this.newColor
        this.isOpened = !this.isOpened
      }
    }
  }
</script>

<style>
  .color-controller {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(251, 251, 251, 0.4);
  }

  .color-controller_opened {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color-controller__container {
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 100px;
    background-color: rgba(95, 218, 255, 0.9);
    border-radius: 10px;
  }

  .color-controller__sketch-colors {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .color-controller__color {
    width: 200px;
    height: 120px;
    border: 2px solid rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
</style>
