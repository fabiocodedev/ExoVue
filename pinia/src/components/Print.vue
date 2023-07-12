<script setup lang="ts">
import countStore from '@/stores/counter'

const store = countStore()

</script>

<template>
  <main>
    <div>
      <h1>HELLO PINIA !</h1>
      <h2>Counter: {{ store.count }}</h2>
      <h2>Counter*2: {{ store.doubleCount }}</h2>
    </div>
  </main>
</template>

<style scoped>
div{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  width: 25vw;
}
</style>
