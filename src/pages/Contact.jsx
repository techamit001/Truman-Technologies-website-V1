import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Linkedin } from "lucide-react";
import Button from "../components/ui/Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
      .sendForm(
        "service_3que0zo",        // ✅ CORRECT SERVICE ID
        "template_krjntq9",       // ✅ TEMPLATE ID
        formRef.current,
        "v_gTVNs6_xEEqa2CB"       // ✅ PUBLIC KEY
      )
            .then(
                () => {
                    alert("Your inquiry has been sent successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    alert("Failed to send message. Try again!");
                    console.error(error);
                }
            );
    };

    return (
        <div className="pt-20">

            {/* ⭐ UPDATED BANNER SECTION with contactimg.png */}
            <section className="relative py-24 text-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/images/contactimg.png" 
                        alt="Contact Banner" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[3px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        Let's Build What's Next — Together
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Whether you're scaling teams or modernizing technology, we're here to help.
                    </motion.p>
                </div>
            </section>

            {/* CONTACT FORM SECTION */}
            <section className="relative py-24">
                <div className="absolute inset-0 z-0">
                    <img src="/images/contactimg.png" alt="Contact" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[6px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">

                        {/* LEFT CONTENT */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Have a project in mind? Need to build a team? Want clarity on your tech roadmap?
                                We respond quickly and operate with zero friction.
                            </p>

                            <div className="space-y-6">

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-cloud flex items-center justify-center text-brand-blue">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Email Us</p>
                                        <p className="font-semibold text-lg">info@trumantechnologies.in</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-cloud flex items-center justify-center text-brand-blue">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Visit Us</p>
                                        <p className="font-semibold text-lg">www.truman-technologies.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-cloud flex items-center justify-center text-brand-blue">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Connect With Us</p>
                                        <p className="font-semibold text-lg">trumantechnologies</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT — FORM */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold mb-6"> Tell Us How We Can Help.</h3>

                            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue outline-none"
                                        placeholder="name@company.com"
                                    />
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

                                <button
                                    type="submit"
                                    className="w-full bg-brand-blue text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition"
                                >
                                    Send Inquiry
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    We typically respond within 24 hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORK WITH US SECTION */}
            <section className="py-24 bg-brand-cloud">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Work With Us — Anywhere, Anytime</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We support clients across multiple regions and time zones with a modern,
                        collaboration-first approach.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
