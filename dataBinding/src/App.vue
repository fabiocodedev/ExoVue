<template>
  <main>
    <Compo />
    <Watch />
    <IDB v-if="true" />
  </main>
</template>


<script setup lang="ts">
import IDB from "./components/inputDataBinding.vue"
import Watch from "./components/watcher.vue"
import Compo from "./components/compo.vue"
</script>

<style scoped>
</style>
