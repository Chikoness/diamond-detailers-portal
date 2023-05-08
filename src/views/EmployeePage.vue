<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        id="employee"
        class="container"
        :class="isEmployer ? 'employer' : 'employee'"
        v-if="isEmployerEmployee"
      >
        <div class="logo small"></div>
        <p class="title">Welcome back, {{ getName }}!</p>
        <br />
        <div class="list">
          <template v-if="isEmployer">
            <ion-button href="/employee/new" color="dark"
              >Register New Employee</ion-button
            >
          </template>
          <ion-button href="/appointment" color="dark"
            >Check Appointment</ion-button
          >

          <form @submit.prevent="submitICNumber" class="dark" v-if="isEmployer">
            <div class="input-group">
              <p>Enter your IC Number to view employer/employee page</p>
              <ion-input
                fill="outline"
                pattern="\d{6}[\-]\d{2}[\-]\d{4}"
                v-model="icNumber"
                required
              ></ion-input>
            </div>
            <div class="form-btn">
              <ion-button type="submit" color="light">Submit</ion-button>
            </div>
            <p class="error">{{ message }}</p>
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

  data() {
    return {
      icNumber: null,
      message: null,
    };
  },

  mounted() {
    if (!this.isEmployerEmployee) {
      window.location.href = "/authentication";
    }

    if (localStorage.getItem("id") !== null) {
      localStorage.removeItem("id");
    }

    if (localStorage.getItem("icToCheck") !== null) {
      localStorage.removeItem("icToCheck");
    }
  },

  computed: {
    isEmployerEmployee() {
      return (
        localStorage.getItem("type") == "employer" ||
        localStorage.getItem("type") == "employee"
      );
    },

    isEmployer() {
      return localStorage.getItem("type") == "employer";
    },

    getName() {
      return localStorage.getItem("name");
    },
  },

  methods: {
    submitICNumber() {
      const data = {
        icNumber: this.icNumber,
      };

      axios
        .post(process.env.VUE_APP_BACKEND + "/api/employees/get", data)
        .then((res) => {
          localStorage.setItem("icToCheck", this.icNumber);

          window.location.href = "/employee/edit";
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
#employee {
  .title {
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80%;

    form {
      margin-top: 1rem;
      p {
        margin-bottom: 1rem;
      }
    }

    ion-button {
      margin-bottom: 1.2rem;
      box-shadow: rgba(255, 255, 255, 0.4) 0px 5px,
        rgba(255, 255, 255, 0.3) 0px 10px, rgba(255, 255, 255, 0.2) 0px 15px,
        rgba(255, 255, 255, 0.1) 0px 20px, rgba(255, 255, 255, 0.05) 0px 25px;
    }
  }

  .error {
    color: red;
  }
}
</style>