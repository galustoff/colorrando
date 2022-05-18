<template>
  <ul class="app-sketches__list">
    <app-sketches-list-item></app-sketches-list-item>
    <app-sketches-list-item></app-sketches-list-item>
    <app-sketches-list-item></app-sketches-list-item>
    <app-sketches-list-item></app-sketches-list-item>
  </ul>
</template>

<script>
  import AppSketchesListItem from './AppSketchesListItem.vue'

  export default {
    components: {
      AppSketchesListItem
    }
  }
</script>

<style>
  .app-sketches__list {
    width: 360px;
    height: 400px;
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
