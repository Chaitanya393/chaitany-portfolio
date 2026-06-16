import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TermIcon, CornerDownLeft, Circle } from 'lucide-react';

export default function Terminal() {
  // CLI State
  const [history, setHistory] = useState([
    { text: 'Tiwari_OS v1.0.0 (kernel: react-vite-node)', type: 'sys' },
    { text: 'ESTABLISHING SECURE CONNECTION TO SITE-NODES...', type: 'sys' },
    { text: 'SYSTEM STATUS: ACTIVE // ALL SIGNALS OK', type: 'sys' },
    { text: 'Type "help" to display available terminal commands.', type: 'sys' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [contactStep, setContactStep] = useState(0); // 0 = normal, 1 = email, 2 = msg
  const [contactData, setContactData] = useState({ email: '', message: '' });
  const [matrixMode, setMatrixMode] = useState(false);
  const logEndRef = useRef(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);
  const isFirstRender = useRef(true);

  // Scroll to bottom on updates (skip initial render)
  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, matrixMode]);

  // Track initial mount to handle React Strict Mode in development
  useEffect(() => {
    isFirstRender.current = false;
    return () => {
      isFirstRender.current = true;
    };
  }, []);

  // Command handlers
  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    const cleanCmd = trimmed.toLowerCase();
    
    // Add command itself to history
    let newHistory = [...history, { text: `guest@chaitany-tiwari:~$ ${trimmed}`, type: 'input' }];

    if (contactStep === 1) {
      // Collecting email
      setContactData(prev => ({ ...prev, email: trimmed }));
      setContactStep(2);
      newHistory.push({ text: `[SYSTEM]: EMAIL ACCEPTED (${trimmed})`, type: 'sys' });
      newHistory.push({ text: 'ENTER YOUR MESSAGE:', type: 'sys' });
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    if (contactStep === 2) {
      // Collecting message & transmitting
      const finalMsg = trimmed;
      newHistory.push({ text: `[SYSTEM]: MESSAGE REGISTERED`, type: 'sys' });
      newHistory.push({ text: 'TRANSMITTING ENCRYPTED PACKET TO CHAITANYA...', type: 'sys' });
      
      // Simulate API submit latency
      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          { text: '█▒▒▒▒▒▒▒▒▒ 10%', type: 'sys' },
          { text: '█████▒▒▒▒▒ 50%', type: 'sys' },
          { text: '██████████ 100%', type: 'sys' },
          { text: '✓ PACKET RECEIVED SUCCESSFULLY. TRANSMISSION COMPLETE.', type: 'success' },
          { text: 'Thank you! I will respond to your message shortly.', type: 'success' }
        ]);
        
        // Open mailto link
        const mailtoUrl = `mailto:chaitanyatiwari2468@gmail.com?subject=Portfolio Uplink from CLI&body=${encodeURIComponent(finalMsg)}%0A%0A---%0ASender Email: ${encodeURIComponent(contactData.email)}`;
        window.location.href = mailtoUrl;
      }, 800);
      
      setContactStep(0);
      setContactData({ email: '', message: '' });
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          text: `Available commands:
  about       - Load developer profile synopsis
  skills      - Scan technical capability assets (ASCII table)
  projects    - List archived project repositories
  experience  - Show timeline node operations
  arch        - Display microservices systems architecture map
  metrics     - Load current live server clusters telemetry metrics
  contact     - Launch secure communications interface
  neofetch    - Fetch hardware & software telemetry logs
  matrix      - Activate matrix digital rain overlay
  clear       - Wipe console output logs`,
          type: 'output'
        });
        break;
      
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'matrix':
        setMatrixMode(true);
        setInputVal('');
        return;

      case 'neofetch':
        newHistory.push({
          text: `
      _/\\_      chaitany@tiwari-node-01
     /    \\     ------------------------
    |  []  |    OS: Web Browser Dashboard (React/Tailwind)
     \\_  _/     Kernel: Vite_Core_v8.0.16
       \\/       Uptime: 2.8+ Career Years
                Shell: Guest_Session_CLI
                CPU: Full-Stack Developer Engine
                Memory: 100% Commitment
                Location: Indore, M.P.
                Email: chaitanyatiwari2468@gmail.com
          `,
          type: 'output'
        });
        break;

      case 'about':
        newHistory.push({
          text: `## PROFILE LOG: Chaitany Tiwari
Full Stack Software Engineer with 2.8+ years of expertise.
Specializes in Node.js, Express, React, Next.js, and DB systems.
Strong focus on writing optimized database queries, REST microservices,
and modular components.`,
          type: 'output'
        });
        break;

      case 'skills':
        newHistory.push({
          text: `
+-------------------------------------------------------------+
| LAYER       | TECHNICAL ASSET SEGMENTS                      |
+-------------------------------------------------------------+
| Frontend    | Next.js, React.js, TypeScript, Redux, Tailwind|
| Backend     | Node.js, Express.js, PostgreSQL, MongoDB, WS  |
| AI / LLM    | GPT APIs, Prompt Eng, Vector DBs, Webhooks    |
| Operations  | Git, GitHub, Vercel, Jira, Agile Sprints      |
+-------------------------------------------------------------+
`,
          type: 'output'
        });
        break;

      case 'arch':
        newHistory.push({
          text: `
[SYSTEM TOPOLOGY]:
  [ Client (Next.js / WebRTC) ] 
             |
             v  (WS / HTTPS)
  [ API Gateway (Node.js / JWT Auth) ] 
             |
             +---> [ WebSocket Trading Router ] 
             |
             +---> [ DB Cluster (MongoDB / PostgreSQL) ]
             |
             +---> [ AI Agent Router (Vector DB) ]
`,
          type: 'output'
        });
        break;

      case 'metrics':
        newHistory.push({
          text: `
[TELEMETRY CLUSTER STATS]:
  API Latency (Avg)    :: 42ms
  MongoDB Read Query   :: 12ms (Target Indexing)
  Gateway Throughput   :: 8,200 req/min
  Memory Footprint     :: 128.4MB / 512MB
  WebSockets Links     :: 4 Active Connections
  Node Server State    :: production_stable
`,
          type: 'output'
        });
        break;

      case 'projects':
        newHistory.push({
          text: `## ARCHIVED PROJECT FILES:
  1. Memoralive   [Next.js/WebRTC] - Real-time stream preservations UI.
  2. Stock Genie  [React/WebSockets] - Live stock tracking dashboard with AI tips.
  3. IAM Module   [Node.js/Mongo] - Security access keys and RBAC schemas.`,
          type: 'output'
        });
        break;

      case 'experience':
        newHistory.push({
          text: `## PROFESSIONAL NODES:
  Yuvasoft Solutions Pvt Ltd (April 2025 - Present)
  > Full Stack Developer building consumer applications, WebRTC streaming & JWT auth.
  Turtle Software (Oct 2023 - March 2025)
  > Software Engineer optimizing database latency (~20%) and SaaS UI portals.`,
          type: 'output'
        });
        break;

      case 'contact':
        setContactStep(1);
        newHistory.push({ text: '## INITIALIZING SECURE COMMUNICATION PROTOCOL...', type: 'sys' });
        newHistory.push({ text: 'ENTER YOUR EMAIL ADDRESS:', type: 'sys' });
        break;

      case '':
        break;

      default:
        newHistory.push({ text: `command not found: "${trimmed}". Type "help" for a list of directives.`, type: 'error' });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  // Visual Form submit handler
  const handleVisualSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;

    setIsSending(true);
    setSendProgress(10);

    const interval = setInterval(() => {
      setSendProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 150);

    setTimeout(() => {
      setIsSending(false);
      setSendProgress(0);

      // Log transaction inside left CLI panel
      setHistory(prev => [
        ...prev,
        { text: `guest@chaitany-tiwari:~$ send_packet --sender="${formName}"`, type: 'input' },
        { text: 'VERIFYING SECURITY TOKENS...', type: 'sys' },
        { text: 'ESTABLISHING SSL MAIL GATEWAY...', type: 'sys' },
        { text: `✓ DATA PACKET TRANSMITTED SUCCESSFULLY. REDIRECTING CLIENT...`, type: 'success' }
      ]);

      // Redirect to mailto
      const mailtoUrl = `mailto:chaitanyatiwari2468@gmail.com?subject=Portfolio Contact Uplink from ${encodeURIComponent(formName)}&body=${encodeURIComponent(formMsg)}%0A%0A---%0ASender Email: ${encodeURIComponent(formEmail)}`;
      window.location.href = mailtoUrl;

      // Clear fields
      setFormName('');
      setFormEmail('');
      setFormMsg('');
    }, 1600);
  };

  // Matrix Rain Overlay Renderer
  const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      const columns = Math.floor(canvas.width / 14);
      const yPositions = Array(columns).fill(0);

      const matrix = () => {
        ctx.fillStyle = 'rgba(13, 13, 13, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#06B6D4';
        ctx.font = '12px monospace';

        yPositions.forEach((y, index) => {
          const text = String.fromCharCode(33 + Math.random() * 93);
          const x = index * 14;
          ctx.fillText(text, x, y);

          if (y > 100 + Math.random() * 10000) {
            yPositions[index] = 0;
          } else {
            yPositions[index] = y + 12;
          }
        });
      };

      const interval = setInterval(matrix, 33);
      
      const handleResize = () => {
        if (!canvas) return;
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      };
      window.addEventListener('resize', handleResize);

      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <div className="absolute inset-0 z-30 bg-bg">
        <canvas ref={canvasRef} className="w-full h-full block opacity-70" />
        <button 
          onClick={() => setMatrixMode(false)}
          className="absolute top-4 right-4 z-40 px-3 py-1.5 bg-[#141414] border border-cyanAccent text-cyanAccent font-mono text-xs hover:bg-cyanAccent hover:text-bg transition-colors"
        >
          [ESC_MATRIX]
        </button>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 md:py-16 px-6 md:px-12 bg-bg border-b border-hairline flex flex-col items-center">
      {/* Title */}
      <div className="w-full text-left mb-8">
        <div className="font-mono text-[10px] text-cyanAccent tracking-widest mb-1.5 uppercase">ENCRYPTED_PORT // SOCKET_ESTABLISHED</div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-primary tracking-tight">
          [06] COMM_TERMINAL
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-[1080px]">
        {/* Left Column: Terminal shell window */}
        <div className="lg:col-span-7 border border-hairline rounded bg-[#0A0A0A] flex flex-col overflow-hidden relative shadow-2xl min-h-[360px]">
          {matrixMode && <MatrixRain />}

          {/* Terminal Header */}
          <div className="bg-[#141414] border-b border-hairline px-4 py-2 flex items-center justify-between font-mono text-[10px] text-secondary select-none">
            <div className="flex items-center gap-1.5">
              <TermIcon size={12} className="text-cyanAccent" />
              <span className="text-[11px] text-primary">guest@chaitany-tiwari:~</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Circle size={8} fill="#ff5f56" stroke="none" />
              <Circle size={8} fill="#ffbd2e" stroke="none" />
              <Circle size={8} fill="#27c93f" stroke="none" />
            </div>
          </div>

          {/* Terminal Output display panel */}
          <div className="flex-grow p-4 overflow-y-auto font-mono text-[11px] leading-relaxed text-secondary text-left space-y-2 select-text custom-scrollbars relative scanlines">
            {history.map((log, i) => (
              <div 
                key={i} 
                className={`whitespace-pre-wrap ${
                  log.type === 'input' ? 'text-primary font-bold' :
                  log.type === 'error' ? 'text-red-500' :
                  log.type === 'success' ? 'text-green-500' :
                  log.type === 'sys' ? 'text-[#06B6D4]' : 'text-secondary'
                }`}
              >
                {log.text}
              </div>
            ))}
            <div ref={logEndRef} />
          </div>

          {/* Command Input Area */}
          <div className="border-t border-hairline bg-surface1 px-4 py-3 flex items-center font-mono text-[11px]">
            <span className="text-[#06B6D4] font-bold select-none mr-2">guest@chaitany-tiwari:~$</span>
            
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={contactStep === 0 ? "type a command e.g. 'help'..." : ""}
              className="flex-grow bg-transparent text-primary outline-none caret-[#06B6D4]"
            />
            
            <button 
              onClick={() => handleCommand(inputVal)}
              className="text-[#888] hover:text-cyanAccent transition-colors pl-2"
            >
              <CornerDownLeft size={12} />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Contact Form Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#0e0e0e] border border-hairline rounded relative overflow-hidden p-5 font-mono shadow-2xl min-h-[360px]">
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyanAccent/5 to-transparent w-full h-[5px] animate-[scan_4s_linear_infinite] pointer-events-none z-10"></div>
          
          <div className="absolute top-0 right-4 px-1.5 py-0.5 border-b border-x border-hairline text-[8px] text-secondary bg-bg select-none">
            PORT: SSL_UPLINK
          </div>

          <form onSubmit={handleVisualSubmit} className="space-y-4 text-left relative z-20 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 border-b border-hairline pb-2.5 mb-4 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-cyanAccent animate-pulse"></span>
                <span className="text-xs font-bold text-primary">SECURE_MAIL_GATEWAY</span>
              </div>

              {isSending ? (
                <div className="flex flex-col justify-center items-center py-12 text-center text-secondary gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-dashed border-cyanAccent animate-spin flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-cyanAccent/30"></div>
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cyanAccent animate-pulse">
                    Transmitting Telemetry Packet...
                  </div>
                  <div className="w-48 bg-hairline h-2 rounded overflow-hidden">
                    <div className="bg-cyanAccent h-full transition-all duration-150" style={{ width: `${sendProgress}%` }}></div>
                  </div>
                  <span className="text-[8px] text-secondary/60 font-mono">{sendProgress}% COMPLETE</span>
                </div>
              ) : (
                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[8px] uppercase tracking-wider text-secondary mb-1">
                      [01] SENDER_IDENTITY_NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-[#141414] border border-hairline focus:border-cyanAccent text-primary outline-none px-3 py-2 text-xs rounded transition-colors placeholder:text-secondary/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[8px] uppercase tracking-wider text-secondary mb-1">
                      [02] SENDER_EMAIL_ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. j.doe@network.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-[#141414] border border-hairline focus:border-cyanAccent text-primary outline-none px-3 py-2 text-xs rounded transition-colors placeholder:text-secondary/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[8px] uppercase tracking-wider text-secondary mb-1">
                      [03] MESSAGE_PAYLOAD_BODY
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Enter encrypted text package contents..."
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      className="w-full bg-[#141414] border border-hairline focus:border-cyanAccent text-primary outline-none px-3 py-2 text-xs rounded transition-colors resize-none placeholder:text-secondary/30 custom-scrollbars"
                    />
                  </div>
                </div>
              )}
            </div>

            {!isSending && (
              <button
                type="submit"
                className="w-full py-3 bg-electric border border-electric text-primary hover:bg-transparent hover:text-electric transition-all tracking-widest text-xs uppercase flex justify-center items-center gap-2 mt-4 font-bold"
              >
                <span>ESTABLISH_UPLINK</span>
                <span>→</span>
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Preset shortcut buttons for quick desktop/mobile clicks */}
      <div className="w-full max-w-[1080px] mt-4 flex flex-wrap gap-2 justify-start font-mono text-[9px] select-none">
        {['help', 'about', 'skills', 'projects', 'experience', 'arch', 'metrics', 'neofetch', 'matrix', 'contact'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleCommand(btn)}
            className="px-2.5 py-1 bg-[#141414] border border-hairline rounded text-[#888] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all"
          >
            [{btn}]
          </button>
        ))}
      </div>
    </section>
  );
}
