<template>
  <div>poshome</div>

  <ion-button @click="gotologin"> go to login</ion-button>
</template>
<script setup>
import { IonButton } from "@ionic/vue";
import {useRouter} from 'vue-router'

const router = useRouter();
const gotologin = () => router.push('/login')

</script>
