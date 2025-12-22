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

// Generic content block with optional background image (used for sub-industries)
const BgBlock = ({ title, subtitle, bullets = [], bgImage, index = 0 }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp(index)}
    className="mt-12"
  >
    <div
      className={
        "relative rounded-3xl overflow-hidden shadow-md border border-slate-100 bg-white"
      }
    >
      {/* ✅ IMAGE MOVED TO TOP (NO BACKGROUND) */}
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
                <span className="text-brand-blue leading-6 mt-[2px]">•</span>
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

const TalentSolutions = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* HERO / BANNER – main image #3 in background */}
      <section
        className="relative py-28 md:py-32 text-white text-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/3.png')",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Talent Solutions
          </h1>
          <p className="text-lg md:text-xl mb-3">
            Build Teams That Build the Future.
          </p>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Truman blends human expertise + AI-driven intelligence to help
            companies hire smarter, move faster, and scale confidently. We
            deliver exceptional talent across engineering, technology,
            operations, clinical care, and enterprise functions — tailored to
            your industry and growth stage.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <main className="container mx-auto px-6 md:px-10 py-16 md:py-20 max-w-6xl">
        {/* WHAT WE OFFER – heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0)}
          className="text-3xl md:text-4xl font-bold text-brand-navy mb-6"
        >
          What We Offer
        </motion.h2>

        {/* Technology & Engineering Talent */}
        <BgBlock
          index={0}
          title="Technology & Engineering Talent"
          subtitle="Modern engineering talent for modern businesses."
          bgImage="/images/1.png"
          bullets={[
            "Full-Stack Developers (Java, .NET, Node, Python, React, Angular)",
            "Mobile App Engineers (iOS, Android, Flutter, React Native)",
            "Solution & Enterprise Architects",
            "Cloud Engineers (AWS, Azure, GCP)",
            "DevOps & SRE",
            "Automation Engineers",
            "AI/ML Engineers, Data Scientists, MLOps",
            "Cybersecurity & InfoSec",
            "QA Automation, Performance Testing",
            "Networking & Systems Engineering",
          ]}
        />

        {/* Business, Digital & Enterprise Talent */}
        <BgBlock
          index={1}
          title="Business, Digital & Enterprise Talent"
          subtitle="Talent that elevates strategy, execution, and operations."
          bgImage="/images/5.png"
          bullets={[
            "Project & Program Managers",
            "Scrum Masters, Product Managers",
            "Business Analysts & System Analysts",
            "GRC, Audit, Compliance, Risk",
            "Finance, Accounting, FP&A",
            "Marketing Operations, Digital Ops",
          ]}
        />

        {/* Healthcare & Clinical Talent – background image #21 */}
        <BgBlock
          index={2}
          title="Healthcare & Clinical Talent"
          subtitle="End-to-end healthcare workforce support."
          bgImage="/images/21.png"
          bullets={[
            "Registered Nurses",
            "Physicians & Specialists",
            "Allied Health Professionals",
            "Clinical Directors & Administrators",
            "Medical Operations & Support Teams",
          ]}
        />

        {/* Retail / E-Com / Industrial / Skilled Trades – background image #22 */}
        <BgBlock
          index={3}
          title="Retail, E-Com, Industrial & Skilled Trades"
          subtitle="Workforce solutions for high-volume, high-impact operations."
          bgImage="/images/22.png"
          bullets={[
            "Retail & E-Commerce Ops",
            "Customer Support & Inside Sales",
            "Machine Operators, Assemblers, Welders",
            "Warehouse & Logistics Teams",
            "Electricians, Technicians & Skilled Trades",
          ]}
        />

        {/* Specialized Talent heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(4)}
          className="text-3xl md:text-4xl font-bold text-brand-navy mt-12 mb-4"
        >
          Specialized Talent for Emerging Industries
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(4.2)}
          className="text-base md:text-lg text-gray-600 mb-4"
        >
          For fast-growing sectors requiring hard-to-find engineering and domain
          specialists.
        </motion.p>

        {/* Semiconductor – background image #2 */}
        <BgBlock
          index={5}
          title="Semiconductor Engineering Talent"
          subtitle="For chip design, automation, and embedded systems."
          bgImage="/images/2.png"
          bullets={[
            "ASIC / RTL / FPGA Development",
            "Design Verification (DV)",
            "VLSI Engineering",
            "Physical Design, DFT",
            "Embedded C/C++",
            "Verification Automation (Python, TCL, Perl, Verilog/SystemVerilog)",
            "Post-Silicon Validation",
            "Yield & Reliability Engineering",
          ]}
        />

        {/* Telecom & 5G */}
        <BgBlock
          index={6}
          title="Telecom & 5G Engineering Talent"
          subtitle="Supporting next-gen connectivity."
          bgImage="/images/6.png"
          bullets={[
            "OSS/BSS Engineering",
            "RF Engineering",
            "5G Core & RAN",
            "Network Optimization",
            "Telecom Cloud (NFV, SDN)",
            "VoIP, IMS, SIP",
            "Telecom DevOps & Automation",
          ]}
        />

        {/* Industrial & Automation */}
        <BgBlock
          index={7}
          title="Industrial & Automation Talent"
          subtitle="For factories, plants, robotics, and smart industrial operations."
          bgImage="/images/9.png"
          bullets={[
            "PLC/SCADA Engineers",
            "Robotics & Controls Engineers",
            "Instrumentation Engineers",
            "Automation Engineers",
            "Electrical/Mechanical Technicians",
            "CNC/Manufacturing Automation",
            "Field Services Engineering",
          ]}
        />

        {/* Energy, CleanTech & Utilities */}
        <BgBlock
          index={8}
          title="Energy, CleanTech & Utilities Talent"
          subtitle="For modern energy infrastructure and smart grid engineering."
          bgImage="/images/16.png"
          bullets={[
            "Smart Grid Engineers",
            "SCADA/ICS Engineers",
            "Energy Data Analysts",
            "Renewable Energy Technicians",
            "Utility Infrastructure Engineering",
            "Field Operations & Maintenance Teams",
          ]}
        />

        {/* Recruitment Models */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(9)}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Recruitment Models
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-10">
            Your hiring needs, your way.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Contract Staffing",
                desc: "On-demand specialists for urgent needs, projects, and spikes.",
              },
              {
                title: "Direct Hire",
                desc: "Full-cycle recruitment for permanent engineering, leadership, and business roles.",
              },
              {
                title: "Executive Search",
                desc: "High-touch, confidential leadership hiring that shapes organizational culture.",
              },
              {
                title: "RPO",
                desc: "Your own embedded recruiting team powered by Truman’s talent engine.",
              },
              {
                title: "Project-Based Talent Pods",
                desc: "Pre-assembled tech teams — Dev, QA, Cloud, Data, PM — ready to deploy.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-2xl p-6 shadow-lg 
                  text-white
                  bg-gradient-to-r from-brand-aqua via-brand-blue to-brand-violet
                "
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/90">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Closing line */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(10)}
          className="mt-12 text-lg md:text-xl font-semibold text-brand-navy text-center"
        >
          We don’t just fill jobs — we build teams that transform businesses.
        </motion.p>
      </main>
    </div>
  );
};

export default TalentSolutions;
