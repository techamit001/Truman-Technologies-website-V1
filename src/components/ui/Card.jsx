import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`card-base ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
