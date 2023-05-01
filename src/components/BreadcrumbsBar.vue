<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <!-- <ion-title>Diamond Detailers Portal</ion-title> -->
      <ion-breadcrumbs>
        <ion-breadcrumb href="/home">Home</ion-breadcrumb>

        <template v-if="checkUserType == 'customer'">
          <ion-breadcrumb v-if="checkCurrentPage == 'Customer'" href="/customer">Customer</ion-breadcrumb>
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
        </template>

        <template v-else>
          <ion-breadcrumb href="/Employee">Employee</ion-breadcrumb>
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

          <ion-breadcrumb v-if="checkCurrentPage == 'Edit Appointment'">
            Edit Appointment
          </ion-breadcrumb>
        </template>
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

      if (type == null) {
        return 'customer'
      }

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
  