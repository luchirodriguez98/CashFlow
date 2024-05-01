
<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume 
        :label="'Ahorro total'"
        :amount=2000
      >
      <template #graphic></template>
      <template #action>
        <Action />
      </template>
      </Resume>
    </template>
    <template #movements>
      <Movements
        :movements="movementsList"
      >
      </Movements>
    </template>
  </Layout>
</template>

  <script setup>
    import Layout from '../components/Layout.vue'
    import Header from '../components/Header.vue'
    import Resume from '../components/Resume/Resume.vue'
    import Movements from '../components/Movements/Movements.vue'
    import Action from '../components/Action.vue'

    const movementsList = [
        {
          id: 1,
          title: "Movimiento",
          description: "Deposito de salario",
          amount: 1000,
        },
        {
          id: 2,
          title: "Movimiento 1",
          description: "Deposito de honorarios",
          amount: 500,
        },
        {
          id: 3,
          title: "Movimiento 3",
          description: "Comida",
          amount: -100,
        },
        {
          id: 4,
          title: "Movimiento 4",
          description: "Colegiatura",
          amount: 1000,
        },
        {
          id: 5,
          title: "Movimiento 5",
          description: "Reparación equipo",
          amount: 1000,
        },
      ]
  </script>