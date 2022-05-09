<template>
  <app-randomizer-grid></app-randomizer-grid>
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
      }
    }
  },

  components: {
    AppRandomizerGrid,
    AppButton
  },

  methods: {
    refreshColors() {
      console.log('colors refreshed...')
    }
  }
}
</script>

<style></style>
