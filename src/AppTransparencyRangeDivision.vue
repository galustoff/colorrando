<template>
  <div class="transparency-range__division" :style="bgc">
    <div v-if="isActive" class="transparency-range__slider"></div>
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

  .transparency-range__slider {
    position: absolute;
    top: -8px;
    right: -2px;
    bottom: -8px;
    left: -2px;
    background-color: darkblue;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
  }
</style>
