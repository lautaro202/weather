import { GET_WEATHER } from './constants'
const initialState = {
    weather: '',
    name: '',
    temp:'',
    temp_max:'',
    temp_min:'',
    icon: '',
    feels: ''


}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER: {
            return {
                ...state,
                results: action.payload, 
                name: action.payload.name,
                temp: action.payload.main.temp,
                temp_max: action.payload.main.temp_max,
                temp_min: action.payload.main.temp_min,
                weather: action.payload.weather[0].main,
                icon: action.payload.weather[0].icon,
                feels: action.payload.main.feels_like

            }
        }


        default:
            return state
    }
}
export default rootReducer