<template>
  <div class="transparency-range" :style="style"></div>
</template>

<script>
  export default {
    props: {
      color: String
    },
    computed: {
      style() {
        return {
          backgroundColor: this.color
        }
      }
    }
  }
</script>

<style scoped>
  .transparency-range {
    width: 400px;
    height: 40px;
    border-radius: 10px;
  }
</style>
