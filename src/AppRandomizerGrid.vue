<template>
  <ul class="app-randomizer__grid">
    <app-randomizer-grid-field
      v-for="field in 100"
      :color-flag="colorFlag"
    ></app-randomizer-grid-field>
  </ul>
</template>

<script>
  import AppRandomizerGridField from './AppRandomizerGridField.vue'

  export default {
    props: ['colorFlag'],
    components: {
      AppRandomizerGridField
    }
  }
</script>

<style>
  .app-randomizer__grid {
    font-size: 0;
    list-style: none;
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 1);
    overflow: hidden;
    border-radius: 10px;
    cursor: url('~assets/pipette.svg') 0 24, pointer;
  }
</style>
