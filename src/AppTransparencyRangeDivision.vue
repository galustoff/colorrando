<template>
  <div class="transparency-range__division" :style="bgc">
    <div
      v-if="isActive"
      class="transparency-range__slider-outer"
      :style="boxShadow"
    >
      <div class="transparency-range__slider-inner" :style="bgc"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      color: String,
      shadow: String,
      isActive: Boolean
    },

    computed: {
      bgc() {
        return {
          backgroundColor: this.color
        }
      },

      boxShadow() {
        return {
          boxShadow: `1px 1px 4px ${this.shadow}, -1px -1px 4px ${this.shadow}`
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
    top: -8px;
    right: -2px;
    bottom: -8px;
    left: -2px;
    background-color: darkred;
    border-radius: 10px;
    overflow: hidden;
    z-index: 2;
  }

  .transparency-range__slider-outer {
    position: absolute;
    top: -8px;
    right: -2px;
    bottom: -8px;
    left: -2px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
  }

  .transparency-range__slider-inner {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
</style>
