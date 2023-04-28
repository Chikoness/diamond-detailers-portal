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
        <h4>Are you Employer, employee or customer?</h4>
        <br />
        <ion-button href="/employer">Employer</ion-button>
        <br />
        <ion-button href="/employee">Employee</ion-button>
        <br />
        <ion-button href="/customer">Customer</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonToolbar, IonButton } from '@ionic/vue';

export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton
  }
}
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
