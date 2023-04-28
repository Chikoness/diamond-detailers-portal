<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="customer">
        <p class="title">Welcome back, Clarissa!</p>
        <br />
        <div class="list">
          <ion-button href="customer/appointment">Appointment</ion-button>
          <ion-button>Display Statistics</ion-button>
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
    IonButton
  },
};
</script>
  
<style lang="scss">
#customer {
  width: 100%;
  height: 100%;
  padding: 5rem 0;

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
    