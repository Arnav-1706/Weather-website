import React from 'react';
import { motion } from 'framer-motion';
import { formatDate } from '../utils/helpers';
import PropTypes from 'prop-types';
import './Forecast.css';

const Forecast = ({ data }) => {
    if (!data) return null;

    // Filter for one forecast per day (approximate, e.g., noon)
    const dailyForecast = data.list.filter((item) => item.dt_txt.includes('12:00:00')).slice(0, 5);

    return (
        <motion.div
            className="forecast-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h3>Next 5 Days</h3>
            <div className="forecast-list">
                {dailyForecast.map((item) => (
                    <div key={item.dt} className="forecast-item">
                        <p className="day">{formatDate(item.dt).split(',')[0]}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                            alt={item.weather[0].description}
                        />
                        <p className="temp">{Math.round(item.main.temp)}°</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

Forecast.propTypes = {
    data: PropTypes.object,
};

export default Forecast;
