<template>
  <div class="color-string">
    <p class="color-string__text">{{ colorString }}</p>
    <app-button :set="copyButtonSet" @copy-color="copyColor" />
  </div>
</template>

<script>
  import AppButton from './AppButton.vue'

  export default {
    components: { AppButton },

    props: {
      colorString: String
    },

    data() {
      return {
        input: '',
        copyButtonSet: {
          text: 'COPY',
          event: 'copyColor'
        }
      }
    },

    methods: {
      copyColor() {
        try {
          navigator.clipboard.writeText(this.colorString)
        } catch (err) {
          throw err
        }
      }
    }
  }
</script>

<style>
  .color-string {
    display: flex;
    column-gap: 24px;
  }

  .color-string__text {
    min-width: 320px;
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 700;
    color: var(--dark-brown);
    text-align: right;
    padding-top: 10px;
  }
</style>
