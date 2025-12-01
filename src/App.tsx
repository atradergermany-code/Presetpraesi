import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Journey from './components/Journey';
import TradingPhilosophy from './components/TradingPhilosophy';
import StrengthsWeaknesses from './components/StrengthsWeaknesses';
import Transformations from './components/Transformations';
import WhySection from './components/WhySection';
import Vision from './components/Vision';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'journey',
        'philosophy',
        'strengths',
        'transformations',
        'why',
        'vision',
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#222831] transition-colors">
        <Navigation activeSection={activeSection} />
        <Hero />
        <AboutMe />
        <Journey />
        <TradingPhilosophy />
        <StrengthsWeaknesses />
        <Transformations />
        <WhySection />
        <Vision />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
