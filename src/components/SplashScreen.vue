<template>
  <div class='splashscreen'>
    <img src="../assets/cashflow-icon.svg" alt="Logo">
    <span class='title'>
      <h1>Cash</h1>
      <h1>Flow</h1>
    </span>
  </div>
</template>

<style scoped>
.splashscreen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.title {
  display: flex;
}
.title :first-child {
  color: var(--brand-blue);
}
.title :last-child {
  color: var(--brand-green);
}
</style>