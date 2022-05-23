<template>
  <li
    class="the-randomizer__grid-field"
    :style="style"
    @click="$emit('pickColor', style.backgroundColor)"
  ></li>
</template>

<script>
  export default {
    props: {
      colorFlag: {
        type: Boolean
      }
    },

    emits: ['pickColor'],

    data() {
      return {
        style: {
          backgroundColor: ''
        }
      }
    },

    watch: {
      colorFlag() {
        this.setRandomBackgroundColor()
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
    }
  }
</script>

<style scoped>
  .the-randomizer__grid-field {
    display: inline-block;
    width: 40px;
    height: 40px;
  }
</style>
