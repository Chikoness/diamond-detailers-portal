<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="customer-appt">
        <div class="list">
          <ion-button href="/customer/appointment/new">New Appointment</ion-button>
          <ion-input
            label="Enter your Appointment ID"
            label-placement="stacked"
            fill="outline"
          ></ion-input>
          <ion-button>Submit</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton, IonInput } from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonInput,
  },
};
</script>

<style lang="scss">
#customer-appt {
  width: 100%;
  height: 100%;
  padding: 5rem 0;

  .title {
    margin: auto;
    text-align: center;
  }

  .list {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 50%;

    ion-button {
      margin-bottom: 8rem;
    }
  }

  ion-item {
    margin: 2rem 0;
  }
}
</style>
    