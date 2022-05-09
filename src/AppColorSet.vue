<template>
  <ul class="app-color-set">
    <app-color-set-item
      v-for="color in colorSet"
      :key="color"
      :bg-color="color"
    ></app-color-set-item>
  </ul>
</template>

<script>
import AppColorSetItem from './AppColorSetItem.vue'

export default {
  data() {
    return {
      colorSet: []
    }
  },
  components: {
    AppColorSetItem
  },
  props: ['pickedColor'],
  watch: {
    pickedColor() {
      if (!this.colorSet.includes(this.pickedColor))
        this.colorSet.push(this.pickedColor)
    }
  },
  mounted() {
    this.colorSet = []
  }
}
</script>

<style>
.app-color-set {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
