<template>
  <div class="color-string">
    <input type="text" v-model="colorString" />
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
        console.log(this.colorString)
      }
    }
  }
</script>

<style></style>
