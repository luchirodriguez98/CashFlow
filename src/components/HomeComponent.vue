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
      <Resume 
        :label="'Ahorro total'"
        :amount='1000'
      >
      <template #graphic></template>
      </Resume>
    </template>
    <template #movements>
      <Movements>
        <template #action></template>
      </Movements>
    </template>
  </Layout>
</template>
