<template>
  <div>
    <h1>{{ serie.nombre }}</h1>
    <h1>Serie {{ serie.idSerie }}</h1>
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