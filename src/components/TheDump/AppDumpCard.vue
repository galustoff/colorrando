<template>
  <li
    :class="{
      'app-dump__list-item': true,
      'app-dump-card': true,
      'app-dump-card_appearing': cardIsAppearing
    }"
  >
    <div
      @click="swatchClick"
      class="app-dump-card__swatch"
      :style="swatchStyle"
    ></div>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        swatchStyle: {
          backgroundColor: this.bgc
        },
        cardIsAppearing: false
      }
    },
    props: ['bgc'],
    mounted() {
      /**
       * setTimeout provides css transition (height),
       * delay less then 20ms may cause abrupt appearence
       * without transition
       */
      setTimeout(() => {
        this.cardIsAppearing = true
      }, 20)
    },
    methods: {
      swatchClick() {
        this.$emit('newColorRequest', this.bgc)
      }
    }
  }
</script>

<style>
  .app-dump__list-item {
    flex-shrink: 0;
  }

  /**.app-dump-card
    we need a white color substrate under main color of card
  */
  .app-dump-card {
    height: 0;
    margin-bottom: 0;
    transition: height 0.4s ease-out, margin-bottom 0.4s;
    width: 200px;
    background-color: rgba(255, 255, 255, 1);
    position: relative;
  }

  .app-dump-card_appearing {
    height: 80px;
    margin-bottom: 18px;
  }

  .app-dump-card_appearing:last-of-type {
    margin-bottom: 0;
  }

  .app-dump-card__swatch {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
  }
</style>
