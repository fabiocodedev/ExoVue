import { defineStore } from 'pinia'
import {ref, computed} from 'vue'

// ------------------- API OPTIONAL -----------------------



// export default defineStore('counter', {
//     state: () => ({
//         count: 0
//       }),
//     getters: {
//       doubleCount: (state) => state.count * 2
//     }
//   }) 
    

// // ------------------- API COMPOSITION -----------------------

export default defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const $reset = () => {
   count.value = 0
 }
  
  return {count, doubleCount, $reset}
})
