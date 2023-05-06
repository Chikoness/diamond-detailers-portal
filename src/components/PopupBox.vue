<template>
  <div id="popup">
    <div class="pop-container" :class="{employee: isEmployee}">
      <p>Are you sure you would like to delete this appointment?</p>
      <div class="form-btn">
        <ion-button color="danger">Confirm</ion-button>
        <ion-button :color="isEmployee ? 'light' : 'warning'" @click="$emit('close')">Cancel</ion-button>
      </div>
    </div>
  </div>
</template>

<script>
import { IonButton } from "@ionic/vue";
export default {
  props: ["isEmployee"],

  components: {
    IonButton,
  },
};
</script>

<style lang="scss">
#popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  padding-top: 65%;

  .pop-container {
    width: 80%;
    height: auto;
    background-color: rgba(255, 213, 52);
    margin: auto;
    color: #000;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(255, 213, 52, 0.4) 0px 5px,
      rgba(255, 213, 52, 0.3) 0px 10px, rgba(255, 213, 52, 0.2) 0px 15px,
      rgba(255, 213, 52, 0.1) 0px 20px, rgba(255, 213, 52, 0.05) 0px 25px;

    p {
      text-align: center;
      font-size: 1.2rem;
    }

    .form-btn {
      display: flex;
      flex-direction: row;

      ion-button {
        width: 30vw;
      }
    }

    &.employee {
      background-color: #fff;
      box-shadow: rgba(255, 255, 255, 0.4) 0px 5px,
        rgba(255, 255, 255, 0.3) 0px 10px, rgba(255, 255, 255, 0.2) 0px 15px,
        rgba(255, 255, 255, 0.1) 0px 20px, rgba(255, 255, 255, 0.05) 0px 25px;
    }
  }
}
</style>