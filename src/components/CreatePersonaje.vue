<template>
  <div>
    <h1>Create Personaje</h1>
    <form>
      <label class="form-label">Nombre: </label>
      <input class="form-control" type="text" v-model="nombre">
      <label class="form-label">Imagen: </label>
      <input class="form-control" type="text" v-model="imagen">
      <label class="form-label">Serie: </label>
      <select class="form-select" v-model="idserie">
        <option v-for="serie in series" :key="serie" :value="serie.idSerie">
          {{ serie.nombre }}
        </option>
      </select>
      <button @click.prevent="createPersonaje()" class="btn btn-primary mt-2">Crear Personaje</button>
    </form>
  </div>
</template>

<script>
    // "idPersonaje": 0,
    // "nombre": "string",
    // "imagen": "string",
    // "idSerie": 0
import ServiceSeries from "../services/ServiceSeries";
const service = new ServiceSeries();
import ServicePersonajes from "../services/ServicePersonajes";
const servicePersonajes = new ServicePersonajes();
export default {
  name: "CreatePersonaje",
  data() {
    return {
      series: [],
      nombre: "",
      imagen:"",
      idserie: 0,
    };
  },
  methods: {
    createPersonaje(){
      let personaje = {
        idPersonaje: 0,
        nombre: this.nombre,
        imagen: this.imagen,
        idSerie: this.idserie,
      }
      servicePersonajes.postPersonaje(personaje).then(() => {
        console.log("Personaje Creado");
      })
    },
    loadSeries() {
      service.getSeries().then((response) => {
        this.series = response;
      });
    },
  },
  mounted() {
    this.loadSeries();
  },
};
</script>
