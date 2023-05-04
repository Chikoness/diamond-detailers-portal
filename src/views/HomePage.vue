<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- <ion-title size="large">Blank</ion-title> -->
          <button></button>
        </ion-toolbar>
      </ion-header>

      <div id="main">
        <div class="logo"></div>
        <span>Welcome to</span>
        <h2>Diamond Detailers Portal</h2>
        <h4>Are you employer/employee or customer?</h4>
        <br />
        <ion-button color="warning" :href="isEmployerEmployee ? '/employee' : '/authentication'"
          >Employer / Employee</ion-button
        >
        <br />
        <ion-button color="warning" href="/customer" @click="registerCustomer">Customer</ion-button>
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

<style lang="scss">
// <-- Global css theme --> 
@font-face {
  font-family: 'Gotham-Black';
  src: url('@/assets/fonts/Gotham-Black.otf');
}

@font-face {
  font-family: 'Gotham-Book';
  src: url('@/assets/fonts/Gotham-Book.otf');
}

@font-face {
  font-family: 'Gotham-Light';
  src: url('@/assets/fonts/Gotham-Light-Regular.otf');
}

div {
  font: 1.2rem 'Gotham-Book';
}

ion-content {
  --background: none;
  background: no-repeat center url('@/assets/img/background2.png');
  background-size: auto 100%;
  background-color: #000;
}

ion-button {
  font: 1.1rem "Gotham-Book";
}

.logo {
  margin: 0 auto;
  background: no-repeat url('@/assets/img/diamonddetailers.png');
  background-size: 100%;
  width: 45vw;
  height: 45vw;
  margin-bottom: 0.5rem;

  &.small {
    width: 28vw;
    height: 28vw;
    margin-bottom: 1rem;
  }
}

form {
  width: 100%;
  margin: auto;
  background-color: rgba(255, 213, 52, 0.9);
  padding: 1.5rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: rgba(255, 213, 52, 0.4) 0px 5px,
    rgba(255, 213, 52, 0.3) 0px 10px, rgba(255, 213, 52, 0.2) 0px 15px,
    rgba(255, 213, 52, 0.1) 0px 20px, rgba(255, 213, 52, 0.05) 0px 25px;

  .input-group {
    ion-input, ion-select {
      --highlight-color-focused: #000;
      --background: rgba(255, 255, 255, 0.4);
      --color: #000;
      color: #000;
      margin-bottom: 0.5rem;
    }

    margin-bottom: 2rem;
  }
}

.form-btn {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ion-button {
    border: 1px solid #000;
  }
}
// <-- Global css theme end --> 

#main {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  h2 {
    font: 1.7rem 'Gotham-Black';
    margin-top: 0.3rem;
    margin-bottom: 5rem;
  }

  h4 {
    margin-bottom: 1.5rem;
  }
}
</style>
