//This is the action creator

import axios from 'axios';

const API_KEY = 'ea9db166c82444f6910357e62d9bb3d6'; // set API KEY
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`; 
const MODE = `json`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //Set Action type

// Create action creator responsible for API request
export function fetchWeather(city){
    const url = `${ROOT_URL}q=${city},us&mode=${MODE}&appid=${API_KEY}`; // adds the city and country onto the search query
    const request = axios.get(url); // returns results of get request / a promise

    console.log('Request', request);

//passes action back to reducers
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}