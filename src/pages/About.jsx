import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-brand-navy text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        About Truman Technologies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Built at the intersection of modern talent, smarter technology, and AI-driven intelligence.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/images/21.png" alt="About Truman" className="w-full h-auto" />
                            <div className="absolute inset-0 bg-white/15"></div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Truman Technologies is a next-gen consulting partner built at the intersection of modern talent, smarter technology, and AI-driven intelligence.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We help organizations scale faster, innovate deeper, and stay ahead in a world where digital and AI evolution never slows down.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our team blends strategy, engineering, and domain expertise to help you build strong teams, modern systems, and intelligent operations that support long-term growth.
                        </p>
                        <p className="text-xl font-semibold text-brand-navy">
                            We don't just adapt to the future — we help create it.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-brand-cloud">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Vision</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To empower organizations with modern talent, intelligent engineering, and AI-driven innovation that shapes the future of work and technology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-3xl shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-6">Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To help companies scale smarter by delivering exceptional talent, modern solutions, and continuous transformation through strategy, technology, and human expertise.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's build strong teams, modern systems, and intelligent operations together.
                    </p>
                    <Button variant="primary">Get Started</Button>
                </div>
            </section>
        </div>
    );
};

export default About;
