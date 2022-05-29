<template>
  <div class="transparency-range__division" :style="bgc"></div>
</template>

<script>
  export default {
    props: {
      color: String
    },
    computed: {
      bgc() {
        return {
          backgroundColor: this.color
        }
      }
    }
  }
</script>

<style>
  .transparency-range__division {
    flex-grow: 1;
  }
</style>
