<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <!-- <ion-title>Diamond Detailers Portal</ion-title> -->
      <ion-breadcrumbs>
        <ion-breadcrumb href="/home">Home</ion-breadcrumb>

        <template v-if="checkUserType == 'customer'">
            <ion-breadcrumb href="/customer">Customer</ion-breadcrumb>
            <ion-breadcrumb
                v-if="checkCurrentPage == 'Appointment'"
                href="/customer/appointment"
            >
                Appointment
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

  computed: {
    checkUserType() {
      return "customer";
    },

    checkCurrentPage() {
      return this.$router.currentRoute._rawValue.name;
    },
  },

  methods: {},
};
</script>

<style>
</style>
  