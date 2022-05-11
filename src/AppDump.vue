<template>
  <div class="app-dump__container">
    <div class="app-dump__fish"></div>
    <app-button :set="buttonSet" @reset-dump="resetDump"></app-button>
  </div>
</template>

<script>
  import AppButton from './AppButton.vue'

  export default {
    data() {
      return {
        buttonSet: {
          text: 'RESET?',
          event: 'resetDump'
        }
      }
    },
    components: {
      AppButton
    },
    methods: {
      resetDump() {
        console.log('reset dump...')
      }
    }
  }
</script>

<style>
  .app-dump__container {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
  }

  .app-dump__fish {
    width: 360px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
  }
</style>
