<template>
  <li class="app-dump__list-item app-dump-card">
    <div class="app-dump-card__swatch" :style="swatchStyle"></div>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        swatchStyle: {
          backgroundColor: this.bgc
        }
      }
    },
    props: ['bgc']
  }
</script>

<style>
  .app-dump__list-item {
    margin-left: -40px;
    flex-shrink: 0;
  }

  /**.app-dump-card
    we need a white color substrate under main color of card
  */
  .app-dump-card {
    width: 200px;
    height: 120px;
    background-color: rgba(255, 255, 255, 1);
    position: relative;
  }

  .app-dump-card__swatch {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
