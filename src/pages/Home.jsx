import { Link } from "react-router-dom";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
    return (
        <div className="w-full overflow-x-hidden">

          {/* 1. HERO SECTION */}
<section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0">

    {/* Background Video */}
    <div className="absolute inset-0 w-full h-full z-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
        >
            <source src="/images/BG New Truman website Video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[5px]"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Glass Card */}
        <div
            className="
                inline-block
                bg-white/20
                backdrop-blur-xl
                border border-white/30
                rounded-2xl
                px-5 py-7
                sm:px-8 sm:py-10
                md:px-10 md:py-12
                shadow-2xl
            "
        >

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                    font-bold leading-tight text-center w-full text-white mb-6
                    text-2xl sm:text-3xl md:text-4xl lg:text-4xl"
            >
                <span className="block md:inline">
                    Modern Talent | Smarter Tech
                </span>

                <span className="hidden md:inline"> | </span>

                <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet">
                    AI-Driven Intelligence
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto"
            >
                We help companies build high-performing teams, modernize their technology,
                and accelerate AI-led transformation.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
            >
                <Link to="/contact">
                    <Button variant="primary">Get Talent</Button>
                </Link>

                <Link to="/services">
                    <Button variant="secondary">Explore Services</Button>
                </Link>
            </motion.div>

        </div>
    </div>
</section>



          {/* 2. ABOUT TRUMAN SECTION */}
<section className="py-24 bg-white">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* Image */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
        >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <img 
                    src="/images/About-Us.png" 
                    alt="About Truman" 
                    className="w-full h-80 md:h-[420px] object-cover rounded-3xl" 
                />
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
            <h2 className="text-4xl font-bold mb-6">
                About Truman
            </h2>

            {/* ✅ ONLY CHANGE: text-justify + max-w-xl */}
            <p className="text-lg text-gray-600 mb-2 leading-relaxed text-justify max-w-xl">
                Truman Technologies is a next-gen consulting partner built at the intersection of modern talent, smarter technology, and AI-driven intelligence.
            </p>

            <p className="text-lg text-gray-600 mb-2 leading-relaxed text-justify max-w-xl">
                We help organizations scale faster, innovate deeper, and stay ahead in a world where digital and AI evolution never slows down.
            </p>

            <p className="text-lg text-gray-600 mb-2 leading-relaxed text-justify max-w-xl">
                Our team blends strategy, engineering, and domain expertise to help you build strong teams, modern systems, and intelligent operations.
            </p>
        </motion.div>
    </div>

    {/* Vision & Mission */}
    <section className="py-14">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-10 rounded-3xl shadow-lg"
                >
                    <h2 className="text-3xl font-bold mb-6">Vision</h2>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
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
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        To help companies scale smarter by delivering exceptional talent, modern solutions, and continuous transformation through strategy, technology, and human expertise.
                    </p>
                </motion.div>

            </div>
        </div>
    </section>
</section>


{/* 3. SERVICES OVERVIEW SECTION */}
<section className="py-14 bg-brand-cloud">
  <div className="container mx-auto px-6 md:px-12">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Comprehensive solutions tailored to your industry and growth stage.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Service 1: Talent Solutions */}
      <Card className="hover:shadow-xl transition-shadow">
        <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
          <img src="/images/3.png" alt="Talent Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <h3 className="text-2xl font-bold mb-3">Talent Solutions</h3>
        <p className="text-gray-600 mb-4">
          We blend human expertise + AI intelligence to deliver exceptional tech,
          business, and clinical talent — fast.
        </p>

        <Link
          to="/services/talent-solutions"
          className="text-brand-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More <ChevronRight size={16} />
        </Link>
      </Card>

      {/* Service 2: IT Consulting */}
      <Card className="hover:shadow-xl transition-shadow">
        <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
          <img src="/images/5.png" alt="IT Consulting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <h3 className="text-2xl font-bold mb-3">
          IT Consulting & Managed Services
        </h3>
        <p className="text-gray-600 mb-4">
          Modern engineering, cloud transformation, and automation to keep your
          business resilient and future-ready.
        </p>

        <Link
          to="/services/it-consulting"
          className="text-brand-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More <ChevronRight size={16} />
        </Link>
      </Card>

      {/* Service 3: DevOps & Automation */}
      <Card className="hover:shadow-xl transition-shadow">
        <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
          <img src="/images/23.png" alt="DevOps & Automation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <h3 className="text-2xl font-bold mb-3">
          DevOps, Cloud & Automation
        </h3>
        <p className="text-gray-600 mb-4">
          CI/CD, Infrastructure as Code, and SRE to help engineering teams ship
          faster, safer, and smarter.
        </p>

        <Link
          to="/services/devops-automation"
          className="text-brand-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More <ChevronRight size={16} />
        </Link>
      </Card>

      {/* Service 4: AI-Driven Intelligence */}
      <Card className="hover:shadow-xl transition-shadow">
        <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
          <img src="/images/8.png" alt="AI Intelligence" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <h3 className="text-2xl font-bold mb-3">
          AI-Driven Intelligence
        </h3>
        <p className="text-gray-600 mb-4">
          Embed AI across talent, engineering, and operations to move smarter
          and faster.
        </p>

        <Link
          to="/services/ai-intelligence"
          className="text-brand-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More <ChevronRight size={16} />
        </Link>
      </Card>

      {/* Service 5: Industry Solutions */}
      <Card className="hover:shadow-xl transition-shadow md:col-span-2">
        <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
          <img src="/images/22.png" alt="Industry Solutions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Industry-Specific Solutions
        </h3>
        <p className="text-gray-600 mb-4">
          Tailored solutions for Semiconductor, Healthcare, BFSI, Retail,
          Manufacturing, and more.
        </p>

        <Link
          to="/services/industry-solutions"
          className="text-brand-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More <ChevronRight size={16} />
        </Link>
      </Card>

    </div>
  </div>
</section>



            {/* 4. HOW WE WORK SECTION */}
            <section className="relative py-32 bg-brand-navy text-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/10.png" alt="How We Work" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-navy/35 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">How We Work — The Truman Way</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Initiate', desc: 'Deep dive into goals & strategy.' },
                            { title: 'Innovate', desc: 'Design AI & modern solutions.' },
                            { title: 'Implement', desc: 'Execute with speed & precision.' },
                            { title: 'Improve', desc: 'Continuous optimization.' }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                            >
                                <div className="text-4xl font-bold text-brand-aqua mb-4">0{index + 1}</div>
                                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

         {/* 5. WHY TRUMAN SECTION */}
<section className="relative py-24 bg-white overflow-hidden">
    
    {/* Background Texture */}
    <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <img src="/images/3.png" alt="Texture" className="w-full h-full object-cover" />
    </div>

    <div className="relative z-10 container mx-auto px-6">

        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Truman?</h2>
            <p className="text-xl text-gray-600">Innovation on Tap. People-First Always.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                    title: "Innovation on Tap",
                    desc: "AI + Cloud + Automation in every engagement."
                },
                {
                    title: "People-First Always",
                    desc: "Tech succeeds when people succeed."
                },
                {
                    title: "Speed + Precision",
                    desc: "Agile execution with engineering discipline."
                },
                {
                    title: "Global Capability, Local Understanding",
                    desc: "A model built for scale and proximity."
                },
                {
                    title: "Partnership Over Project",
                    desc: "We don’t outsource — we build with you."
                },
                {
                    title: "The Truman Advantage",
                    desc: "Modern thinking. Elite talent. Smart engineering. Intelligent transformation."
                }
            ].map((item, index) => (
                <Card key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-brand-aqua shrink-0" size={28} />
                    <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                </Card>
            ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
            <p className="text-2xl font-semibold text-brand-navy">
                This is Truman — built different. Built for the future.
            </p>
        </div>

    </div>
</section>

            {/* 6. CONTACT SECTION */}
            <section className="relative py-24 flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/24.png" alt="Contact" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-[6px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12">

                        {/* Left Content */}
                       {/* Left Content */}
<div className="w-full md:w-1/2">
    <h2 className="text-4xl font-bold mb-6">Let’s Build What’s Next — Together</h2>
    <p className="text-lg text-gray-600 mb-8">
        Whether you're scaling teams or modernizing technology, we're here to help.
    </p>

    <div className="space-y-6">

        {/* Email */}
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-cloud flex items-center justify-center text-brand-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-semibold">info@trumantechnologies.in</p>
            </div>
        </div>

        {/* Call Us */}
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-cloud flex items-center justify-center text-brand-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h2l3 6-2.5 1.5a11 11 0 005.5 5.5L15 14l6 3v2a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                </svg>
            </div>
            <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-semibold">+91 9676236937</p>
            </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-cloud flex items-center justify-center text-brand-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zm.02 4H1v16h4V7.5zm6.5 0h-3.98V23h4v-8.3c0-4.6 6-5 6 0V23h4V13.5c0-8.5-9.5-8.2-10 0V7.5z" />
                </svg>
            </div>
            <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a 
                    href="https://linkedin.com/company/trumantechnologies" 
                    target="_blank" 
                    className="font-semibold hover:text-brand-blue transition"
                >
                    trumantechnologies 
                </a>
            </div>
        </div>

        {/* Locations */}
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-cloud flex items-center justify-center text-brand-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v8m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                </svg>
            </div>
            <div>
                <p className="text-sm text-gray-500">Locations</p>
                <p className="font-semibold">India • Dubai • USA</p>
            </div>
        </div>

    </div>
</div>


                        {/* Right Form */}
                        <div className="w-full md:w-1/2">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="name@company.com" />
                                </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
                                        placeholder="If you prefer a quicker response"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">What are you looking for?</label>
                                    <select
                                        name="interest"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
                                    >
                                        <option>Hire Talent</option>
                                        <option>Start a Technology Project</option>
                                        <option>Request a Consultation</option>
                                        <option>Learn About Our Services</option>
                                        <option>Partnership Inquiry</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                                    <textarea
                                        name="message"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 h-32 focus:ring-2 focus:ring-brand-blue outline-none"
                                        placeholder="Tell us a little about your needs..."
                                    ></textarea>
                                </div>
                                <Button variant="primary" className="w-full">Send Inquiry</Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
