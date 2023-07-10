import { ref, onMounted, onUnmounted } from "vue";

 export default function useMouseMove() {
    const x = ref(0);
    const y = ref(0);


const update = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
}

onMounted(() => window.addEventListener("mousemove", update));

onUnmounted(() => window.removeEventListener("mousemove", update));

return {x, y};
    
}


// ------------- DANS LE COMPOSANT DE BASE --------------------- 

// <script setup lang="ts">
// import { ref, onMounted, onUnmounted } from "vue";

//     const x = ref(0);
//     const y = ref(0);

//     onMounted(() => {
//         window.addEventListener("mousemove", (e) => {
//             x.value = e.pageX;
//             y.value = e.pageY;
//         })
//     });

//     onUnmounted(() => {
//         window.addEventListener("mousemove", (e) => {})
//     });

// </script>