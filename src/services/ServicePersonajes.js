import axios from "axios"
import Global from "@/Global"
import Swal from 'sweetalert2'

export default class ServicePersonajes{
    getPersonajesGeneral(){
        return new Promise(function (resolve) {
            let url = Global.urlSeries
            let request = url + "api/Personajes"
            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }
    getPersonajes(idSerie){
        return new Promise(function (resolve) {
            let url = Global.urlSeries
            let request = url + "api/Series/PersonajesSerie/" + idSerie
            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }
    postPersonaje(personaje){
        return new Promise(function (resolve) {
            let url = Global.urlSeries
            let request = url + "/api/personajes"
            axios.post(request,personaje).then(response => {
                resolve(response)
                Swal.fire({
                title: "Personaje Creado!!",
                icon: "success",
                draggable: true
                });
            })
        })
    }
    updatePersonaje(idPersonaje, idSerie){
        return new Promise(function (resolve) {
            let url = Global.urlSeries
            let request = url + `api/Personajes/${idPersonaje}/${idSerie}`
            axios.put(request).then(response => {
                resolve(response)
                Swal.fire({
                title: "Personaje Modificado!!",
                icon: "success",
                draggable: true
                });
            })
        })
    }
}