<template>
  <li
    :class="{
      'the-dump__list-item': true,
      'dump-card': true,
      'dump-card_appearing': cardIsAppearing
    }"
  >
    <div
      class="dump-card__swatch"
      :style="swatchStyle"
      @click="swatchClick"
    ></div>
  </li>
</template>

<script>
  export default {
    props: ['bgc'],

    emits: ['newColorRequest'],

    data() {
      return {
        swatchStyle: {
          backgroundColor: this.bgc
        },
        cardIsAppearing: false
      }
    },

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
  .the-dump__list-item {
    flex-shrink: 0;
  }

  /* we need a white color substrate under main color of card */
  .dump-card {
    height: 0;
    margin-bottom: 0;
    transition: height 0.4s ease-out, margin-bottom 0.4s;
    width: 200px;
    background-color: rgba(255, 255, 255, 1);
    position: relative;
  }

  .dump-card_appearing {
    height: 80px;
    margin-bottom: 18px;
  }

  .dump-card_appearing:last-of-type {
    margin-bottom: 0;
  }

  .dump-card__swatch {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
  }
</style>
