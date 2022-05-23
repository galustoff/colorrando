<template>
  <ul class="the-randomizer__grid">
    <randomizer-grid-field
      v-for="field in 100"
      :color-flag="colorFlag"
      @pick-color="pickColor"
    />
  </ul>
</template>

<script>
  import RandomizerGridField from './RandomizerGridField.vue'

  export default {
    components: {
      RandomizerGridField
    },
    props: ['colorFlag'],
    emits: ['pickColor'],
    methods: {
      pickColor(color) {
        this.$emit('pickColor', color)
      }
    }
  }
</script>

<style>
  .the-randomizer__grid {
    font-size: 0;
    list-style: none;
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
    border-radius: 10px;
    cursor: url('../../assets/pipette.svg') 0 24, pointer;
  }
</style>
