import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Clock, Users, CheckCircle, Globe, Zap, Lock, Eye, Target, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const TruDefender = () => {
    const metrics = [
        { label: 'Mean Time to Detect', value: '<15 min', icon: Eye },
        { label: 'Mean Time to Respond', value: '<60 min', icon: Zap },
        { label: 'SOC Operations', value: '24×7', icon: Clock }
    ];

    const workflow = [
        { number: '01', title: 'Connect', description: 'Integrate with endpoints, cloud, email, identity, and network sources.' },
        { number: '02', title: 'Detect', description: 'AI and analysts turn alerts into actionable insights.' },
        { number: '03', title: 'Respond', description: 'Automated playbooks isolate, block, and remediate threats.' },
        { number: '04', title: 'Recover & Learn', description: 'Guided remediation and continuous improvement.' }
    ];

    const benefits = [
        { stat: '90%', label: 'Fewer false alerts' },
        { stat: '45%', label: 'Lower operational cost vs in-house SOC' },
        { stat: '24×7', label: 'Global coverage (India | UAE | USA)' }
    ];

    const capabilities = [
        { icon: Users, title: 'Hybrid Intelligence', desc: 'AI + Human Analysts' },
        { icon: Target, title: 'Unified Dashboard', desc: 'Complete visibility' },
        { icon: Zap, title: 'Plug-and-Protect', desc: 'Fast deployment' },
        { icon: TrendingUp, title: 'Continuous Learning', desc: 'Compliance tracking' }
    ];

    return (
        <div className="pt-20">

{/* ================= HERO SECTION ================= */}
<section className="relative w-full overflow-hidden">

  {/* IMAGE ONLY */}
  <div className="relative w-full h-[48vh] md:h-screen bg-black">
    <img
      src="/images/TruDefender-Hero.png"
      alt="TruDefender Banner"
      className="
      top-7
        absolute inset-0
        w-full h-full
        object-contain
        md:object-cover
      "
    />
  </div>

  {/* TEXT BELOW IMAGE (MOVED FROM OVERLAY) */}
  <div className="bg-white py-20 px-6 text-center">
    <div className="max-w-4xl mx-auto">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-4"
      >
        An AI-Driven Managed Detection & Response Platform.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 leading-relaxed"
      >
        TruDefender™ is a 24×7 managed detection-and-response (MDR) platform 
        that combines AI analytics, zero-trust access, and human SOC expertise 
        to detect and neutralize threats proactively.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link to="/contact">
          <Button className="!bg-brand-navy !text-white hover:!bg-brand-blue px-6 py-3 rounded-xl font-semibold">
            Schedule a Consultation
          </Button>
        </Link>
      </motion.div>

    </div>
  </div>

</section>

{/* ================= PURPOSE SECTION ================= */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 md:px-12">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Why TruDefender?</h2>
      <p className="text-xl text-gray-600 leading-relaxed">
        Traditional security tools are mostly reactive. TruDefender delivers proactive,
        managed security that offers visibility, automation, and expert action.
      </p>
    </div>
  </div>
</section>

{/* ================= PERFORMANCE METRICS ================= */}
<section className="py-24 bg-brand-cloud">
  <div className="container mx-auto px-6 md:px-12">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Performance Metrics</h2>
      <p className="text-xl text-gray-600">Enterprise-grade speed and reliability</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="text-center h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet flex items-center justify-center mx-auto mb-6">
              <Icon className="text-white" size={32} />
            </div>
            <div className="text-4xl font-bold text-brand-navy mb-2">{metric.value}</div>
            <p className="text-gray-600 font-medium">{metric.label}</p>
          </Card>
        );
      })}
    </div>
  </div>
</section>

            {/* Workflow Section */}
            <section className="relative py-32 bg-brand-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/10.png" alt="Workflow" className="w-full h-full object-cover opacity-20" />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">How TruDefender Works</h2>
                        <p className="text-xl text-gray-300">Four-step protection workflow</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workflow.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                            >
                                <div className="text-5xl font-bold text-brand-aqua mb-4">{step.number}</div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

           {/* Key Benefits */}
<section className="py-24 bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet">
    <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-white/90">Measurable impact on your security posture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* CIRCULAR CARD */}
                    <div
                        className="
                            w-48 h-48 
                            bg-white 
                            rounded-full 
                            shadow-xl 
                            flex 
                            items-center 
                            justify-center 
                            mb-4
                        "
                    >
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet">
                            {benefit.stat}
                        </div>
                    </div>

                    {/* LABEL */}
                    <p className="text-lg text-white font-medium max-w-[200px]">
                        {benefit.label}
                    </p>
                </motion.div>
            ))}
        </div>
    </div>
</section>


            {/* Core Capabilities */}
            <section className="py-24 bg-brand-cloud">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
                        <p className="text-xl text-gray-600">What makes TruDefender different</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((capability, index) => {
                            const Icon = capability.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="text-center h-full">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet flex items-center justify-center mx-auto mb-6">
                                            <Icon className="text-white" size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                                        <p className="text-gray-600">{capability.desc}</p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Compliance & Standards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Compliance & Standards</h2>
                        <p className="text-xl text-gray-600">Global framework coverage</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card>
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="text-brand-blue" size={32} />
                                <h3 className="text-2xl font-bold">United States</h3>
                            </div>
                            <ul className="space-y-3">
                                {['NIST CSF & 800-171', 'SOC 2 Type II', 'HIPAA', 'CMMC Level 2', 'FedRAMP Moderate'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle className="text-brand-aqua shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="text-brand-blue" size={32} />
                                <h3 className="text-2xl font-bold">India</h3>
                            </div>
                            <ul className="space-y-3">
                                {['DPDP Act 2023', 'CERT-IN Guidelines 2022', 'ISO 27001:2022', 'CIS Controls v8'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle className="text-brand-aqua shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="text-brand-blue" size={32} />
                                <h3 className="text-2xl font-bold">Middle East</h3>
                            </div>
                            <ul className="space-y-3">
                                {['UAE NESA', 'Dubai DESC', 'Saudi NCA', 'Qatar QNIAP', 'ISO 27701'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle className="text-brand-aqua shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Target Customers */}
            <section className="py-24 bg-brand-cloud">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl font-bold mb-6">Who Benefits from TruDefender?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        Cloud-first enterprises, SMEs, regulated industries (Healthcare, BFSI, Government).
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Healthcare', 'BFSI', 'Government', 'Cloud-First Enterprises', 'SMEs'].map((customer, i) => (
                            <div key={i} className="bg-white px-8 py-4 rounded-full shadow-md">
                                <span className="font-semibold text-brand-navy">{customer}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-violet text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Defend Your Enterprise?</h2>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Schedule a consultation with our security experts and discover how TruDefender can protect your organization.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary" className="!bg-white !text-brand-navy hover:!bg-gray-100">
                            Schedule a Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TruDefender;
