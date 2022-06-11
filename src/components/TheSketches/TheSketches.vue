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
      color0Part: String,
      color0Alpha: Number,
      color1Part: String,
      color1Alpha: Number
    },

    data() {
      return {
        buttonSet: {
          text: 'INVERT?',
          event: 'invertRequest'
        },

        colors: {
          color0: '',
          color1: ''
        },

        inverted: false
      }
    },

    watch: {
      color0Part() {
        this.makeColor(0)
      },

      color0Alpha() {
        this.makeColor(0)
      },

      color1Part() {
        this.makeColor(1)
      },

      color1Alpha() {
        this.makeColor(1)
      }
    },

    mounted() {
      this.makeColor(0)
      this.makeColor(1)
    },

    methods: {
      invertColors() {
        const temporary = this.colors.color0

        this.colors.color0 = this.colors.color1
        this.colors.color1 = temporary

        this.inverted = !this.inverted
      },

      makeColor(idx) {
        const key = `color${this.inverted ? Number(!idx) : idx}`

        this.colors[key] =
          this.$props[`color${idx}Part`] +
          this.$props[`color${idx}Alpha`] / 100 +
          ')'
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
