<template>
  <li class="app-color-set__item" :style="style"></li>
</template>

<script>
export default {
  data() {
    return {
      style: {
        backgroundColor: this.bgColor
      }
    }
  },
  props: ['bgColor']
}
</script>

<style>
.app-color-set__item {
  width: 40px;
  height: 40px;
}
</style>
