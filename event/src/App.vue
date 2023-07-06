<script setup lang="ts">
import AddToDo from "./components/AddToDo.vue"
import { ref } from "vue";

const items = ref<string[]>([])

const onAddItem = (input: string) => {
  items.value.push(input);
  console.log(items.value);
}

</script>

<template>
  <h1>ToDo List !!!</h1>
  <AddToDo @submit="onAddItem" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{item}}
      </li>
   
    </ul>
</template>



<style scoped>
h1{
  text-align: center;
  color: red;
  font-size: 3em;
}
ul{
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left:40% ;
}
li{
  list-style: none;
  background-color: rgb(182, 174, 199);
  width: 100%;
  border : 1px solid black ;
  margin: 0 ;
  text-align: center;
}
</style>
