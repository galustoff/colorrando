<template>
  <div
    :class="{
      'transparency-range__division': true,
      'transparency-range__division_bright': this.alpha > 50,
      'transparency-range__division_pale': this.alpha <= 50
    }"
    :style="bgc"
  ></div>
</template>

<script>
  export default {
    props: {
      color: String,
      alpha: Number
    },

    computed: {
      bgc() {
        return {
          backgroundColor: this.color
        }
      }
    },

    methods: {}
  }
</script>

<style>
  .transparency-range__division {
    flex-grow: 1;
    position: relative;
  }

  .transparency-range__division:hover::after {
    content: '';
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    left: -2px;
    z-index: 1;
  }

  .transparency-range__division_bright:hover::after {
    background-color: darkorange;
  }

  .transparency-range__division_pale:hover::after {
    background-color: darkcyan;
  }
</style>
