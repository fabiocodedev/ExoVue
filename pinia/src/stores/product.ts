import { defineStore } from 'pinia'
//import {ref, computed} from 'vue'


// // ------------------- API COMPOSITION -----------------------

// export default defineStore('products', () => {
//     const count = ref(0)
//     const doubleCount = computed(() => count.value * 2)
//     const $reset = () => {
//      count.value = 0
//    } 
//     return {count, doubleCount, $reset}
// })



// ------------------- API OPTIONAL -----------------------

type ProductStoreState = {
  product: {}
}

export default defineStore('products', {
    state: () => ({
        products: []
      }),
    getters: {
      
    },
    actions: {
      async fetchProduct(){
        const result = await fetch('https://fakestoreapi.com/products')
        console.log(result);
        //this.products =await result.json()
        
      }
    }
  }) 
    

  