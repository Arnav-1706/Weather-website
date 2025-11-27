import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Forecast from '../components/Forecast';
import Loader from '../components/Loader';
import ErrorBox from '../components/ErrorBox';
import { fetchWeatherByCity, fetchWeatherByCoords, fetchForecastByCity } from '../utils/api';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (city) => {
        setLoading(true);
        setError('');
        setWeather(null);
        setForecast(null);

        try {
            const weatherData = await fetchWeatherByCity(city);
            const forecastData = await fetchForecastByCity(city);
            setWeather(weatherData);
            setForecast(forecastData);
            saveToRecent(city);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch weather data');
        } finally {
            setLoading(false);
        }
    };

    const handleLocation = () => {
        if (navigator.geolocation) {
            setLoading(true);
            setError('');
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        const weatherData = await fetchWeatherByCoords(latitude, longitude);
                        // For forecast by coords, we'd need another API call or just use the city name from weather data
                        const forecastData = await fetchForecastByCity(weatherData.name);
                        setWeather(weatherData);
                        setForecast(forecastData);
                    } catch (err) {
                        setError('Failed to fetch location weather');
                    } finally {
                        setLoading(false);
                    }
                },
                (err) => {
                    setError('Location permission denied or unavailable');
                    setLoading(false);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser');
        }
    };

    const saveToRecent = (city) => {
        const recent = JSON.parse(localStorage.getItem('recentCities')) || [];
        if (!recent.includes(city)) {
            const newRecent = [city, ...recent].slice(0, 5);
            localStorage.setItem('recentCities', JSON.stringify(newRecent));
        }
    };

    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <header>
                <h1>GetWeather</h1>
            </header>

            <SearchBar onSearch={handleSearch} onLocation={handleLocation} />

            {error && <ErrorBox message={error} />}

            {loading ? (
                <Loader />
            ) : (
                <>
                    {weather && <WeatherCard data={weather} />}
                    {forecast && <Forecast data={forecast} />}
                </>
            )}
        </motion.div>
    );
};

export default Home;
