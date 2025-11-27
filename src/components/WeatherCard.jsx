import React from 'react';
import { motion } from 'framer-motion';
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi';
import { capitalizeFirstLetter, formatDate } from '../utils/helpers';
import PropTypes from 'prop-types';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { name, main, weather, wind, dt, sys } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    return (
        <motion.div
            className="weather-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="card-header">
                <div>
                    <h2>{name}, {sys.country}</h2>
                    <p>{formatDate(dt)}</p>
                </div>
                <div className="weather-icon">
                    <img src={iconUrl} alt={weather[0].description} />
                </div>
            </div>

            <div className="temp-container">
                <h1>{Math.round(main.temp)}°</h1>
                <p>{capitalizeFirstLetter(weather[0].description)}</p>
            </div>

            <div className="details-grid">
                <div className="detail-item">
                    <WiHumidity size={24} />
                    <div>
                        <span>Humidity</span>
                        <p>{main.humidity}%</p>
                    </div>
                </div>
                <div className="detail-item">
                    <WiStrongWind size={24} />
                    <div>
                        <span>Wind</span>
                        <p>{wind.speed} m/s</p>
                    </div>
                </div>
                <div className="detail-item">
                    <WiThermometer size={24} />
                    <div>
                        <span>Feels Like</span>
                        <p>{Math.round(main.feels_like)}°</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

WeatherCard.propTypes = {
    data: PropTypes.object,
};

export default WeatherCard;
