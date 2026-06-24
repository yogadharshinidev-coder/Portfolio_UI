import React, { useEffect, useState } from 'react';
import {
  HiArrowRight, HiMapPin, HiEnvelope, HiPhone,
  HiCircleStack, HiCommandLine, HiCodeBracket,
} from 'react-icons/hi2';
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiDotnet, SiGit, SiGithub, SiPostman,
} from 'react-icons/si';

/* ─── Roles for typewriter ─── */
const ROLES = [
  'Full Stack Developer',
  'React.js & Express.js Dev',
  'Asp.Net Developer',
];

/* ─── Tech layers ─── */
const LAYERS = [
  {
    label: 'Frontend',
    color: '#0ea5e9',
    items: [
      { name: 'React.js',   Icon: SiReact,       color: '#61DAFB' },
      { name: 'TypeScript', Icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'HTML5',      Icon: SiHtml5,       color: '#E34F26' },
      { name: 'CSS3',       Icon: SiCss,         color: '#1572B6' },
      { name: 'Tailwind',   Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend & API',
    color: '#1a4a6e',
    items: [
      { name: 'ASP.NET Core', Icon: SiDotnet,      color: '#512BD4' },
      { name: 'REST APIs',    Icon: HiCodeBracket, color: '#2dd4bf' },
      { name: 'SQL Server',   Icon: HiCircleStack, color: '#CC2927' },
    ],
  },
  {
    label: 'Tools & Workflow',
    color: '#2dd4bf',
    items: [
      { name: 'Git',     Icon: SiGit,         color: '#F05032' },
      { name: 'GitHub',  Icon: SiGithub,      color: '#24292F' },
      { name: 'Postman', Icon: SiPostman,     color: '#FF6C37' },
      { name: 'VS Code', Icon: HiCommandLine, color: '#007ACC' },
    ],
  },
];

/* ─── Stat card ─── */
const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div style={{
    flex: 1, minWidth: 100, textAlign: 'center',
    padding: '20px 14px', 
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(16px)',
    borderRadius: 16, border: '1px solid rgba(229, 231, 235, 0.8)',
    boxShadow: '0 8px 32px rgba(38,71,89,.04)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 12px 40px rgba(148,191,206,0.18)';
    e.currentTarget.style.borderColor = 'rgba(148,191,206,0.3)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(38,71,89,.04)';
    e.currentTarget.style.borderColor = 'rgba(229, 231, 235, 0.8)';
  }}
  >
    <p style={{
      fontFamily: 'Outfit, sans-serif',
      fontSize: '2.5rem', fontWeight: 900, lineHeight: 1,
      color: 'var(--navy)',
      textShadow: '0 2px 8px rgba(38,71,89,0.06)',
      margin: 0,
    }}>{value}</p>
    <p style={{
      fontSize: 10, fontWeight: 800, color: '#6b7280', margin: '8px 0 0 0',
      textTransform: 'uppercase', letterSpacing: '.1em',
    }}>{label}</p>
  </div>
);





/* ─── Hero ─── */
const Hero: React.FC = () => {
  const [ri, setRi]   = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const role = ROLES[ri];
    const speed = del ? 38 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = role.slice(0, txt.length + 1);
        setTxt(next);
        if (next === role) setTimeout(() => setDel(true), 2200);
      } else {
        const next = role.slice(0, txt.length - 1);
        setTxt(next);
        if (!next) { setDel(false); setRi(p => (p + 1) % ROLES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [txt, del, ri]);


  return (
    <>
      <style>{`
        #hero { 
          background: #fafcff;
          color: var(--text-body);
        }
        #hero-wrap {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 1100px) {
          #hero-wrap { grid-template-columns: 1fr; gap: 56px; }
        }
        .hero-contact-link {
          display:flex; align-items:center; gap:8px;
          font-size:14px; font-weight:600; color:#4b5563;
          text-decoration:none; transition:all .2s;
          padding: 6px 12px; border-radius: 8px;
          background: transparent;
        }
        .hero-contact-link:hover { 
          color: var(--navy); 
          background: var(--blue-dim);
          transform: translateY(-1px);
        }
        .hero-btn-p {
          position: relative;
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 32px; border-radius:999px;
          background:linear-gradient(135deg,var(--navy),var(--blue));
          color:#fff; font-size:14px; font-weight:800;
          text-decoration:none; letter-spacing:.04em;
          box-shadow:0 8px 24px var(--blue-dim);
          transition:all .3s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
        }
        .hero-btn-p::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: all 0.5s;
        }
        .hero-btn-p:hover {
          background:linear-gradient(135deg,var(--blue),var(--teal));
          box-shadow:0 12px 32px var(--teal-border);
          transform:translateY(-3px);
        }
        .hero-btn-p:hover::before {
          left: 100%;
        }
        .hero-btn-s {
          display:inline-flex; align-items:center; gap:8px;
          padding:13px 30px; border-radius:999px;
          border: 2px solid var(--border); color: var(--navy);
          font-size:14px; font-weight:800; text-decoration:none;
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(8px);
          transition:all .3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .hero-btn-s:hover {
          background:#fff; transform:translateY(-3px);
          border-color: var(--border-hi); color:var(--blue);
          box-shadow:0 8px 24px var(--teal-dim);
        }
        .typewriter-cursor {
          display:inline-block; width:3px; height:1.1em;
          background: linear-gradient(to bottom, var(--blue), var(--teal)); 
          margin-left:4px;
          animation:blink 1s step-end infinite;
          vertical-align:middle;
          border-radius:2px;
        }
        .gradient-text-anim {
          background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 50%, var(--teal) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes shine { to { background-position: 200% center; } }
        @keyframes pulse-dash { to { stroke-dashoffset: -40; } }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        .diamond-node {
          position: absolute;
          width: 58px; height: 58px;
          margin: -29px 0 0 -29px;
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.85));
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 6px -1px rgba(15,28,45,0.03), 
                      0 20px 40px -10px rgba(15,28,45,0.08), 
                      inset 0 1px 0 rgba(255,255,255,1);
          border-radius: 16px;
          transform: rotate(45deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex; align-items: center; justify-content: center;
          z-index: 5;
        }
        .diamond-node:hover {
          transform: rotate(45deg) scale(1.15) translateY(-6px) translateX(-6px);
          box-shadow: 0 8px 16px -4px var(--teal-dim), 
                      0 30px 60px -12px var(--teal-border), 
                      inset 0 1px 0 rgba(255,255,255,1);
          border-color: var(--border-hi);
          z-index: 10;
        }
        .diamond-inner {
          transform: rotate(-45deg);
          display: flex; align-items: center; justify-content: center;
        }
        .glass-card {
          background: #ffffff;
          border: 1px solid rgba(229, 231, 235, 0.7);
          box-shadow: 0 20px 40px rgba(15,28,45,.06), 0 1px 3px rgba(0,0,0,.02);
          border-radius: 28px;
          position: relative;
          overflow: hidden;
        }
        .glass-card::before {
          content: '';
          position: absolute; top: 0; left: 0; width: 100%; height: 6px;
          background: linear-gradient(90deg, var(--blue), var(--teal));
        }
        .tech-stack-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 500px;
          height: 500px;
          overflow: visible;
          position: relative;
          transition: all 0.3s ease;
        }
        .tech-stack-wrap {
          position: relative;
          width: 500px;
          height: 500px;
          flex-shrink: 0;
          transform-origin: center center;
          transition: transform 0.3s ease;
        }
        @media (max-width: 600px) {
          .tech-stack-container {
            width: 375px;
            height: 375px;
          }
          .tech-stack-wrap {
            transform: scale(0.75);
          }
          .hero-er {
            height: 400px !important;
          }
        }
        @media (max-width: 480px) {
          .tech-stack-container {
            width: 300px;
            height: 300px;
          }
          .tech-stack-wrap {
            transform: scale(0.6);
          }
          .hero-er {
            height: 320px !important;
          }
        }
        @media (max-width: 380px) {
          .tech-stack-container {
            width: 250px;
            height: 250px;
          }
          .tech-stack-wrap {
            transform: scale(0.5);
          }
          .hero-er {
            height: 270px !important;
          }
        }
      `}</style>

      <section id="hero" style={{
        width: '100%', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        paddingTop: 90, paddingBottom: 60,
        position: 'relative', overflow: 'hidden',
      }}>
        
        {/* Animated Background Mesh & Blobs */}
        <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0, overflow:'hidden', pointerEvents:'none', zIndex:0 }}>
          {/* Top Right Blob */}
          <div style={{ 
            position:'absolute', top:'-10%', right:'-5%', width:600, height:600,
            borderRadius:'50%', background:'radial-gradient(circle, rgba(148, 191, 206, 0.16) 0%, transparent 70%)',
            animation: 'float-slow 12s ease-in-out infinite' 
          }} />
          {/* Bottom Left Blob */}
          <div style={{ 
            position:'absolute', bottom:'-15%', left:'-10%', width:700, height:700,
            borderRadius:'50%', background:'radial-gradient(circle, rgba(148, 191, 206, 0.1) 0%, transparent 70%)',
            animation: 'float-slow 15s ease-in-out infinite reverse' 
          }} />
          {/* Center Subtle Blob */}
          <div style={{ 
            position:'absolute', top:'30%', left:'40%', width:400, height:400,
            borderRadius:'50%', background:'radial-gradient(circle, rgba(148, 191, 206, 0.08) 0%, transparent 70%)',
            animation: 'float-medium 10s ease-in-out infinite' 
          }} />
        </div>

        <div id="hero-wrap" style={{ width:'100%', maxWidth:'100%', margin:'0 auto', padding:'0 4vw', position:'relative', zIndex:1 }}>

          {/* ── LEFT ── */}
          <div style={{ display:'flex', flexDirection:'column', gap:28 }}>

            {/* Greeting */}
            <div className="hero-e1" style={{ 
              display:'inline-flex', alignItems:'center', gap:10, 
              padding:'6px 16px', background:'var(--blue-dim)', 
              borderRadius:999, width:'fit-content', border:'1px solid rgba(44,82,102,0.12)'
            }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'var(--teal)', boxShadow:'0 0 10px var(--teal)' }} />
              <span style={{ fontSize:12, fontWeight:800, color:'var(--blue)', letterSpacing:'.1em', textTransform:'uppercase' }}>
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <div className="hero-e2">
              <h1 style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(1.7rem, 5vw, 3.5rem)',
                lineHeight: 1.1,
                color: 'var(--navy)',
                letterSpacing: '-0.03em',
                margin: 0,
              }}>
                YOGADHARSHINI <span className="gradient-text-anim">VR</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="hero-e3" style={{ height: 40, display:'flex', alignItems:'center' }}>
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.3rem', fontWeight: 800, color: '#4b5563',
              }}>
                I build things as a{' '}
                <span style={{ color: 'var(--navy)', background: 'var(--blue-dim)', padding: '0 8px', borderRadius: 6 }}>
                  {txt}
                </span>
                <span className="typewriter-cursor" />
              </span>
            </div>

            {/* Bio */}
            <p className="hero-e4" style={{ fontSize:16, color:'#4b5563', lineHeight:1.8, maxWidth:540, margin:0 }}>
             Building high-performance enterprise web applications with seamless user experiences and robust architectures using{' '}
              <strong style={{ color:'var(--navy)', fontWeight:800 }}>React.js</strong> and{' '}
              <strong style={{ color:'var(--blue)', fontWeight:800 }}>.NET Web API</strong>.
            </p>

            {/* Contact links */}
            <div className="hero-e5" style={{ display:'flex', flexWrap:'wrap', gap:8, marginLeft: -8 }}>
              <a href="#" className="hero-contact-link">
                <div style={{ padding:6, background:'#fff', borderRadius:8, boxShadow:'0 2px 8px rgba(0,0,0,0.05)', display:'flex' }}>
                  <HiMapPin size={16} style={{ color:'var(--teal)' }} />
                </div>
                Erode, Tamil Nadu
              </a>
              <a href="mailto:yogadharshinidev@gmail.com" className="hero-contact-link">
                <div style={{ padding:6, background:'#fff', borderRadius:8, boxShadow:'0 2px 8px rgba(0,0,0,0.05)', display:'flex' }}>
                  <HiEnvelope size={16} style={{ color:'var(--teal)' }} />
                </div>
                yogadharshinidev@gmail.com
              </a>
              <a href="tel:+919361352274" className="hero-contact-link">
                <div style={{ padding:6, background:'#fff', borderRadius:8, boxShadow:'0 2px 8px rgba(0,0,0,0.05)', display:'flex' }}>
                  <HiPhone size={16} style={{ color:'var(--teal)' }} />
                </div>
                +91 9361352274
              </a>
            </div>

            {/* CTA buttons */}
            <div className="hero-e6" style={{ display:'flex', flexWrap:'wrap', gap:16, marginTop: 8 }}>
              <a href="#projects" className="hero-btn-p">
                View My Work <HiArrowRight size={16} />
              </a>
              <a href="#contact" className="hero-btn-s">
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="hero-e6" style={{ display:'flex', gap:16, flexWrap:'wrap', paddingTop:24 }}>
              <Stat value="2+"  label="Years Exp"    />
              <Stat value="2"   label="Companies"    />
              <Stat value="10+" label="Technologies" />
            </div>
          </div>

          {/* ── RIGHT: Extraordinary Neural Diamond Mesh ── */}
          <div className="hero-er" style={{ position: 'relative', zIndex: 2, height: 540, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="tech-stack-container">
              <div className="tech-stack-wrap">
                
                {/* Background SVG Connections */}
                <svg width="500" height="500" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
                  <defs>
                    <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(148,191,206,0.8)" />
                      <stop offset="50%" stopColor="rgba(44,82,102,0.3)" />
                      <stop offset="100%" stopColor="rgba(56,107,130,0.8)" />
                    </linearGradient>
                  </defs>
                  {(() => {
                    const MESH_NODES = [
                      { cx: 250, cy: 50,  item: LAYERS[0].items[0] }, // 0
                      { cx: 200, cy: 120, item: LAYERS[0].items[1] }, // 1
                      { cx: 300, cy: 120, item: LAYERS[0].items[2] }, // 2
                      { cx: 150, cy: 190, item: LAYERS[0].items[3] }, // 3
                      { cx: 250, cy: 190, item: LAYERS[0].items[4] }, // 4
                      { cx: 350, cy: 190, item: LAYERS[0].items[5] }, // 5
                      { cx: 100, cy: 260, item: LAYERS[1].items[0] }, // 6
                      { cx: 200, cy: 260, item: LAYERS[1].items[1] }, // 7
                      { cx: 300, cy: 260, item: LAYERS[1].items[2] }, // 8
                      { cx: 400, cy: 260, item: LAYERS[2].items[0] }, // 9
                      { cx: 150, cy: 330, item: LAYERS[2].items[1] }, // 10
                      { cx: 250, cy: 330, item: LAYERS[2].items[2] }, // 11
                      { cx: 350, cy: 330, item: LAYERS[2].items[3] }, // 12
                      { cx: 250, cy: 420, item: 'CORE' }              // 13
                    ];
                    const MESH_LINKS = [
                      [0,1], [0,2],
                      [1,3], [1,4], [2,4], [2,5],
                      [3,6], [3,7], [4,7], [4,8], [5,8], [5,9],
                      [6,10], [7,10], [7,11], [8,11], [8,12], [9,12],
                      [10,13], [11,13], [12,13]
                    ];
                    return MESH_LINKS.map((link, idx) => {
                      const n1 = MESH_NODES[link[0]];
                      const n2 = MESH_NODES[link[1]];
                      return (
                        <line 
                          key={idx} x1={n1.cx} y1={n1.cy} x2={n2.cx} y2={n2.cy} 
                          stroke="url(#meshGrad)" strokeWidth="1.5" 
                          strokeDasharray="4 4"
                          style={{ animation: 'pulse-dash 3s linear infinite' }}
                        />
                      );
                    });
                  })()}
                </svg>
  
                {/* Diamond Nodes */}
                {(() => {
                  const MESH_NODES = [
                    { cx: 250, cy: 50,  item: LAYERS[0].items[0] },
                    { cx: 200, cy: 120, item: LAYERS[0].items[1] },
                    { cx: 300, cy: 120, item: LAYERS[0].items[2] },
                    { cx: 150, cy: 190, item: LAYERS[0].items[3] },
                    { cx: 250, cy: 190, item: LAYERS[0].items[4] },
                    { cx: 350, cy: 190, item: LAYERS[0].items[5] },
                    { cx: 100, cy: 260, item: LAYERS[1].items[0] },
                    { cx: 200, cy: 260, item: LAYERS[1].items[1] },
                    { cx: 300, cy: 260, item: LAYERS[1].items[2] },
                    { cx: 400, cy: 260, item: LAYERS[2].items[0] },
                    { cx: 150, cy: 330, item: LAYERS[2].items[1] },
                    { cx: 250, cy: 330, item: LAYERS[2].items[2] },
                    { cx: 350, cy: 330, item: LAYERS[2].items[3] },
                    { cx: 250, cy: 420, item: 'CORE' }
                  ];
                  return MESH_NODES.map((node) => {
                    if (node.item === 'CORE') {
                      return (
                        <div key="core" className="diamond-node" style={{ 
                          left: node.cx, top: node.cy, width: 84, height: 84, margin: '-42px 0 0 -42px',
                          background: 'linear-gradient(135deg, var(--navy), var(--blue))',
                          boxShadow: '0 0 40px rgba(148,191,206,0.35), inset 0 2px 10px rgba(255,255,255,0.2)', 
                          border: '2px solid rgba(148,191,206,0.8)'
                        }}>
                          <div className="diamond-inner" style={{ flexDirection: 'column', color: 'var(--teal-mid)', fontWeight: 900, fontSize: 16 }}>
                            <span style={{ color:'#fff', fontSize: 16, letterSpacing:'1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Tech</span>
                            <span style={{ fontSize: 14, letterSpacing:'1px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Stack</span>
                          </div>
                        </div>
                      );
                    }
                    
                    const tech = node.item as any;
                    return (
                      <div key={tech.name} className="diamond-node" style={{ left: node.cx, top: node.cy }} title={tech.name}>
                        <div className="diamond-inner">
                          <tech.Icon size={24} color={tech.color} />
                        </div>
                      </div>
                    );
                  });
                })()}
  
              </div>
            </div>
          </div>

        </div>

        {/* Scroll hint */}
        <div style={{
          position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)',
          display:'flex', flexDirection:'column', alignItems:'center', gap:8,
          opacity: 0.6, transition: 'opacity 0.3s', cursor: 'pointer'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span style={{ fontSize:10, fontWeight:800, letterSpacing:'.16em', color:'var(--navy)', textTransform:'uppercase' }}>
            Scroll
          </span>
          <div style={{ position:'relative', width:2, height:40, background:'var(--blue-dim)', borderRadius:2, overflow:'hidden' }}>
            <div style={{ 
              position:'absolute', top:0, left:0, width:'100%', height:'50%', 
              background:'linear-gradient(to bottom, var(--teal), var(--blue))',
              animation: 'scroll-down 2s ease-in-out infinite' 
            }} />
          </div>
          <style>{`
            @keyframes scroll-down {
              0% { transform: translateY(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(200%); opacity: 0; }
            }
          `}</style>
        </div>
      </section>
    </>
  );
};

export default Hero;
