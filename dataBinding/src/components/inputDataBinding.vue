<template>
    <main>
        <h1>INPUT DATA BINDING !!!</h1>
        <div>
            <input 
            type="text" 
            placeholder="type..."
            v-model="input"
            @input="getInput"
            />
        </div>
        <div>
            <p>Input : {{ input }}</p>
        </div>
        <div>
            <label>
                <input type="radio" value="one" v-model="radio" />
                <span>One</span>
            </label>
            <label>
                <input type="radio" value="two" v-model="radio" />
                <span>Two</span>
            </label>
        </div>
        <div>
            <p>Radio : {{ radio }}</p>
        </div>
    </main>
</template>


<script setup lang="ts">
import { ref } from "vue"
const input = ref<string>("");
const radio = ref<any>();

const getInput = (event) => {
    console.log(event.target.value);
    
}

</script>


<style scoped>
div{
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 60px;
}
main{
    background-color: rgb(108, 108, 172);
    text-align: center;
}
</style>
