<script setup lang="ts">

//simport { defineProps } from 'vue';
import { ref } from 'vue';

const input = ref<string>('Events')
const search = () => {
    alert(input.value);
}

defineProps ({
            username: {
                type: String,
                required: true,
                default: "bleu",
            },
            firstname: String,
            lastname: String,
            age: Number,
            location: String,
        })


    // export default {
    //     props: {
    //         username: {
    //             type: String,
    //             required: true,
    //             default: "bleu",
    //         },
    //         firstname: String,
    //         lastname: String,
    //         age: Number,
    //         location: String,
    //     }
    // }

</script>


<template>
    <div>
        <h1>Je suis profil !</h1>
        <div>
            <p>Username: {{ username }}</p>
            <p>Firstname: {{ firstname }}</p>
            <p>Lastname: {{ lastname }}</p>
            <p>Age: {{ age }}</p>
            <p>Location: {{ location }}</p>
        </div>
    </div>
    <div>
        <input type="text" v-model="input"/>
        <button @click="search">Search</button>
    </div>
</template>


<style scoped>

</style>