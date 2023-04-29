<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="appt-new">
        <form @submit.prevent="submitForm">
          <ion-input label="Name" fill="outline" required></ion-input>
          <ion-input label="Email" fill="outline" required type="email"></ion-input>
          <ion-select
            label="Select Car Type"
            interface="popover"
            fill="outline"
            required
          >
            <ion-select-option value="apples">Proton Saga</ion-select-option>
            <ion-select-option value="oranges">Proton Exora</ion-select-option>
            <ion-select-option value="bananas">Proton x50</ion-select-option>
          </ion-select>
          <ion-select
            label="Select services needed"
            interface="popover"
            :multiple="true"
            fill="outline"
            required
          >
            <ion-select-option value="apples">Premium Wash</ion-select-option>
            <ion-select-option value="oranges">Wash & Vacuum</ion-select-option>
            <ion-select-option value="bananas"
              >Sealant Solution</ion-select-option
            >
          </ion-select>
          <ion-input label="Date" type="date" fill="outline"></ion-input>
          <ion-select
            label="Time slot"
            interface="popover"
            fill="outline"
            required
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