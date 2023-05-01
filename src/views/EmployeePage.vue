<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="employee">
        <p class="title">Welcome back, Ahmad!</p>
        <br />
        <div class="list">
          <ion-button href="employee/appointment">Appointment</ion-button>
          <ion-button>Appointment</ion-button>
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
#employee {
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
    