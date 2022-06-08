<template>
  <ul class="sketches-list">
    <sketches-list-item v-for="item in sketches">
      <component :is="item" />
    </sketches-list-item>
  </ul>
</template>

<script>
  /**
   * Exclude from sketches
   */
  import SketchesListItem from './SketchesListItem.vue'
  /**
   * sketches
   */
  import SketchText from './sketches/SketchText.vue'
  import SketchSplitted from './sketches/SketchSplitted.vue'
  import SketchLogo from './sketches/SketchLogo.vue'

  export default {
    data() {
      return {
        compsToExclude: ['SketchesListItem']
      }
    },
    components: {
      SketchesListItem,
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
  .sketches-list {
    width: 360px;
    height: 400px;
    padding-top: 18px;
    padding-bottom: 18px;
    background-color: rgba(020, 007, 088, 0.1);
    border-radius: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    align-items: center;
    overflow: scroll;
  }
</style>
