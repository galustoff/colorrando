<template>
  <div class="app-container">
    <app-sketches @invert-request="invertSketchColors"></app-sketches>
    <app-frontage @pick-color="addColorToDump"></app-frontage>
    <app-dump :new-color="newDumpColor"></app-dump>
  </div>
</template>

<script>
  import AppSketches from './components/AppSketches/AppSketches.vue'
  import AppFrontage from './AppFrontage.vue'
  import AppDump from './components/AppDump/AppDump.vue'

  export default {
    data() {
      return {
        newDumpColor: '',
        sketchColors: {
          first: 'rgba(0, 0, 0, 1)',
          second: 'rgba(255, 255, 255, 1)'
        }
      }
    },
    components: {
      AppSketches,
      AppFrontage,
      AppDump
    },
    methods: {
      addColorToDump(color) {
        this.newDumpColor = color
      },
      invertSketchColors() {
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
  .app-container {
    /* production and night modes */
    /* background-color: rgba(0, 0, 0, 0.04); */
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
