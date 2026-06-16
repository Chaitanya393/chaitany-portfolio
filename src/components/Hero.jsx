import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Cpu, Activity, Award } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 150, y: 150 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const roles = [
    'ARCHITECTING DISTRIBUTED MICROSERVICES & API GATEWAYS...',
    'TUNING HIGH-PERFORMANCE REACT & NEXT.JS WEB SHELLS...',
    'INTEGRATING SEMANTIC VECTOR SEARCH & LLM AGENT CHANNELS...',
    'OPTIMIZING TRANSACTIONAL DATABASE SCHEMAS & QUERIES...',
  ];

  const TYPING_SPEED = 60;
  const DELETING_SPEED = 25;
  const PAUSE_DURATION = 2000;

  // Typewriter logic
  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullText.slice(0, typedText.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && typedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  // Track mouse coordinates over SVG canvas
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full border-b border-hairline py-12 md:py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-dot-grid min-h-[calc(100vh-80px)] overflow-hidden"
    >
      {/* Background calibration marks */}
      <div className="absolute top-2 left-2 text-[8px] text-hairline pointer-events-none select-none">GRID: 20x20 [CALIBRATED]</div>
      <div className="absolute bottom-2 right-2 text-[8px] text-hairline pointer-events-none select-none">REF: CHAITANYA_T // DEPLOYED_V1.0.0</div>

      {/* Grid corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-hairline pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-hairline pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-hairline pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-hairline pointer-events-none"></div>

      {/* Hero Left Content: Text Terminal Vibe */}
      <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] border border-hairline rounded text-[10px] md:text-xs text-cyanAccent tracking-widest uppercase mb-4 w-fit">
          <Terminal size={12} className="animate-pulse" />
          <span>PORTFOLIO_INIT // TERM_CONNECTED</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-none text-primary tracking-tight select-none mb-3">
          CHAITANYA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyanAccent to-amberAccent">TIWARI</span>
        </h1>

        <h2 className="font-mono text-sm sm:text-lg text-secondary tracking-widest mb-6">
          FULL STACK DEVELOPER
        </h2>

        {/* Dynamic Typewriter */}
        <div className="min-h-[44px] flex items-center font-mono text-xs sm:text-sm bg-surface1 border border-hairline px-4 py-2.5 rounded text-cyanAccent select-none mb-8 relative">
          <span className="mr-2 text-secondary font-bold font-sans">{`>`}</span>
          <span>{typedText}</span>
          <span className="w-1.5 h-4 bg-cyanAccent ml-1 animate-typing border-l"></span>
        </div>

        {/* Mini Technical Dashboard Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 font-mono text-[10px] md:text-xs text-secondary">
          <div className="bg-[#141414] p-3 border border-hairline relative">
            <span className="absolute top-1 right-1 text-[8px] text-hairline">EXP</span>
            <div className="text-[9px] text-secondary">EXPERIENCE</div>
            <div className="text-sm font-bold text-primary font-display mt-1">2.8+ YRS</div>
          </div>
          <div className="bg-[#141414] p-3 border border-hairline relative">
            <span className="absolute top-1 right-1 text-[8px] text-hairline">LOC</span>
            <div className="text-[9px] text-secondary">LOCATION</div>
            <div className="text-sm font-bold text-cyanAccent font-display mt-1">INDORE, IN</div>
          </div>
          <div className="bg-[#141414] p-3 border border-hairline relative">
            <span className="absolute top-1 right-1 text-[8px] text-hairline">GATE</span>
            <div className="text-[9px] text-secondary">API GATEWAY</div>
            <div className="text-sm font-bold text-green-500 font-display mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              RESOLVED
            </div>
          </div>
          <div className="bg-[#141414] p-3 border border-hairline relative">
            <span className="absolute top-1 right-1 text-[8px] text-hairline">ARCH</span>
            <div className="text-[9px] text-secondary">SYSTEM SCHEMA</div>
            <div className="text-sm font-bold text-amberAccent font-display mt-1">MICROSERVICES</div>
          </div>
        </div>

        {/* CTA Controls */}
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => onNavigate('contact')}
            className="group px-6 py-3 bg-electric border border-electric text-primary font-mono text-xs md:text-sm tracking-widest hover:bg-transparent hover:text-electric transition-all duration-300 flex items-center gap-2"
          >
            <span>[01]_ESTABLISH_LINK</span>
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
          <button 
            onClick={() => onNavigate('projects')}
            className="group px-6 py-3 bg-surface1 border border-hairline text-secondary hover:text-primary hover:border-cyanAccent hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] font-mono text-xs md:text-sm tracking-widest transition-all duration-300 flex items-center gap-2"
          >
            <span>[02]_DECODE_PROJECT_LOGS</span>
            <span className="text-[9px] text-cyanAccent group-hover:animate-pulse">[*]</span>
          </button>
        </div>
      </div>

      {/* Hero Right Content: 3D-Like SVG Blueprint Mechanism */}
      <div className="lg:col-span-5 flex justify-center items-center h-full relative min-h-[300px] md:min-h-[400px]">
        {/* Core SVG drawing canvas */}
        <div className="w-full max-w-[400px] aspect-square relative border border-hairline rounded bg-[#0e0e0e] flex justify-center items-center p-4">
          {/* Interactive grid alignment overlay */}
          {isHovered && (
            <>
              {/* Horizontal line at mouse Y */}
              <div 
                className="absolute left-0 right-0 border-t border-cyanAccent/20 pointer-events-none"
                style={{ top: `${mousePos.y}px` }}
              ></div>
              {/* Vertical line at mouse X */}
              <div 
                className="absolute top-0 bottom-0 border-l border-cyanAccent/20 pointer-events-none"
                style={{ left: `${mousePos.x}px` }}
              ></div>
              {/* Label overlay with mouse positioning info */}
              <div 
                className="absolute px-1.5 py-0.5 bg-[#141414] border border-cyanAccent text-[9px] text-cyanAccent font-mono pointer-events-none"
                style={{ left: `${mousePos.x + 10}px`, top: `${mousePos.y + 10}px` }}
              >
                X: {mousePos.x} | Y: {mousePos.y}
              </div>
            </>
          )}

          {/* Precision engineering graphics */}
          <svg viewBox="0 0 300 300" className="w-full h-full text-[#333] select-none pointer-events-none">
            {/* Blueprint Grid Lines */}
            <circle cx="150" cy="150" r="140" fill="none" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="150" cy="150" r="100" fill="none" stroke="#222" strokeWidth="1" />
            <circle cx="150" cy="150" r="70" fill="none" stroke="#222" strokeWidth="1" strokeDasharray="8 4" />
            
            {/* Axial Cross-hair lines */}
            <line x1="10" y1="150" x2="290" y2="150" stroke="#1f1f1f" strokeWidth="1.5" />
            <line x1="150" y1="10" x2="150" y2="290" stroke="#1f1f1f" strokeWidth="1.5" />
            
            {/* Calibration Rings (rotating) */}
            <g className="origin-center animate-[spin_40s_linear_infinite]">
              <circle cx="150" cy="150" r="120" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="10 30 50 10" />
              <text x="150" y="25" textAnchor="middle" fill="#2563EB" fillOpacity="0.6" className="font-mono text-[6px]">CALIBRATION_NODE_A</text>
            </g>

            <g className="origin-center animate-[spin_20s_linear_infinite_reverse]">
              <circle cx="150" cy="150" r="85" fill="none" stroke="#06B6D4" strokeWidth="1" strokeDasharray="40 10 20 5" />
              <line x1="150" y1="65" x2="150" y2="235" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="65" y1="150" x2="235" y2="150" stroke="#06B6D4" strokeWidth="0.5" strokeOpacity="0.5" />
            </g>

            {/* Rotating Gear Mechanism in Center */}
            <g className="origin-center animate-[spin_12s_linear_infinite] text-secondary">
              {/* Outer Gear Ring */}
              <circle cx="150" cy="150" r="50" fill="none" stroke="#555" strokeWidth="2" />
              {/* Gear Teeth */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const tx = 150 + Math.cos(angle) * 55;
                const ty = 150 + Math.sin(angle) * 55;
                return (
                  <path
                    key={i}
                    d={`M ${tx-4} ${ty-4} L ${tx+4} ${ty-4} L ${tx+2} ${ty+6} L ${tx-2} ${ty+6} Z`}
                    fill="#333"
                    stroke="#555"
                    strokeWidth="1"
                    transform={`rotate(${i * 30 + 90}, ${tx}, ${ty})`}
                  />
                );
              })}
              {/* Gear Web Spoke */}
              <circle cx="150" cy="150" r="38" fill="none" stroke="#333" strokeWidth="4" />
              <line x1="112" y1="150" x2="188" y2="150" stroke="#555" strokeWidth="3" />
              <line x1="150" y1="112" x2="150" y2="188" stroke="#555" strokeWidth="3" />
            </g>

            {/* Inner Ring with telemetry details */}
            <circle cx="150" cy="150" r="25" fill="#141414" stroke="#06B6D4" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="5" fill="#06B6D4" className="animate-ping" />
            <circle cx="150" cy="150" r="4" fill="#06B6D4" />

            {/* Calibration markings around the edge */}
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 150 + Math.cos(angle) * 135;
              const y1 = 150 + Math.sin(angle) * 135;
              const x2 = 150 + Math.cos(angle) * (i % 2 === 0 ? 128 : 132);
              const y2 = 150 + Math.sin(angle) * (i % 2 === 0 ? 128 : 132);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2a2a2a" strokeWidth="1" />;
            })}
            
            {/* Blueprint annotations */}
            <text x="15" y="40" fill="#888" className="font-mono text-[7px]">SYSTEM: ACTV_DEVC</text>
            <text x="15" y="52" fill="#888" className="font-mono text-[7px]">FREQ: 60Hz // CLK_OK</text>
            <text x="15" y="64" fill="#06B6D4" className="font-mono text-[7px]">SYS_MOD: RDR_RUN</text>

            <text x="215" y="260" fill="#888" className="font-mono text-[7px] text-right">R_RAD = 140px</text>
            <text x="215" y="272" fill="#2563EB" className="font-mono text-[7px] text-right">Z_GRID_ENG: ON</text>
          </svg>

          {/* Pulsing Scanline radar bar */}
          <div className="absolute inset-0 radar-sweep rounded pointer-events-none"></div>

          {/* Corner Tech labels */}
          <div className="absolute top-1 right-1 px-1.5 py-0.5 border border-hairline font-mono text-[8px] text-secondary bg-bg">
            MODE_01//V.RADAR
          </div>
        </div>
      </div>
    </section>
  );
}
