import { createWebHistory,createRouter } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import SerieComponent from '@/components/SerieComponent.vue';

const myRoutes = [
    { path:"/", component:HomeComponent},
    { path:"/serie/:id", component:SerieComponent},
]

const router = createRouter({
    history:createWebHistory(),
    routes: myRoutes
})
export default router;