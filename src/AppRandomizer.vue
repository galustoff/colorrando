<template>
  <app-randomizer-grid :color-flag="colorFlag"></app-randomizer-grid>
  <app-button :set="buttonSet" @refresh-colors="refreshColors"></app-button>
</template>

<script>
import AppRandomizerGrid from './AppRandomizerGrid.vue'
import AppButton from './AppButton.vue'

export default {
  data() {
    return {
      buttonSet: {
        text: 'COLOR!',
        event: 'refreshColors'
      },

      colorFlag: true
    }
  },

  components: {
    AppRandomizerGrid,
    AppButton
  },

  methods: {
    refreshColors() {
      this.colorFlag = !this.colorFlag
    }
  }
}
</script>

<style></style>
