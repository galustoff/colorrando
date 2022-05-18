<template>
  <li class="app-sketches__list-item">
    <slot></slot>
  </li>
</template>

<script>
  export default {}
</script>

<style>
  .app-sketches__list-item {
    width: 200px;
    height: 120px;
    flex-shrink: 0;
    background-color: #000;
  }
</style>
