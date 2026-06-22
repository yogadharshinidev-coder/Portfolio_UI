import React from 'react';
import { HiCheckBadge, HiRocketLaunch } from 'react-icons/hi2';
import yogaImg from '../assets/Images/yoga.png';

const CARDS = [
  { Icon: HiRocketLaunch, title: 'Full Stack',     desc: 'End-to-end development with .NET & React',  accent: '#0f1c2d', bg: '#f1f5f9' },
  { Icon: HiCheckBadge,  title: 'API Integration',  desc: 'RESTful APIs with EF Core & LINQ',          accent: '#2dd4bf', bg: '#f0fffe' },
];

const About: React.FC = () => (
  <section id="about" className="section" style={{ background:'#fff' }}>
    <div className="wrap">
      <div className="sec-header reveal">
        <span className="sec-label">About Me</span>
        <h2 className="sec-title">
          Crafting Digital <span className="grad-text">Excellence</span>
        </h2>
        <div className="divider" />
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))', gap:64, alignItems:'center' }}>

        {/* Left - Text and remaining cards */}
        <div className="reveal-left" style={{ display:'flex', flexDirection:'column', gap:20 }}>
          <p style={{ fontSize:16, color:'#4b5563', lineHeight:1.8 }}>
            I'm a dedicated{' '}
            <strong style={{ color:'#0f1c2d', fontWeight:700 }}>Full Stack Developer</strong>{' '}
            based in Erode, Tamil Nadu, passionate about building clean, scalable, and impactful enterprise software.
          </p>
          <p style={{ fontSize:15, color:'#6b7280', lineHeight:1.78 }}>
            I specialise in crafting responsive UIs with{' '}
            <strong style={{ color:'#1a4a6e' }}>React.js</strong> and building robust APIs with{' '}
            <strong style={{ color:'#1a4a6e' }}>ASP.NET Core</strong>. With hands-on experience across the complete SDLC,
            I value collaboration, clean code, and continuous growth.
          </p>

          {/* Remaining 2 Cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:16, marginTop: 8 }}>
            {CARDS.map(({ Icon, title, desc, accent, bg }) => (
              <div key={title} className="card" style={{ padding:'20px 16px', display:'flex', flexDirection:'column', gap:12 }}>
                <div style={{
                  width:40, height:40, borderRadius:12, background:bg, color:accent,
                  display:'flex', alignItems:'center', justifyContent:'center'
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize:14, fontWeight:800, color:'#0f1c2d', marginBottom:4 }}>{title}</h4>
                  <p style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, paddingTop:12 }}>
            {['Problem Solver','Team Player','Agile Practitioner','Clean Code','ERP Domain'].map(t => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:12, paddingTop:12 }}>
            <a href="mailto:yogadharshinidev@gmail.com" style={{
              padding:'11px 26px', borderRadius:999,
              background:'linear-gradient(135deg,#0f1c2d,#1a4a6e)',
              color:'#fff', fontSize:13, fontWeight:700, textDecoration:'none',
              boxShadow:'0 4px 16px rgba(15,28,45,.2)', transition:'all .22s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform=''; }}
            >
              Get In Touch
            </a>
            <a href="tel:9361352274" style={{
              padding:'11px 26px', borderRadius:999,
              border:'1.5px solid #0f1c2d', color:'#0f1c2d',
              fontSize:13, fontWeight:700, textDecoration:'none', transition:'all .22s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='#f1f5f9'; el.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='transparent'; el.style.transform=''; }}
            >
              +91 9361352274
            </a>
          </div>
        </div>

        {/* Right – Profile Image */}
        <div className="reveal-right sd-2" style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
          <div style={{
            width: '100%', maxWidth: 380, aspectRatio: '1 / 1', borderRadius: '50%',
            boxShadow: '0 20px 48px rgba(15,28,45,0.12)',
            overflow: 'hidden'
          }}>
            <img 
              src={yogaImg} 
              alt="Profile" 
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                imageRendering: '-webkit-optimize-contrast'
              }} 
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
