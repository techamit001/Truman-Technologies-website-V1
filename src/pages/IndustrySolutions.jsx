import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  },
});

const IndustryCard = ({ title, subtitle, bullets, image, index }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp(index)}
    className="bg-white rounded-[18px] shadow-lg border border-slate-100 p-8"
  >
    {/* IMAGE */}
    <div className="w-full h-56 rounded-[18px] overflow-hidden shadow-md mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXT */}
    <h3 className="text-2xl font-semibold text-brand-navy mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{subtitle}</p>

    <ul className="space-y-2">
      {bullets.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-brand-blue text-lg">•</span>
          <p className="text-gray-700 leading-relaxed">{item}</p>
        </li>
      ))}
    </ul>
  </motion.div>
);

const IndustrySolutions = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">

      {/* HERO SECTION */}
      <section
  className="relative py-28 md:py-32 text-white text-center overflow-hidden"
  style={{
    backgroundImage: "url('/images/23.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/45" />

  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeUp(0)}
    className="relative z-10 container mx-auto px-4 flex justify-center"
  >
    {/* Glass Card */}
    <div
      className="
        backdrop-blur-md
        bg-white/10
        border border-white/20
        rounded-2xl
        shadow-xl
        px-6 py-8
        md:px-10 md:py-10
        max-w-3xl
        text-center
      "
    >
      {/* Heading */}
      <motion.h1 variants={fadeUp(0)} className="mb-4 text-center">
        <span className="inline-block font-bold whitespace-nowrap text-[clamp(22px,6vw,48px)]">
          Industry-Specific Solutions
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp(0.2)}
        className="text-[15px] sm:text-lg md:text-xl mb-4 text-white/95"
      >
        Tech That Fits Your World — Not the Other Way Around
      </motion.p>

      {/* Description */}
      <motion.p
        variants={fadeUp(0.3)}
        className="text-[14.5px] sm:text-base md:text-lg text-white/90 leading-relaxed"
      >
        Every industry evolves differently. Your technology, talent,
        and transformation strategy should too. Truman delivers solutions
        tailored to your operational reality, compliance needs, and growth ambitions.
      </motion.p>
    </div>
  </motion.div>
</section>


      {/* MAIN CONTENT */}
      <main className="container mx-auto px-6 md:px-10 py-20 max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

          <IndustryCard
            index={1}
            image="/images/3.png"
            title="Technology & Software Companies"
            subtitle="Engineering speed meets product innovation."
            bullets={[
              "Product development & modernization",
              "Cloud-native architecture",
              "Platform engineering",
              "QA automation",
              "DevOps, SRE & Platform Ops",
              "AI/ML engineering & data platforms",
            ]}
          />

          <IndustryCard
            index={2}
            image="/images/10.png"
            title="Finance & Banking (BFSI)"
            subtitle="Resilient, compliant, intelligent financial experiences."
            bullets={[
              "Fraud prevention & risk modeling",
              "Digital onboarding & KYC solutions",
              "Core system modernization",
              "Regulatory compliance automation",
              "Data governance & secure workflows",
              "FinTech engineering & integration",
            ]}
          />

          <IndustryCard
            index={3}
            image="/images/21.png"
            title="Healthcare & Life Sciences"
            subtitle="Digital health for a faster, safer, patient-first future."
            bullets={[
              "EHR/EMR integration & optimization",
              "Telehealth ecosystem development",
              "HIPAA-ready platforms",
              "Clinical analytics & reporting",
              "Healthcare automation & RCM support",
              "Staffing for clinical, IT & administrative roles",
            ]}
          />

          <IndustryCard
            index={4}
            image="/images/22.png"
            title="Retail & E-Commerce"
            subtitle="Modern retail powered by AI and customer intelligence."
            bullets={[
              "Omnichannel analytics & personalization",
              "Inventory intelligence & demand forecasting",
              "Digital commerce engineering",
              "Store operations automation",
              "CX optimization & loyalty systems",
            ]}
          />

          <IndustryCard
            index={5}
            image="/images/13.png"
            title="Manufacturing & Supply Chain"
            subtitle="Industry 4.0 built for resilience and efficiency."
            bullets={[
              "IoT & industrial sensors",
              "Predictive maintenance",
              "MES/ERP modernization",
              "Digital twins",
              "Logistics & operations analytics",
              "Workforce solutions for industrial roles",
            ]}
          />

          <IndustryCard
            index={6}
            image="/images/22.png"
            title="Education & EdTech"
            subtitle="Modern learning for the digital-first generation."
            bullets={[
              "LMS integration & platform engineering",
              "Digital assessments",
              "Student analytics & insights",
              "AI-driven tutoring & recommendation engines",
              "ERP & SIS modernization",
              "Staffing for academic, digital, and operational teams",
            ]}
          />

          <IndustryCard
            index={7}
            image="/images/2.png"
            title="Semiconductor Industry"
            subtitle="Engineering excellence for the world’s fastest-growing sector."
            bullets={[
              "VLSI, RTL, FPGA, and ASIC engineering",
              "Design verification & system validation",
              "Semiconductor automation frameworks",
              "Embedded systems engineering",
              "Yield, reliability & quality analytics",
              "Specialized semiconductor talent sourcing",
            ]}
          />

          <IndustryCard
            index={8}
            image="/images/10.png"
            title="Industrial & Engineering"
            subtitle="Tech that powers infrastructure, utilities, and heavy operations."
            bullets={[
              "SCADA & industrial control systems",
              "Field operations platforms",
              "Asset monitoring & predictive analytics",
              "Industrial automation pipelines",
              "Engineering workforce deployment",
            ]}
          />

          <IndustryCard
            index={9}
            image="/images/15.png"
            title="Telecom & 5G"
            subtitle="Powering the next wave of connectivity."
            bullets={[
              "OSS/BSS modernization",
              "Network engineering & optimization",
              "5G deployment support",
              "Telecom analytics",
              "Infra automation & DevOps for telcos",
              "Telecom-specific talent delivery",
            ]}
          />

          <IndustryCard
            index={10}
            image="/images/18.png"
            title="Logistics & Transportation"
            subtitle="Smart movement. Smart routing. Smart operations."
            bullets={[
              "Fleet management platforms",
              "Routing optimization",
              "Transportation analytics",
              "Last-mile automation",
              "Warehouse technology integration",
              "Logistics staffing & operations teams",
            ]}
          />

          <IndustryCard
            index={11}
            image="/images/20.png"
            title="Energy, CleanTech & Utilities"
            subtitle="Digital infrastructure for a sustainable, compliant world."
            bullets={[
              "Smart grid apps & monitoring",
              "Energy analytics & forecasting",
              "Compliance frameworks",
              "IoT devices & field systems",
              "Renewable energy systems & automation",
            ]}
          />

        </div>

        {/* WHY TRUMAN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(12)}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
            Why Truman
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Whatever your industry, we plug in innovation that creates real, measurable, lasting impact.
          </p>
        </motion.div>

        {/* CONTACT CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(13)}
          className="text-center mt-20 bg-brand-navy text-white p-12 rounded-3xl shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h3>
          <p className="text-white/90 mb-6">
            Let’s build technology that fits your world — not the other way around.
          </p>

          <Link
  to="/contact"
  className="inline-block bg-brand-aqua text-brand-navy px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-white transition"
>
  Talk to Our Team
</Link>

        </motion.div>

      </main>

    </div>
  );
};

export default IndustrySolutions;
