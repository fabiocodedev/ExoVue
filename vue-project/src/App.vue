<script setup> 
import Home from './components/Home.vue';
// import { ref } from 'vue';

const message = "Reboot";
const fruits = [
  { name: "Banane", price: 10 },
  { name: "Orange", price: 20 },
  { name: "Kiwi", price: 30 },
];

// const input = ref < string > ('Events');

// const search =() => {
//   alert(input.value);
// }

</script>


<template>
  <h1>API Styles</h1>
  <Home />
  <h1>Bienvenue chez {{ message }} !!!</h1>
  <div>
    <ul>
      <li v-for="item in fruits" v-bind:key="item">
        {{ item.name + " " + item.price }}
      </li>
    </ul>
  </div>
  <br>
  <div>
    <input type="text" v-model="input" />
    <button v-on:click="search">Search</button>
  </div>
</template>


<style scoped>
h1 {
  text-align: center;
}
</style>
