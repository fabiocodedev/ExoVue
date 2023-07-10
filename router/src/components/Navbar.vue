<template>

<v-bottom-navigation>
  <v-btn value="recent">
    <v-icon>mdi-history</v-icon>

    Recent
  </v-btn>

  <v-btn value="favorites">
    <v-icon>mdi-heart</v-icon>

    Favorites
  </v-btn>

  <v-btn value="nearby">
    <v-icon>mdi-map-marker</v-icon>

    Nearby
  </v-btn>
</v-bottom-navigation>
    
</template>

<script setup lang="ts">
   
</script>

<style scoped>
    div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}

header {
    background-color: rgb(98, 174, 112);
    text-align: center;
}
nav{
    display: flex;
    justify-content: space-around;
    padding: 2em;
}
li{
    list-style: none;
}
</style>