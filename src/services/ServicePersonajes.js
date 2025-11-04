import axios from "axios"
import Global from "@/Global"

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
            })
        })
    }
    updatePersonaje(idPersonaje, idSerie){
        return new Promise(function (resolve) {
            let url = Global.urlSeries
            let request = url + `api/Personajes/${idPersonaje}/${idSerie}`
            axios.put(request).then(response => {
                resolve(response)
            })
        })
    }
}