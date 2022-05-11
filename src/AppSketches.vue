<template>
  <div class="app-sketches__container">
    <div class="app-sketches__fish"></div>
    <app-button :set="buttonSet" @invert-sketches="invertSketches"></app-button>
  </div>
</template>

<script>
  import AppButton from './AppButton.vue'

  export default {
    data() {
      return {
        buttonSet: {
          text: 'INVERT?',
          event: 'invertSketches'
        }
      }
    },
    components: {
      AppButton
    },
    methods: {
      invertSketches() {
        console.log('invert sketches...')
      }
    }
  }
</script>

<style>
  .app-sketches__container {
    padding-top: var(--asides-pt);
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
  }

  .app-sketches__fish {
    width: 360px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
</style>
