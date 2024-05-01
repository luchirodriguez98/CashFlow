<template>
  <main>
    <p>{{ labelVisual() }}</p>
    <h1>{{ amountCurrency }}</h1>
    <div class='graphic'>
      <slot name='graphic'>graphic</slot>
    </div>
    <div class='action'>
      <slot name='action'>action</slot>
    </div>
  </main>
</template>

<script setup>
  import currencyFormatter from '@/js/CurrencyFormater.js';

  const props = defineProps({
    totalLabel: String,
    label: {
      type: String,
      default: null
    },
    amount: {
      type: Number,
      default: null
    },
    totalAmount: Number,
  })

  const labelVisual = () => {
    return props.label !== null ? props.label : props.totalLabel
  }

  const amountVisual = () => {
    return props.amount !== null ? props.amount : props.totalAmount
  }

  const amountCurrency = currencyFormatter(amountVisual())
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

h1,
p {
  margin: 0;
  text-align: center;
}

h1 {
  margin-top: 14px;
  color: var(--brand-green);
}

.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>