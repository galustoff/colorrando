<template>
  <div class="app-container">
    <app-sketches @invert-request="invertSketchColors"></app-sketches>
    <app-frontage @pick-color="addColorToDump"></app-frontage>
    <app-dump
      @new-color-request="changeSketchColor"
      :new-color="newDumpColor"
    ></app-dump>
    <app-color-controller
      :new-color="newSketchColor"
      @closing-popup="newSketchColor = ''"
    ></app-color-controller>
  </div>
</template>

<script>
  import AppSketches from './components/AppSketches/AppSketches.vue'
  import AppFrontage from './AppFrontage.vue'
  import AppDump from './components/AppDump/AppDump.vue'
  import AppColorController from './AppColorController.vue'

  export default {
    /**
     * newDumpColor is flag for TheDump. When it changes a new color adds to dump color array (if array does not already exist the same color)
     *
     * newSketchColor is flag for TheColorController. When it changes and not false, it triggering controller for open popup for change one of sketchColors
     *
     * sketchColors are the main colors of the app, initially they are black and white
     */
    data() {
      return {
        newDumpColor: '',
        newSketchColor: '',
        sketchColors: {
          first: 'rgba(0, 0, 0, 1)',
          second: 'rgba(255, 255, 255, 1)'
        }
      }
    },
    components: {
      AppSketches,
      AppFrontage,
      AppDump,
      AppColorController
    },
    methods: {
      addColorToDump(color) {
        this.newDumpColor = color
      },
      invertSketchColors() {
        const tempColor = this.sketchColors.first

        this.sketchColors.first = this.sketchColors.second
        this.sketchColors.second = tempColor
      },
      changeSketchColor(newColor) {
        this.newSketchColor = newColor
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
    position: relative;
  }
</style>
