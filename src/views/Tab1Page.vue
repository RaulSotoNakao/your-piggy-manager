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
      <ion-list>
        <ion-item>
          <ion-label>Usuario</ion-label>
          <ion-input v-model="user"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>contraseña</ion-label>
          <ion-input v-model="password"></ion-input>
        </ion-item>
      </ion-list>
      <button @click="login">login</button>
      <button @click="register">register</button>
      <button @click="logout">logout</button>
      <button @click="getdata">getdata</button>

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
import { IonInput, IonItem, IonLabel, IonList } from "@ionic/vue";

import ExploreContainer from "@/components/ExploreContainer.vue";
import {
  registerUser,
  login as firebaselogin,
  logout as logoutfirebase,
} from "../api/firebaseLogin.js";

import { docSnap } from "../api/firebaseApi.js";

const user = ref("");
const password = ref("");

const register = () => {
  registerUser(user.value, password.value)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const login = () => {
  firebaselogin(user.value, password.value)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const getdata = () => {
  docSnap()
    .then((e) => console.log(e.data()))
    .catch((err) => console.log(err));
};

const logout = () => logoutfirebase();
</script>
