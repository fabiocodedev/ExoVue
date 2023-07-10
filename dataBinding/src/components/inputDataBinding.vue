<template>
    <main>
<!-- -------------------------------------- TITLE --------------------------------------------->
<h1>INPUT DATA BINDING !!!</h1>
<!-- -------------------------------------- INPUT --------------------------------------------->
<div>
    <input type="text" placeholder="type..." v-model="input" @input="getInput" />
</div>
<div>
    <p>Input : {{ input }}</p>
</div>
<!-- -------------------------------------- RADIO --------------------------------------------->
<div>
    <label v-for="({ value, label }, index) in radios" :key="index">
        <input type="radio" :value="value" v-model="radio" />
        <span>{{ label }}</span>
    </label>
    <!-- <label>
        <input type="radio" value="two" v-model="radio" />
        <span>Two</span>
    </label> -->
</div>
<div>
    <p>Radio : {{ radio }}</p>
</div>
<!-- -------------------------------------- CHECKBOX --------------------------------------------->
<div>
    <label>
        <input type="checkbox" value="one" v-model="checkbox" />
        <span>One</span>
    </label>
    <label>
        <input type="checkbox" value="two" v-model="checkbox" />
        <span>Two</span>
    </label>
</div>
<div>
    <p>Checkbox : {{ checkbox }}</p>
</div>
<!-- -------------------------------------- CHECKBOX --------------------------------------------->
<div>
    <select v-model="select">
        <option disabled selected :value="null">
            Select an option
        </option>
        <option v-for="({ value, label }, index) in options" :key="index" :value="value">
            {{ label }}
        </option>
    </select>
</div>
<div>
    <p>Select : {{ select }}</p>
</div>

<!-- -------------------------------------- TEXTAREA --------------------------------------------->

<div>
    <textarea placeholder="Text...." v-model="textarea"></textarea>
</div>
<div>
    <p>Textarea : {{ textarea }}</p>
</div>

// <!-- -------------------------------------- TABLE --------------------------------------------->

<div>
    <table>
    <tr>
        <th>Input</th>
        <td>{{ input }}</td>
    </tr>
    <tr>
        <th>Radio</th>
        <td>{{ radio }}</td>
    </tr>
    <tr>
        <th>Checkbox</th>
        <td>{{ checkbox }}</td>
    </tr>
    <tr>
        <th>Select</th>
        <td>{{ select }}</td>
    </tr>
    <tr>
        <th>Textarea</th>
        <td>{{ textarea }}</td>
    </tr>
</table>
</div>

</main>
</template>


<script setup lang="ts">
import { ref } from "vue"

// <!-- -------------------------------------- INPUT --------------------------------------------->
const input = ref<string>("");

const getInput = (event) => {
    console.log(event.target.value);

}
// <!-- -------------------------------------- RADIO --------------------------------------------->
const radio = ref<any>();

const radios = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
]

// <!-- -------------------------------------- CHECKBOX --------------------------------------------->
const checkbox = ref<any>([]);

// <!-- -------------------------------------- SELECT --------------------------------------------->
const select = ref<any>(null);

const options = [
    { value: "blue", label: "blue" },
    { value: "red", label: "red" },
]

// <!-- -------------------------------------- TEXTAREA --------------------------------------------->

const textarea = ref<string>("");


</script>

 
<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}

main {
    background-color: rgb(108, 108, 172);
    text-align: center;
}

th, td {
  border: 1px solid black;
}
</style>
