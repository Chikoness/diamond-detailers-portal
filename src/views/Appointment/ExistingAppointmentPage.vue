<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="appt-exist">
        <form @submit.prevent="submitForm">
          <ion-input
            label="Name"
            fill="outline"
            v-model="formDetails.name"
            required
          ></ion-input>
          <ion-input
            label="Email"
            fill="outline"
            v-model="formDetails.email"
            required
            type="email"
          ></ion-input>
          <ion-select
            label="Select Car Type"
            interface="popover"
            fill="outline"
            required
            @ionChange="formDetails.car = $event.target.value"
          >
            <ion-select-option value="proton saga"
              >Proton Saga</ion-select-option
            >
            <ion-select-option value="proton exora"
              >Proton Exora</ion-select-option
            >
            <ion-select-option value="proton x50">Proton x50</ion-select-option>
          </ion-select>
          <ion-select
            label="Select services needed"
            interface="popover"
            :multiple="true"
            fill="outline"
            required
            @ionChange="formDetails.services = $event.target.value"
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
            fill="outline"
            @ionChange="car = $event.target.value"
            v-model="formDetails.date"
          ></ion-input>
          <ion-select
            label="Time slot"
            interface="popover"
            fill="outline"
            required
            @ionChange="formDetails.slot = $event.target.value"
            v-model="formDetails.slot"
          >
            <ion-select-option value="apples">9:00 a.m.</ion-select-option>
            <ion-select-option value="oranges">10:00 a.m.</ion-select-option>
            <ion-select-option value="bananas">11:00 a.m.</ion-select-option>
          </ion-select>

          <div class="form-btn">
            <ion-button type="submit">Edit</ion-button>
            <ion-button type="reset" color="danger">Delete</ion-button>
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
      formDetails: {
        name: "Clarissa Y.",
        email: "clarissa@gmail.com",
        car: "Proton Saga",
        services: ["Premium Wash", "Sealant Solution"],
        date: "12-12-2022",
        slot: "9:00 a.m.",
      },
      editModeOn: false,
    };
  },

  methods: {
    submitForm() {},
  },
};
</script>

<style lang="scss">
#appt-exist {
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