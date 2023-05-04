<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="appt-new">
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <ion-input
              label="Name"
              label-placement="stacked"
              fill="outline"
              v-model="name"
              required
            ></ion-input>
            <ion-input
              label="Email"
              label-placement="stacked"
              fill="outline"
              v-model="email"
              required
              type="email"
            ></ion-input>
            <ion-select
              label="Select Car Type"
              interface="popover"
              label-placement="stacked"
              fill="outline"
              required
              @ionChange="car = $event.target.value"
            >
              <ion-select-option value="proton saga"
                >Proton Saga</ion-select-option
              >
              <ion-select-option value="proton exora"
                >Proton Exora</ion-select-option
              >
              <ion-select-option value="proton x50"
                >Proton x50</ion-select-option
              >
            </ion-select>
            <ion-select
              label="Select services needed"
              label-placement="stacked"
              interface="popover"
              :multiple="true"
              fill="outline"
              required
              @ionChange="services = $event.target.value"
            >
              <ion-select-option value="premium wash"
                >Premium Wash</ion-select-option
              >
              <ion-select-option value="wash & vacuum"
                >Wash & Vacuum</ion-select-option
              >
              <ion-select-option value="sealant solution"
                >Sealant Solution</ion-select-option
              >
            </ion-select>
            <ion-input
              label="Date"
              type="date"
              label-placement="stacked"
              fill="outline"
              @ionChange="car = $event.target.value"
            ></ion-input>
            <ion-select
              label="Time slot"
              interface="popover"
              label-placement="stacked"
              fill="outline"
              required
              @ionChange="slot = $event.target.value"
            >
              <ion-select-option value="0900">09:00 - 12:00</ion-select-option>
              <ion-select-option value="1000">14:00 - 15:00</ion-select-option>
              <ion-select-option value="1200">16:00 - 21:00</ion-select-option>
            </ion-select>
          </div>

          <div class="form-btn">
            <ion-button type="submit">Submit</ion-button>
            <ion-button type="reset" color="light">Clear</ion-button>
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
  IonSelectOption,
} from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonPage,
    IonInput,
    IonSelect,
    IonSelectOption,
  },

  data() {
    return {
      name: null,
      email: null,
      car: null,
      services: null,
      date: null,
      slot: null,
    };
  },

  methods: {
    submitForm() {},
  },
};
</script>

<style lang="scss">
#appt-new {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>