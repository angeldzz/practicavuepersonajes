import { createWebHistory,createRouter } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import SerieComponent from '@/components/SerieComponent.vue';
import PersonajesComponent from '@/components/PersonajesComponent.vue';
import CreatePersonaje from '@/components/CreatePersonaje.vue';
import UpdatePersonaje from '@/components/UpdatePersonaje.vue';
const myRoutes = [
    { path:"/", component:HomeComponent},
    { path:"/createPersonaje", component:CreatePersonaje},
    { path:"/updatePersonaje", component:UpdatePersonaje},
    { path:"/serie/:id", component:SerieComponent},
    { path:"/personajes/:idSerie", component:PersonajesComponent},
]
const router = createRouter({
    history:createWebHistory(),
    routes: myRoutes
})
export default router;