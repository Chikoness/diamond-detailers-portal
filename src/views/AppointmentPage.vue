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

          <form @submit.prevent="submitApptId" :class="{dark: checkUserType !== 'customer'}">
            <div class="input-group">
              <ion-input
                label="Enter your Appointment ID"
                label-placement="stacked"
                fill="outline"
                v-model="id"
                required
              ></ion-input>
            </div>
            <div class="form-btn">
              <ion-button :color="checkUserType == 'customer' ? 'warning' : 'light'" type="submit">Submit</ion-button>
            </div>
            <p class="error">
              {{ message }}
            </p>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton, IonInput } from "@ionic/vue";
import axios from "axios";

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

  data() {
    return {
      id: null,
      message: null
    }
  },

  mounted() {
    if (localStorage.getItem("id") !== null) {
      localStorage.removeItem('id');
    }
  },

  methods: {
    submitApptId() {
      const data = {
        id: this.id
      }

      axios
        .post(process.env.VUE_APP_BACKEND + "/api/appointment/get", data)
        .then((res) => {
          localStorage.setItem("id", this.id)

          window.location.href = "/appointment/edit";
        })
        .catch((e) => {
          this.message =
            e.response === undefined
              ? "Cannot connect to backend. Please wait and try again"
              : e.response.data.message;
        });
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
    