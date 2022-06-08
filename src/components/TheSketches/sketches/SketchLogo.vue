<template>
  <div class="sketch-logo">
    <div class="sketch-logo__half" :style="leftHalfStyle">
      <p class="sketch-logo__text sketch-logo__text_left">Lo</p>
    </div>
    <div class="sketch-logo__half" :style="rightHalfStyle">
      <p class="sketch-logo__text sketch-logo__text_right">go</p>
    </div>
  </div>
</template>

<script>
  export default {
    inject: ['colors'],
    computed: {
      rightHalfStyle() {
        return {
          color: this.colors.color1,
          backgroundColor: this.colors.color0
        }
      },
      leftHalfStyle() {
        return {
          color: this.colors.color0,
          backgroundColor: this.colors.color1
        }
      }
    }
  }
</script>

<style scoped>
  .sketch-logo {
    width: 200px;
    display: flex;
  }

  .sketch-logo__half {
    height: 120px;
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .sketch-logo__text {
    font-size: 62px;
    padding: 4px;
    letter-spacing: 1px;
    font-weight: 700;
    font-family: sans-serif;
    flex-grow: 1;
  }

  .sketch-logo__text_left {
    text-align: right;
  }

  .sketch-logo__text_right {
    text-align-last: left;
  }
</style>
