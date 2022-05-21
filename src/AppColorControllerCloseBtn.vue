<template>
  <div class="close-btn" @click="$emit('closePopup')">
    <div class="close-btn__crosshalf close-btn__crosshalf_downward"></div>
    <div class="close-btn__crosshalf close-btn__crosshalf_upward"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .close-btn {
    width: 50px;
    height: 50px;
    /* background-color: rgb(1, 68, 1); */
    position: absolute;
    top: -50px;
    right: -50px;
    cursor: pointer;
  }

  .close-btn__crosshalf {
    position: absolute;
    top: 20px;
    width: 50px;
    height: 10px;
    background-color: var(--dark-brown);
    border-radius: 5px;
  }

  .close-btn__crosshalf_downward {
    transform: rotate(45deg);
  }

  .close-btn__crosshalf_upward {
    transform: rotate(-45deg);
  }
</style>
