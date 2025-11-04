<template>
  <div>
    <table class="table table-bordered table-striped table-dark">
        <thead>
            <tr>
                <th>Personaje</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="personaje in personajes" :key="personaje">
                <td>{{ personaje.nombre }}</td>
                <td>
                    <img style="width:150px;" :src="personaje.imagen" :alt="personaje.nombre">
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServicePersonajes from '@/services/ServicePersonajes.js'
const service = new ServicePersonajes()
export default {
    name:"PersonajesComponent",
    data() {
        return {
            personajes: [],
        }
    },
    methods: {
        loadPersonajes() {
            service.getPersonajes(this.$route.params.idSerie).then(response => {
                console.log(response);
                this.personajes = response
            })
        }
    },
    mounted () {
        this.loadPersonajes();
    },
    watch: {
        '$route.params.idSerie'(newValue, oldValue) {
            if(newValue !== oldValue){
                this.loadPersonajes()
            }
        }
    },
}
</script>

<style>

</style>