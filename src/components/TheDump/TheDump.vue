<template>
  <div class="the-dump">
    <div class="the-dump__wrapper">
      <ul
        :class="{
          'the-dump__list': true,
          'the-dump__list_empty': !dumpColors.length
        }"
      >
        <li class="the-dump__plug-list-item" v-if="!dumpColors.length">
          No colors selected
        </li>
        <dump-card
          v-for="i in dumpColors"
          :key="i"
          :bgc="i"
          @new-color-request="newColorRequest"
        />
      </ul>
    </div>

    <div class="the-dump__buttons">
      <app-button :set="resetButtonSet" @reset-dump="resetDump" />
      <app-button
        v-show="lostColors.length > 0"
        :set="restoreButtonSet"
        @restore-dump="restoreDump"
      />
    </div>
  </div>
</template>

<script>
  import DumpCard from './DumpCard.vue'
  import AppButton from '../../AppButton.vue'

  export default {
    components: {
      DumpCard,
      AppButton
    },

    props: ['newColor'],

    emits: ['newColorRequest'],

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

    watch: {
      newColor(value) {
        if (!this.dumpColors.includes(value)) this.dumpColors.unshift(value)
      }
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
    }
  }
</script>

<style>
  .the-dump {
    color: var(--dark-brown);
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
  }

  .the-dump__wrapper {
    width: 360px;
    height: 400px;
    background-color: rgba(020, 007, 088, 0.1);
    border-radius: 10px;
    overflow: scroll;
  }

  .the-dump__list {
    width: 360px;
    min-height: 400px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 0;
  }

  .the-dump__list_empty {
    justify-content: center;
  }

  .the-dump__plug-list-item {
    font-family: sans-serif;
  }

  .the-dump__buttons {
    display: flex;
    justify-content: center;
    column-gap: 18px;
  }
</style>
