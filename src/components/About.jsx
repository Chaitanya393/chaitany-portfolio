import React, { useState, useEffect } from 'react';
import { FileText, Cpu, BookOpen, Layers } from 'lucide-react';

export default function About() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [skills, setSkills] = useState(0);

  // Simple count-up telemetry effect on load
  useEffect(() => {
    const yearsEnd = 3.5;
    const projectsEnd = 3;
    const skillsEnd = 20;

    let startTime;
    const duration = 1500; // 1.5s animation

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setYears((progress * yearsEnd).toFixed(1));
      setProjects(Math.floor(progress * projectsEnd));
      setSkills(Math.floor(progress * skillsEnd));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setYears(yearsEnd);
        setProjects(projectsEnd);
        setSkills(skillsEnd);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // Matrix-style character grid component
  const MatrixAvatar = () => {
    const rows = 10;
    const cols = 12;
    const [grid, setGrid] = useState([]);

    useEffect(() => {
      const chars = '0123456789ABCDEF@#$%&/\\*+-';
      const generateGrid = () => {
        const arr = [];
        for (let i = 0; i < rows; i++) {
          const rowArr = [];
          for (let j = 0; j < cols; j++) {
            // Pick random character
            const isBright = Math.random() > 0.85;
            const isDim = Math.random() > 0.4;
            rowArr.push({
              char: chars[Math.floor(Math.random() * chars.length)],
              color: isBright ? 'text-cyanAccent' : isDim ? 'text-[#1e6070]' : 'text-cyanAccent/10'
            });
          }
          arr.push(rowArr);
        }
        return arr;
      };

      setGrid(generateGrid());

      const interval = setInterval(() => {
        setGrid(prev => {
          return prev.map(row => 
            row.map(cell => {
              if (Math.random() > 0.88) {
                const chars = '0123456789ABCDEF@#$%&/\\*+-';
                const isBright = Math.random() > 0.85;
                const isDim = Math.random() > 0.4;
                return {
                  char: chars[Math.floor(Math.random() * chars.length)],
                  color: isBright ? 'text-cyanAccent' : isDim ? 'text-[#1e6070]' : 'text-cyanAccent/10'
                };
              }
              return cell;
            })
          );
        });
      }, 150);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="grid grid-cols-12 gap-1 font-mono text-[10px] leading-none p-3 bg-bg select-none">
        {grid.map((row, rIdx) => 
          row.map((cell, cIdx) => (
            <span key={`${rIdx}-${cIdx}`} className={`${cell.color} transition-colors duration-200 text-center font-bold`}>
              {cell.char}
            </span>
          ))
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full border-b border-hairline py-12 md:py-16 px-6 md:px-12 bg-[#0E0E0E]">
      <div className="absolute top-0 right-10 w-[1px] h-full bg-hairline/30 pointer-events-none"></div>
      
      {/* Title */}
      <div className="mb-10 text-left">
        <div className="font-mono text-[10px] text-cyanAccent tracking-widest mb-1.5 uppercase">SYSTEM_OVERVIEW // DIAGNOSTIC_REPORT</div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight">
          [02] IDENTITY_PROFILE
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Photo Area & Specs */}
        <div className="lg:col-span-4 flex flex-col items-center mx-auto lg:mx-0 w-full">
          {/* Avatar Container with corner brackets */}
          <div className="relative p-2.5 bg-surface1 border border-hairline rounded w-full max-w-[260px] aspect-square flex justify-center items-center">
            {/* Corners */}
            <div className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-2 border-l-2 border-cyanAccent"></div>
            <div className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-2 border-r-2 border-cyanAccent"></div>
            <div className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-2 border-l-2 border-cyanAccent"></div>
            <div className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-2 border-r-2 border-cyanAccent"></div>

            {/* Scanning line sweep */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyanAccent/10 to-transparent w-full h-[5px] animate-[scan_3s_linear_infinite] pointer-events-none z-10"></div>
            
            {/* Inner frame */}
            <div className="w-full h-full border border-hairline bg-bg overflow-hidden flex flex-col justify-between">
              {/* Matrix Character Graphic */}
              <MatrixAvatar />
              
              {/* Spec Overlay Banner */}
              <div className="border-t border-hairline bg-surface1 p-2 font-mono text-[9px] text-left flex justify-between items-center">
                <span>SUBJECT: Tiwari_C</span>
                <span className="text-cyanAccent font-bold">NODE_ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics telemetry */}
          <div className="w-full max-w-[260px] mt-6 grid grid-cols-3 gap-2 font-mono text-center">
            <div className="bg-[#141414] border border-hairline p-2 text-secondary">
              <div className="text-[14px] font-bold text-primary font-display">{years}</div>
              <div className="text-[8px] uppercase tracking-wider">Years Exp</div>
            </div>
            <div className="bg-[#141414] border border-hairline p-2 text-secondary">
              <div className="text-[14px] font-bold text-cyanAccent font-display">{projects}</div>
              <div className="text-[8px] uppercase tracking-wider">Projects</div>
            </div>
            <div className="bg-[#141414] border border-hairline p-2 text-secondary">
              <div className="text-[14px] font-bold text-amberAccent font-display">{skills}+</div>
              <div className="text-[8px] uppercase tracking-wider">Skills</div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio as System Readme */}
        <div className="lg:col-span-8 text-left bg-surface1 border border-hairline p-4 md:p-6 rounded relative overflow-hidden">
          {/* Header tabs look */}
          <div className="absolute top-0 left-0 right-0 h-7 bg-[#1c1c1c] border-b border-hairline px-3.5 flex items-center justify-between font-mono text-[9px] text-secondary select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              <span className="ml-2">README.md - system_log</span>
            </div>
            <span>UTF-8 // CRLF</span>
          </div>

          {/* Readme content */}
          <div className="mt-6 font-sans text-xs md:text-sm text-secondary leading-relaxed space-y-4 max-h-[320px] overflow-y-auto pr-2">
            <div className="font-mono text-xs text-primary bg-[#1f1f1f] p-2 border-l-2 border-electric mb-4">
              ## EXECUTIVE SUMMARY
            </div>
            <p>
              I am a <span className="text-primary font-semibold">Full Stack Software Engineer</span> with <span className="text-cyanAccent font-semibold font-mono">3.5+ years</span> of professional experience architecting distributed backend nodes and performance-tuned SaaS dashboards. 
            </p>
            <p>
              My expertise centers around the **MERN + Next.js** stack, specializing in building event-driven API layers, microservice architectures, and optimizing relational/non-relational database query pipelines. I design for predictable throughput, low query latency, and high client-side responsiveness.
            </p>
            <p>
              I own end-to-end feature lifecycles and excel in agile, collaborative sprints. By combining technical systems thinking with AI-integrated workspaces (Cursor, GPT integrations), I accelerate product delivery while maintaining high coverage tests and clean, decoupled codebase patterns.
            </p>
            <p>
              I have also worked with <span className="text-primary font-semibold">international clients</span>, handling requirements, communication, feedback cycles, and delivery with a professional, ownership-driven approach across time zones and changing business priorities.
            </p>

            <div className="font-mono text-xs text-primary bg-[#1f1f1f] p-2 border-l-2 border-amberAccent mt-6 mb-4">
              ## ARCHITECTURAL PARADIGMS & PRINCIPLES
            </div>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>
                <strong className="text-primary">Microservices & Integration:</strong> Designing independent service layers, webhook aggregation gateways, and low-latency bidirectional socket bridges.
              </li>
              <li>
                <strong className="text-primary">Database Telemetry:</strong> Engineering custom aggregate pipelines, indexing keys for high-frequency writes, and isolating read-heavy replicas to reduce bottleneck latency.
              </li>
              <li>
                <strong className="text-primary">Secured Access Control:</strong> Formulating role-based token validation routines (RBAC), cookie-secured JWT token rotation, and strict API rate limits.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
