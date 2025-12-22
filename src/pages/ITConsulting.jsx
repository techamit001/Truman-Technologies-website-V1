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

// Generic block with optional background image (container-only background)
const BgBlock = ({ title, subtitle, bullets = [], bgImage, index = 0 }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp(index)}
    className="mt-12"
  >
    <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-white">

      {/* ✅ IMAGE MOVED TO TOP (NO BACKGROUND IMAGE USED) */}
      {bgImage && (
        <div className="w-full h-56 md:h-64 overflow-hidden">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover block"
          />
        </div>
      )}

      <div className="relative p-8 md:p-10">
        <h3 className="text-2xl font-semibold text-brand-navy mb-3">
          {title}
        </h3>

        {subtitle && (
          <p className="text-base text-gray-600 mb-4">{subtitle}</p>
        )}

        {bullets.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
            {bullets.map((item, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-brand-blue mt-[2px]">•</span>
                <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.section>
);

const ITConsulting = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">

      {/* HERO SECTION using /images/23.png */}
      <section
        className="relative py-28 md:py-32 text-white text-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
          className="relative z-10 container mx-auto px-6 max-w-3xl"
        >
         <h1 className="text-3xl md:text-5xl font-bold mb-4 whitespace-nowrap">
  IT Consulting & Managed Services
</h1>


          <p className="text-lg md:text-xl mb-3">
            Modern Engineering for a Modern World
          </p>

          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Technology evolves fast — your business should too.
            Truman delivers cloud, engineering, data, automation,
            and operational excellence so companies stay resilient and ready for what’s next.
          </p>

          <p className="text-base md:text-lg text-white/85 mt-3">
            We serve as your strategy partner + engineering partner + always-on support team.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <main className="container mx-auto px-6 md:px-10 py-16 md:py-20 max-w-6xl">

        <BgBlock
          index={1}
          title="Cloud Transformation (AWS, Azure, GCP)"
          subtitle="Cloud built for speed, scale, and security."
          bgImage="/images/11.png"
          bullets={[
            "Cloud Migrations (applications, databases, infrastructure)",
            "Modernization & microservices redesign",
            "Hybrid & multi-cloud strategy",
            "Cloud-native engineering & automation",
            "FinOps & cost optimization",
            "Cloud governance & operating model",
          ]}
        />

        <BgBlock
          index={2}
          title="Enterprise Architecture & Modernization"
          subtitle="We design systems that help you move forward — fast."
          bgImage="/images/12.png"
          bullets={[
            "Legacy modernization",
            "API ecosystems & integration",
            "Platform engineering",
            "Performance tuning",
            "End-to-end architecture roadmaps",
            "Microservices & event-driven design",
          ]}
        />

        <BgBlock
          index={3}
          title="Data Engineering, AI & Intelligent Automation"
          subtitle="Make data your competitive advantage."
          bgImage="/images/13.png"
          bullets={[
            "Data lakes, warehouses, ETL/ELT pipelines",
            "Business intelligence dashboards",
            "ML model development",
            "Process automation (RPA + AI)",
            "Intelligent workflows",
            "Predictive analytics",
          ]}
        />

        <BgBlock
          index={4}
          title="DevOps & Infrastructure Automation"
          subtitle="Do more with less friction."
          bgImage="/images/14.png"
          bullets={[
            "CI/CD pipelines",
            "Kubernetes & container orchestration",
            "Infrastructure as Code",
            "Observability & monitoring",
            "Reliability engineering (SRE)",
            "Automated testing",
          ]}
        />

        <BgBlock
          index={5}
          title="Digital Risk Advisory (Non-MDR)"
          subtitle="Your compliance-ready security foundation."
          bgImage="/images/15.png"
          bullets={[
            "Zero Trust enablement",
            "IAM & access governance",
            "Vulnerability advisory",
            "SIEM configuration",
            "Risk management",
            "Cloud security posture",
          ]}
        />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(5.5)}
          className="text-sm text-gray-500 mt-2"
        >
          (Note: TruDefender MDR launches 2026 as a separate product.)
        </motion.p>

        <BgBlock
          index={6}
          title="24×7 Infrastructure & Application Support"
          subtitle="Operations that don’t sleep."
          bgImage="/images/16.png"
          bullets={[
            "NOC & SOC L1 monitoring",
            "Network/server/database support",
            "Application maintenance",
            "Uptime SLAs & incident response",
            "Backup, DR, & continuity programs",
          ]}
        />

        <BgBlock
          index={7}
          title="Enterprise Applications"
          subtitle="End-to-end support for enterprise platforms."
          bgImage="/images/17.png"
          bullets={[
            "Microsoft (M365, Dynamics, Azure)",
            "SAP",
            "Oracle",
            "Salesforce",
            "Workday",
            "ServiceNow",
          ]}
        />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(8)}
          className="
            mt-12 
            text-center 
            py-10 
            rounded-2xl 
            bg-gradient-to-r 
            from-brand-aqua 
            via-brand-blue 
            to-brand-violet
          "
        >
          <h2
            className="
              text-3xl 
              md:text-4xl 
              font-bold 
              text-white 
              mb-4 
              whitespace-nowrap
            "
          >
            Why Truman
          </h2>

          <p className="text-base md:text-lg text-white/90 leading-relaxed whitespace-nowrap">
            We’re the engineering layer that never slows down. Your silent backbone. Your innovation engine.
          </p>
        </motion.section>

      </main>
    </div>
  );
};

export default ITConsulting;
