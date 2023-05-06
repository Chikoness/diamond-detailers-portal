<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        id="employee"
        class="container customer-employee"
        v-if="isEmployerEmployee"
      >
        <div class="logo small"></div>
        <p class="title">Welcome back, {{ getName }}!</p>
        <br />
        <div class="list">
          <template v-if="isEmployer">
            <ion-button href="/employee/new" color="dark">Register New Employee</ion-button>
          </template>
          <ion-button href="/appointment" color="dark">Check Appointment</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton } from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonPage,
    IonButton,
  },

  mounted() {
    if (!this.isEmployerEmployee) {
      window.location.href = "/authentication";
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

    ion-button {
      margin-bottom: 1.2rem;
      box-shadow: rgba(255, 255, 255, 0.4) 0px 5px,
        rgba(255, 255, 255, 0.3) 0px 10px, rgba(255, 255, 255, 0.2) 0px 15px,
        rgba(255, 255, 255, 0.1) 0px 20px, rgba(255, 255, 255, 0.05) 0px 25px;
    }
  }
}
</style>