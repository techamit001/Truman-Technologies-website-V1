import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-16 border-t border-gray-800">

            {/* TOP GRID SECTION */}
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-16">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-normal font-poppins mb-8 text-white">
                        TRUMAN TECHNOLOGIES
                    </h3>

                    <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-justify max-w-xl">
                        Built Different. Built for the Future. We help organizations scale faster,
                        innovate deeper, and stay ahead in a world where digital and AI evolution never slows down.
                    </p>

                    <div className="flex space-x-6">
                        <a href="https://linkedin.com/company/trumantechnologies" target="_blank"
                           className="text-white hover:text-brand-aqua transition-colors">
                            <Linkedin size={24} />
                        </a>

                        <a href="mailto:info@trumantechnologies.in"
                           className="text-white hover:text-brand-aqua transition-colors">
                            <Mail size={24} />
                        </a>

                        <a href="https://trumantechnologies.in/" target="_blank"
                           className="text-white hover:text-brand-aqua transition-colors">
                            <Globe size={24} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-8 text-white">Company</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><Link to="/about" className="hover:text-brand-aqua transition">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-brand-aqua transition">Services</Link></li>
                        <li><Link to="/how-we-work" className="hover:text-brand-aqua transition">How We Work</Link></li>
                        <li><Link to="/contact" className="hover:text-brand-aqua transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-8 text-white">Contact</h4>
                    <ul className="space-y-4 text-gray-400">

                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="shrink-0" />
                            <span className="whitespace-nowrap"> info@trumantechnologies.in</span>
                        </li>

                        <li className="flex items-center space-x-3">
                            <Globe size={18} className="shrink-0" />
                            <span className="whitespace-nowrap">www.trumantechnologies.in</span>
                        </li>

                    </ul>
                </div>

            {/* END GRID */}
            </div>

            {/* COPYRIGHT BAR */}
            <div className="container mx-auto px-6 md:px-12 mt-8 py-4 border-t border-gray-800 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Truman Technologies. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
