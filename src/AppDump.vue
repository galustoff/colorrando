<template>
  <div class="app-dump__container">
    <div class="app-dump__fish"></div>
    <div class="app-dump__buttons">
      <app-button :set="resetButtonSet" @reset-dump="resetDump"></app-button>
      <app-button
        :set="restoreButtonSet"
        @restore-dump="restoreDump"
      ></app-button>
    </div>
  </div>
</template>

<script>
  import AppButton from './AppButton.vue'

  export default {
    data() {
      return {
        resetButtonSet: {
          text: 'RESET?',
          event: 'resetDump'
        },
        restoreButtonSet: {
          text: 'Oops...',
          event: 'restoreDump'
        }
      }
    },
    components: {
      AppButton
    },
    methods: {
      resetDump() {
        console.log('reset dump...')
      },
      restoreDump() {
        console.log('dump restored...')
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

  .app-dump__buttons {
    display: flex;
    justify-content: center;
    column-gap: 18px;
  }
</style>
