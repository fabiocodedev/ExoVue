<template>
    <main>
        <!-- -------------------------------------- TITLE --------------------------------------------->
        <h1>WATCHERS !!!</h1> 
        
        <!-- -------------------------------------- INPUT --------------------------------------------->
        <div class="search">
            <input type="search" v-model="input"/> 
        </div>
        <!-- -------------------------------------- LENGTH --------------------------------------------->
        <div class="results">
            <strong>Users search results : </strong> {{ users.length }}
        </div>
        <!-- -------------------------------------- TABLE --------------------------------------------->
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                <tr v-for="user of users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.website }}</td>
                </tr>
            </table>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";

// --------- DATA ---------
const input = ref<string>(""); 
const users = ref<any[]>([]); 
const data = ref<any[]>([]); 
const show = ref<boolean>(true); 

// --------- METHODS ---------
const toggleResult = () => {
    show.value = !show.value;
};

// --------- COMPUTED ---------
const totalUser = computed(() => {
    return users.value.length;
})


// --------- FETCH ---------
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((json) => {
    users.value = json ;
    data.value = json;
});

// --------- WATCH ---------
watch(input, (newValue, oldValue) => {
    console.log(`newValue: ${newValue}`, `oldValue: ${oldValue}`);
});


// ------------------------- SEARCH ---------------------------
watch(input, (value) => {
    users.value = data.value.filter((user) => {
        return (
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.username.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.phone.toLowerCase().includes(value.toLowerCase()) ||
            user.website.toLowerCase().includes(value.toLowerCase())
        )
    })
});

</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}
main {
    background-color: rgb(204, 119, 138);
    text-align: center;
}
th, td {
  border: 1px solid black;
}
</style>