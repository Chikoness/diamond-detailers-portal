<template>
  <div id="car-form">
    <div class="car-form-container" :class="`page-${page}`">
      <form
        @submit.prevent="submitDirtLvl"
        :class="{ dark: checkUserType !== 'customer' }"
      >
        <div class="input-group" v-if="page == 1">
          <ion-select
            class="hood"
            :class="{ entered: !isNaN(dirt.hood) }"
            interface="popover"
            label="Hood"
            label-placement="floating"
            fill="outline"
            required
            @ionChange="dirt.hood = $event.target.value"
            v-model="dirt.hood"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="l-headlight"
            :class="{ entered: !isNaN(dirt.lHeadlight) }"
            interface="popover"
            label="L H/L"
            label-placement="floating"
            fill="outline"
            required
            @ionChange="dirt.lHeadlight = $event.target.value"
            v-model="dirt.lHeadlight"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="r-headlight"
            :class="{ entered: !isNaN(dirt.rHeadlight) }"
            interface="popover"
            label="R H/L"
            label-placement="floating"
            fill="outline"
            required
            @ionChange="dirt.rHeadlight = $event.target.value"
            v-model="dirt.rHeadlight"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="windscreen"
            :class="{ entered: !isNaN(dirt.windscreen) }"
            interface="popover"
            label="W/S"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.windscreen = $event.target.value"
            v-model="dirt.windscreen"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="roof"
            :class="{ entered: !isNaN(dirt.roof) }"
            interface="popover"
            label="Roof"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.roof = $event.target.value"
            v-model="dirt.roof"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="boot"
            :class="{ entered: !isNaN(dirt.boot) }"
            interface="popover"
            label="Boot"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.boot = $event.target.value"
            v-model="dirt.boot"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="l-mirror"
            :class="{ entered: !isNaN(dirt.lSideMirror) }"
            interface="popover"
            label="L Mirror"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.lSideMirror = $event.target.value"
            v-model="dirt.lSideMirror"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="r-mirror"
            :class="{ entered: !isNaN(dirt.rSideMirror) }"
            interface="popover"
            label="R Mirror"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.rSideMirror = $event.target.value"
            v-model="dirt.rSideMirror"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>
        </div>

        <div class="input-group" v-if="page == 2">
          <ion-select
            class="lf-wheel"
            :class="{ entered: !isNaN(dirt.lfWheel) }"
            interface="popover"
            label="F Wheel"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.lfWheel = $event.target.value"
            v-model="dirt.lfWheel"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="lb-wheel"
            :class="{ entered: !isNaN(dirt.lbWheel) }"
            interface="popover"
            label="B Wheel"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.lbWheel = $event.target.value"
            v-model="dirt.lbWheel"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="lf-door"
            :class="{ entered: !isNaN(dirt.lfDoor) }"
            interface="popover"
            label="F Door"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.lfDoor = $event.target.value"
            v-model="dirt.lfDoor"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="lb-door"
            :class="{ entered: !isNaN(dirt.lbDoor) }"
            interface="popover"
            label="B Door"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.lbDoor = $event.target.value"
            v-model="dirt.lbDoor"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="lf-window"
            :class="{ entered: !isNaN(dirt.lfWindow) }"
            interface="popover"
            label="F Window"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.lfWindow = $event.target.value"
            v-model="dirt.lfWindow"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="lb-window"
            :class="{ entered: !isNaN(dirt.lbWindow) }"
            interface="popover"
            label="F Window"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.lbWindow = $event.target.value"
            v-model="dirt.lbWindow"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>
        </div>

        <div class="input-group" v-if="page == 3">
          <ion-select
            class="rf-wheel"
            :class="{ entered: !isNaN(dirt.rfWheel) }"
            interface="popover"
            label="F Wheel"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.rfWheel = $event.target.value"
            v-model="dirt.rfWheel"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="rb-wheel"
            :class="{ entered: !isNaN(dirt.rbWheel) }"
            interface="popover"
            label="B Wheel"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.rbWheel = $event.target.value"
            v-model="dirt.rbWheel"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="rf-door"
            :class="{ entered: !isNaN(dirt.rfDoor) }"
            interface="popover"
            label="F Door"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.rfDoor = $event.target.value"
            v-model="dirt.rfDoor"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="rb-door"
            :class="{ entered: !isNaN(dirt.rbDoor) }"
            interface="popover"
            label="B Door"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.rbDoor = $event.target.value"
            v-model="dirt.rbDoor"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="rf-window"
            :class="{ entered: !isNaN(dirt.rfWindow) }"
            interface="popover"
            label="F Window"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.rfWindow = $event.target.value"
            v-model="dirt.rfWindow"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>

          <ion-select
            class="rb-window"
            :class="{ entered: !isNaN(dirt.rbWindow) }"
            interface="popover"
            label="B Window"
            fill="outline"
            label-placement="floating"
            required
            @ionChange="dirt.rbWindow = $event.target.value"
            v-model="dirt.rbWindow"
          >
            <ion-select-option v-for="lvl in dirtLvl" :key="lvl" :value="lvl">
              {{ lvl }}
            </ion-select-option>
          </ion-select>
        </div>

        <ion-button type="submit" color="warning">Submit</ion-button>
      </form>

      <div class="btn-group">
        <ion-button
          :disabled="page <= 1"
          color="light"
          class="move-btn"
          @click="isNextPage(false)"
        >
          &lt;
        </ion-button>

        <ion-button
          :disabled="page >= 3"
          color="light"
          class="move-btn"
          @click="isNextPage(true)"
        >
          >
        </ion-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { IonButton, IonSelect, IonSelectOption } from "@ionic/vue";

export default {
  props: ["id", "dirtInfo"],

  components: {
    IonButton,
    IonSelect,
    IonSelectOption,
  },

  data() {
    return {
      dirtLvl: [1, 2, 3, 4, 5],
      page: 1,
    };
  },

  computed: {
    dirt() {
      return this.$store.state.dirtData;
    },
  },

  mounted() {
    if (Object.keys(this.dirtInfo).length > 0) {
        this.$store.state.dirtData = this.dirtInfo
    } 
  },

  methods: {
    submitDirtLvl() {
      if (Object.keys(this.dirt).length == 20) {
        let data = {
            id: this.id,
            dirtInfo: this.dirt
        }

        axios
          .post(process.env.VUE_APP_BACKEND + "/api/appointment/dirt", data)
          .then(() => {
            this.$emit("closeDirtForm");
            this.$store.state.dirtData = {};
          })
          .catch((e) => {
            this.message =
              e.response === undefined
                ? "Cannot connect to backend. Please wait and try again"
                : e.response.data.message;
          });

        return;
      }

      alert("Please fill up all the dirt level");
    },

    isNextPage(type) {
      type ? (this.page += 1) : (this.page -= 1);
    },
  },
};
</script>

<style lang="scss">
#car-form {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;

  .car-form-container {
    margin: auto;
    margin-top: 4rem;
    width: 85%;
    height: 80%;
    border-radius: 0.5rem 0.5rem 0 0;

    &.page-1 {
      background: no-repeat center url("@/assets/img/input-dirt/car-top.png");
      background-size: 100% 100%;
    }

    &.page-2 {
      background: no-repeat center url("@/assets/img/input-dirt/car-left.png");
      background-size: 100% 100%;
    }

    &.page-3 {
      background: no-repeat center url("@/assets/img/input-dirt/car-right.png");
      background-size: 100% 100%;
    }

    form {
      height: 100%;
      background: none;
      box-shadow: none;

      ion-select {
        --background: rgba(255, 213, 52, 0.7);
        width: 27vw;
        position: absolute;
        left: 36%;

        &.hood {
          top: 18%;
        }

        &.l-headlight {
          left: 8%;
          top: 10.5%;
        }

        &.r-headlight {
          left: 64.5%;
          top: 10.5%;
        }

        &.windscreen {
          top: 34%;
        }

        &.roof {
          top: 53%;
        }

        &.boot {
          top: 72%;
        }

        &.l-mirror {
          top: 26%;
          left: 8%;
        }

        &.r-mirror {
          top: 26%;
          left: 64.5%;
        }

        &.lf-wheel {
          top: 20%;
        }

        &.lb-wheel {
          top: 70%;
        }

        &.lf-door {
          left: 20%;
          top: 41%;
        }

        &.lb-door {
          left: 20%;
          top: 57.5%;
        }

        &.lf-window {
          left: 53%;
          top: 41%;
        }

        &.lb-window {
          left: 53%;
          top: 57.5%;
        }

        &.rf-wheel {
          top: 23%;
          left: 45%;
        }

        &.rb-wheel {
          top: 69.5%;
          left: 45%;
        }

        &.rf-door {
          left: 50%;
          top: 41%;
        }

        &.rb-door {
          left: 50%;
          top: 57.5%;
        }

        &.rf-window {
          left: 15%;
          top: 41%;
        }

        &.rb-window {
          left: 15%;
          top: 57.5%;
        }

        &.entered {
          --background: rgba(0, 0, 0, 0.85);
          color: #fff;
        }
      }

      ion-button {
        width: 85%;
        position: absolute;
        bottom: 6%;
        left: 7%;
      }
    }

    .btn-group {
      width: 99%;
      margin-top: -3.9rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      ion-button {
        width: 2rem;
        height: 2.5rem;
      }
    }
  }
}
</style>
