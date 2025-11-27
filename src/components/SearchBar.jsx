import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ onSearch, onLocation }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <motion.form
            className="search-bar"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="input-wrapper">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search for a city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <motion.button
                type="button"
                className="location-btn"
                onClick={onLocation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Use current location"
            >
                <FiMapPin />
            </motion.button>
        </motion.form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onLocation: PropTypes.func.isRequired,
};

export default SearchBar;
