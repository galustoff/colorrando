<template>
  <div class="the-sketches">
    <sketches-list />
    <app-button :set="buttonSet" @invert-request="invertColors" />
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

    provide() {
      return {
        colors: this.colors
      }
    },

    props: {
      color0: String,
      color1: String
    },

    data() {
      return {
        buttonSet: {
          text: 'INVERT?',
          event: 'invertRequest'
        },

        colors: {
          main: this.color0,
          back: this.color1
        }
      }
    },

    methods: {
      invertColors() {
        const temporary = this.colors.main

        this.colors.main = this.colors.back
        this.colors.back = temporary
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
