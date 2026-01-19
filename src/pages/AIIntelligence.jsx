import React from "react";
import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  },
});

// Section Component (alternating layout)
const SectionBlock = ({ title, subtitle, bullets, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp(index)}
      className="grid md:grid-cols-2 gap-10 items-center mb-20"
    >
      {/* IMAGE */}
      <div className={isEven ? "order-1" : "order-2"}>
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* TEXT */}
      <div className={isEven ? "order-2" : "order-1"}>
        <h3 className="text-3xl font-semibold text-brand-navy mb-3">
          {title}
        </h3>

        <p className="text-gray-700 mb-5">{subtitle}</p>

        <ul className="space-y-2">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-brand-blue text-lg leading-6">•</span>
              <p className="text-gray-800 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// MAIN PAGE
const AIIntelligence = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">

      {/* HERO */}
     <section
  className="relative py-28 md:py-32 text-center overflow-hidden"
  style={{
    backgroundImage: "url('/images/23.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20" />

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
        <span className="inline-block font-bold whitespace-nowrap text-[clamp(22px,6vw,48px)] text-white">
          AI-Driven Intelligence
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp(0.2)}
        className="text-[15px] sm:text-lg md:text-xl text-white/95"
      >
        Intelligence That Enhances Everything
      </motion.p>

      {/* Description */}
      <motion.p
        variants={fadeUp(0.3)}
        className="mt-4 text-[14.5px] sm:text-base md:text-lg text-white/90 leading-relaxed"
      >
        AI isn’t a feature here — it’s a foundation.
        We infuse intelligence into how you hire, build, scale, and operate.
      </motion.p>
    </div>
  </motion.div>
</section>


      {/* CONTENT */}
      <main className="container mx-auto px-6 md:px-10 py-20 max-w-5xl">

        <SectionBlock
          index={1}
          image="/images/30.png"
          title="Talent Intelligence"
          subtitle="Smarter hiring from the inside out."
          bullets={[
            "AI-assisted candidate matching",
            "Screening automation",
            "Market + workforce analytics",
            "Skills graphing & prediction",
          ]}
        />

        <SectionBlock
          index={2}
          image="/images/31.png"
          title="Engineering Intelligence"
          subtitle="Systems that learn and evolve."
          bullets={[
            "AIOps",
            "Predictive monitoring",
            "Root-cause automation",
            "Reliability insights",
          ]}
        />

        <SectionBlock
          index={3}
          image="/images/3.png"
          title="Business Intelligence"
          subtitle="Insight-driven operations."
          bullets={[
            "Predictive forecasting",
            "AI-enhanced workflows",
            "Data-driven decisioning",
            "Intelligent dashboards",
          ]}
        />

        <SectionBlock
          index={4}
          image="/images/8.png"
          title="Industry AI"
          subtitle="AI that fits your market."
          bullets={[
            "Healthcare triage AI",
            "Fraud detection",
            "Customer behavior models",
            "Predictive supply chain",
          ]}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(5)}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
            Why Truman
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            AI is our multiplier — it amplifies everything we deliver.
          </p>
        </motion.div>

      </main>
    </div>
  );
};

export default AIIntelligence;
