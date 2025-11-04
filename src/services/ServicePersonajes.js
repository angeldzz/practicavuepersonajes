import axios from "axios"
import Global from "@/Global"

export default class ServicePersonajes{
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
}