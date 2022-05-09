<template>
  <ul class="app-randomizer__grid">
    <app-randomizer-field v-for="field in 100"></app-randomizer-field>
  </ul>
</template>

<script>
import AppRandomizerField from './AppRandomizerField.vue'

export default {
  components: {
    AppRandomizerField
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
}
</style>
