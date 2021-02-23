import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../redux/actions';
import './searchBar.scss'

export default function SearchBar () {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
      setInput(e.target.value);
      console.log(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeather(input));
        setInput('');
    }
    
    return (
        
        <form 
        onSubmit={(e) => 
        handleSubmit(e)} 
        className='searchBar'>
            <div class="search__container">
                <p class="search__title">
                </p>
                <input
                onChange={handleChange}
                onSubmit={handleSubmit}
                class="search__input" type="text" placeholder="Realice su búsqueda..."/>
            </div>

        </form>
    )
}