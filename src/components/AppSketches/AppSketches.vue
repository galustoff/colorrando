<template>
  <div class="app-sketches__container">
    <app-sketches-list></app-sketches-list>
    <app-button :set="buttonSet" @invert-colors="invertColors"></app-button>
  </div>
</template>

<script>
  import AppButton from '../../AppButton.vue'
  import AppSketchesList from './AppSketchesList.vue'

  export default {
    data() {
      return {
        buttonSet: {
          text: 'INVERT?',
          event: 'invertColors'
        },
        sketchColors: {
          first: 'rgba(0, 0, 0, 1)',
          second: 'rgba(255, 255, 255, 1)'
        }
      }
    },
    components: {
      AppButton,
      AppSketchesList
    },
    methods: {
      invertColors() {
        const tempColor = this.sketchColors.first

        this.sketchColors.first = this.sketchColors.second
        this.sketchColors.second = tempColor
      }
    },
    provide() {
      return {
        sketchColors: this.sketchColors
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
</style>
