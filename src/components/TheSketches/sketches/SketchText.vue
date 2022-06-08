<template>
  <p :style="style">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laboriosam
    tempora error mollitia fugiat.
  </p>
</template>

<script>
  export default {
    inject: ['colors'],

    computed: {
      style() {
        return {
          color: this.colors.color0,
          backgroundColor: this.colors.color1,
          fontFamily: 'sans-serif',
          padding: '10px',
          minHeight: '120px'
        }
      }
    }
  }
</script>

<style scoped></style>
