<template>
  <div class="app-dump">
    <div class="app-dump__wrapper">
      <ul class="app-dump__list">
        <li class="app-dump__list-item"></li>
        <li class="app-dump__list-item"></li>
        <li class="app-dump__list-item"></li>
      </ul>
    </div>
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
  .app-dump {
    padding-top: var(--asides-pt);
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
  }

  .app-dump__wrapper {
    width: 360px;
    height: 400px;
    background-color: rgba(0, 124, 124, 0.04);
    border-radius: 10px;
    overflow-x: hidden;
  }

  .app-dump__list {
    width: 400px;
    height: 400px;
    overflow-y: scroll;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 18px;
  }

  .app-dump__list-item {
    margin-left: -40px;
    background-color: rgb(238, 170, 170);
    width: 200px;
    height: 120px;
    flex-shrink: 0;
  }

  .app-dump__buttons {
    display: flex;
    justify-content: center;
    column-gap: 18px;
  }
</style>
