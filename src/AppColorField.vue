<template>
  <div
    class="field"
    :style="style"
    @click="$emit('pickColor', style.backgroundColor)"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        backgroundColor: ''
      }
    }
  },

  mounted() {
    this.setRandomBackgroundColor()
  },

  methods: {
    getRandomInteger(upTo) {
      return Math.floor(Math.random() * upTo)
    },

    getRandomColor() {
      const r = this.getRandomInteger(256)
      const g = this.getRandomInteger(256)
      const b = this.getRandomInteger(256)
      const a = this.getRandomInteger(101) / 100

      return `rgba(${r}, ${g}, ${b}, ${a})`
    },

    setRandomBackgroundColor() {
      this.style.backgroundColor = this.getRandomColor()
    }
  },

  props: {
    changeColorFlag: {
      type: Boolean
    }
  },

  watch: {
    changeColorFlag() {
      this.setRandomBackgroundColor()
    }
  }
}
</script>

<style scoped>
.field {
  display: inline-block;
  width: 40px;
  height: 40px;
}
</style>
