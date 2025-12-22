import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from './pages/Home';
import Services from './pages/Services';
import HowWeWork from './pages/HowWeWork';
import WhyTruman from './pages/WhyTruman';
import Contact from './pages/Contact';
import About from './pages/About';
import TruDefender from './pages/TruDefender';

import TalentSolutions from "./pages/TalentSolutions";
import ITConsulting from "./pages/ITConsulting";
import DevOpsAutomation from "./pages/DevOpsAutomation";
import IndustrySolutions from "./pages/IndustrySolutions";
import AIIntelligence from "./pages/AIIntelligence";

import Loader from './components/ui/Loader';
import TrumanAssistant from "./components/ui/TrumanAssistant";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
       <ScrollToTop />
      <div className="font-inter text-brand-charcoal bg-white min-h-screen flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE ROUTES */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/why-truman" element={<WhyTruman />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/trudefender" element={<TruDefender />} />

            {/* Services Subpages */}
            <Route path="/services/talent-solutions" element={<TalentSolutions />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/devops-automation" element={<DevOpsAutomation />} />
            <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
            <Route path="/services/ai-intelligence" element={<AIIntelligence />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

        {/* ⭐ TRUMAN CHATBOT (BOTTOM RIGHT) */}
        <TrumanAssistant />

      </div>
    </Router>
  );
}

export default App;
