<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">CRUD Series</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Nuevo Personaje</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Modificar Personaje</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" @click="showDropdown = !showDropdown" aria-expanded="false">
                                Series
                            </a>
                            <ul class="dropdown-menu" :class="{ show: showDropdown } ">
                                <li v-for="serie in series" :key="serie">
                                    <router-link :to="'/serie/' + serie.idSerie" class="dropdown-item" @click="showDropdown = !showDropdown">{{ serie.nombre }}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <router-view></router-view>
</template>

<script>
import ServiceSeries from '../services/ServiceSeries'
const service = new ServiceSeries()
export default {
    name:"MenuRutas",
    data() {
        return {
            showDropdown: false,
            series:[],
        }
    },
    mounted(){
        service.getSeries().then(response => {
            console.log(response);
            this.series = response
        })
    }
}
</script>