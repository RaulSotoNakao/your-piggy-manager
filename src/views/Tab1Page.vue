<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <input v-model="input" />
      <button @click="() => updateOption()">click</button>
      <button @click="() => recover()">recover first</button>
      <div></div>
      {{ [...array.entries()] }}

      <div v-for="el in array" :key="el">{{ el.name }}</div>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, reactive, isReactive, isRef, computed, toRef, unref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

const count = ref(0);
const input = ref(null);
let array = ref([{ name: "help" }, { name: "me" }, { name: "men" }]);

const recover = () => {
  input.value = array.value[0].name;
};

const updateOption = () => {
  array.value = [...unref(array), { name: input }];
  console.log(array.value[array.value.length - 1]);
};
</script>
