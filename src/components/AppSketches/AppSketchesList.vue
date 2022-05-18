<template>
  <ul class="app-sketches__list">
    <app-sketches-list-item v-for="item in sketches">
      <component :is="item"></component>
    </app-sketches-list-item>
  </ul>
</template>

<script>
  /**
   * Exclude from sketches
   */
  import AppSketchesListItem from './AppSketchesListItem.vue'
  /**
   * sketches
   */
  import SketchText from './sketches/SketchText.vue'
  import SketchSplitted from './sketches/SketchSplitted.vue'
  import SketchLogo from './sketches/SketchLogo.vue'

  export default {
    data() {
      return {
        compsToExclude: ['AppSketchesListItem']
      }
    },
    components: {
      AppSketchesListItem,
      SketchText,
      SketchSplitted,
      SketchLogo
    },
    computed: {
      sketches() {
        const components = Object.keys(this.$options.components)
        const sketches = components.filter(
          (i) => !this.compsToExclude.includes(i)
        )

        return sketches
      }
    }
  }
</script>

<style>
  .app-sketches__list {
    width: 360px;
    height: 400px;
    padding-top: 18px;
    padding-bottom: 18px;
    background-color: rgba(0, 124, 124, 0.04);
    border-radius: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
    overflow: scroll;
  }
</style>
