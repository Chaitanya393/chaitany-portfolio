import React, { useState } from 'react';
import { FileCode, Globe, Cpu, Server, Database, Activity, Shield, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('architecture'); // 'mockup' or 'architecture'
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const projectData = [
    {
      id: 0,
      name: 'Memoralive',
      tabName: 'Memoralive.tsx',
      role: 'Frontend Developer',
      tech: ['Next.js', 'TypeScript', 'WebRTC', 'Socket.IO', 'Tailwind CSS'],
      summary: 'Designed responsive UI and secure media pipelines for real-time memory preservation, event sharing, and low-latency video streaming.',
      metrics: {
        latency: '<150ms peer',
        lighthouse: '98/100',
        ssrCaching: 'REDIS_HIT',
      },
      codeSnippet: `import { WebRTCConnection } from '@/sys/webrtc';
import { SocketConnection } from '@/sys/sockets';

export default function MemoraliveStream() {
  // Initiating multi-peer connection channels
  const mediaStream = useUserMedia({ video: true, audio: true });
  const signalSocket = SocketConnection.init('/live-session');
  
  const connection = new WebRTCConnection({
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'turn:turn.memoralive.io:3478', credential: 'token_sec' }
    ],
    stream: mediaStream,
    onTrack: (track) => renderRemoteStream(track)
  });
  
  signalSocket.on('ice-candidate', (candidate) => {
    connection.addIceCandidate(new RTCIceCandidate(candidate));
  });

  return <StreamViewer feed={connection.remoteFeed} />;
}`,
      // Simulated interactive component vector
      vectorRender: () => (
        <div className="w-full h-full bg-[#111] border border-hairline rounded p-3 font-mono flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-hairline pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-xs text-primary">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-fast"></span>
              <span>LIVE_STREAM_SESSION</span>
            </div>
            <span className="text-[8px] bg-electric/20 text-electric px-1 border border-electric/40">720p // 60FPS</span>
          </div>

          <div className="grid grid-cols-2 gap-2 flex-grow">
            <div className="border border-hairline bg-[#161616] rounded flex flex-col justify-between p-2 relative overflow-hidden">
              <div className="absolute top-1 right-1 text-[7px] text-[#06B6D4]">FEED_01 // HOST</div>
              <div className="flex-grow flex justify-center items-center">
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#444] animate-spin flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-cyanAccent/20"></div>
                </div>
              </div>
              <div className="text-[7px] text-secondary">USER: Tiwari_Chaitany</div>
            </div>
            <div className="border border-hairline bg-[#161616] rounded flex flex-col justify-between p-2 relative overflow-hidden">
              <div className="absolute top-1 right-1 text-[7px] text-amberAccent">FEED_02 // REMOTE</div>
              <div className="flex-grow flex justify-center items-center">
                <div className="flex items-end gap-0.5 h-6">
                  <span className="w-1 bg-amberAccent h-2 animate-[pulse_1s_infinite_100ms]"></span>
                  <span className="w-1 bg-amberAccent h-4 animate-[pulse_1.2s_infinite_200ms]"></span>
                  <span className="w-1 bg-amberAccent h-6 animate-[pulse_0.8s_infinite_300ms]"></span>
                  <span className="w-1 bg-amberAccent h-3 animate-[pulse_1.1s_infinite_400ms]"></span>
                </div>
              </div>
              <div className="text-[7px] text-secondary">PEER_LOGGED_IN</div>
            </div>
          </div>

          <div className="mt-2 text-[8px] text-secondary flex justify-between">
            <span>BITRATE: 4500kbps</span>
            <span>JITTER: 1.2ms</span>
          </div>
        </div>
      ),
      architectureRender: () => (
        <svg viewBox="0 0 320 160" className="w-full h-full text-secondary font-mono">
          {/* Legend */}
          <rect x="5" y="5" width="310" height="150" fill="none" stroke="#222" strokeWidth="1" />
          
          {/* Nodes */}
          {/* Client node */}
          <rect x="10" y="55" width="82" height="36" fill="#141414" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="51" y="71" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Next.js Client</text>
          <text x="51" y="82" textAnchor="middle" fill="#888" fontSize="6">SSR / WebRTC</text>

          {/* Gateway node */}
          <rect x="112" y="55" width="92" height="36" fill="#141414" stroke="#2563EB" strokeWidth="1.5" />
          <text x="158" y="71" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">API Gateway</text>
          <text x="158" y="82" textAnchor="middle" fill="#888" fontSize="6">Node / JWT RBAC</text>

          {/* WebSockets signaling node */}
          <rect x="225" y="20" width="82" height="36" fill="#141414" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="266" y="36" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Signaling Node</text>
          <text x="266" y="47" textAnchor="middle" fill="#888" fontSize="6">Socket.io / STUN</text>

          {/* Database node */}
          <rect x="225" y="90" width="82" height="36" fill="#141414" stroke="#222" strokeWidth="1.5" />
          <text x="266" y="106" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">MongoDB Cluster</text>
          <text x="266" y="117" textAnchor="middle" fill="#888" fontSize="6">Profiles / Assets</text>

          {/* Connecting Lines */}
          <path d="M 92 73 L 112 73" fill="none" stroke="#06B6D4" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 204 73 L 214 73 L 214 38 L 225 38" fill="none" stroke="#2563EB" strokeWidth="1" />
          <path d="M 204 73 L 214 73 L 214 108 L 225 108" fill="none" stroke="#2563EB" strokeWidth="1" />

          {/* Signal Indicator Dot */}
          <circle cx="102" cy="73" r="2" fill="#06B6D4" className="animate-ping" />
          <circle cx="102" cy="73" r="1.5" fill="#06B6D4" />

          {/* Flow Annotations */}
          <text x="102" y="68" textAnchor="middle" fill="#888" fontSize="5.5">HTTPS</text>
          <text x="214" y="65" textAnchor="middle" fill="#888" fontSize="5.5" className="rotate-90">PROXY</text>
        </svg>
      ),
      github: 'https://github.com/webchaitanya',
      live: '#'
    },
    {
      id: 1,
      name: 'Stock Genie',
      tabName: 'StockGenie.py',
      role: 'Creator & Lead Developer',
      tech: ['React.js', 'Node.js', 'Vector DB', 'GPT API', 'WebSockets'],
      summary: 'Developed real-time stock trading and analytics platform streaming live market data with low-latency feeds and vector-based recommendations.',
      metrics: {
        streamLatency: '<50ms',
        queryTime: '<15ms',
        apiThroughput: '12k req/s',
      },
      codeSnippet: `import numpy as np
from openai import OpenAI
from pinecone import Pinecone

class StockGenieAnalyzer:
    def __init__(self, vector_db_key, openai_key):
        self.pc = Pinecone(api_key=vector_db_key)
        self.openai = OpenAI(api_key=openai_key)
        self.index = self.pc.Index("stock-news-embeddings")

    def query_sentiment_vector(self, ticker: str, outlook_query: str):
        # Generate semantic query embedding vector
        resp = self.openai.embeddings.create(
            input=[outlook_query],
            model="text-embedding-3-small"
        )
        query_vector = resp.data[0].embedding
        
        # Retrieve context nodes from Vector DB
        matches = self.index.query(
            vector=query_vector,
            top_k=5,
            filter={"ticker": ticker},
            include_metadata=True
        )
        return self._evaluate_sentiment(matches)`,
      vectorRender: () => (
        <div className="w-full h-full bg-[#111] border border-hairline rounded p-3 font-mono flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-hairline pb-2 mb-2">
            <span className="text-xs font-bold text-amberAccent">★ GENIE_ANALYTICS</span>
            <span className="text-[8px] text-[#27c93f] bg-[#27c93f]/10 px-1 border border-[#27c93f]/20">TICKER_OK</span>
          </div>

          <div className="flex-grow flex flex-col justify-between py-1">
            <div className="flex justify-between text-[9px]">
              <span className="text-primary font-bold">NIFTY_50: 23,450.60</span>
              <span className="text-green-500 font-bold">+1.45%</span>
            </div>
            
            {/* Stock Chart Graphic */}
            <div className="h-16 border-b border-dashed border-hairline relative flex items-end">
              <svg viewBox="0 0 100 30" className="w-full h-full text-cyanAccent">
                <path
                  d="M0 25 L15 20 L30 22 L45 12 L60 15 L75 4 L90 8 L100 2"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="1.5"
                />
                {/* Horizontal guide */}
                <line x1="0" y1="15" x2="100" y2="15" stroke="#222" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
              <div className="absolute top-1 left-1 bg-[#141414] border border-hairline px-1 text-[7px] text-[#888]">
                MA_20: 23,210
              </div>
            </div>

            <div className="text-[8px] text-secondary mt-1 bg-surface1 p-1 border border-hairline">
              <span className="text-amberAccent">GENIE_AI:</span> Strong accumulation detected near support level.
            </div>
          </div>
        </div>
      ),
      architectureRender: () => (
        <svg viewBox="0 0 320 160" className="w-full h-full text-secondary font-mono">
          <rect x="5" y="5" width="310" height="150" fill="none" stroke="#222" strokeWidth="1" />
          
          {/* Nodes */}
          {/* Client dashboard */}
          <rect x="10" y="55" width="82" height="36" fill="#141414" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="51" y="71" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">React App</text>
          <text x="51" y="82" textAnchor="middle" fill="#888" fontSize="6">Kite WS Socket</text>

          {/* Aggregator Node */}
          <rect x="112" y="55" width="92" height="36" fill="#141414" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="158" y="71" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">TradingEngine</text>
          <text x="158" y="82" textAnchor="middle" fill="#888" fontSize="6">Node EventLoop</text>

          {/* Vector Storage */}
          <rect x="225" y="20" width="82" height="36" fill="#141414" stroke="#2563EB" strokeWidth="1.5" />
          <text x="266" y="36" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Pinecone DB</text>
          <text x="266" y="47" textAnchor="middle" fill="#888" fontSize="6">GPT Sentiment</text>

          {/* Broker gateway */}
          <rect x="225" y="90" width="82" height="36" fill="#141414" stroke="#222" strokeWidth="1.5" />
          <text x="266" y="106" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Zerodha API</text>
          <text x="266" y="117" textAnchor="middle" fill="#888" fontSize="6">Orders / Exec</text>

          {/* Connecting Lines */}
          <path d="M 92 73 L 112 73" fill="none" stroke="#06B6D4" strokeWidth="1" />
          <path d="M 204 73 L 214 73 L 214 38 L 225 38" fill="none" stroke="#F59E0B" strokeWidth="1" />
          <path d="M 204 73 L 214 73 L 214 108 L 225 108" fill="none" stroke="#F59E0B" strokeWidth="1" />

          {/* Signal Indicator Dot */}
          <circle cx="102" cy="73" r="2" fill="#06B6D4" className="animate-ping" />
          <circle cx="102" cy="73" r="1.5" fill="#06B6D4" />

          {/* Flow Annotations */}
          <text x="102" y="68" textAnchor="middle" fill="#888" fontSize="5.5">WS FEED</text>
          <text x="214" y="65" textAnchor="middle" fill="#888" fontSize="5.5" className="rotate-90">EXECUTE</text>
        </svg>
      ),
      github: 'https://github.com/webchaitanya',
      live: '#'
    },
    {
      id: 2,
      name: 'Identity Access Module',
      tabName: 'AccessModule.json',
      role: 'Creator & Lead Developer',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      summary: 'Led agile development of an Identity & Access Management (IAM) module using React.js and Node.js with MongoDB.',
      metrics: {
        crypto: 'AES-256-GCM',
        tokenRotation: 'ACTIVE',
        auditCoverage: '100% logs',
      },
      codeSnippet: `import jwt from 'jsonwebtoken';
import { db } from '@/db/mongo';

export async function authorizeRBAC(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Auth token missing' });
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    // Scan role permissions in DB
    const userRole = await db.collection('user_roles').findOne({
      userId: decoded.sub
    });
    
    if (!userRole?.permissions.includes(req.requiredPermission)) {
      return res.status(403).json({ error: 'Access denied: insufficient permission' });
    }
    
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token signature invalid or expired' });
  }
}`,
      vectorRender: () => (
        <div className="w-full h-full bg-[#111] border border-hairline rounded p-3 font-mono flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-hairline pb-2 mb-2">
            <span className="text-xs font-bold text-red-500">🛡️ IAM_SECURITY</span>
            <span className="text-[8px] text-red-500 bg-red-500/10 px-1 border border-red-500/20">ZONE: HIGH</span>
          </div>

          <div className="flex-grow flex flex-col justify-center gap-2 font-mono">
            <div className="border border-hairline p-1.5 bg-[#141414] rounded flex items-center justify-between text-[9px]">
              <span>ROLE: SYS_ADMIN</span>
              <span className="text-green-500">VERIFIED</span>
            </div>
            
            <div className="border border-hairline p-1.5 bg-[#141414] rounded flex items-center justify-between text-[9px]">
              <span>TOKEN_MD5: 9A2F...E931</span>
              <span className="text-cyanAccent font-bold">ACTIVE</span>
            </div>

            <div className="h-4 bg-hairline rounded overflow-hidden relative">
              <div className="h-full bg-red-600 w-3/4 animate-pulse"></div>
              <div className="absolute inset-0 flex justify-center items-center text-[7px] font-bold text-primary">
                SECURITY STRENGTH: 85%
              </div>
            </div>
          </div>

          <div className="text-[8px] text-secondary flex justify-between mt-1 border-t border-hairline pt-1">
            <span>SIGN_SIG: SHA256</span>
            <span>VER: v2.1</span>
          </div>
        </div>
      ),
      architectureRender: () => (
        <svg viewBox="0 0 320 160" className="w-full h-full text-secondary font-mono">
          <rect x="5" y="5" width="310" height="150" fill="none" stroke="#222" strokeWidth="1" />
          
          {/* Nodes */}
          {/* Client request */}
          <rect x="10" y="55" width="82" height="36" fill="#141414" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="51" y="71" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Client API Req</text>
          <text x="51" y="82" textAnchor="middle" fill="#888" fontSize="6">Bearer JWT Token</text>

          {/* Middleware Guard */}
          <rect x="112" y="55" width="92" height="36" fill="#141414" stroke="#EF4444" strokeWidth="1.5" />
          <text x="158" y="71" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">RBAC Interceptor</text>
          <text x="158" y="82" textAnchor="middle" fill="#888" fontSize="6">Signature Verify</text>

          {/* User database */}
          <rect x="225" y="20" width="82" height="36" fill="#141414" stroke="#2563EB" strokeWidth="1.5" />
          <text x="266" y="36" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">MongoDB Auth</text>
          <text x="266" y="47" textAnchor="middle" fill="#888" fontSize="6">Session Policies</text>

          {/* Audit Logs system */}
          <rect x="225" y="90" width="82" height="36" fill="#141414" stroke="#222" strokeWidth="1.5" />
          <text x="266" y="106" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Audit Service</text>
          <text x="266" y="117" textAnchor="middle" fill="#888" fontSize="6">Immutable Logs</text>

          {/* Connecting Lines */}
          <path d="M 92 73 L 112 73" fill="none" stroke="#06B6D4" strokeWidth="1" />
          <path d="M 204 73 L 214 73 L 214 38 L 225 38" fill="none" stroke="#EF4444" strokeWidth="1" />
          <path d="M 204 73 L 214 73 L 214 108 L 225 108" fill="none" stroke="#EF4444" strokeWidth="1" />

          {/* Signal Indicator Dot */}
          <circle cx="102" cy="73" r="2" fill="#06B6D4" className="animate-ping" />
          <circle cx="102" cy="73" r="1.5" fill="#06B6D4" />

          {/* Flow Annotations */}
          <text x="102" y="68" textAnchor="middle" fill="#888" fontSize="5.5">AUTHORIZE</text>
          <text x="214" y="65" textAnchor="middle" fill="#888" fontSize="5.5" className="rotate-90">VERIFY</text>
        </svg>
      ),
      github: 'https://github.com/webchaitanya',
      live: '#'
    }
  ];

  const activeProj = projectData[activeTab];

  // Handling 3D tilt calculation
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Limit rotation angle range (max 10 degrees)
    setTilt({
      x: (y / (box.height / 2)) * -10,
      y: (x / (box.width / 2)) * 10
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full border-b border-hairline py-12 md:py-16 px-6 md:px-12 bg-[#0E0E0E]">
      {/* Title */}
      <div className="mb-10 text-left flex justify-between items-end">
        <div>
          <div className="font-mono text-[10px] text-cyanAccent tracking-widest mb-1.5 uppercase">PROJECT_LOGS // REPOSITORY_DIAGNOSTICS</div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight">
            [04] CODE_ARCHIVES
          </h2>
        </div>

        {/* View Mode Toggle Controls */}
        <div className="flex font-mono text-[9px] border border-hairline bg-surface1 p-0.5 rounded">
          <button
            onClick={() => setViewMode('mockup')}
            className={`px-2.5 py-1 rounded transition-colors ${
              viewMode === 'mockup'
                ? 'bg-cyanAccent text-bg font-bold'
                : 'text-secondary hover:text-primary'
            }`}
          >
            [MOCKUP_VIEW]
          </button>
          <button
            onClick={() => setViewMode('architecture')}
            className={`px-2.5 py-1 rounded transition-colors ${
              viewMode === 'architecture'
                ? 'bg-cyanAccent text-bg font-bold'
                : 'text-secondary hover:text-primary'
            }`}
          >
            [SYS_ARCHITECTURE]
          </button>
        </div>
      </div>

      {/* Main IDE Frame */}
      <div className="border border-hairline rounded bg-surface1 overflow-hidden flex flex-col">
        {/* Tabs Bar */}
        <div className="bg-[#141414] border-b border-hairline flex items-end px-2 pt-2 gap-1 overflow-x-auto select-none">
          {projectData.map((proj, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveTab(idx);
                  setTilt({ x: 0, y: 0 }); // reset
                }}
                className={`group flex items-center gap-1.5 px-4 py-2 border-t border-x rounded-t font-mono text-[11px] transition-all ${
                  isActive
                    ? 'bg-surface1 text-primary border-hairline'
                    : 'bg-[#181818] text-secondary border-transparent hover:text-primary hover:bg-[#1a1a1a]'
                }`}
              >
                <FileCode size={12} className={isActive ? 'text-cyanAccent' : 'text-secondary'} />
                <span>{proj.tabName}</span>
                <span className={`text-[8px] ml-1 transition-opacity ${isActive ? 'text-amberAccent' : 'text-transparent group-hover:text-secondary'}`}>
                  ●
                </span>
              </button>
            );
          })}
        </div>

        {/* Editor Console content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-hairline">
          {/* Left Column: Code View (JSON metadata & active script block) */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-hairline p-4 font-mono text-[11px] text-secondary text-left overflow-y-auto max-h-[350px] bg-[#0c0c0c] custom-scrollbars select-text">
            <div className="text-[10px] text-hairline border-b border-hairline/25 pb-1 mb-2.5 flex justify-between">
              <span>CONSOLE_EDITOR</span>
              <span>LINES: 18</span>
            </div>
            
            {/* Simulated Line Numbers */}
            <div className="flex gap-4">
              <div className="text-[#333] select-none text-right border-r border-hairline/20 pr-2.5 flex flex-col font-bold">
                {[...Array(22)].map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre className="text-secondary leading-relaxed overflow-x-auto whitespace-pre font-mono">
                {activeProj.codeSnippet}
              </pre>
            </div>
          </div>

          {/* Right Column: Visual Telemetry + Mockup */}
          <div className="lg:col-span-6 p-4 md:p-6 flex flex-col justify-between gap-6 bg-[#0E0E0E]">
            {/* Visual Panel showing details */}
            <div className="text-left space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-display font-bold text-lg text-primary uppercase">{activeProj.name}</h3>
                <span className="text-[9px] font-mono text-cyanAccent border border-cyanAccent/30 px-1.5 py-0.5 rounded bg-cyanAccent/5">
                  {activeProj.role}
                </span>
              </div>

              <p className="font-sans text-xs md:text-sm text-secondary leading-relaxed">
                {activeProj.summary}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                {activeProj.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-surface1 border border-hairline rounded text-primary hover:border-cyanAccent transition-colors">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-2 font-mono text-[9px] bg-surface1 border border-hairline p-3 rounded">
                {Object.entries(activeProj.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-secondary uppercase">{key}</div>
                    <div className="text-primary font-bold mt-1 text-[11px]">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Mockup with 3D Tilt */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
              className="w-full aspect-[1.8/1] bg-[#141414] border border-hairline hover:border-cyanAccent hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] rounded-lg p-2.5 relative flex flex-col shadow-inner transition-colors cursor-crosshair select-none"
            >
              {/* Device Header buttons */}
              <div className="flex items-center gap-1.5 mb-2 border-b border-hairline/50 pb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></span>
                <div className="bg-bg border border-hairline text-[8px] px-2 py-0.5 text-secondary flex items-center gap-1 ml-4 rounded w-40 overflow-hidden truncate">
                  <Globe size={8} />
                  <span>https://chaitany-tiwari.io/{activeProj.name.toLowerCase().replace(' ', '-')}</span>
                </div>
              </div>

              {/* Inside dynamic vector layout */}
              <div className="flex-grow overflow-hidden relative">
                {viewMode === 'mockup' ? activeProj.vectorRender() : activeProj.architectureRender()}
              </div>

              {/* Technical annotation marker */}
              <div className="absolute bottom-1 right-2 text-[7px] text-[#333] font-mono">
                VIEW: {viewMode.toUpperCase()}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 font-mono text-xs">
              <a 
                href={activeProj.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 text-center py-2.5 bg-surface1 border border-hairline text-secondary hover:text-primary hover:border-cyanAccent transition-all rounded"
              >
                [01]_VIEW_SOURCE_CODE
              </a>
              <a 
                href={activeProj.live}
                className="flex-1 text-center py-2.5 bg-electric border border-electric text-primary hover:bg-transparent hover:text-electric transition-all rounded"
              >
                [02]_LAUNCH_STAGING
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
