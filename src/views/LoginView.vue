<template>
  <div class="center">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Iniciar sesión</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-item>
          <ion-label position="floating">Usuario</ion-label>
          <ion-input placeholder="Enter text" v-model="usuario"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input placeholder="Enter text" v-model="contraseña"></ion-input>
        </ion-item>
        <ion-row class="ion-justify-content-end ion-padding-top">
          <ion-button color="primary" @click="login">Entrar</ion-button>
        </ion-row>
      </ion-card-content>
    </ion-card>
  </div>
</template>
<script setup>
import {
  IonInput,
  IonItem,
  IonLabel,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonRow,
} from "@ionic/vue";
import { useRouter } from "vue-router";
const router = useRouter();

import { ref } from "vue";
import { login as loginapi } from "../api/firebaseLogin.js";
const usuario = ref("");
const contraseña = ref("");

const changeInput = (el) => console.log(el);
const login = () => {
  loginapi(usuario.value, contraseña.value).then(() => {
    router.replace({ path: '/home' })

  });
};
</script>
<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
