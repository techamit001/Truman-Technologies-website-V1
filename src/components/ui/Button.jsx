import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseClass} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
