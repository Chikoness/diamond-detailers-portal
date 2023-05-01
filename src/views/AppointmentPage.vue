<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="customer-appt">
        <div class="list">
          <ion-button href="/appointment/new" v-if="checkUserType == 'customer'"
            >New Appointment</ion-button
          >

          <form @submit.prevent="submitApptId">
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
            <ion-button type="submit">Submit</ion-button>
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
    