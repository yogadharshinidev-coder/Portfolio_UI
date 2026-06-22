import React from 'react';
import { HiAcademicCap, HiMapPin, HiCalendar, HiStar } from 'react-icons/hi2';

const SUBJECTS = ['Commerce', 'Business Management', 'Accounting', 'Economics', 'Statistics'];

const Education: React.FC = () => (
  <section id="education" className="section" style={{ background:'#fff' }}>
    <div className="wrap">

      {/* Header */}
      <div className="sec-header reveal">
        <span className="sec-label">Education</span>
        <h2 className="sec-title">
          Academic <span className="grad-text">Background</span>
        </h2>
        <div className="divider" />
      </div>

      {/* Card */}
      <div className="reveal-left" style={{
        maxWidth: 860, margin:'0 auto',
        background:'#fff',
        border:'1.5px solid #e5e7eb',
        borderRadius:20, overflow:'hidden',
        boxShadow:'0 8px 40px rgba(15,28,45,.06)',
      }}>
        {/* Top accent */}
        <div style={{ height:4, background:'linear-gradient(90deg,#0f1c2d,#1a4a6e,#2dd4bf)' }} />

        <div style={{ padding:'36px 40px', display:'flex', gap:32, alignItems:'flex-start', flexWrap:'wrap' }}>

          {/* Icon */}
          <div style={{
            width:72, height:72, borderRadius:18,
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
            background:'linear-gradient(135deg,#0f1c2d,#1a4a6e)',
          }}>
            <HiAcademicCap size={32} style={{ color:'#2dd4bf' }} />
          </div>

          {/* Content */}
          <div style={{ flex:1, minWidth:260 }}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:16 }}>
              <span className="pill"><HiCalendar size={11} style={{ marginRight:2 }} /> 2019 – 2022</span>
              <span className="pill"><HiMapPin size={11} style={{ marginRight:2 }} /> Erode, Tamil Nadu</span>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:5,
                fontSize:11, fontWeight:700, padding:'4px 12px', borderRadius:999,
                background:'#fef9c3', color:'#a16207', border:'1px solid #fde68a',
              }}>
                <HiStar size={11} /> 75% Score
              </span>
            </div>

            <h3 style={{
              fontFamily:'Outfit,sans-serif',
              fontWeight:900, fontSize:22, color:'#0f1c2d', marginBottom:4,
            }}>
              Bachelor of Commerce (B.COM)
            </h3>
            <p style={{ fontSize:15, fontWeight:700, color:'#1a4a6e', marginBottom:14 }}>
              Kongu Arts and Science College
            </p>
            <p style={{ fontSize:14, color:'#6b7280', lineHeight:1.72, marginBottom:20 }}>
              Completed B.COM with a strong academic record, building a solid foundation in business principles,
              commerce, and analytical thinking — skills that directly inform my structured approach to software development.
            </p>

            {/* Progress bar */}
            <div style={{ marginBottom:20 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }}>
                <span style={{ fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em' }}>
                  Academic Score
                </span>
                <span style={{ fontSize:13, fontWeight:900, color:'#0f1c2d' }}>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" data-width="75%" style={{ width:'0%' }} />
              </div>
            </div>

            {/* Subjects */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
              {SUBJECTS.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* ── Course Card – C-Cube Technology ── */}
      <div className="reveal-left sd-1" style={{
        maxWidth: 860, margin: '20px auto 0',
        background: '#fff',
        border: '1.5px solid #e5e7eb',
        borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(15,28,45,.06)',
      }}>
        {/* Teal accent bar */}
        <div style={{ height: 4, background: 'linear-gradient(90deg,#2dd4bf,#0ea5e9)' }} />

        <div style={{ padding: '28px 40px', display: 'flex', gap: 28, alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Icon */}
          <div style={{
            width: 60, height: 60, borderRadius: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            background: 'linear-gradient(135deg,#2dd4bf,#0ea5e9)',
          }}>
            <HiAcademicCap size={26} style={{ color: '#fff' }} />
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
              <span className="pill">
                <HiCalendar size={11} style={{ marginRight: 2 }} /> 1 Year Course
              </span>
              <span className="pill">
                <HiMapPin size={11} style={{ marginRight: 2 }} /> Erode
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999,
                background: 'rgba(45,212,191,.1)', color: '#0f766e', border: '1px solid rgba(45,212,191,.3)',
              }}>
                Professional Course
              </span>
            </div>

            <h3 style={{
              fontFamily: 'Outfit,sans-serif',
              fontWeight: 900, fontSize: 19, color: '#0f1c2d', marginBottom: 4,
            }}>
              ASP.NET Core with C#
            </h3>
            <p style={{ fontSize: 14, fontWeight: 700, color: '#2dd4bf', marginBottom: 12 }}>
              C-Cube Technology
            </p>
            <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.72 }}>
              Completed a focused one-year professional course on ASP.NET Core with C#, gaining hands-on
              experience in building web applications, RESTful APIs, and server-side development — forming the
              technical foundation for my enterprise development career.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
              {['ASP.NET Core', 'C#', 'Web API', 'MVC', 'SQL Server'].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Education;
