<template>
  <div class="the-sketches">
    <sketches-list />
    <app-button :set="buttonSet" @invert-request="invertRequest"></app-button>
  </div>
</template>

<script>
  import AppButton from '../../AppButton.vue'
  import SketchesList from './SketchesList.vue'

  export default {
    components: {
      AppButton,
      SketchesList
    },

    emits: ['invertRequest'],

    data() {
      return {
        buttonSet: {
          text: 'INVERT?',
          event: 'invertRequest'
        }
      }
    },

    methods: {
      invertRequest() {
        this.$emit('invertRequest')
      }
    }
  }
</script>

<style>
  .the-sketches {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
  }
</style>
