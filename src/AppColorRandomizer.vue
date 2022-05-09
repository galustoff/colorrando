<template>
  <div class="container">
    <div class="colors-block">
      <app-color-field
        v-for="field in 100"
        :key="field"
        :change-color-flag="changeColorFlag"
        @pick-color="pickColor"
      ></app-color-field>
    </div>
    <app-change-color-button
      @change-color="changeColor"
    ></app-change-color-button>
  </div>
</template>

<script>
import AppColorField from './AppColorField.vue'
import AppChangeColorButton from './AppChangeColorButton.vue'

export default {
  data() {
    return {
      changeColorFlag: true
    }
  },
  components: {
    AppColorField,
    AppChangeColorButton
  },
  methods: {
    changeColor() {
      this.changeColorFlag = !this.changeColorFlag
    },

    pickColor(color) {
      this.$emit('pickColor', color)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
}

.colors-block {
  background-color: rgba(255, 255, 255, 1);
  width: 400px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 0;
  cursor: url('./assets/pipette.svg') 2 25, auto;
}
</style>
