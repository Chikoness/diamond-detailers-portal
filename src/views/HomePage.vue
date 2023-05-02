<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- <ion-title size="large">Blank</ion-title> -->
          <button></button>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h2>Welcome to Diamond Detailers Portal</h2>
        <h4>Are you employer/employee or customer?</h4>
        <br />
        <ion-button :href="isEmployerEmployee ? '/employee' : '/authentication'"
          >Employer / Employee</ion-button
        >
        <br />
        <ion-button href="/customer" @click="registerCustomer">Customer</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
} from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
  },

  mounted() {
    if (this.isEmployerEmployee) { 
      window.location.href = "/employee"
    } else if (this.checkUserType == 'customer') {
      window.location.href = "/customer"
    }
  },

  computed: {
    isEmployerEmployee() {
      return (
        localStorage.getItem("type") == "employer" ||
        localStorage.getItem("type") == "employee"
      );
    },

    checkUserType() {
      const type = localStorage.getItem("type")

      return type
    },
  },

  methods: {
    registerCustomer() {
      if (localStorage.getItem("type") == null) {
        localStorage.setItem("type", "customer")
      } 
    }
  }
};
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
