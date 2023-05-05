<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        id="employee"
        class="container customer-employee"
        v-if="isEmployerEmployee"
      >
        <p class="title">Welcome back, {{ getName }}!</p>
        <br />
        <div class="list">
          <template v-if="isEmployer">
            <ion-button href="/employee/new">Register New Employee</ion-button>
          </template>
          <ion-button href="/appointment">Appointment</ion-button>
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
    margin: auto;
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 50%;
  }
}
</style>