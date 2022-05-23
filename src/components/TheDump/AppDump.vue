<template>
  <div class="app-dump">
    <div class="app-dump__wrapper">
      <ul
        :class="{
          'app-dump__list': true,
          'app-dump__list_empty': !dumpColors.length
        }"
      >
        <li v-if="!dumpColors.length" class="app-dump__plug-list-item">
          No colors selected
        </li>
        <app-dump-card
          v-for="i in dumpColors"
          :key="i"
          :bgc="i"
          @new-color-request="newColorRequest"
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
  import AppButton from '../../AppButton.vue'

  export default {
    props: ['newColor'],
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
      },
      newColorRequest(newColor) {
        this.$emit('newColorRequest', newColor)
      }
    },
    watch: {
      newColor(value) {
        if (!this.dumpColors.includes(value)) this.dumpColors.unshift(value)
      }
    }
  }
</script>

<style>
  .app-dump {
    color: var(--dark-brown);
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
  }

  .app-dump__wrapper {
    width: 360px;
    height: 400px;
    background-color: rgba(020, 007, 088, 0.1);
    border-radius: 10px;
    overflow: scroll;
  }

  .app-dump__list {
    width: 360px;
    min-height: 400px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 0;
  }

  .app-dump__list_empty {
    justify-content: center;
  }

  .app-dump__plug-list-item {
    font-family: sans-serif;
  }

  .app-dump__buttons {
    display: flex;
    justify-content: center;
    column-gap: 18px;
  }
</style>
