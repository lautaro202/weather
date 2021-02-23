import React from 'react'
import SearchBar from './searchBar'
import { useSelector } from 'react-redux'
import './main.scss'

export default function Main() {
    const Temp = useSelector( state => state.temp)
    const Name = useSelector ( state => state.name)
    const Feels = useSelector ( state => state.feels)
    const Max_Temp = useSelector ( state=> state.temp_max)
    const Min_Temp = useSelector ( state=> state.temp_min)
    const Weather = useSelector ( state=> state.weather)



    return (
        <div>
            <SearchBar></SearchBar>
          <div className='card'>
              {Weather == '' && <h1>Que ciudad desea buscar?</h1>}
          <div className='city_name'>{Name !== '' && <h1>Ciudad: {Name}°</h1>}</div>
            <div className='city_weather'>{Weather !== '' && <h1>Clima: {Weather}°</h1>}</div>
            <div className='city_temp'>{Temp !== '' && <h1>{Temp}°</h1>}</div>
            <div className='city_max_temp'>{Max_Temp != '' && <div>Temperatura Máxima: {Max_Temp}°</div>}</div>
            <div className='city_min_temp'>{Min_Temp != '' && <div>Temperatura Minima: {Min_Temp}°</div>}</div>
            <div className='city_feels'>{Feels != '' && <div>Sensacion Termica: {Feels}°</div>}</div>
          </div>
        </div>
    )
}
