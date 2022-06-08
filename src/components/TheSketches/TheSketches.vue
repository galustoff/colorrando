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
        },

        inverted: false
      }
    },

    watch: {
      color0(value) {
        if (this.inverted) this.colors.color1 = value
        else this.colors.color0 = value
      },

      color1(value) {
        if (this.inverted) this.colors.color0 = value
        else this.colors.color1 = value
      }
    },

    methods: {
      invertColors() {
        const temporary = this.colors.color0

        this.colors.color0 = this.colors.color1
        this.colors.color1 = temporary

        this.inverted = !this.inverted
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
