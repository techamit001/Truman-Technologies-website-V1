import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="relative">
                {/* Logo in center */}
                <div className="relative z-10 flex items-center justify-center">
                    <img
                        src="/images/logo/trueman.png"
                        alt="Truman Technologies"
                        className="h-20 w-auto"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <div className="text-3xl font-bold font-poppins text-brand-navy hidden">TRUMAN</div>
                </div>

                {/* Rotating circle */}
                <motion.div
                    className="absolute inset-0 -m-12"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeDasharray="70 200"
                            strokeLinecap="round"
                            opacity="0.6"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--color-brand-aqua)" />
                                <stop offset="50%" stopColor="var(--color-brand-blue)" />
                                <stop offset="100%" stopColor="var(--color-brand-violet)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default Loader;
