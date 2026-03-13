import React, { useEffect, useState } from 'react';

const Icon = ({ children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const icons = {
  cpu: <Icon><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></Icon>,
  shield: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>,
  search: <Icon><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></Icon>,
  map: <Icon><path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z" /><path d="M9 4v13.5M15 6.5V20" /></Icon>,
  bell: <Icon><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></Icon>,
  lock: <Icon><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></Icon>,
  zap: <Icon><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Icon>,
  database: <Icon><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></Icon>,
  users: <Icon><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>,
  check: <Icon><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></Icon>,
  link: <Icon><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10 5" /><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L14 19" /></Icon>,
};

const svgToDataUri = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const imageUrls = {
  hero: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#081127"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <linearGradient id="monitor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#0b223f"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#bg)"/>
      <rect x="90" y="120" rx="14" width="440" height="220" fill="url(#monitor)" stroke="#1d4ed8" stroke-opacity="0.45"/>
      <rect x="560" y="120" rx="14" width="480" height="220" fill="url(#monitor)" stroke="#2563eb" stroke-opacity="0.45"/>
      <rect x="1070" y="120" rx="14" width="440" height="220" fill="url(#monitor)" stroke="#1d4ed8" stroke-opacity="0.45"/>
      <rect x="210" y="380" rx="14" width="560" height="260" fill="url(#monitor)" stroke="#22d3ee" stroke-opacity="0.4"/>
      <rect x="820" y="380" rx="14" width="560" height="260" fill="url(#monitor)" stroke="#60a5fa" stroke-opacity="0.4"/>
      <path d="M260 560 C340 440, 450 590, 560 500 C610 460, 680 510, 730 450" fill="none" stroke="#38bdf8" stroke-width="4"/>
      <path d="M850 580 C980 460, 1090 610, 1220 470" fill="none" stroke="#22c55e" stroke-width="4"/>
      <circle cx="1240" cy="470" r="8" fill="#22c55e"/>
      <rect x="610" y="680" rx="12" width="380" height="88" fill="#0f172a" stroke="#334155"/>
      <rect x="640" y="708" rx="8" width="90" height="30" fill="#1e293b"/>
      <rect x="745" y="708" rx="8" width="110" height="30" fill="#1d4ed8"/>
      <rect x="870" y="708" rx="8" width="90" height="30" fill="#1e293b"/>
    </svg>
  `),
  dashboard: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800">
      <rect width="1400" height="800" fill="#070f22"/>
      <rect x="42" y="40" width="1316" height="720" rx="24" fill="#0f172a" stroke="#1e3a8a" stroke-opacity="0.5"/>
      <rect x="90" y="95" width="740" height="260" rx="14" fill="#111b34"/>
      <path d="M130 280 C230 170, 320 300, 430 220 C520 160, 610 240, 760 130" fill="none" stroke="#38bdf8" stroke-width="6"/>
      <path d="M130 310 C230 260, 320 340, 430 270 C520 240, 610 310, 760 210" fill="none" stroke="#22c55e" stroke-width="6"/>
      <rect x="860" y="95" width="460" height="260" rx="14" fill="#111b34"/>
      <circle cx="1010" cy="225" r="84" fill="none" stroke="#1e293b" stroke-width="28"/>
      <circle cx="1010" cy="225" r="84" fill="none" stroke="#f97316" stroke-width="28" stroke-dasharray="260 530" transform="rotate(-90 1010 225)"/>
      <circle cx="1010" cy="225" r="84" fill="none" stroke="#60a5fa" stroke-width="28" stroke-dasharray="180 530" stroke-dashoffset="-260" transform="rotate(-90 1010 225)"/>
      <rect x="90" y="390" width="410" height="300" rx="14" fill="#111b34"/>
      <rect x="530" y="390" width="420" height="300" rx="14" fill="#111b34"/>
      <rect x="980" y="390" width="340" height="300" rx="14" fill="#111b34"/>
      <rect x="560" y="440" width="180" height="58" rx="10" fill="#1e293b"/>
      <rect x="760" y="440" width="160" height="58" rx="10" fill="#1d4ed8"/>
      <text x="1040" y="550" fill="#93c5fd" font-size="34" font-family="Arial">EDGE BOX</text>
      <text x="1040" y="590" fill="#94a3b8" font-size="23" font-family="Arial">32 Stream Local AI</text>
    </svg>
  `),
  forensicFace: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <rect width="1200" height="700" fill="#081126"/>
      <rect x="40" y="40" width="1120" height="620" rx="24" fill="#0f172a" stroke="#1e3a8a" stroke-opacity="0.45"/>
      <rect x="90" y="100" width="420" height="500" rx="16" fill="#111b34"/>
      <ellipse cx="300" cy="300" rx="110" ry="140" fill="#1e293b"/>
      <circle cx="260" cy="270" r="12" fill="#60a5fa"/>
      <circle cx="340" cy="270" r="12" fill="#60a5fa"/>
      <rect x="250" y="350" width="100" height="12" rx="6" fill="#60a5fa"/>
      <rect x="560" y="100" width="550" height="130" rx="14" fill="#111b34"/>
      <rect x="590" y="140" width="280" height="50" rx="10" fill="#1e293b"/>
      <rect x="890" y="140" width="190" height="50" rx="10" fill="#1d4ed8"/>
      <rect x="560" y="260" width="550" height="340" rx="14" fill="#111b34"/>
      <rect x="590" y="300" width="490" height="44" rx="8" fill="#1e293b"/>
      <rect x="590" y="360" width="490" height="44" rx="8" fill="#1e293b"/>
      <rect x="590" y="420" width="490" height="44" rx="8" fill="#1e293b"/>
      <text x="610" y="395" fill="#93c5fd" font-size="24" font-family="Arial">MATCH 98.4% - CAM 04</text>
    </svg>
  `),
  forensicMap: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <rect width="1200" height="700" fill="#09122a"/>
      <rect x="40" y="40" width="1120" height="620" rx="24" fill="#0f172a" stroke="#1e3a8a" stroke-opacity="0.45"/>
      <path d="M130 130 H1070 M130 230 H1070 M130 330 H1070 M130 430 H1070 M130 530 H1070" stroke="#1e293b" stroke-width="2"/>
      <path d="M130 130 V570 M280 130 V570 M430 130 V570 M580 130 V570 M730 130 V570 M880 130 V570 M1030 130 V570" stroke="#1e293b" stroke-width="2"/>
      <circle cx="280" cy="260" r="14" fill="#38bdf8"/>
      <circle cx="580" cy="330" r="14" fill="#38bdf8"/>
      <circle cx="860" cy="250" r="14" fill="#38bdf8"/>
      <circle cx="980" cy="460" r="16" fill="#ef4444"/>
      <path d="M280 260 C360 210, 470 380, 580 330 C650 300, 760 170, 860 250 C920 300, 950 390, 980 460" fill="none" stroke="#facc15" stroke-width="8" stroke-dasharray="18 16"/>
      <text x="880" y="520" fill="#fca5a5" font-size="26" font-family="Arial">SUSPECT TRAJECTORY</text>
    </svg>
  `),
  integrations: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <rect width="1200" height="700" fill="#061024"/>
      <rect x="40" y="40" width="1120" height="620" rx="24" fill="#0f172a" stroke="#1e3a8a" stroke-opacity="0.45"/>
      <rect x="120" y="270" width="220" height="120" rx="14" fill="#1d4ed8"/>
      <text x="170" y="342" fill="#dbeafe" font-size="34" font-family="Arial">BNX</text>
      <path d="M340 330 H520" stroke="#60a5fa" stroke-width="8"/>
      <rect x="520" y="210" width="240" height="240" rx="16" fill="#111b34"/>
      <circle cx="640" cy="285" r="18" fill="#22c55e"/>
      <circle cx="640" cy="330" r="18" fill="#38bdf8"/>
      <circle cx="640" cy="375" r="18" fill="#f59e0b"/>
      <text x="565" y="185" fill="#93c5fd" font-size="24" font-family="Arial">NO-CODE FLOW</text>
      <path d="M760 285 H910" stroke="#22c55e" stroke-width="8"/>
      <path d="M760 330 H910" stroke="#38bdf8" stroke-width="8"/>
      <rect x="910" y="235" width="180" height="90" rx="12" fill="#16a34a"/>
      <text x="940" y="292" fill="#dcfce7" font-size="26" font-family="Arial">WHATSAPP</text>
      <rect x="910" y="340" width="180" height="90" rx="12" fill="#1e40af"/>
      <text x="975" y="396" fill="#dbeafe" font-size="30" font-family="Arial">EMAIL</text>
    </svg>
  `),
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const features = [
    { icon: icons.shield, title: 'Perimeter & Security', desc: 'Intrusion, loitering, illegal parking, and unauthorized climbing detection.' },
    { icon: icons.users, title: 'Workforce & Protocol', desc: 'Absenteeism tracking, stay-duration monitoring, uniform and PPE compliance.' },
    { icon: icons.check, title: 'Safety & Liability', desc: 'Smoking, mobile distraction, no-mask, and hazardous trash accumulation alerts.' },
    { icon: icons.database, title: 'Asset Capture', desc: 'Face, pedestrian, motor, and non-motor vehicle capture for searchable history.' },
  ];

  const industries = ['Retail & Malls', 'Corporate Campuses', 'Factories & Plants', 'Warehouses & Logistics', 'Parking & Transit Hubs', 'Smart City Projects'];

  const navClass = scrolled
    ? 'fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur'
    : 'fixed inset-x-0 top-0 z-50';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className={navClass}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-2 text-white">{icons.cpu}</div>
            <span className="text-lg font-extrabold tracking-wide">BNX <span className="text-blue-400">IntelliSense</span></span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#arsenal" className="hover:text-white">Arsenal</a>
            <a href="#forensics" className="hover:text-white">Forensics</a>
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <a href="#industries" className="hover:text-white">Industries</a>
          </div>
          <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold hover:bg-blue-500">Book Demo</button>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-28">
        <img src={imageUrls.hero} alt="Control monitoring room with multiple surveillance screens" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/85 via-slate-950/78 to-slate-950/95" />
        <div className="hero-orb left-8 top-28 h-40 w-40 bg-cyan-500/30" />
        <div className="hero-orb secondary right-10 top-44 h-52 w-52 bg-blue-500/20" />
        <div className="mx-auto grid min-h-[82vh] max-w-7xl gap-10 px-6 pb-20 pt-10 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-300">
              {icons.zap} Smart Video Intelligence
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Stop Watching The Past.
              <span className="block text-blue-400">Start Preventing The Future.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-slate-200 animate-fade-up delay">
              BNX IntelliSense transforms existing CCTV into a real-time edge AI defense and operations platform.
              Process up to 32 streams locally, trigger alerts instantly, and search incidents in seconds.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 animate-fade-up delay-2">
              <button className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:scale-[1.03] hover:bg-slate-200">Get Live Demo</button>
              <button className="rounded-xl border border-slate-600 bg-slate-900/70 px-6 py-3 font-semibold transition hover:scale-[1.03] hover:bg-slate-800">View Brochure</button>
            </div>
          </div>

          <div className="glass-card animate-fade-up delay rounded-3xl border border-slate-700/80 shadow-2xl">
            <div className="h-72 w-full border-b border-slate-800 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.24),transparent_45%),linear-gradient(160deg,#0b1228,#0f172a)] p-4">
              <div className="grid h-full grid-cols-12 gap-3">
                <div className="col-span-7 rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">Live Detection Timeline</p>
                  <svg className="mt-2 h-20 w-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <path className="chart-draw" d="M0 88 C70 26, 140 102, 230 66 C300 44, 360 82, 500 24" fill="none" stroke="#38bdf8" strokeWidth="3" />
                    <path className="chart-draw delay" d="M0 96 C70 68, 140 108, 230 82 C310 64, 360 100, 500 58" fill="none" stroke="#22c55e" strokeWidth="3" />
                  </svg>
                </div>
                <div className="col-span-5 rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">Alert Split</p>
                  <svg viewBox="0 0 120 120" className="mx-auto mt-1 h-20 w-20">
                    <circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" strokeWidth="16" />
                    <circle cx="60" cy="60" r="38" fill="none" stroke="#fb923c" strokeWidth="16" strokeDasharray="140 239" transform="rotate(-90 60 60)" />
                    <circle cx="60" cy="60" r="38" fill="none" stroke="#60a5fa" strokeWidth="16" strokeDasharray="99 239" strokeDashoffset="-140" transform="rotate(-90 60 60)" />
                  </svg>
                </div>
                <div className="col-span-4 rounded-xl border border-slate-700 bg-slate-900/70 p-3 text-center">
                  <p className="text-[10px] uppercase text-slate-400">Edge Box</p>
                  <p className="mt-2 text-xl font-bold text-blue-300">32+</p>
                  <p className="text-[10px] text-slate-500">Streams</p>
                </div>
                <div className="col-span-4 rounded-xl border border-slate-700 bg-slate-900/70 p-3 text-center">
                  <p className="text-[10px] uppercase text-slate-400">Latency</p>
                  <p className="mt-2 text-xl font-bold text-emerald-300">&lt;1s</p>
                  <p className="text-[10px] text-slate-500">Alert Push</p>
                </div>
                <div className="col-span-4 rounded-xl border border-slate-700 bg-slate-900/70 p-3 text-center">
                  <p className="text-[10px] uppercase text-slate-400">Models</p>
                  <p className="mt-2 text-xl font-bold text-violet-300">16+</p>
                  <p className="text-[10px] text-slate-500">Realtime</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-5 text-center">
              <div className="rounded-xl bg-slate-950/85 p-3">
                <p className="text-2xl font-bold text-blue-400">32+</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">Camera Streams</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 p-3">
                <p className="text-2xl font-bold text-emerald-400">0s</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">Alert Delay</p>
              </div>
              <div className="rounded-xl bg-slate-950/80 p-3">
                <p className="text-2xl font-bold text-violet-400">16+</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">AI Modules</p>
              </div>
            </div>
            <div className="mx-5 mb-5 rounded-xl border border-blue-900/80 bg-slate-950/90 p-4 text-left">
              <p className="text-xs uppercase tracking-widest text-slate-400">Edge Deployment Architecture</p>
              <div className="mt-3 grid grid-cols-3 items-center gap-2 text-xs font-semibold text-slate-300">
                <div className="rounded bg-slate-900 p-2 text-center">IP Cameras</div>
                <div className="rounded bg-blue-600/30 p-2 text-center text-blue-300">BNX Edge Box</div>
                <div className="rounded bg-slate-900 p-2 text-center">Alerts/API</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="arsenal" className="bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">The Arsenal: 24/7 Automated Monitoring</h2>
          <p className="mt-3 max-w-3xl text-slate-400">Battle-tested algorithms across security, workforce compliance, safety monitoring, and traffic intelligence.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <article key={item.title} className="glass-card hover-lift rounded-2xl border border-slate-800 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300">{item.icon}</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="forensics" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Forensic Investigation: Stop Searching, Start Finding</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-blue-400">{icons.search}</span>
                <p><strong>Face Search:</strong> upload one photo and instantly pull every timestamp and camera match.</p>
              </div>
              <div className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-emerald-400">{icons.users}</span>
                <p><strong>Attribute Search:</strong> isolate targets by age category and gender.</p>
              </div>
              <div className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-cyan-400">{icons.map}</span>
                <p><strong>Map Trajectory:</strong> visualize full movement paths across camera locations and floor maps.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="hover-lift overflow-hidden rounded-3xl border border-slate-700 bg-[linear-gradient(160deg,#0b1228,#0f172a)] p-4">
              <div className="grid h-48 grid-cols-12 gap-3">
                <div className="col-span-4 rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">Uploaded Face</p>
                  <div className="mt-3 rounded-lg border border-blue-800/60 bg-slate-950 p-2">
                    <div className="h-24 rounded bg-gradient-to-b from-slate-700 to-slate-900" />
                  </div>
                </div>
                <div className="col-span-8 rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">Search Results Across Cameras</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between rounded bg-slate-950 px-2 py-1 text-xs">
                      <span className="text-slate-300">CAM 04 - Gate Entry</span><span className="font-bold text-blue-300">98.4%</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-slate-950 px-2 py-1 text-xs">
                      <span className="text-slate-300">CAM 11 - Corridor</span><span className="font-bold text-emerald-300">95.1%</span>
                    </div>
                    <div className="flex items-center justify-between rounded bg-slate-950 px-2 py-1 text-xs">
                      <span className="text-slate-300">CAM 18 - Loading Bay</span><span className="font-bold text-amber-300">92.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover-lift overflow-hidden rounded-3xl border border-slate-700">
              <img src={imageUrls.forensicMap} alt="Facility map with camera points and highlighted suspect trajectory" className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">The Command Center: Visibility At A Glance</h2>
          <p className="mt-3 max-w-3xl text-slate-400">Interactive warning widget, traffic analytics, exportable reports, and event snapshots for fast decisions.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="glass-card hover-lift rounded-2xl border border-slate-800 p-6 lg:col-span-4">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400">{icons.bell} Total Alert Distribution</h4>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <svg viewBox="0 0 120 120" className="mx-auto h-40 w-40">
                  <circle cx="60" cy="60" r="40" fill="none" stroke="#1e293b" strokeWidth="14" />
                  <circle cx="60" cy="60" r="40" fill="none" stroke="#fb923c" strokeWidth="14" strokeDasharray="150 251" strokeLinecap="round" transform="rotate(-90 60 60)" />
                  <circle cx="60" cy="60" r="40" fill="none" stroke="#60a5fa" strokeWidth="14" strokeDasharray="101 251" strokeDashoffset="-150" strokeLinecap="round" transform="rotate(-90 60 60)" />
                  <text x="60" y="64" textAnchor="middle" className="fill-slate-200 text-[10px] font-bold">ALERTS</text>
                </svg>
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between"><span className="text-slate-300">Intrusion</span><span className="font-bold text-orange-400">60%</span></div>
                  <div className="flex items-center justify-between"><span className="text-slate-300">Loitering</span><span className="font-bold text-blue-400">40%</span></div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg bg-slate-900 p-3">
                  <p className="text-xs uppercase text-slate-400">Daily Alerts</p>
                  <p className="text-xl font-bold text-orange-300">1,284</p>
                </div>
                <div className="rounded-lg bg-slate-900 p-3">
                  <p className="text-xs uppercase text-slate-400">Critical</p>
                  <p className="text-xl font-bold text-rose-300">86</p>
                </div>
              </div>
            </div>

            <div className="glass-card hover-lift rounded-2xl border border-slate-800 p-6 lg:col-span-8">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400">{icons.search} Command Dashboard</h4>
              <div className="h-44 w-full rounded-xl border border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_45%),linear-gradient(145deg,#0f172a,#111827)] p-3">
                <div className="grid h-full grid-cols-12 gap-3">
                  <div className="col-span-7 rounded border border-slate-700 bg-slate-900/70 p-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400">Threat Timeline</p>
                    <svg className="mt-1 h-20 w-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <path className="chart-draw" d="M0 88 C70 28, 150 108, 240 70 C300 48, 380 94, 500 30" fill="none" stroke="#38bdf8" strokeWidth="3" />
                      <path className="chart-draw delay" d="M0 98 C70 76, 150 112, 240 84 C320 62, 390 104, 500 66" fill="none" stroke="#22c55e" strokeWidth="3" />
                    </svg>
                  </div>
                  <div className="col-span-5 rounded border border-slate-700 bg-slate-900/70 p-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400">Alert Ratio</p>
                    <svg viewBox="0 0 100 100" className="mx-auto h-20 w-20">
                      <circle cx="50" cy="50" r="32" fill="none" stroke="#1e293b" strokeWidth="14" />
                      <circle cx="50" cy="50" r="32" fill="none" stroke="#fb923c" strokeWidth="14" strokeDasharray="120 201" transform="rotate(-90 50 50)" />
                      <circle cx="50" cy="50" r="32" fill="none" stroke="#60a5fa" strokeWidth="14" strokeDasharray="81 201" strokeDashoffset="-120" transform="rotate(-90 50 50)" />
                    </svg>
                  </div>
                  <div className="col-span-4 rounded border border-slate-700 bg-slate-900/70 p-2 text-center">
                    <p className="text-[10px] text-slate-400">Live Cams</p><p className="mt-1 text-lg font-bold text-blue-300">32</p>
                  </div>
                  <div className="col-span-4 rounded border border-slate-700 bg-slate-900/70 p-2 text-center">
                    <p className="text-[10px] text-slate-400">Alerts</p><p className="mt-1 text-lg font-bold text-rose-300">1,284</p>
                  </div>
                  <div className="col-span-4 rounded border border-slate-700 bg-slate-900/70 p-2 text-center">
                    <p className="text-[10px] text-slate-400">Response</p><p className="mt-1 text-lg font-bold text-emerald-300">0.8s</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-36 rounded-xl border border-slate-800 bg-slate-900 p-3">
                <svg className="h-full w-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                  <path className="chart-draw" d="M0 90 C80 30, 130 110, 220 70 C290 40, 360 80, 500 35" fill="none" stroke="#38bdf8" strokeWidth="3" />
                  <path className="chart-draw delay" d="M0 100 C80 70, 130 115, 220 90 C310 65, 360 105, 500 70" fill="none" stroke="#22c55e" strokeWidth="3" />
                </svg>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-slate-900 p-3">
                  <p className="text-xs uppercase text-slate-400">Peak Hour</p>
                  <p className="text-lg font-bold text-blue-300">19:00 - 20:00</p>
                </div>
                <div className="rounded-lg bg-slate-900 p-3">
                  <p className="text-xs uppercase text-slate-400">Pedestrian In/Out</p>
                  <p className="text-lg font-bold text-emerald-300">1,284 / 1,196</p>
                </div>
                <div className="rounded-lg bg-slate-900 p-3">
                  <p className="text-xs uppercase text-slate-400">Gateway Vehicles</p>
                  <p className="text-lg font-bold text-violet-300">342</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div className="hover-lift overflow-hidden rounded-3xl border border-slate-700">
            <img src={imageUrls.integrations} alt="No-code workflow builder with WhatsApp email and real-time alert integrations" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Instant Action & Flexible Integration</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4"><span className="text-blue-400">{icons.link}</span><span><strong>API Integration:</strong> full API and JSON-based HTTP POST event push for external platforms.</span></li>
              <li className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4"><span className="text-emerald-400">{icons.zap}</span><span><strong>LinkHub Automation:</strong> built-in Node-RED workflow engine for sirens, access control, and third-party systems.</span></li>
              <li className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4"><span className="text-cyan-400">{icons.bell}</span><span><strong>Real-Time Alerts:</strong> pop-up, audible alarms, snapshots, logs, and instant response channels.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">The Edge Advantage</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6"><div className="mb-3 text-blue-400">{icons.lock}</div><h3 className="font-bold">Absolute Data Sovereignty</h3><p className="mt-2 text-sm text-slate-400">Raw video stays on your network for strict privacy and compliance.</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6"><div className="mb-3 text-emerald-400">{icons.database}</div><h3 className="font-bold">Eliminate Cloud Tax</h3><p className="mt-2 text-sm text-slate-400">No heavy cloud storage and bandwidth bills for dead footage.</p></div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6"><div className="mb-3 text-amber-300">{icons.zap}</div><h3 className="font-bold">True Zero Latency</h3><p className="mt-2 text-sm text-slate-400">Edge-side inference triggers alarms in milliseconds.</p></div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Proven Deployment Scenarios</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div key={item} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-200">✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900 bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">Deploy Intelligent Surveillance Today</h3>
              <p className="mt-2 max-w-2xl text-slate-400">Need algorithms beyond off-the-shelf options? Snowbell IT can design and deploy custom AI modules for your exact environment.</p>
            </div>
            <button className="rounded-xl bg-blue-600 px-7 py-3 font-bold hover:bg-blue-500">Contact Sales Team</button>
          </div>
          <p className="mt-10 text-sm text-slate-500">© 2026 BNX IntelliSense. Smart Video Intelligence. Real-Time Decisions.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;