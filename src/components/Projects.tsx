import React from 'react';
import { HiCheckCircle, HiArrowTopRightOnSquare, HiCircleStack, HiArchiveBox, HiDocumentCheck } from 'react-icons/hi2';
import { SiReact, SiTypescript, SiDotnet, SiBootstrap } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const PROJECTS = [
  {
    title:    'ERP Inventory Management System',
    subtitle: 'Frontend Application',
    badge:    'Enterprise ERP',
    icon:     HiArchiveBox,
    accent:   'var(--navy)',
    accentBg: 'var(--blue-dim)',
    desc: 'A comprehensive inventory management solution with real-time stock tracking, automated reorder alerts, and seamless server-state synchronisation for enterprise-level operations.',
    highlights: [
      'TanStack React Query for server-state management, caching & background refetching',
      'Functional components with custom hooks for clean, reusable architecture',
      'Responsive, professional UI optimised for enterprise users',
      'Query invalidation & optimised API interaction for maximum performance',
    ],
    stack: [
      { name:'React.js',       Icon: SiReact,           color:'#61dafb' },
      { name:'TypeScript',     Icon: SiTypescript,       color:'#3178c6' },
      { name:'TanStack Query', Icon: TbBrandReactNative, color:'#ff4154' },
    ],
  },
  {
    title:    'ERP Certification Management System',
    subtitle: 'Full Stack Application',
    badge:    'Compliance System',
    icon:     HiDocumentCheck,
    accent:   'var(--blue)',
    accentBg: 'var(--teal-dim)',
    desc: 'A sophisticated certification auditing & lifecycle management platform with expiry tracking, renewal workflows, and CBS system integration for regulatory compliance.',
    highlights: [
      'ASP.NET Core MVC with Entity Framework Core for the complete certification lifecycle',
      'CBS system integration for seamless data exchange and audit trails',
      'Expiry tracking with automated renewal workflow notifications',
      'Responsive Bootstrap 5 interface aligned with enterprise design standards',
    ],
    stack: [
      { name:'ASP.NET Core MVC', Icon: SiDotnet,      color:'#512bd4' },
      { name:'Entity Framework', Icon: HiCircleStack,  color:'#1a4a6e' },
      { name:'Bootstrap 5',      Icon: SiBootstrap,    color:'#7952b3' },
      { name:'Oracle DB',        Icon: HiCircleStack,  color:'#f80000' },
    ],
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="section section-alt">
    <div className="wrap">

      {/* Header */}
      <div className="sec-header reveal">
        <span className="sec-label">Projects</span>
        <h2 className="sec-title">
          Featured <span className="grad-text">Work</span>
        </h2>
        <div className="divider" />
        <p className="sec-sub">
          Enterprise-grade ERP solutions built with modern technologies and best practices.
        </p>
      </div>

      {/* Cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:24 }}>
        {PROJECTS.map((proj, i) => (
          <div
            key={proj.title}
            className={`reveal-scale sd-${i + 1}`}
            style={{
              background:'#fff',
              border:'1.5px solid #e5e7eb',
              borderRadius:20, overflow:'hidden',
              display:'flex', flexDirection:'column',
              transition:'all .3s', cursor:'default',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform='translateY(-4px)';
              el.style.boxShadow=`0 16px 48px ${proj.accent}14`;
              el.style.borderColor=`${proj.accent}40`;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform='';
              el.style.boxShadow='none';
              el.style.borderColor='#e5e7eb';
            }}
          >
            {/* Top accent bar */}
            <div style={{ height:4, background:`linear-gradient(90deg,${proj.accent},var(--teal))` }} />

            {/* Card header */}
            <div style={{
              padding:'24px 28px 20px',
              background:`linear-gradient(135deg,${proj.accentBg},#fff)`,
              borderBottom:'1px solid #f3f4f6',
              display:'flex', alignItems:'flex-start', gap:16,
            }}>
              <div style={{
                width:52, height:52, borderRadius:14,
                display:'flex', alignItems:'center', justifyContent:'center',
                background:proj.accentBg, border:`1px solid ${proj.accent}20`, flexShrink:0,
              }}>
                <proj.icon size={26} style={{ color: proj.accent }} />
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <span style={{
                  fontSize:11, fontWeight:700, padding:'3px 12px', borderRadius:999,
                  background:proj.accentBg, color:proj.accent,
                  display:'inline-block', marginBottom:8,
                }}>{proj.badge}</span>
                <h3 style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:16, color:'var(--navy)', lineHeight:1.3, margin:0 }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize:12, color:'#9ca3af', marginTop:3 }}>{proj.subtitle}</p>
              </div>
              <HiArrowTopRightOnSquare size={16} style={{ color:'#d1d5db', flexShrink:0 }} />
            </div>

            {/* Card body */}
            <div style={{ padding:'20px 28px 24px', display:'flex', flexDirection:'column', gap:16, flex:1 }}>
              <p style={{ fontSize:14, color:'#6b7280', lineHeight:1.7 }}>{proj.desc}</p>

              <ul style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {proj.highlights.map((h, hi) => (
                  <li key={hi} style={{ display:'flex', gap:10, fontSize:13.5, color:'#4b5563' }}>
                    <HiCheckCircle size={15} style={{ color:'var(--teal)', flexShrink:0, marginTop:1 }} />
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ paddingTop:12, borderTop:'1px solid #f3f4f6', display:'flex', flexWrap:'wrap', gap:8 }}>
                {proj.stack.map(({ name, Icon, color }) => (
                  <span key={name} style={{
                    display:'inline-flex', alignItems:'center', gap:6,
                    padding:'5px 12px', borderRadius:8, fontSize:12, fontWeight:600,
                    background:`${color}12`, color, border:`1px solid ${color}28`,
                  }}>
                    <Icon size={12} />{name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign:'center', color:'#9ca3af', fontSize:13, marginTop:36 }}>
        All projects developed within enterprise ERP systems at{' '}
        <span style={{ color:'var(--blue)', fontWeight:600 }}>Navanala Technologies Private Limited</span>
      </p>
    </div>
  </section>
);

export default Projects;
