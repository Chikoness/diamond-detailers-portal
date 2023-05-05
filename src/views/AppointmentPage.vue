<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="customer-appt" class="container">
        <div class="list">
          <ion-button
            href="/appointment/new"
            v-if="checkUserType == 'customer'"
            color="warning"
            class="appt-btn"
            >New Appointment</ion-button
          >

          <form @submit.prevent="submitApptId">
            <div class="input-group">
              <ion-input
                label="Enter your Appointment ID"
                label-placement="stacked"
                fill="outline"
                required
              ></ion-input>
              <br />
              <ion-input
                v-if="checkUserType == 'customer'"
                label="Enter your Email"
                type="email"
                label-placement="stacked"
                fill="outline"
                required
              ></ion-input>
            </div>
            <div class="form-btn">
              <ion-button color="warning" type="submit">Submit</ion-button>
            </div>
          </form>
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

  computed: {
    checkUserType() {
      const type = localStorage.getItem("type");

      if (type == null) {
        return "customer";
      }

      return type;
    },
  },

  methods: {
    submitApptId() {
      window.location.href = "/appointment/edit";
    },
  },
};
</script>

<style lang="scss">
#customer-appt {
  height: 90%;

  .title {
    margin: auto;
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    .appt-btn {
      margin-bottom: 5rem;
      box-shadow: rgba(255, 213, 52, 0.4) 0px 5px,
        rgba(255, 213, 52, 0.3) 0px 10px, rgba(255, 213, 52, 0.2) 0px 15px,
        rgba(255, 213, 52, 0.1) 0px 20px, rgba(255, 213, 52, 0.05) 0px 25px;
    }
  }
}
</style>
    