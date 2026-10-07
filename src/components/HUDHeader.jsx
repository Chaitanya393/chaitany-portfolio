import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Cpu, Radio, Shield, Globe } from 'lucide-react';

const LinkedInIcon = ({ size = 12, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function HUDHeader() {
  const [time, setTime] = useState(new Date());
  const [latency, setLatency] = useState(24);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timeTimer = setInterval(() => setTime(new Date()), 1000);
    const latencyTimer = setInterval(() => {
      setLatency(prev => {
        const change = Math.floor(Math.random() * 9) - 4;
        const next = prev + change;
        return next < 10 ? 10 : next > 60 ? 60 : next;
      });
    }, 3000);
    const uptimeTimer = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timeTimer);
      clearInterval(latencyTimer);
      clearInterval(uptimeTimer);
    };
  }, []);

  const formatUptime = (sec) => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-bg border-b border-hairline px-4 md:px-6 py-2.5 flex flex-wrap items-center justify-between font-mono text-[10px] md:text-xs text-secondary tracking-wider">
      {/* Top Left Signal */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-cyanAccent">
          <span className="w-2 h-2 rounded-full bg-cyanAccent animate-pulse-fast"></span>
          <span className="font-bold text-primary text-[11px] md:text-sm font-display tracking-tight">CHAITANYA_T.SYS</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 border-l border-hairline pl-3">
          <Globe size={12} className="text-secondary" />
          <span>INDORE, IN [22.7196° N, 75.8577° E]</span>
        </div>
        <a
          href="https://www.linkedin.com/in/webchaitanya/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-1 border-l border-hairline pl-3 text-secondary hover:text-cyanAccent transition-colors group"
          title="LinkedIn Profile: webchaitanya"
        >
          <LinkedInIcon size={11} className="text-cyanAccent group-hover:scale-110 transition-transform" />
          <span>LINKEDIN</span>
          <span className="text-[8px] text-hairline group-hover:text-cyanAccent">↗</span>
        </a>
      </div>

      {/* Middle Telemetry */}
      <div className="hidden lg:flex items-center gap-6 text-[10px]">
        <div className="flex items-center gap-1.5">
          <Cpu size={12} className="text-electric" />
          <span>SYS_LOAD: <span className="text-primary font-bold">{(12.4 + (Math.sin(uptime / 10) * 2)).toFixed(1)}%</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Radio size={12} className="text-amberAccent" />
          <span>PING: <span className="text-amberAccent font-bold">{latency}ms</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield size={12} className="text-green-500" />
          <span>SECURE_LINK: <span className="text-green-500">ACTIVE</span></span>
        </div>
        <div>
          <span>MEM_ALLOC: <span className="text-primary font-bold">128.4MB / 512MB</span></span>
        </div>
      </div>

      {/* Right Clock and Uptime */}
      <div className="flex items-center gap-4 ml-auto sm:ml-0">
        <div className="flex items-center gap-1">
          <span className="text-secondary">UPTIME:</span>
          <span className="text-primary font-bold">{formatUptime(uptime)}</span>
        </div>
        <div className="border-l border-hairline pl-4 font-bold text-primary flex items-center gap-1 bg-[#141414] px-2 py-0.5 border">
          <span className="text-[10px] text-cyanAccent select-none">Clock://</span>
          <span>
            {time.toLocaleTimeString('en-US', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </span>
        </div>
      </div>
    </header>
  );
}
