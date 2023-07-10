import { createApp } from 'vue'
import App from './App.vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import Home from './view/Home.vue'
// import About from './view/About.vue'
import router from '@/router/router.ts'
// Vuetify
import "vuetify/styles"
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"


const vuetify = createVuetify({
    components,
    directives,
})



const app = createApp(App);


// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: "/",
//             name: "home",
//             component: Home,
//         },
//         {
//             path: "/about",
//             name: "about",
//             component: About,
//         },
//     ]
// })


app.use(router).use(vuetify);
app.mount('#app')