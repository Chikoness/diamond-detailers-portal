<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="appt-new">
        <form @submit.prevent="submitForm">
          <ion-input label="Name" fill="outline" v-model="name" required></ion-input>
          <ion-input label="Email" fill="outline" v-model="email" required type="email"></ion-input>
          <ion-select
            label="Select Car Type"
            interface="popover"
            fill="outline"
            required
            @ionChange = "car = $event.target.value"
          >
            <ion-select-option value="proton saga">Proton Saga</ion-select-option>
            <ion-select-option value="proton exora">Proton Exora</ion-select-option>
            <ion-select-option value="proton x50">Proton x50</ion-select-option>
          </ion-select>
          <ion-select
            label="Select services needed"
            interface="popover"
            :multiple="true"
            fill="outline"
            required
            @ionChange = "services = $event.target.value"
          >
            <ion-select-option value="premium wash">Premium Wash</ion-select-option>
            <ion-select-option value="wash & vacuum">Wash & Vacuum</ion-select-option>
            <ion-select-option value="sealant solution"
              >Sealant Solution</ion-select-option
            >
          </ion-select>
          <ion-input label="Date" type="date" fill="outline" @ionChange = "car = $event.target.value"></ion-input>
          <ion-select
            label="Time slot"
            interface="popover"
            fill="outline"
            required
            @ionChange = "slot = $event.target.value"
          >
            <ion-select-option value="apples">9:00 a.m.</ion-select-option>
            <ion-select-option value="oranges">10:00 a.m.</ion-select-option>
            <ion-select-option value="bananas">11:00 a.m.</ion-select-option>
          </ion-select>

          <div class="form-btn">
            <ion-button type="submit">Submit</ion-button>
            <ion-button type="reset" color="warning">Clear</ion-button>
          </div>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonInput,
  IonSelect,
  IonSelectOption
} from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonPage,
    IonInput,
    IonSelect,
    IonSelectOption
  },

  data() {
    return {
      name: null,
      email: null,
      car: null,
      services: null,
      date: null,
      slot: null
    }
  },

  methods: {
    submitForm() {},
  },
};
</script>

<style lang="scss">
#appt-new {
  width: 50%;
  height: 100%;
  padding: 5rem 0;
  margin: auto;

  .form-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>