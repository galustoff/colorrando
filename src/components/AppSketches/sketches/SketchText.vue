<template>
  <p class="sketch-text" :style="style">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laboriosam
    tempora error mollitia fugiat. Maxime!
  </p>
</template>

<script>
  export default {
    inject: ['sketchColors'],
    // data() {
    //   return {
    //     style: {
    //       color: this.colors.first,
    //       backgroundColor: this.colors.second,
    //       fontFamily: 'sans-serif'
    //     }
    //   }
    // },
    computed: {
      style() {
        return {
          color: this.sketchColors.first,
          backgroundColor: this.sketchColors.second,
          fontFamily: 'sans-serif'
        }
      }
    }
  }
</script>

<style scoped></style>
