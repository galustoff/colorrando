<template>
  <div class="sketch-logo">
    <div class="sketch-logo__half sketch-logo__half_left">
      <p class="sketch-logo__text sketch-logo__text_left">lo</p>
    </div>
    <div class="sketch-logo__half sketch-logo__half_right">
      <p class="sketch-logo__text sketch-logo__text_right">go</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .sketch-logo {
    width: 200px;
    display: flex;
  }

  .sketch-logo__half {
    height: 120px;
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  .sketch-logo__half_left {
    color: #fff;
    background-color: #000;
  }

  .sketch-logo__half_right {
    color: #000;
    background-color: #fff;
  }

  .sketch-logo__text {
    font-size: 88px;
    font-family: sans-serif;
    flex-grow: 1;
  }

  .sketch-logo__text_left {
    text-align: right;
  }

  .sketch-logo__text_right {
    text-align-last: left;
  }
</style>
