<script setup lang="ts">
import countStore from '@/stores/counter'

const store = countStore()

const increment = () => { store.count++ }
const reset = () => { store.count == 0 }
</script>

<template>
  <main>
    <div>
      {{ store.count }}
      <button @click="increment">Increment {{ store.count }}</button>
      <!-- raccoucis $reset pour revenir au state initile => ajouter code pour API conposition -->
      <button @click="() => store.$reset()">RESET !</button>
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
