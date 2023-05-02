<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="authenticate">
        <div class="list">
          <form @submit.prevent="submitICNumber">
            <p>Enter your IC Number to view employer/employee page</p>
            <ion-input
              fill="outline"
              pattern="\d{6}[\-]\d{2}[\-]\d{4}"
              v-model="icNumber"
              required
            ></ion-input>
            <div class="submit-btn">
              <ion-button type="submit">Submit</ion-button>
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
      message: null
    }
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
      const data = {
        icNumber: this.icNumber
      };

      axios
        .post(process.env.VUE_APP_BACKEND + "/api/employees/authenticate", data)
        .then((res) => {
          localStorage.setItem("name", res.data.name)
          localStorage.setItem("icNumber", res.data.icNumber);
          localStorage.setItem("securityLvl", res.data.securityLvl)
          localStorage.setItem("type", res.data.securityLvl == 1 ? "employer" : "employee")

          window.location.href = "/employee";
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
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

    form {
      width: 100%;
      margin: auto;

      p {
        text-align: center;
      }

      .submit-btn {
        display: flex;
        justify-content: center;

      }

      .error {
        color: red;
      }
    }

    ion-button {
      margin-bottom: 8rem;
    }
  }

  ion-item {
    margin: 2rem 0;
  }
}
</style>
      