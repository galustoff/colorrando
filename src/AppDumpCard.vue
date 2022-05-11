<template>
  <li class="app-dump__list-item" :style="style"></li>
</template>

<script>
  export default {
    data() {
      return {
        style: {
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
    width: 200px;
    height: 120px;
    flex-shrink: 0;
  }
</style>
