<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="authenticate">
        <div class="list">
          <form @submit.prevent="submitICNumber">
            <ion-input
              label="Enter your IC Number"
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
    submitICNumber() {
      window.location.href = "/employee";
    },
  },
};
</script>
  
<style lang="scss">
#authenticate {
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
      