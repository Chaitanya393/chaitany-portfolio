import React, { useState } from 'react';
import { FileCode, Globe, Cpu, Server, Database, Activity, Shield, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('architecture'); // 'mockup' or 'architecture'
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const projectData = [
    {
      id: 0,
      name: 'Nesting ERP',
      tabName: 'NestingERP.tsx',
      role: 'Full Stack Developer',
      featured: true,
      badge: 'FLAGSHIP PROJECT',
      tech: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', /* 'React Native', */ 'JWT'],
      summary: 'Architected and developed a production-grade ERP ecosystem for student housing and hostel operations. As Full Stack Developer, owned the entire product lifecycle across core tiers: web ERP admin dashboard, backend REST APIs, and scalable MongoDB schemas—streamlining tenant onboarding, room allocations, expense ledgers, and staff payroll.',
      ecosystem: [
        { title: 'Web ERP', tech: 'Next.js & React', desc: 'Admin portal for rooms, tenant onboarding, expenses, and payroll' },
        { title: 'Backend APIs', tech: 'Node.js & Express', desc: 'REST services with JWT auth, role validation, and business logic' },
        { title: 'Database Layer', tech: 'MongoDB', desc: 'Optimized schemas for tenant records, audit telemetry, and ledgers' },
        // { title: 'Mobile App', tech: 'React Native', desc: 'Cross-platform resident client for mobile onboarding and operations' },
      ],
      metrics: {
        ecosystem: 'WEB + API + DB',
        database: 'MONGODB (SCHEMAS)',
        role: 'FULL STACK DEV',
      },
      codeSnippet: `// Nesting ERP — Complete Product Ecosystem Workflow
// [Web ERP & Mobile Client -> Node/Express REST API -> MongoDB]

export async function processTenantOnboarding(req: Request, res: Response) {
  const { applicantId, roomNumber, securityDeposit } = req.body;

  // 1. Transactional Database Layer (MongoDB)
  const tenant = await TenantApplication.findById(applicantId);
  const resident = await Resident.enroll(tenant, { roomNumber, status: 'ACTIVE' });

  // 2. Billing & Ledger Sync (Web ERP Expense Engine)
  await LedgerService.recordTransaction({
    residentId: resident._id,
    type: 'ROOM_DEPOSIT',
    amount: securityDeposit,
    syncedToWebERP: true
  });

  // 3. Dispatch Push Notification {/* to React Native Mobile Client */}
  await PushNotifier.send(resident.pushToken, {
    title: 'Nesting Mobile // Access Activated',
    body: \`Room \${roomNumber} assigned. Welcome to your resident portal!\`
  });

  return res.status(200).json({ success: true, residentId: resident._id });
}`,
      vectorRender: () => (
        <div className="w-full h-full bg-[#111] border border-hairline rounded p-3 font-mono flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-hairline pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amberAccent animate-pulse"></span>
              <span className="text-xs font-bold text-amberAccent">NESTING_ERP // COMPLETE_ECOSYSTEM</span>
            </div>
            <span className="text-[8px] text-amberAccent bg-amberAccent/10 px-1.5 py-0.5 border border-amberAccent/30 font-bold">FLAGSHIP_ACTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-grow">
            <div className="border border-hairline bg-[#161616] rounded p-2">
              <div className="text-[8px] text-amberAccent font-bold mb-2 flex items-center justify-between">
                <span>ECOSYSTEM TIERS</span>
                <span className="text-[7px] text-secondary">3/3 ONLINE</span>
              </div>
              <div className="space-y-1.5 text-[9px]">
                <div className="flex justify-between"><span>Web ERP</span><span className="text-cyanAccent font-bold">ONLINE</span></div>
                <div className="flex justify-between"><span>Backend APIs</span><span className="text-cyanAccent font-bold">ONLINE</span></div>
                <div className="flex justify-between"><span>MongoDB Layer</span><span className="text-cyanAccent font-bold">SYNCED</span></div>
                {/* <div className="flex justify-between"><span>React Native</span><span className="text-green-500 font-bold">ACTIVE</span></div> */}
              </div>
            </div>
            <div className="border border-hairline bg-[#161616] rounded p-2">
              <div className="text-[8px] text-cyanAccent font-bold mb-2 flex items-center justify-between">
                <span>OPERATIONS ENGINE</span>
                <span className="text-[7px] text-secondary">STATUS</span>
              </div>
              <div className="space-y-1.5 text-[9px]">
                <div className="flex justify-between"><span>Resident Mgmt</span><span className="text-green-500">LIVE</span></div>
                <div className="flex justify-between"><span>Tenant Onboard</span><span className="text-green-500">VERIFIED</span></div>
                <div className="flex justify-between"><span>Expenses & Salary</span><span className="text-green-500">TRACKED</span></div>
                <div className="flex justify-between"><span>Mobile Sync</span><span className="text-amberAccent">REAL-TIME</span></div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-[8px] text-secondary flex justify-between border-t border-hairline/40 pt-1.5">
            <span>ROLE: FULL STACK DEVELOPER</span>
            <span className="text-amberAccent font-bold">COMPLETE PRODUCT ECOSYSTEM</span>
          </div>
        </div>
      ),
      architectureRender: () => (
        <svg viewBox="0 0 320 160" className="w-full h-full text-secondary font-mono">
          <rect x="5" y="5" width="310" height="150" fill="none" stroke="#222" strokeWidth="1" />
          {/* Tier 1: Web ERP Dashboard */}
          <rect x="10" y="20" width="84" height="42" fill="#141414" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="52" y="36" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Web ERP Client</text>
          <text x="52" y="47" textAnchor="middle" fill="#06B6D4" fontSize="6">Next.js / React</text>
          <text x="52" y="56" textAnchor="middle" fill="#888" fontSize="5">Admin / Staff Portal</text>

          {/* Tier 4: Mobile Client */}
          <rect x="10" y="88" width="84" height="42" fill="#141414" stroke="#06B6D4" strokeWidth="1.5" />
          <text x="52" y="104" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Mobile App</text>
          {/* <text x="52" y="115" textAnchor="middle" fill="#06B6D4" fontSize="6">React Native</text> */}
          <text x="52" y="124" textAnchor="middle" fill="#888" fontSize="5">Resident & Tenant</text>

          {/* Tier 2: Backend APIs */}
          <rect x="114" y="54" width="92" height="48" fill="#141414" stroke="#2563EB" strokeWidth="1.5" />
          <text x="160" y="70" textAnchor="middle" fill="#F5F5F5" fontSize="7.5" className="font-bold">Backend APIs</text>
          <text x="160" y="81" textAnchor="middle" fill="#2563EB" fontSize="6">Node.js / Express</text>
          <text x="160" y="91" textAnchor="middle" fill="#888" fontSize="5">JWT Auth & Workflows</text>

          {/* Tier 3: MongoDB Database */}
          <rect x="226" y="20" width="84" height="42" fill="#141414" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="268" y="36" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Database Layer</text>
          <text x="268" y="47" textAnchor="middle" fill="#F59E0B" fontSize="6">MongoDB Schemas</text>
          <text x="268" y="56" textAnchor="middle" fill="#888" fontSize="5">Tenants / Ledgers</text>

          {/* Notification / Sync Services */}
          <rect x="226" y="88" width="84" height="42" fill="#141414" stroke="#222" strokeWidth="1.5" />
          <text x="268" y="104" textAnchor="middle" fill="#F5F5F5" fontSize="7" className="font-bold">Sync & Push Serv</text>
          <text x="268" y="115" textAnchor="middle" fill="#27c93f" fontSize="6">Real-Time Mobile</text>
          <text x="268" y="124" textAnchor="middle" fill="#888" fontSize="5">Alerts & Receipts</text>

          {/* Connectors */}
          <path d="M 94 41 L 104 41 L 104 68 L 114 68" fill="none" stroke="#06B6D4" strokeWidth="1" />
          <path d="M 94 109 L 104 109 L 104 88 L 114 88" fill="none" stroke="#06B6D4" strokeWidth="1" />
          <path d="M 206 68 L 216 68 L 216 41 L 226 41" fill="none" stroke="#2563EB" strokeWidth="1" />
          <path d="M 206 88 L 216 88 L 216 109 L 226 109" fill="none" stroke="#2563EB" strokeWidth="1" />
          <circle cx="104" cy="78" r="2" fill="#06B6D4" className="animate-ping" />
          <circle cx="104" cy="78" r="1.5" fill="#06B6D4" />
        </svg>
      ),
      github: 'https://github.com/Chaitanya393/nesting-frontend',
      live: 'https://github.com/Chaitanya393/nesting-frontend'
    },

    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      <div className="mb-10 text-left flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <div className="font-mono text-[10px] text-cyanAccent tracking-widest mb-1.5 uppercase">PROJECT_LOGS // REPOSITORY_DIAGNOSTICS</div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight">
            [04] CODE_ARCHIVES
          </h2>
        </div>

        {/* View Mode Toggle Controls */}
        <div className="flex font-mono text-[9px] border border-hairline bg-surface1 p-0.5 rounded w-fit">
          <button
            onClick={() => setViewMode('mockup')}
            className={`px-2.5 py-1 rounded transition-colors ${viewMode === 'mockup'
              ? 'bg-cyanAccent text-bg font-bold'
              : 'text-secondary hover:text-primary'
              }`}
          >
            <span className="hidden sm:inline">[MOCKUP_VIEW]</span>
            <span className="sm:hidden">[MOCKUP]</span>
          </button>
          <button
            onClick={() => setViewMode('architecture')}
            className={`px-2.5 py-1 rounded transition-colors ${viewMode === 'architecture'
              ? 'bg-cyanAccent text-bg font-bold'
              : 'text-secondary hover:text-primary'
              }`}
          >
            <span className="hidden sm:inline">[SYS_ARCHITECTURE]</span>
            <span className="sm:hidden">[ARCH]</span>
          </button>
        </div>
      </div>

      {/* Main IDE Frame */}
      <div className="border border-hairline rounded bg-surface1 overflow-hidden flex flex-col">
        {/* Tabs Bar */}
        <div className="bg-[#141414] border-b border-hairline flex items-end px-2 pt-2 gap-1 overflow-x-auto select-none">
          {projectData.map((proj, idx) => {
            const isActive = idx === activeTab;
            const isFeatured = proj.featured;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveTab(idx);
                  setTilt({ x: 0, y: 0 }); // reset
                }}
                className={`group flex items-center gap-1.5 px-3.5 py-2 border-t border-x rounded-t font-mono text-[11px] transition-all relative ${isActive
                  ? isFeatured
                    ? 'bg-surface1 text-primary border-amberAccent/50 shadow-[0_-2px_12px_rgba(245,158,11,0.2)] font-bold'
                    : 'bg-surface1 text-primary border-hairline'
                  : isFeatured
                    ? 'bg-[#1a1710] text-amberAccent/90 border-amberAccent/30 hover:text-amberAccent hover:bg-[#201c13]'
                    : 'bg-[#181818] text-secondary border-transparent hover:text-primary hover:bg-[#1a1a1a]'
                  }`}
              >
                <FileCode size={12} className={isActive ? (isFeatured ? 'text-amberAccent' : 'text-cyanAccent') : 'text-secondary'} />
                <span>{proj.tabName}</span>
                {isFeatured && (
                  <span className="px-1.5 py-0.5 text-[7px] tracking-wider bg-amberAccent/15 text-amberAccent border border-amberAccent/40 rounded font-bold uppercase ml-1 animate-pulse">
                    ★ FEATURED
                  </span>
                )}
                <span className={`text-[8px] ml-1 transition-opacity ${isActive ? (isFeatured ? 'text-amberAccent' : 'text-cyanAccent') : 'text-transparent group-hover:text-secondary'}`}>
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
              <span>LINES: {activeProj.codeSnippet.split('\n').length}</span>
            </div>

            {/* Simulated Line Numbers */}
            <div className="flex gap-4">
              <div className="text-[#333] select-none text-right border-r border-hairline/20 pr-2.5 flex flex-col font-bold">
                {[...Array(Math.max(22, activeProj.codeSnippet.split('\n').length))].map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre className="text-secondary leading-relaxed overflow-x-auto whitespace-pre font-mono">
                {activeProj.codeSnippet}
              </pre>
            </div>
          </div>

          {/* Right Column: Visual Telemetry + Mockup */}
          <div className="lg:col-span-6 p-4 md:p-6 flex flex-col justify-between gap-5 bg-[#0E0E0E]">
            {/* Visual Panel showing details */}
            <div className="text-left space-y-3.5">
              {/* Featured Flagship Banner for Nesting ERP */}
              {activeProj.featured && (
                <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-gradient-to-r from-amberAccent/15 via-[#18140c] to-transparent border-l-2 border-amberAccent border-y border-r border-hairline/60 rounded text-[9px] font-mono text-amberAccent select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amberAccent animate-pulse"></span>
                    <span className="font-bold tracking-widest uppercase">★ PRIMARY FEATURED PROJECT // FLAGSHIP ERP</span>
                  </div>
                  <span className="text-[8px] text-primary/80 bg-[#141414] px-1.5 py-0.5 border border-hairline rounded font-mono">
                    FULL PRODUCT ECOSYSTEM
                  </span>
                </div>
              )}

              <div className="flex flex-wrap justify-between items-center gap-2">
                <h3 className={`font-display font-bold uppercase tracking-tight text-primary ${activeProj.featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                  {activeProj.name}
                </h3>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded flex items-center gap-1.5 font-bold ${activeProj.featured
                  ? 'text-amberAccent border border-amberAccent/50 bg-amberAccent/10 shadow-[0_0_10px_rgba(245,158,11,0.15)]'
                  : 'text-cyanAccent border border-cyanAccent/30 bg-cyanAccent/5'
                  }`}>
                  <Shield size={11} className={activeProj.featured ? 'text-amberAccent' : 'text-cyanAccent'} />
                  ROLE: {activeProj.role}
                </span>
              </div>

              <p className="font-sans text-xs md:text-sm text-secondary leading-relaxed">
                {activeProj.summary}
              </p>

              {/* Complete Ecosystem Breakdown for Nesting ERP */}
              {activeProj.ecosystem && (
                <div className="space-y-1.5 pt-0.5">
                  <div className="text-[9px] font-mono text-secondary flex items-center justify-between">
                    <span className="text-primary font-bold uppercase tracking-wider">// COMPLETE PRODUCT ECOSYSTEM:</span>
                    <span className="text-amberAccent text-[8px] font-mono font-bold">CORE TIERS INTEGRATED</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[9px]">
                    {activeProj.ecosystem.map((node) => (
                      <div key={node.title} className="bg-surface1 border border-hairline hover:border-amberAccent/60 p-2 rounded transition-colors group">
                        <div className="text-amberAccent font-bold flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-amberAccent"></span>
                          <span>{node.title}</span>
                        </div>
                        <div className="text-[8px] text-cyanAccent mt-0.5 font-semibold">{node.tech}</div>
                        <div className="text-[8px] text-secondary mt-1 leading-snug">{node.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                {activeProj.tech.map((t) => (
                  <span key={t} className={`px-2 py-0.5 bg-surface1 border rounded text-primary transition-colors ${activeProj.featured && (t === 'Next.js' || t === 'MongoDB' || t === 'Node.js')
                    ? 'border-amberAccent/40 hover:border-amberAccent'
                    : 'border-hairline hover:border-cyanAccent'
                    }`}>
                    #{t}
                  </span>
                ))}
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-2 font-mono text-[9px] bg-surface1 border border-hairline p-3 rounded">
                {Object.entries(activeProj.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-secondary uppercase">{key}</div>
                    <div className={`font-bold mt-1 text-[11px] ${activeProj.featured ? 'text-amberAccent' : 'text-primary'}`}>{value}</div>
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
                <div className="bg-bg border border-hairline text-[8px] px-2 py-0.5 text-secondary flex items-center gap-1 ml-4 rounded w-44 overflow-hidden truncate">
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
                target="_blank"
                rel="noreferrer"
                className={`flex-1 text-center py-2.5 border transition-all rounded font-bold ${activeProj.featured
                  ? 'bg-amberAccent/20 border-amberAccent text-amberAccent hover:bg-amberAccent hover:text-bg'
                  : 'bg-electric border-electric text-primary hover:bg-transparent hover:text-electric'
                  }`}
              >
                {activeProj.featured ? '[02]_EXPLORE_FLAGSHIP' : '[02]_LAUNCH_STAGING'}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
