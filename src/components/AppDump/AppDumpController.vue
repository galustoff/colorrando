<template></template>

<script>
  export default {
    inject: ['sketchColors'],
    props: ['newColor'],
    watch: {
      newColor() {
        console.log('Hello from controller...')
      }
    }
  }
</script>

<style></style>
