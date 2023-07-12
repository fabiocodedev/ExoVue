<script setup lang="ts">

import Increment from '@/components/Increment.vue'
import Print from '@/components/Print.vue'
import countStore from '@/stores/counter'
import Product from '@/components/Product.vue'
import productStore from '@/stores/product'


const store = countStore()
const store2 = productStore()
</script>

<template>
  <main class="text-center flex flex-col justify-center items-center min-h-sceen w-screen">
    <button 
    @click="store2.fetchProduct"
    class="border-2 bg-indigo-950 text-white px-3 py-2"
    >
      Fetch Products
    </button>
    <div class="grid grid-cols-4 container py-7">
      <Product
      v-for="product in store2.products"
      :key="product.id"
      :product="product" />
    </div>
      {{ store.count }}
      <Increment />
      <Print />
  </main>
</template>

<style scoped>

</style>
