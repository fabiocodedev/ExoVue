<script setup lang="ts">
import { ref } from "vue";


// ------- COMPONENT API -------------
const emit = defineEmits(["submit"]);
const input = ref<string>("");
const  submit = () => {
    emit("submit", input.value);
    input.value="";
};

//<script>
//  ------- OPTIONAL API -------------

// export default {
//     emits: {
//         submit (input) {
//             if (!input) return false;
//             return true;
//         },
//     },
//     data () {
//         return {
//             input:"",
//         };
//     },
//     methods: {
//         submit() {
//             this.$emit("submit", this.input);
//             this.input=""
//         },
//     },
// }

</script>


<template>
    <div>
        <input 
        type="text" 
        v-model="input" 
        placeholder="New entry !"
        @keyup.enter="submit"
        />
        <button @click="submit">Add</button>
    </div>
</template>


<style scoped>
div{
    display: flex ;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
}
</style>