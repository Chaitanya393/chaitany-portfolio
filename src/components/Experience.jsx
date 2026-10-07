import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Code } from 'lucide-react';

export default function Experience() {
  const [expandedNode, setExpandedNode] = useState(0);

  const experienceData = [
    {
      id: 0,
      role: 'Full Stack Software Engineer',
      company: 'Yuvasoft Solutions Pvt Ltd',
      location: 'Indore, M.P.',
      period: 'April 2025 – Present',
      stack: ['React.js', 'Next.js', 'TypeScript', 'WebSockets', 'WebRTC', 'JWT Auth'],
      highlights: [
        'Architected real-time browser communication shells utilizing WebRTC peer streams and Socket.io signaling servers, achieving sub-150ms transmission lag.',
        'Developed reusable client dashboards in React and Next.js, implementing strict code-splitting, lazy routing, and server-side cache layers.',
        'Formulated secure JWT token rotation patterns and HTTP-only cookie guards, completely mitigating client-side session injection vulnerabilities.',
        'Unified API request/response flows by implementing centralized interceptors, lowering overall API error handler code footprints by 30%.',
        'Coordinated closely with backend architects to build decoupled API contracts and review JSON-Schema payloads to ensure validation standards.',
        'Collaborated directly with international clients: gathered technical requirements, maintained proactive feedback loops, and delivered production features with full ownership across time zones.'
      ],
      telemetry: {
        serverState: 'PRODUCTION_STABLE',
        commits: '280_PUSHED',
        prsMerged: '42_MERGED',
      }
    },
    {
      id: 1,
      role: 'Software Developer',
      company: 'Turtle Software',
      location: 'Pune, Maharashtra',
      period: 'Oct 2023 – March 2025',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Webhooks'],
      highlights: [
        'Designed and optimized MongoDB aggregate analytics pipelines and index structures, improving REST endpoint response speeds by ~20%.',
        'Engineered Express middleware for request token validation, rate-limiting, and error tracking, processing 8k+ transactions/min.',
        'Built event-driven webhook aggregation workers to process third-party payment and logging callbacks asynchronously.',
        'Developed responsive client portals in React with unified component styles, achieving cross-browser rendering parity.',
        'Formulated prompt engineering workflows to generate predictable boilerplate handlers, accelerating routing setups by 40%.'
      ],
      telemetry: {
        serverState: 'ARCHIVED',
        commits: '450_PUSHED',
        prsMerged: '65_MERGED',
      }
    }
  ];

  return (
    <section className="relative w-full border-b border-hairline py-12 md:py-16 px-6 md:px-12 bg-bg">
      {/* Title */}
      <div className="mb-10 text-left">
        <div className="font-mono text-[10px] text-cyanAccent tracking-widest mb-1.5 uppercase">MILESTONE_LOGS // ROUTE_MAPPING</div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight">
          [05] CAREER_TIMELINE
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: SVG PCB circuit rail with nodes */}
        <div className="lg:col-span-4 flex justify-center items-center w-full max-w-[280px] mx-auto bg-surface1 border border-hairline p-5 rounded relative overflow-hidden h-[360px]">
          <div className="absolute top-2 left-2 font-mono text-[8px] text-secondary">CIRCUIT_TRACE // COORDS</div>
          
          {/* PCB Track Visualizer */}
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Background PCB Grid dots */}
            <div className="absolute inset-0 bg-dot-grid opacity-30"></div>
            
            {/* Main circuit trace path */}
            <svg viewBox="0 0 100 240" className="w-full h-full text-[#333]">
              {/* Main copper trace line */}
              <path
                d="M 50 10 L 50 70 L 25 100 L 25 140 L 50 170 L 50 230"
                fill="none"
                stroke="#2A2A2A"
                strokeWidth="2.5"
              />
              
              {/* Active pulsing signal line */}
              <path
                d="M 50 10 L 50 70 L 25 100 L 25 140 L 50 170 L 50 230"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="1.5"
                strokeDasharray="6 30"
                className="animate-[dash_3s_linear_infinite]"
                style={{
                  strokeDashoffset: 100,
                }}
              />

              {/* Node 1: Yuvasoft */}
              <g 
                onClick={() => setExpandedNode(0)} 
                className="cursor-pointer group"
              >
                <circle 
                  cx="50" 
                  cy="60" 
                  r={expandedNode === 0 ? "9" : "6"} 
                  fill={expandedNode === 0 ? "#06B6D4" : "#141414"} 
                  stroke={expandedNode === 0 ? "#F59E0B" : "#06B6D4"} 
                  strokeWidth="2"
                  className="transition-all duration-200"
                />
                {expandedNode === 0 && (
                  <circle cx="50" cy="60" r="14" fill="none" stroke="#06B6D4" strokeWidth="0.5" className="animate-ping" />
                )}
                <text x="64" y="63" fill={expandedNode === 0 ? "#F5F5F5" : "#888"} className="font-mono text-[8px] font-bold group-hover:fill-primary transition-colors">
                  01_YUVASOFT
                </text>
              </g>

              {/* Node 2: Turtle */}
              <g 
                onClick={() => setExpandedNode(1)} 
                className="cursor-pointer group"
              >
                <circle 
                  cx="25" 
                  cy="120" 
                  r={expandedNode === 1 ? "9" : "6"} 
                  fill={expandedNode === 1 ? "#06B6D4" : "#141414"} 
                  stroke={expandedNode === 1 ? "#F59E0B" : "#06B6D4"} 
                  strokeWidth="2"
                  className="transition-all duration-200"
                />
                {expandedNode === 1 && (
                  <circle cx="25" cy="120" r="14" fill="none" stroke="#06B6D4" strokeWidth="0.5" className="animate-ping" />
                )}
                <text x="39" y="123" fill={expandedNode === 1 ? "#F5F5F5" : "#888"} className="font-mono text-[8px] font-bold group-hover:fill-primary transition-colors">
                  02_TURTLE_SW
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Right column: Interactive expansion logging display */}
        <div className="lg:col-span-8 text-left bg-surface1 border border-hairline p-5 md:p-6 rounded font-mono min-h-[360px] flex flex-col justify-between relative">
          <div className="absolute top-0 right-4 px-1.5 py-0.5 border-b border-x border-hairline text-[8px] text-secondary bg-bg">
            CONSOLE: STAGE_{expandedNode + 1}
          </div>

          <div>
            {/* Header info */}
            <div className="border-b border-hairline/40 pb-4 mb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-primary flex items-center gap-1.5 uppercase font-display">
                  <Briefcase size={14} className="text-cyanAccent" />
                  {experienceData[expandedNode].role} @ <span className="text-cyanAccent">{experienceData[expandedNode].company}</span>
                </h3>
                <span className="text-[10px] text-amberAccent bg-amberAccent/10 border border-amberAccent/30 px-2 py-0.5 rounded">
                  {experienceData[expandedNode].period}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-2 text-[10px] text-secondary">
                <div className="flex items-center gap-1">
                  <MapPin size={10} />
                  <span>{experienceData[expandedNode].location}</span>
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span>STATE: {experienceData[expandedNode].telemetry.serverState}</span>
                </div>
              </div>
            </div>

            {/* Technical Highlights list */}
            <ul className="space-y-2.5 mb-6 text-[11px] md:text-xs text-secondary leading-relaxed font-sans list-none">
              {experienceData[expandedNode].highlights.map((bullet, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-cyanAccent font-mono mt-0.5 select-none">{`[+]`}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer details: stack & telemetry metrics */}
          <div className="border-t border-hairline/40 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px]">
            {/* Stack Tags */}
            <div className="flex flex-wrap gap-1">
              {experienceData[expandedNode].stack.map((s) => (
                <span key={s} className="px-1.5 py-0.5 bg-[#1e1e1e] border border-hairline rounded text-primary text-[9px]">
                  {s}
                </span>
              ))}
            </div>

            {/* Telemetry info */}
            <div className="flex gap-3 text-secondary text-[8px] bg-bg px-2.5 py-1 border border-hairline rounded">
              <span>COMMITS: <strong className="text-primary">{experienceData[expandedNode].telemetry.commits}</strong></span>
              <span>PR_MERGE: <strong className="text-cyanAccent">{experienceData[expandedNode].telemetry.prsMerged}</strong></span>
            </div>
          </div>

        </div>
      </div>
      
      {/* Keyframe animation injected inline */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
