<template>
  <div class="transparency-range__division" :style="bgc">
    <div v-if="isActive" class="transparency-range__slider-outer">
      <!-- <div class="transparency-range__slider-inner" :style="bgc"></div> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      color: String,
      isActive: Boolean
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

  .transparency-range__slider-outer {
    position: absolute;
    top: -8px;
    right: -2px;
    bottom: -8px;
    left: -2px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5), -2px -2px 3px rgba(0, 0, 0, 0.5);
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
