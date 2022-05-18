<template>
  <div class="sketch-splitted">
    <div class="sketch-splitted__half sketch-splitted__half_left"></div>
    <div class="sketch-splitted__half sketch-splitted__half_right"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .sketch-splitted {
    width: 200px;
    display: flex;
  }

  .sketch-splitted__half {
    height: 120px;
    flex-grow: 1;
  }
  .sketch-splitted__half_left {
    background-color: #fff;
  }

  .sketch-splitted__half_right {
    background-color: #000;
  }
</style>
