<template>
  <button
    class="app-button"
    v-text="set.text"
    @click="$emit(set.event)"
  ></button>
</template>

<script>
export default {
  props: {
    set: {
      type: Object,
      validator(set) {
        const keysTemplate = ['text', 'event']
        const setKeys = Object.keys(set)

        /**
         * checking availability of keys 'text' & 'event' in set object
         * & both of properties are strings
         */
        if (!keysTemplate.every((key) => setKeys.includes(key))) return false
        if (!setKeys.every((key) => typeof set[key] === 'string')) return false

        return true
      }
    }
  }
}
</script>

<style>
.app-button {
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

.app-button:active {
  box-shadow: none;
}
</style>
