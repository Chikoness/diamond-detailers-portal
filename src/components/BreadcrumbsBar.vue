<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <!-- <ion-title>Diamond Detailers Portal</ion-title> -->
      <ion-breadcrumbs>
        <ion-breadcrumb
          :href="
            checkUserType == 'employer' || checkUserType == 'employee'
              ? '/employee'
              : '/home'
          "
        >
          <p>Home</p>
          <ion-icon
            slot="separator"
            :icon="arrowForward"
            :color="light"
          ></ion-icon>
        </ion-breadcrumb>

        <ion-breadcrumb v-if="checkCurrentPage == 'Edit Appointment'">
          <p>Edit Appointment</p>
        </ion-breadcrumb>

        <ion-breadcrumb v-if="checkCurrentPage == 'Register New Employee'">
          <p>Register New Employee</p>
        </ion-breadcrumb>

        <ion-breadcrumb v-if="checkCurrentPage == 'Change Employee Details'">
          <p>Change Employee Details</p>
        </ion-breadcrumb>
      </ion-breadcrumbs>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {
  IonHeader,
  IonToolbar,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonIcon,
} from "@ionic/vue";
import { arrowForward } from "ionicons/icons";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonBreadcrumbs,
    IonBreadcrumb,
    IonIcon,
  },

  data() {
    return {
      arrowForward,
    };
  },

  mounted() {
    // console.log(this.$router.currentRoute._value.path);
  },

  computed: {
    checkUserType() {
      const type = localStorage.getItem("type");

      return type;
    },

    checkCurrentPage() {
      return this.$router.currentRoute._value.name;
    },

    checkCurrentPath() {
      return this.$router.currentRoute._value.path;
    },
  },

  methods: {},
};
</script>

<style lang="scss">
p {
  margin: 0;
  font: 0.9rem "Gotham-Book";
}

ion-toolbar {
  --background: none;
}
</style>
  