import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || ''; // User needs to provide this
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchWeatherByCoords = async (lat, lon) => {
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchForecastByCity = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
