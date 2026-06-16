import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Terminal, Award, HelpCircle } from 'lucide-react';

export default function TechStack() {
  const [activeTech, setActiveTech] = useState(null);
  const [modelMode, setModelMode] = useState('atomic'); // 'atomic' or 'vortex'
  const [angles, setAngles] = useState([0, 0, 0]); // Angles for Orbit 1, 2, 3
  const requestRef = useRef();
  const previousTimeRef = useRef();

  // Tech list grouped by orbit level
  const skillDetails = {
    'Next.js': { level: 'Expert', val: 95, details: 'Server-side rendering, routing optimization, SEO configuration, API routes.' },
    'React.js': { level: 'Expert', val: 95, details: 'Hooks system, custom context layers, render speed optimizations, modular composition.' },
    'Node.js': { level: 'Expert', val: 90, details: 'Event loop tuning, memory diagnostics, clustering, streams, binary buffers.' },
    'Express.js': { level: 'Expert', val: 90, details: 'RESTful API contracts, middleware chaining, centralized interceptors.' },
    'TypeScript': { level: 'Advanced', val: 88, details: 'Strict typing structures, generic utilities, mapped interfaces.' },
    'MongoDB': { level: 'Advanced', val: 85, details: 'Index mapping, aggregation matrices, multi-tenant databases.' },
    'PostgreSQL': { level: 'Advanced', val: 85, details: 'Relational design, performance indexing, transaction guarantees.' },
    'Tailwind CSS': { level: 'Expert', val: 95, details: 'Utility config matrices, responsive screens, custom fluid design systems.' },
    'SocketIO': { level: 'Advanced', val: 85, details: 'Duplex event telemetry, connection channels, real-time message streams.' },
    'WebRTC': { level: 'Intermediate', val: 75, details: 'Peer connection negotiations, ICE servers, STUN/TURN, media pipelines.' },
    'GPT APIs': { level: 'Advanced', val: 85, details: 'Semantic token engineering, system prompting, webhook pipelines, agent scripting.' },
    'Git / Github': { level: 'Expert', val: 90, details: 'CI/CD pipeline structures, hook logs, release branching patterns.' },
  };

  const orbits = [
    {
      id: 1,
      rx: 50,
      ry: 25,
      tilt: 15,
      speed: 0.02,
      items: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
    },
    {
      id: 2,
      rx: 90,
      ry: 45,
      tilt: -35,
      speed: 0.01,
      items: ['TypeScript', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      id: 3,
      rx: 130,
      ry: 65,
      tilt: 45,
      speed: 0.006,
      items: ['SocketIO', 'WebRTC', 'GPT APIs', 'Git / Github'],
    },
  ];

  // Animation loop
  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        setAngles(prev => {
          // If hovering over any electron, we freeze the orbit or slow it down
          const multiplier = activeTech ? 0.05 : 1;
          return prev.map((angle, idx) => {
            const orbit = orbits[idx];
            return angle + orbit.speed * multiplier;
          });
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [activeTech]);

  // Compute 2D position with tilt angle
  const getCoordinates = (rx, ry, angle, tiltDegrees, index, totalItems) => {
    // Distribute item angle offset along the ellipse
    const itemOffset = (index * 2 * Math.PI) / totalItems;
    const currentAngle = angle + itemOffset;
    
    // Position on flat ellipse
    const xBase = rx * Math.cos(currentAngle);
    const yBase = ry * Math.sin(currentAngle);
    
    // Rotate coordinates by tilt angle
    const rad = (tiltDegrees * Math.PI) / 180;
    const x = xBase * Math.cos(rad) - yBase * Math.sin(rad);
    const y = xBase * Math.sin(rad) + yBase * Math.cos(rad);
    
    // Shift relative to SVG center (150, 150)
    return { x: 150 + x, y: 150 + y };
  };

  // Compute 2D position for moving stellar vortex (Milky Way style forward-moving helix)
  const getVortexCoordinates = (t, rx, ry, tiltDegrees, techIdx, totalItems, orbitIdx, trailIndex = 0) => {
    // Current or past time coordinate based on trailIndex
    const sampleT = t - (trailIndex * 0.08);
    
    // Sun position (bobbing up and down as it travels horizontally - centered at x = 180)
    const sunX = 180 - (trailIndex * 4.6);
    const sunY = 150 + 15 * Math.sin(sampleT * 0.25); // Slower vertical bobbing speed
    
    // Planet relative orbit position
    const itemOffset = (techIdx * 2 * Math.PI) / totalItems;
    // Slower orbital speed to make nodes easy to hover and select
    const orbitSpeed = (orbitIdx === 0 ? 1.6 : orbitIdx === 1 ? 1.1 : 0.8) * 0.32;
    const currentAngle = sampleT * orbitSpeed + itemOffset;
    
    // Orbit size (medium-to-large scale sizes for spacing out nodes)
    const rxScaled = rx * 0.65;
    const ryScaled = ry * 0.95;
    
    const xBase = rxScaled * Math.cos(currentAngle);
    const yBase = ryScaled * Math.sin(currentAngle);
    
    const rad = (tiltDegrees * Math.PI) / 180;
    const x = xBase * Math.cos(rad) - yBase * Math.sin(rad);
    const y = xBase * Math.sin(rad) + yBase * Math.cos(rad);
    
    return { x: sunX + x, y: sunY + y, sunX, sunY };
  };

  // Get array of points for dynamic trailing paths
  const getTrailPoints = (t, rx, ry, tiltDegrees, techIdx, totalItems, orbitIdx) => {
    const points = [];
    const steps = 30; // Longer trail for detailed corkscrew helix
    for (let i = 0; i < steps; i++) {
      const coords = getVortexCoordinates(t, rx, ry, tiltDegrees, techIdx, totalItems, orbitIdx, i);
      points.push(coords);
    }
    return points;
  };

  // Draw background orbit trace path showing Sun's wave path
  const getSunPath = (t) => {
    const points = [];
    for (let i = -10; i < 40; i++) {
      const sampleT = t - (i * 0.08);
      const sunX = 180 - (i * 4.6);
      const sunY = 150 + 15 * Math.sin(sampleT * 0.25);
      points.push(`${i === -10 ? 'M' : 'L'} ${sunX} ${sunY}`);
    }
    return points.join(' ');
  };

  // Get dynamic trail for the Sun
  const getSunTrail = (t) => {
    const points = [];
    for (let i = 0; i < 30; i++) {
      const sampleT = t - (i * 0.08);
      const sunX = 180 - (i * 4.6);
      const sunY = 150 + 15 * Math.sin(sampleT * 0.25);
      points.push(`${i === 0 ? 'M' : 'L'} ${sunX} ${sunY}`);
    }
    return points.join(' ');
  };

  const getActiveTechStats = () => {
    const info = skillDetails[activeTech];
    if (!info) return null;

    const filledBlocks = Math.round(info.val / 10);
    const emptyBlocks = 10 - filledBlocks;
    const bar = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);

    return {
      name: activeTech,
      level: info.level,
      percentage: info.val,
      bar,
      details: info.details
    };
  };

  const activeStats = getActiveTechStats();

  return (
    <section className="relative w-full border-b border-hairline py-12 md:py-16 px-6 md:px-12 bg-bg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Title */}
      <div className="lg:col-span-12 text-left mb-4">
        <div className="font-mono text-[10px] text-cyanAccent tracking-widest mb-1.5 uppercase">ORBITAL_RESONANCE // SYSTEM_CAPABILITIES</div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight">
          [03] TECHNICAL_DEVICES
        </h2>
      </div>

      {/* Orbit Canvas */}
      <div className="lg:col-span-7 flex justify-center items-center relative w-full aspect-square max-w-[420px] mx-auto bg-dot-grid border border-hairline p-4 rounded bg-[#0E0E0E]">
        <div className="absolute top-2 left-2 font-mono text-[8px] text-secondary uppercase">
          ORBIT_STATUS: {activeTech ? 'LOCK_FREEZE' : 'ACTIVE_SPIN'}
        </div>

        <div className="absolute top-2 right-2 flex gap-1 font-mono text-[8px] z-10 select-none">
          <button 
            onClick={() => setModelMode('atomic')}
            className={`px-1.5 py-0.5 border rounded-sm transition-colors cursor-pointer ${modelMode === 'atomic' ? 'bg-[#06B6D4] text-[#0D0D0D] border-[#06B6D4] font-bold' : 'text-secondary border-hairline hover:text-primary hover:bg-[#111]'}`}
          >
            [ATOMIC]
          </button>
          <button 
            onClick={() => setModelMode('vortex')}
            className={`px-1.5 py-0.5 border rounded-sm transition-colors cursor-pointer ${modelMode === 'vortex' ? 'bg-[#06B6D4] text-[#0D0D0D] border-[#06B6D4] font-bold' : 'text-secondary border-hairline hover:text-primary hover:bg-[#111]'}`}
          >
            [STELLAR_VORTEX]
          </button>
        </div>

        <svg viewBox="0 0 300 300" className="w-full h-full text-secondary">
          {modelMode === 'atomic' ? (
            <>
              {/* Static Center Core */}
              <circle cx="150" cy="150" r="14" fill="#141414" stroke="#06B6D4" strokeWidth="2" className="animate-pulse" />
              <circle cx="150" cy="150" r="6" fill="#06B6D4" />
              <text x="150" y="153" textAnchor="middle" fill="#0D0D0D" className="font-mono text-[8px] font-bold">MERN</text>

              {/* Render orbits path */}
              {orbits.map((orbit) => {
                const rad = (orbit.tilt * Math.PI) / 180;
                return (
                  <g key={orbit.id} transform={`rotate(${orbit.tilt}, 150, 150)`}>
                    <ellipse
                      cx="150"
                      cy="150"
                      rx={orbit.rx}
                      ry={orbit.ry}
                      fill="none"
                      stroke="#222"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}

              {/* Render Orbit Electrons */}
              {orbits.map((orbit, orbitIdx) => {
                const angle = angles[orbitIdx];
                return orbit.items.map((techName, techIdx) => {
                  const { x, y } = getCoordinates(
                    orbit.rx,
                    orbit.ry,
                    angle,
                    orbit.tilt,
                    techIdx,
                    orbit.items.length
                  );

                  const isActive = activeTech === techName;

                  return (
                    <g 
                      key={techName} 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveTech(techName)}
                      onMouseLeave={() => setActiveTech(null)}
                    >
                      {/* Orbit Connection Trace line if active */}
                      {isActive && (
                        <line x1="150" y1="150" x2={x} y2={y} stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="3 3" />
                      )}

                      {/* Electron Core */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isActive ? "10" : "8"}
                        fill={isActive ? "#06B6D4" : "#1A1A1A"}
                        stroke={isActive ? "#F59E0B" : "#2A2A2A"}
                        strokeWidth="1.5"
                        className="transition-colors duration-150"
                      />
                      {/* Outer glow ring if active */}
                      {isActive && (
                        <circle cx={x} cy={y} r="14" fill="none" stroke="#06B6D4" strokeWidth="0.5" className="animate-ping" />
                      )}
                      {/* Label */}
                      <text
                        x={x}
                        y={orbitIdx === 1 ? y + 14 : y - 10}
                        textAnchor="middle"
                        fill={isActive ? "#F5F5F5" : "#888"}
                        className="font-mono text-[7px] font-bold select-none bg-black px-1"
                      >
                        {techName.split(' ')[0]}
                      </text>
                    </g>
                  );
                });
              })}
            </>
          ) : (
            <>
              <defs>
                {/* Cyan trail gradient */}
                <linearGradient id="cyanTrailGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                </linearGradient>
                {/* Blue trail gradient */}
                <linearGradient id="blueTrailGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
                {/* Amber trail gradient */}
                <linearGradient id="amberTrailGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </linearGradient>
                {/* Sun yellow/orange trail gradient */}
                <linearGradient id="sunVortexGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Static background path trace for Sun's path */}
              <path d={getSunPath(angles[0])} fill="none" stroke="#222" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Dynamic Sun Trail */}
              <path d={getSunTrail(angles[0])} fill="none" stroke="url(#sunVortexGrad)" strokeWidth="2.5" />

              {/* Render Planet Trails & Nodes */}
              {orbits.map((orbit, orbitIdx) => {
                const trailGrad = orbitIdx === 0 ? "url(#cyanTrailGrad)" : orbitIdx === 1 ? "url(#blueTrailGrad)" : "url(#amberTrailGrad)";
                const activeColor = orbitIdx === 0 ? "#06B6D4" : orbitIdx === 1 ? "#2563EB" : "#F59E0B";

                return orbit.items.map((techName, techIdx) => {
                  const trailPoints = getTrailPoints(
                    angles[0],
                    orbit.rx,
                    orbit.ry,
                    orbit.tilt,
                    techIdx,
                    orbit.items.length,
                    orbitIdx
                  );
                  
                  const currentCoords = trailPoints[0];
                  const isActive = activeTech === techName;
                  
                  // Construct path for the planet tail
                  const pathD = trailPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

                  return (
                    <g 
                      key={techName} 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveTech(techName)}
                      onMouseLeave={() => setActiveTech(null)}
                    >
                      {/* Orbit Connection Trace line to Sun if active */}
                      {isActive && (
                        <line 
                          x1={currentCoords.sunX} 
                          y1={currentCoords.sunY} 
                          x2={currentCoords.x} 
                          y2={currentCoords.y} 
                          stroke={activeColor} 
                          strokeWidth="0.5" 
                          strokeDasharray="2 2" 
                        />
                      )}

                      {/* Planet Trail */}
                      <path 
                        d={pathD} 
                        fill="none" 
                        stroke={trailGrad} 
                        strokeWidth="1.2" 
                        strokeOpacity={isActive ? "1.0" : "0.35"} 
                      />

                      {/* Planet node core */}
                      <circle
                        cx={currentCoords.x}
                        cy={currentCoords.y}
                        r={isActive ? "8" : "6"}
                        fill={isActive ? activeColor : "#1A1A1A"}
                        stroke={isActive ? "#F5550B" : "#2A2A2A"}
                        strokeWidth="1.5"
                        className="transition-colors duration-150"
                      />

                      {isActive && (
                        <circle cx={currentCoords.x} cy={currentCoords.y} r="12" fill="none" stroke={activeColor} strokeWidth="0.5" className="animate-ping" />
                      )}

                      {/* Label */}
                      <text
                        x={currentCoords.x}
                        y={currentCoords.y - 10}
                        textAnchor="middle"
                        fill={isActive ? "#F5F5F5" : "#888"}
                        className="font-mono text-[7px] font-bold select-none"
                      >
                        {techName.split(' ')[0]}
                      </text>
                    </g>
                  );
                });
              })}

              {/* Moving Sun (oscillates horizontally & bobs vertically) */}
              {(() => {
                const sunX = 180;
                const sunY = 150 + 15 * Math.sin(angles[0] * 0.25);
                return (
                  <g>
                    <circle cx={sunX} cy={sunY} r="13" fill="#141414" stroke="#F59E0B" strokeWidth="2.5" className="animate-pulse" />
                    <circle cx={sunX} cy={sunY} r="6" fill="#F59E0B" />
                    <text x={sunX} y={sunY + 20} textAnchor="middle" fill="#F59E0B" className="font-mono text-[7px] font-bold">SUN_NODE</text>
                  </g>
                );
              })()}
            </>
          )}
        </svg>
      </div>

      {/* active Diagnostics telemetry side screen */}
      <div className="lg:col-span-5 text-left h-full flex flex-col justify-between">
        <div className="bg-[#141414] border border-hairline p-5 rounded min-h-[300px] flex flex-col justify-between font-mono relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[150px] h-[150px] bg-cyanAccent/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div>
            <div className="flex justify-between items-center border-b border-hairline pb-2.5 mb-4">
              <div className="flex items-center gap-2">
                <Cpu size={14} className="text-cyanAccent" />
                <span className="text-xs font-bold text-primary">TECH_DIAGNOSTIC</span>
              </div>
              <span className="text-[8px] text-secondary bg-surface2 px-1.5 py-0.5 border border-hairline">
                CHAN_03 // RDR
              </span>
            </div>

            {activeStats ? (
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] text-secondary">IDENTIFIER:</div>
                  <div className="text-base font-bold text-cyanAccent font-display">{activeStats.name}</div>
                </div>

                <div>
                  <div className="text-[10px] text-secondary">CAPABILITY_INDEX:</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-amberAccent font-bold text-xs">{activeStats.level}</span>
                    <span className="text-[10px] text-primary">{activeStats.percentage}%</span>
                  </div>
                  <div className="text-[11px] text-cyanAccent/80 mt-1 font-mono tracking-tighter">
                    {activeStats.bar}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] text-secondary">FUNCTION_LOGS:</div>
                  <div className="text-[11px] text-secondary leading-relaxed mt-1 font-sans">
                    {activeStats.details}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center py-12 text-center text-secondary">
                <HelpCircle size={32} className="text-secondary/40 mb-3 animate-pulse" />
                <div className="text-[11px] font-bold uppercase tracking-wider">Telemetry Standby</div>
                <div className="text-[9px] text-secondary/60 mt-1 max-w-[200px] font-sans">
                  Hover over any electron node orbiting the core to scan and analyze system capabilities.
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-hairline pt-3 mt-4 text-[9px] text-secondary flex justify-between">
            <span>SYS_CLK: CONNECTED</span>
            <span className="text-amberAccent animate-pulse">● SIGNAL_UP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
