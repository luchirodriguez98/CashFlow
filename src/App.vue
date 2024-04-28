<script setup>
  import { defineAsyncComponent } from 'vue';
  import SplashScreen from '@/components/SplashScreen.vue'

  //generamos un setTimeOut con una promesa indicandole que Home es un componente asincrono, si se resuleve la promesa mostrara home por 2500
  const Home = defineAsyncComponent(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/HomeComponent.vue'))
      }, 2500)
    })
  })
</script>

<template>
  <!-- suspense es un componente q recibe dos slots, template default(el que mostramos luego de que este todo cargado) y template fallback(este es el que se muestra mientras no exista el default) -->
  <!-- home no existrira por 2,5segundos, ya que lo hicimos asincrono y que cqrgue x un settimeput en 2,5seg -->
  <Suspense>
    <template #default>
        <Home></Home>
    </template>
    <template #fallback>
      <SplashScreen></SplashScreen>
    </template>
  </Suspense>
</template>

<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  --brand-green: #04b500;
  --brand-blue: #0689b0;
}
</style>