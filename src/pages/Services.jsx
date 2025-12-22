import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";


// ---------------------- SERVICE SECTION COMPONENT ---------------------- //

const ServiceSection = ({ title, description, image, features, reverse = false, id, link }) => {
    return (
        // ✅ BG CHANGE HERE (white → blue theme)
        <div id={id} className={`py-24 bg-brand-cloud`}>
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-1/2 ${reverse ? "md:order-2" : ""}`}
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img src={image} alt={title} className="w-full h-auto" />
                        <div className="absolute inset-0 bg-white/15"></div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-1/2 ${reverse ? "md:order-1" : ""}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="mt-1 bg-brand-aqua/20 p-1 rounded-full text-brand-blue">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Link to={link}>
                        <Button variant="secondary" className="flex items-center gap-2">
                            Learn More <ArrowRight size={18} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};


// ---------------------------- MAIN SERVICES PAGE ---------------------------- //

const Services = () => {
    return (
        <div className="pt-20">

            {/* Header */}
            <section
                className="relative py-20 text-center text-white overflow-hidden"
                style={{
                    backgroundImage: "url('/images/27.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* ✅ BG CHANGE HERE (black → brand navy) */}
                <div className="absolute inset-0 bg-brand-navy/50"></div>

                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        We help organizations scale faster, innovate deeper, and stay ahead
                        in a world where digital and AI evolution never slows down.
                    </p>
                </div>
            </section>

            {/* 1. Talent Solutions */}
            <ServiceSection
                id="talent"
                title="Talent Solutions"
                description="We blend human expertise + AI intelligence to deliver exceptional tech, business, and clinical talent — fast. Whether you need contract staffing, direct hire, or executive search, we build teams that transform businesses."
                image="/images/3.png"
                features={[
                    "Technology & Engineering Talent (Full-Stack, Mobile, Cloud)",
                    "Business, Digital & Enterprise Talent (PM, Agile, Finance)",
                    "Healthcare & Clinical Talent (Nurses, Physicians, Allied Health)",
                    "Specialized Talent for Semiconductor, Telecom & Industrial"
                ]}
                link="/services/talent-solutions"
            />

            {/* 2. IT Consulting */}
            <ServiceSection
                id="consulting"
                reverse
                title="IT Consulting & Managed Services"
                description="Technology moves fast — we help you move faster. We deliver modern engineering, cloud transformation, automation, and operational support so your business stays resilient, scalable, and future-ready."
                image="/images/5.png"
                features={[
                    "Cloud Transformation (AWS, Azure, GCP)",
                    "Enterprise Architecture & Modernization",
                    "Data Engineering & AI",
                    "24x7 Infrastructure & Application Support"
                ]}
                link="/services/it-consulting"
            />

            {/* 3. DevOps & Automation */}
            <ServiceSection
                id="devops"
                title="DevOps, Cloud & Automation"
                description="We help engineering teams ship faster, safer, smarter. From CI/CD pipelines to Infrastructure as Code, we automate the friction out of your delivery process."
                image="/images/23.png"
                features={[
                    "CI/CD Pipeline Engineering",
                    "Infrastructure as Code (Terraform, Ansible)",
                    "Cloud-Native Engineering (Kubernetes, Docker)",
                    "Site Reliability Engineering (SRE)"
                ]}
                link="/services/devops-automation"
            />

            {/* 4. Industry Solutions */}
            <ServiceSection
                id="industry"
                reverse
                title="Industry-Specific Solutions"
                description="Technology isn’t one-size-fits-all. We build solutions tailored to how you operate, grow, and innovate in your specific sector."
                image="/images/22.png"
                features={[
                    "Semiconductor (VLSI, FPGA, Embedded)",
                    "Healthcare & Life Sciences (EHR, Telehealth)",
                    "Finance & Banking (Fraud Prevention, Compliance)",
                    "Retail, Manufacturing, Telecom & Energy"
                ]}
                link="/services/industry-solutions"
            />

            {/* 5. AI Intelligence */}
            <ServiceSection
                id="ai"
                title="AI-Driven Intelligence"
                description="AI isn’t an add-on at Truman — it’s a foundational layer. We embed AI across talent, engineering, operations, and decision-making to help companies move smarter and faster."
                image="/images/8.png"
                features={[
                    "Talent Intelligence (Matching, Screening)",
                    "Engineering Intelligence (AIOps, Predictive Monitoring)",
                    "Business Intelligence (Analytics, Decision Modeling)",
                    "Industry AI (Fraud Detection, Predictive Ops)"
                ]}
                link="/services/ai-intelligence"
            />

        </div>
    );
};

export default Services;
