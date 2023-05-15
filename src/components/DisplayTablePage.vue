<template>
  <div class="tbl-view">
    <div class="row" v-for="d in removeFinishedAppointment" :key="d">
      <ion-button
        class="row-info"
        color="dark"
        :href="'/appointment/edit/' + d.id"
        >{{ d.id }}</ion-button
      >
      <div class="row-email">{{ d.email }}</div>
    </div>
  </div>
</template>

<script>
import { IonButton } from "@ionic/vue";

export default {
  props: ["data"],

  components: {
    IonButton,
  },

  computed: {
    removeFinishedAppointment() {
        let d = []
        d = this.data.filter(dt => {
            return dt.status !== 'Finished'
        });

        return d
    }
  }
};
</script>

<style lang="scss">
.tbl-view {
  height: 80%;
  width: 86vw;
  overflow-y: auto;

  .row {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #fff;

    .row-info {
      padding: 0.2rem 0.5rem;
      width: 13.5rem;
    }

    .row-email {
      padding: 0.3rem 1rem;
      font-size: 0.9rem;
      text-align: right;
      overflow-x: auto;
    }
  }
}
</style>