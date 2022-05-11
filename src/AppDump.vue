<template>
  <div class="app-dump">
    <div class="app-dump__wrapper">
      <ul
        :class="{
          'app-dump__list': true,
          'app-dump__list_overflowed': dumpColors.length > 3
        }"
      >
        <app-dump-card
          v-for="i in dumpColors"
          :key="i"
          :bgc="i"
        ></app-dump-card>
      </ul>
    </div>
    <div class="app-dump__buttons">
      <app-button :set="resetButtonSet" @reset-dump="resetDump"></app-button>
      <app-button
        :set="restoreButtonSet"
        @restore-dump="restoreDump"
        v-show="lostColors.length > 0"
      ></app-button>
    </div>
  </div>
</template>

<script>
  import AppDumpCard from './AppDumpCard.vue'
  import AppButton from './AppButton.vue'

  export default {
    props: ['picked'],
    data() {
      return {
        dumpColors: [],
        lostColors: [],
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
      AppDumpCard,
      AppButton
    },
    methods: {
      resetDump() {
        this.lostColors = this.dumpColors.slice(0)
        this.dumpColors = []
      },
      restoreDump() {
        this.dumpColors = this.lostColors.slice(0)
        this.lostColors = []
      }
    },
    watch: {
      picked(value) {
        if (!this.dumpColors.includes(value)) this.dumpColors.push(value)
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

    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 18px;
  }

  .app-dump__list_overflowed {
    justify-content: flex-start;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .app-dump__buttons {
    display: flex;
    justify-content: center;
    column-gap: 18px;
  }
</style>
