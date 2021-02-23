import axios from 'axios'

import {
    GET_WEATHER,
} from './constants'
import swal from 'sweetalert'


export function getWeather(query) {
    const api = {
        key:"0ad1a25ea3128ed85ce5902f77613475",
        base:"https://api.openweathermap.org/data/2.5/"
    }
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/search?q=${query}`)
            .then((res) => res.data )
            .then ( data => {
                dispatch({ type: GET_WEATHER, payload:data})
                console.log(data)
            })
            .catch( () => swal ( "Oops" ,  "No se encontró la ciudad!" ,  "error" ) )
    }
}