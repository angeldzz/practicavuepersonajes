<template>
  <div>
    <h1>Update Personaje</h1>
    <form>
      <label class="form-label">Personajes: </label>
      <select class="form-select" v-model="idPersonaje">
        <option
          v-for="personaje in personajes"
          :key="personaje"
          :value="personaje.idPersonaje"
        >
          {{ personaje.nombre }}
        </option>
      </select>
      <label class="form-label">Series: </label>
      <select class="form-select" v-model="idSerie">
        <option v-for="serie in series" :key="serie" :value="serie.idSerie">
          {{ serie.nombre }}
        </option>
      </select>
      <button class="btn btn-warning mt-2" @click.prevent="updatePersonaje()">
        Modificar Personaje
      </button>
    </form>
  </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";
const serviceSeries = new ServiceSeries();
import ServicePersonajes from "../services/ServicePersonajes";
const servicePersonajes = new ServicePersonajes();
export default {
  name: "UpdatePersonaje",
  data() {
    return {
      series: [],
      personajes: [],
      idPersonaje:0,
      idSerie:0,
    };
  },
  methods: {
    loadSeries() {
      serviceSeries.getSeries().then((response) => {
        this.series = response;
      });
    },
    loadPersonajes() {
      servicePersonajes.getPersonajesGeneral().then((response) => {
        this.personajes = response;
      });
    },
    updatePersonaje(){
        servicePersonajes.updatePersonaje(this.idPersonaje,this.idSerie).then(()=>{
            console.log("Personaje Editado");
        })
    }
  },
  mounted() {
    this.loadPersonajes();
    this.loadSeries();
  },
};
</script>

<style>
</style>