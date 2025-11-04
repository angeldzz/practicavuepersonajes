import Global from "@/Global";
import axios from "axios";
export default class ServiceSeries {
    getSeries(){
        return new Promise(function (resolve) {
            let series = []
            let url = Global.urlSeries
            let request = "api/Series"
            fetch(url + request)
                .then(response => response.json())
                .then(data => {
                    series = data;
                    resolve(series);
                })
        })
    }
    getSerie(id){
        return new Promise(function (resolve) {
            let url = Global.urlSeries
            let request = url + "api/Series/" + id
            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }
}