import React from 'react';
import { motion } from 'framer-motion';
import { BiErrorCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';

const ErrorBox = ({ message }) => {
    return (
        <motion.div
            className="error-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
                background: 'rgba(255, 107, 107, 0.2)',
                border: '1px solid rgba(255, 107, 107, 0.5)',
                color: '#ff6b6b',
                padding: '1rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                margin: '1rem 0',
                backdropFilter: 'blur(5px)'
            }}
        >
            <BiErrorCircle size={24} />
            <span>{message}</span>
        </motion.div>
    );
};

ErrorBox.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorBox;
