<script setup lang="ts">
import product from '@/stores/product';
import {Product} from '@/types';

    defineProps({
        product: {
            type: Object as () => Product,
            required: true
        }
    })
</script>

<template>
    <div class="border p-7 hover:bg-indigo-50/20 cursor-pointer hover:shadow-xl transition">
        <p>JE SUIS PRODUCT !!!!</p>
        <img
        :src="product.image"
        :alt="product.title"
        class="w-full h32 object-contrain"
        >
        <h2 class="text-xl font-bold">{{ product.title }}</h2>
        <p class="text-sm">{{ product.price }} €</p>
    </div>
</template>


<style scoped>

</style>