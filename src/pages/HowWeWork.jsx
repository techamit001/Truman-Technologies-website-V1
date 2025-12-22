import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const HowWeWork = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="relative py-32 bg-brand-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/howwork.png" alt="How We Work" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-navy/35 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        How We Work
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        The Truman Way: A modern, intelligent, human approach to transformation.
                    </motion.p>
                </div>
            </section>

            {/* The Truman Way */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">The Truman Way</h2>
                        <p className="text-xl text-gray-600">Initiate → Innovate → Implement → Improve</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {[
                            {
                                number: '01',
                                title: 'Initiate',
                                description: 'We understand your world — goals, blockers, systems, and realities.',
                                outcome: 'A strategic blueprint with measurable success metrics.'
                            },
                            {
                                number: '02',
                                title: 'Innovate',
                                description: 'We design solutions powered by AI, automation, and modern engineering.',
                                outcome: 'Future-ready architecture built for scale.'
                            },
                            {
                                number: '03',
                                title: 'Implement',
                                description: 'We execute with precision, speed, and zero shortcuts.',
                                outcome: 'Stable, scalable, secure systems delivered on time.'
                            },
                            {
                                number: '04',
                                title: 'Improve',
                                description: 'We monitor, optimize, and evolve your ecosystem continuously.',
                                outcome: 'Better performance, lower cost, and smarter operations.'
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-brand-cloud p-8 rounded-3xl"
                            >
                                {/* NUMBER — SOLID BLUE */}
                                <div className="text-5xl font-bold text-brand-blue mb-4">
                                    {step.number}
                                </div>

                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                                {/* OUTCOME — AQUA VERTICAL LINE */}
                                <div className="border-l-4 border-brand-aqua pl-4 mt-6">
                                    <p className="text-sm font-semibold text-brand-navy">Outcome:</p>
                                    <p className="text-gray-600">{step.outcome}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tagline Before Why It Works Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-2xl font-semibold text-brand-navy">
                        We don’t deliver and disappear — we partner and evolve with you.
                    </p>
                </div>
            </section>

            {/* Why It Works */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Why It Works</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                        We don't deliver and disappear — we partner and evolve with you.
                    </p>
                    <Button variant="primary">Start Your Transformation</Button>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
