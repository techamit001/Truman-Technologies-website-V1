// ✅ FINAL NAVBAR CODE
// 🔴 COMMENTS added exactly where changes are made

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const location = useLocation();

    // ==============================
    // 🔹 SAME LOGO FOR ALL PAGES
    // ==============================
    const logoSrc = "/images/logo/trueman.png";

    // ==============================
    // 🔹 SCROLL DETECTION
    // ==============================
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ==============================
    // 🔹 NEW: PAGE & STATE CHECK
    // 👉 Home page + not scrolled = WHITE text navbar
    // ==============================
    const isHome = location.pathname === "/";
    const isTransparentHome = isHome && !isScrolled;

    // ==============================
    // 🔹 NAV LINKS
    // ==============================
    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            dropdown: [
                { name: 'Talent Solutions', path: '/services/talent-solutions' },
                { name: 'IT Consulting', path: '/services/it-consulting' },
                { name: 'DevOps & Automation', path: '/services/devops-automation' },
                { name: 'AI-Driven Intelligence', path: '/services/ai-intelligence' },
                { name: 'Industry Solutions', path: '/services/industry-solutions' },
            ]
        },
        { name: 'How We Work', path: '/how-we-work' },
        { name: 'Why Truman', path: '/why-truman' },
        { name: 'TruDefender', path: '/trudefender' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/85 backdrop-blur-md shadow-sm py-2"
                    : isHome
                        ? "bg-transparent py-6"      // ✅ HOME (before scroll)
                        : "bg-white/95 backdrop-blur-md py-0.5"
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img src={logoSrc} alt="Truman Technologies" className="h-20 w-auto" />
                </Link>

                {/* ==============================
                    DESKTOP NAV
                ============================== */}
                <div className="hidden md:flex items-center space-x-8">

                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.name} className="relative group">

                                {/* 🔹 DROPDOWN BUTTON */}
                                <button
                                    className={`font-medium transition ${
                                        isTransparentHome
                                            ? "text-white hover:text-brand-blue" // ✅ HOME white text
                                            : "text-brand-navy hover:text-brand-blue"
                                    }`}
                                >
                                    {link.name}
                                </button>

                                {/* DROPDOWN MENU */}
                                <div className="
                                    absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-xl border border-gray-200
                                    opacity-0 invisible translate-y-1
                                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                    transition-all duration-200 z-50
                                ">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className="block px-4 py-2 text-brand-navy hover:bg-gray-100 hover:text-brand-blue transition"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition ${
                                    isTransparentHome
                                        ? "text-white hover:text-brand-blue" // ✅ HOME white text
                                        : "text-brand-navy hover:text-brand-blue"
                                }`}
                            >
                                {link.name}
                            </Link>
                        )
                    )}

                    {/* ==============================
                        CONTACT BUTTON
                        Home (no scroll) → white outline
                        Scroll/other pages → primary
                    ============================== */}
                    <Link to="/contact">
                        <Button
                            variant={isTransparentHome ? "outline-white" : "primary"} // ✅ CHANGE
                            className="!py-2.5 !px-6"
                        >
                            Get In Touch
                        </Button>
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className={`md:hidden ${isTransparentHome ? "text-white" : "text-brand-navy"}`} // ✅ ICON COLOR
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* ==============================
                MOBILE NAV
            ============================== */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4">

                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.name}>
                                <button
                                    className="w-full flex justify-between items-center text-brand-navy text-lg font-medium"
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === link.name ? null : link.name)
                                    }
                                >
                                    {link.name}
                                    <span>{openDropdown === link.name ? "▲" : "▼"}</span>
                                </button>

                                {openDropdown === link.name && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-brand-navy text-base"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-brand-navy text-lg font-medium"
                            >
                                {link.name}
                            </Link>
                        )
                    )}

                    <Link to="/contact">
                        <Button variant="primary" className="w-full">
                            Get In Touch
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
