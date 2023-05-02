<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <!-- <ion-title>Diamond Detailers Portal</ion-title> -->
      <ion-breadcrumbs>
        <ion-breadcrumb 
          :href="checkUserType == 'employer' || checkUserType == 'employee' ? '/employee' : checkUserType == 'customer' ? '/customer' : '/home'"
        >
          Home
        </ion-breadcrumb>

        <ion-breadcrumb
          href="/appointment"
          v-if="
            checkCurrentPage == 'Appointment' ||
            checkCurrentPath.includes('/new') ||
            checkCurrentPath.includes('/edit')
          "
        >
          Appointment
        </ion-breadcrumb>

        <ion-breadcrumb v-if="checkCurrentPage == 'New Appointment'">
          Make New Appointment
        </ion-breadcrumb>

        <ion-breadcrumb v-if="checkCurrentPage == 'Edit Appointment'">
          Edit Appointment
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
} from "@ionic/vue";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonBreadcrumbs,
    IonBreadcrumb,
  },

  data() {
    return {};
  },

  mounted() {
    console.log(this.$router.currentRoute._value.path);
  },

  computed: {
    checkUserType() {
      const type = localStorage.getItem("type")

      return type
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

<style>
</style>
  