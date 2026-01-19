import React from "react";
import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  },
});

// Alternating section component 
const AltSection = ({ title, subtitle, bullets = [], image, reverse = false, index = 0 }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp(index)}
    className="py-16"
  >
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
      
      {/* IMAGE BLOCK */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* TEXT BLOCK */}
      <div className={`${reverse ? "md:order-1" : ""}`}>
        <h2 className="text-3xl font-bold text-brand-navy mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{subtitle}</p>

        <ul className="space-y-2">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-brand-blue text-lg leading-6">•</span>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </motion.section>
);

const DevOps = () => {
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
      <motion.h1
        variants={fadeUp(0)}
        className="mb-4 text-center"
      >
        <span className="inline-block font-bold whitespace-nowrap text-[clamp(22px,6vw,48px)]">
          DevOps, Cloud & Automation
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp(0.2)}
        className="text-[15px] sm:text-lg md:text-xl mb-4 text-white/95"
      >
        Ship Faster. Scale Smarter. Operate Fearlessly.
      </motion.p>

      {/* Description */}
      <motion.p
        variants={fadeUp(0.4)}
        className="text-[14.5px] sm:text-base md:text-lg text-white/90 leading-relaxed"
      >
        Great engineering isn’t about luck — it’s about systems.
        We help teams automate, optimize, and innovate across the entire software lifecycle.
      </motion.p>
    </div>
  </motion.div>
</section>


      {/* CONTENT SECTIONS */}
      <main className="container mx-auto px-6 md:px-10 py-16 max-w-6xl">

        {/* 1 — CI/CD */}
        <AltSection
          index={1}
          image="/images/cdcp.png"
          title="CI/CD Pipeline Engineering"
          subtitle="Automation that accelerates everything."
          bullets={[
            "Build-test-deploy automation",
            "GitOps workflows",
            "Secure pipelines & quality gates",
            "Multi-environment orchestration",
            "Speed & reliability optimization",
          ]}
        />

        {/* 2 — IaC */}
        <AltSection
          index={2}
          reverse
          image="/images/8.png"
          title="Infrastructure as Code"
          subtitle="Infra that builds itself."
          bullets={[
            "Terraform, Ansible, CloudFormation",
            "Environment automation",
            "Immutable infra",
            "Compliance automation",
            "Version-controlled systems",
          ]}
        />

        {/* 3 — Cloud Native */}
        <AltSection
          index={3}
          image="/images/25.png"
          title="Cloud-Native Engineering"
          subtitle="Your apps, modernized."
          bullets={[
            "Kubernetes engineering",
            "Service mesh (Istio/Linkerd)",
            "Docker & container strategy",
            "Autoscaling & resilience",
            "Microservices platform setup",
          ]}
        />

        {/* 4 — SRE */}
        <AltSection
          index={4}
          reverse
          image="/images/7.png"
          title="Site Reliability Engineering (SRE)"
          subtitle="Less downtime. More uptime."
          bullets={[
            "SLO/SLI frameworks",
            "Incident response + RCA",
            "Monitoring/observability",
            "Reliability automation",
            "Chaos engineering",
          ]}
        />

        {/* 5 — Agile */}
        <AltSection
          index={5}
          image="/images/24.png"
          title="Agile & Delivery Enablement"
          subtitle="Better teams, better shipping."
          bullets={[
            "Agile coaching",
            "Scrum/Kanban frameworks",
            "Delivery transformation",
            "Continuous improvement",
          ]}
        />

        {/* 6 — Performance Monitoring */}
        <AltSection
          index={6}
          reverse
          image="/images/6.png"
          title="Performance Monitoring & Optimization"
          subtitle="See everything. Fix everything."
          bullets={[
            "Full-stack observability",
            "Application & infra monitoring",
            "Alerting & dashboards",
            "Bottleneck identification",
          ]}
        />

        {/* Why Truman */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(7)}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Why Truman
          </h2>
          <p className="text-lg text-gray-700">
            Because “it works on my machine” doesn’t cut it anymore.
          </p>
        </motion.section>

      </main>
    </div>
  );
};

export default DevOps;
