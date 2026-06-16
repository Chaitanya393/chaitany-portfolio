import React, { useState, useEffect, useRef } from 'react';
import HUDHeader from './components/HUDHeader';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Terminal from './components/Terminal';
import { Target, BarChart2, Radio } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [gridScanning, setGridScanning] = useState(true);

  // References to section elements
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    terminal: useRef(null),
  };

  // Scroll handler to track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const [section, ref] of Object.entries(sectionRefs)) {
        const element = ref.current;
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId].current;
    if (element) {
      // Run scanning lines sweep for visual feedback
      setGridScanning(true);
      setTimeout(() => setGridScanning(false), 1000);

      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', num: '01', label: 'HERO_NODE' },
    { id: 'about', num: '02', label: 'IDENTITY_PRFL' },
    { id: 'skills', num: '03', label: 'TECH_DEVICES' },
    { id: 'projects', num: '04', label: 'CODE_ARCHIVES' },
    { id: 'experience', num: '05', label: 'CAREER_TIMELINE' },
    { id: 'terminal', num: '06', label: 'COMM_TERMINAL' },
  ];

  return (
    <div className="relative min-h-screen bg-bg text-primary flex flex-col antialiased select-none selection:bg-cyanAccent/30">
      {/* Top Telemetry Header */}
      <HUDHeader />

      {/* Main Grid Wrapper */}
      <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
        
        {/* Left Floating Nav Bar (lg and above only) */}
        <nav className="hidden lg:flex lg:col-span-2 flex-col justify-between border-r border-hairline p-6 sticky top-12 h-[calc(100vh-48px)] font-mono text-xs bg-bg">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[10px] text-secondary border-b border-hairline pb-2.5 select-none uppercase">
              <Target size={12} className="text-electric animate-spin" />
              <span>SYS_COORDINATES</span>
            </div>
            
            <div className="flex flex-col gap-2.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center text-left py-2 px-3 border transition-all duration-200 select-none ${
                      isActive
                        ? 'bg-[#141414] border-cyanAccent text-cyanAccent shadow-[0_0_10px_rgba(6,182,212,0.15)] font-bold'
                        : 'border-transparent text-secondary hover:text-primary hover:bg-[#111]'
                    }`}
                  >
                    <span className="text-[9px] text-hairline mr-2.5">{item.num}</span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1 h-3 bg-cyanAccent animate-pulse-fast"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Lower diagnostic logs */}
          <div className="text-[9px] text-secondary space-y-2.5 border-t border-hairline pt-4">
            <div className="flex items-center gap-1.5 text-amberAccent">
              <Radio size={10} className="animate-pulse" />
              <span>LOG: SYS_GRID_OK</span>
            </div>
            <div>
              <span>LAT_INDEX: </span>
              <span className="text-primary font-bold">22.7196</span>
            </div>
            <div>
              <span>LONG_INDEX: </span>
              <span className="text-primary font-bold">75.8577</span>
            </div>
          </div>
        </nav>

        {/* Center Main Scrollable Panel */}
        <main className="lg:col-span-10 flex flex-col relative w-full h-full">
          {/* Scanning radar sweep screen sweep */}
          {gridScanning && (
            <div className="absolute inset-x-0 h-full radar-sweep pointer-events-none z-40"></div>
          )}

          {/* Individual Navigation Sections */}
          <div ref={sectionRefs.hero} id="hero">
            <Hero onNavigate={scrollToSection} />
          </div>
          
          <div ref={sectionRefs.about} id="about">
            <About />
          </div>
          
          <div ref={sectionRefs.skills} id="skills">
            <TechStack />
          </div>
          
          <div ref={sectionRefs.projects} id="projects">
            <Projects />
          </div>
          
          <div ref={sectionRefs.experience} id="experience">
            <Experience />
          </div>
          
          <div ref={sectionRefs.terminal} id="terminal">
            <Terminal />
          </div>
        </main>
      </div>

      {/* Mobile Sticky Nav Bar (Below lg viewports) */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-surface1 border-t border-hairline px-4 py-2 z-50 flex items-center justify-around font-mono text-[9px] text-secondary select-none">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center py-1 transition-all ${
                isActive ? 'text-cyanAccent font-bold' : 'text-secondary'
              }`}
            >
              <span>{item.num}</span>
              <span className="text-[7px] tracking-tight">{item.label.split('_')[0]}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
