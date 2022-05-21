<template>
  <div
    :class="{
      'dump-controller': true,
      'dump-controller_opened': isOpened
    }"
  >
    <div class="dump-controller__sketch-colors">
      <div class="dump-controller__color" :style="firstColorStyle"></div>
      <div class="dump-controller__color" :style="secondColorStyle"></div>
    </div>
    <div class="dump-controller__color" :style="newColorStyle"></div>
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
  .dump-controller {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(134, 132, 148, 1);
  }

  .dump-controller_opened {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 60px;
  }

  .dump-controller__sketch-colors {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .dump-controller__color {
    width: 100px;
    height: 60px;
    border: 1px solid black;
  }
</style>
