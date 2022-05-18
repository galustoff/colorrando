<template>
  <p class="sketch-text" :style="style">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laboriosam
    tempora error mollitia fugiat. Maxime!
  </p>
</template>

<script>
  export default {
    inject: ['frontColor', 'backColor'],
    data() {
      return {
        style: {
          color: this.frontColor,
          backgroundColor: this.backColor,
          fontFamily: 'sans-serif'
        }
      }
    }
  }
</script>

<style scoped></style>
