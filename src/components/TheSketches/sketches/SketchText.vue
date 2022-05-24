<template>
  <p :style="style">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laboriosam
    tempora error mollitia fugiat.
  </p>
</template>

<script>
  export default {
    inject: ['mainColors'],

    computed: {
      style() {
        return {
          color: this.mainColors.first,
          backgroundColor: this.mainColors.second,
          fontFamily: 'sans-serif',
          padding: '10px',
          minHeight: '120px'
        }
      }
    }
  }
</script>

<style scoped></style>
