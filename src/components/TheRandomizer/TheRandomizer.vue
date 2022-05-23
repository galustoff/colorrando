<template>
  <div class="the-randomizer">
    <the-randomizer-grid :color-flag="colorFlag" @pick-color="pickColor" />
    <app-button :set="buttonSet" @refresh-colors="refreshColors" />
  </div>
</template>

<script>
  import TheRandomizerGrid from './TheRandomizerGrid.vue'
  import AppButton from '../../AppButton.vue'

  export default {
    components: {
      TheRandomizerGrid,
      AppButton
    },

    emits: ['pickColor'],

    data() {
      return {
        buttonSet: {
          text: 'COLOR!',
          event: 'refreshColors'
        },

        colorFlag: true
      }
    },

    methods: {
      refreshColors() {
        this.colorFlag = !this.colorFlag
      },
      pickColor(color) {
        this.$emit('pickColor', color)
      }
    }
  }
</script>

<style>
  .the-randomizer {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 18px;
  }
</style>
