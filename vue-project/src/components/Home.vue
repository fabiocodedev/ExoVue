

<script setup>
import { computed, ref } from 'vue'

const firstName = ref("Fabien");
const lastName = ref("Bourgin");

const rename = () => {
    firstName.value = "Elon";
    lastName.value = "Musk";
};


const fullName = computed(() => `${firstName.value} ${lastName.value}`);

defineProps({
    color: {
        type: String,
        default: "bleu"
    },
    location: String,
    price: Number,
});

</script>



<!-- <script>
    export default {
    data: () => ({
        firstName: "Fabien",
        lastName: "Bourgin",
    }),
    methods: {
        rename () {
            this.firstName = "Elon";
            this.lastName = "Musk";
        },
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
};
</script> -->


<template>
    <main>
        <div>
            <h1>Je suis home !</h1>
            <p>First Name : {{ firstName }}</p>
            <p>Last Name : {{ lastName }}</p>
            <p>Full Name : {{ fullName }}</p>
            <button @click="$event => rename()">Rename</button>
        </div>
        <br>
        <div>
            <p>Couleur : {{ color }}</p>
            <p>Place : {{ location }}</p>
            <p>Prix : {{ price }}</p>
        </div>
    </main>
</template>



<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main {
    height: 50vh;
    width: 50vw;
    background-color: grey;
}
</style>