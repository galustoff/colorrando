<template>
  <button class="change-color-btn" @click="$emit('changeColor')">color!</button>
</template>

<script>
export default {
  emits: ['changeColor']
}
</script>

<style>
.change-color-btn {
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(0, 0, 0, 0.85);
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgba(36, 82, 117, 0.65);
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.85);
}

.change-color-btn:active {
  box-shadow: none;
}
</style>
