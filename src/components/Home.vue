
<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume 
        :total-label="'Ahorro total'"
        :amount=2000
        :total-amount='10000'
      >
      <template #graphic>
        <Graphic :amounts='amounts'/>
      </template>
      <template #action>
        <Action @create='create'/>
      </template>
      </Resume>
    </template>
    <template #movements>
      <Movements
        :movements="movementsList"
        @remove='remove'
      >
      </Movements>
    </template>
  </Layout>
</template>

  <script setup>
    import { computed, ref } from 'vue'
    import Layout from '../components/Layout.vue'
    import Header from '../components/Header.vue'
    import Resume from '../components/Resume/Resume.vue'
    import Movements from '../components/Movements/Movements.vue'
    import Action from '../components/Action.vue'
    import Graphic from '../components/Resume/Graphic.vue'

  const movementsList = ref([
      {
        id: 0,
        title: "Movimiento 1",
        description: "Lorem ipsum dolor sit amet",
        amount: 100,
        time: new Date("05-05-2024"),
      },
      {
        id: 1,
        title: "Movimiento 2",
        description: "Lorem ipsum dolor sit amet",
        amount: 200,
        time: new Date("05-05-2024"),
      },
      {
        id: 2,
        title: "Movimiento 3",
        description: "Lorem ipsum dolor sit amet",
        amount: 500,
        time: new Date("05-05-2024"),
      },
      {
        id: 3,
        title: "Movimiento 4",
        description: "Lorem ipsum dolor sit amet",
        amount: 200,
        time: new Date("05-05-2024"),
      },
      {
        id: 4,
        title: "Movimiento 5",
        description: "Lorem ipsum dolor sit amet",
        amount: -400,
        time: new Date("05-05-2024"),
      },
      {
        id: 5,
        title: "Movimiento 6",
        description: "Lorem ipsum dolor sit amet",
        amount: -600,
        time: new Date("05-05-2024"),
      },
      {
        id: 6,
        title: "Movimiento 7",
        description: "Lorem ipsum dolor sit amet",
        amount: -300,
        time: new Date("05-05-2024"),
      },
      {
        id: 7,
        title: "Movimiento 8",
        description: "Lorem ipsum dolor sit amet",
        amount: 100,
        time: new Date("05-05-2024"),
      },
      {
        id: 8,
        title: "Movimiento 9",
        description: "Lorem ipsum dolor sit amet",
        amount: 300,
        time: new Date("03-05-2024"),
      },
      {
        id: 9,
        title: "Movimiento 10",
        description: "Lorem ipsum dolor sit amet",
        amount: 500,
        time: new Date("03-05-2024"),
      },
    ])  

  const amounts = computed(()=>{
    const lastDays = movementsList.value
      .filter(movement => {
        const today = new Date()
        const thirtyDaysBefore = today.setDate(today.getDate() - 30)
        return movement.time >= thirtyDaysBefore
      })
      .map(movement => movement.amount)
      
      return lastDays.map((movement, i) => {

      const lastMovements = lastDays.slice(0, i);
      return lastMovements.reduce((suma, movement) => {
        return suma + movement
      }, 0);
    });
  })

  const create = (movement) => {
    movementsList.value.push(movement)
  }

  const remove = (id) => {
    const index = movementsList.value.findIndex(m => m.id === id)
    movementsList.value.splice(index, 1)
  }
  </script>