<template>
  <!-- As is known, one of the most difficult problems of programming is naming. The code below illustrate this. Sorry -->
  <div
    :class="{
      'color-controller': true,
      'color-controller_opened': isOpened
    }"
    @click="handleCloseClick"
  >
    <!-- close button -->
    <div class="color-controller__container">
      <app-color-controller-close-btn
        @close-popup="closePopup"
      ></app-color-controller-close-btn>

      <!-- first color swatch -->
      <div class="color-controller__sketch-colors">
        <div class="color-controller__color-container">
          <div class="color-controller__color-substrate">
            <div
              class="color-controller__color color-controller__color_old"
              :style="firstColorStyle"
            ></div>
          </div>
        </div>

        <!-- second color swatch -->
        <div class="color-controller__color-container">
          <div class="color-controller__color-substrate">
            <div
              class="color-controller__color color-controller__color_old"
              :style="secondColorStyle"
            ></div>
          </div>
        </div>
      </div>

      <!-- new color swatch -->
      <div
        class="color-controller__color-container color-controller__color-container_new-color"
      >
        <div class="color-controller__new-color-arrows-popup">
          <div
            class="color-controller__arrow color-controller__arrow_left"
          ></div>
          <div
            class="color-controller__arrow color-controller__arrow_right"
          ></div>
        </div>
        <div class="color-controller__color-substrate">
          <div
            class="color-controller__color color-controller__color color-controller__color_new"
            :style="newColorStyle"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppColorControllerCloseBtn from './AppColorControllerCloseBtn.vue'

  export default {
    data() {
      return {
        isOpened: false,
        firstColorStyle: {
          backgroundColor: ''
        },
        secondColorStyle: {
          backgroundColor: ''
        },
        newColorStyle: {
          backgroundColor: ''
        }
      }
    },
    inject: ['sketchColors'],
    props: ['newColor'],
    watch: {
      newColor(value) {
        if (value) {
          this.firstColorStyle.backgroundColor = this.sketchColors.first
          this.secondColorStyle.backgroundColor = this.sketchColors.second
          this.newColorStyle.backgroundColor = this.newColor
          this.isOpened = !this.isOpened
        }
      }
    },
    components: {
      AppColorControllerCloseBtn
    },
    methods: {
      closePopup() {
        this.$emit('closingPopup')
        this.isOpened = false
      },
      handleCloseClick(e) {
        if (e.target === e.currentTarget) this.closePopup()
      }
    }
  }
</script>

<style>
  .color-controller {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(251, 251, 251, 0.4);
  }

  .color-controller_opened {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .color-controller__container {
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 100px;
    background-color: rgb(174, 189, 212, 0.96);
    border-radius: 10px;
    position: relative;
  }

  .color-controller__sketch-colors {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .color-controller__color-substrate {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    overflow: hidden;
  }

  .color-controller__color {
    border: 4px solid var(--dark-brown);
    border-radius: 10px;
    width: 200px;
    height: 120px;
  }

  .color-controller__color-container {
    transition: transform 0.2s linear;
  }

  .color-controller__color-container:hover {
    transform: scale(1.1);
  }

  .color-controller__color-container_new-color {
    position: relative;
  }

  .color-controller__color_old {
    cursor: url('assets/roller.svg') 12 0, pointer;
  }

  .color-controller__new-color-arrows-popup {
    display: none;
  }

  .color-controller__color-container:hover
    .color-controller__new-color-arrows-popup {
    position: absolute;
    top: -80px;
    left: 10px;
    display: flex;
    column-gap: 20px;
  }

  .color-controller__arrow {
    width: 80px;
    height: 80px;
    background-image: url('assets/arrow.svg');
    background-repeat: no-repeat;
  }

  .color-controller__arrow_left {
    transform: rotate(-25deg);
  }

  .color-controller__arrow_right {
    transform: rotate(25deg);
  }
</style>
