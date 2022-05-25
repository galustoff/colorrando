<template>
  <div class="app-container">
    <the-header />
    <the-main />
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader/TheHeader.vue'
  import TheMain from './components/TheMain/TheMain.vue'

  export default {
    components: {
      TheHeader,
      TheMain
    }
  }
</script>

<style>
  .app-container {
    /* production and night modes */
    /* background-color: rgba(0, 0, 0, 0.04); */
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
    position: relative;
  }
</style>
