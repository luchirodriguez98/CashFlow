<script setup>
  import Layout from '../components/LayoutComponent.vue'
  import Header from '../components/HeaderComponent.vue'
  import Resume from '../components/Resume/ResumeComponent.vue'
  import Movements from '../components/Movements/MovementComponent.vue'
</script>

<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume></Resume>
    </template>
    <template #movements>
      <Movements></Movements>
    </template>
  </Layout>
</template>
