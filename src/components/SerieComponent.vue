<template>
<div class="d-flex justify-content-center align-items-center">
    <div class="card" style="width: 18rem;">
        <img :src="serie.imagen" class="card-img-top" :alt="serie.nombre">
        <div class="card-body">
            <h5 class="card-title">{{ serie.nombre }}</h5>
            <p class="card-text">Puntuación: {{ serie.puntuacion }}</p>
            <p class="card-text">Año: {{ serie.anyo }}</p>
            <router-link :to="'/personajes/' + serie.idSerie" class="btn btn-primary">
                Personajes
            </router-link>
        </div>
    </div>
    </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";
const service = new ServiceSeries();
// "idSerie": 0,
// "nombre": "string",
// "imagen": "string",
// "puntuacion": 0,
// "anyo": 0
export default {
  name: "SerieComponent",
  props: ["id"],
  data() {
    return {
      serie: [],
    };
  },
  methods: {
    loadSerie() {
      service.getSerie(this.$route.params.id).then((response) => {
        this.serie = response;
      });
    },
  },
  mounted() {
    this.loadSerie();
  },
  watch: {
    '$route.params.id'(newValue, oldValue) {
        if(newValue !== oldValue){
            this.loadSerie()
        }
    }
  },
};
</script>

<style>
</style>