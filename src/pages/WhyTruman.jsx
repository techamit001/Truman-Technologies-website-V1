import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, Target, Globe, Handshake } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from "react-router-dom";


const WhyTruman = () => {
    const advantages = [
        { icon: Zap, title: 'Innovation on Tap', description: 'AI + Cloud + Automation in every engagement.' },
        { icon: Users, title: 'People-First Always', description: 'Tech succeeds when people succeed.' },
        { icon: Target, title: 'Speed + Precision', description: 'Agile execution with engineering discipline.' },
        { icon: Globe, title: 'Global Capability, Local Understanding', description: 'A model built for scale and proximity.' },
        { icon: Handshake, title: 'Partnership Over Project', description: "We don't outsource — we build with you." },
        { icon: CheckCircle, title: 'The Truman Advantage', description: 'Modern thinking. Elite talent. Smart engineering. Intelligent transformation.' }
    ];

    return (
        <div className="pt-20">

            {/* IMAGE BANNER (REPLACED SOLID COLOR) */}
            <section className="relative h-[70vh] md:h-[50vh] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <img
                    src="/images/whytruman.png"   // you can change image if needed
                    alt="Why Truman"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay (NO WHITE, NO BLUR) */}
                <div className="absolute inset-0 bg-black/45"></div>

                {/* CONTENT */}
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why Truman?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
                    >
                        Your Partner for What's Next
                    </motion.p>
                </div>
            </section>

            {/* Advantages Grid */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
                    <img src="/images/3.png" alt="Texture" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="h-full flex flex-col">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet flex items-center justify-center mb-6">
                                            <Icon className="text-white" size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tagline */}
            <div className="text-center mt-6 mb-4">
                <p className="text-2xl font-semibold text-brand-navy">
                    This is Truman — built different. Built for the future.
                </p>
            </div>

            {/* Vision & Mission */}
            <section className="py-24 bg-brand-cloud">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-lg"
                        >
                            <h2 className="text-3xl font-bold mb-6">Vision</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To empower organizations with modern talent, intelligent engineering, and AI-driven innovation that shapes the future of work and technology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl shadow-lg"
                        >
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
        <h2 className="text-4xl font-bold mb-6">This is Truman</h2>
        <p className="text-xl text-gray-300 mb-8">
            Built different. Built for the future.
        </p>

        <Link to="/contact">
            <Button variant="primary">
                Partner With Us
            </Button>
        </Link>
    </div>
</section>


        </div>
    );
};

export default WhyTruman;
