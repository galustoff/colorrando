<template>
  <div class="app-sketches__container">
    <app-sketches-list></app-sketches-list>
    <app-button :set="buttonSet" @invert-request="invertRequest"></app-button>
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
          event: 'invertRequest'
        }
      }
    },
    components: {
      AppButton,
      AppSketchesList
    },
    methods: {
      invertRequest() {
        this.$emit('invertRequest')
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
