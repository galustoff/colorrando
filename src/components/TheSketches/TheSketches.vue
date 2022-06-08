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
          color0: this.color0,
          color1: this.color1
        }
      }
    },

    methods: {
      invertColors() {
        const temporary = this.colors.color0

        this.colors.color0 = this.colors.color1
        this.colors.color1 = temporary
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
