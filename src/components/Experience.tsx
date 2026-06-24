import React from 'react';
import { HiBriefcase, HiChevronDown, HiCheckCircle, HiMapPin, HiCalendar } from 'react-icons/hi2';

const EXPERIENCES = [
  {
    company: 'Navanala Technologies Private Limited',
    location: 'Erode',
    role: 'Full Stack Developer',
    period: 'Jul 2024 – Present',
    type: 'Full-time',
    accent: 'var(--navy)',
    accentBg: 'var(--blue-dim)',
    points: [
      'Designed and developed scalable ERP web applications using React.js, TypeScript, and ASP.NET Core Web API with Entity Framework Core.',
      'Built and maintained Express.js middleware services for API orchestration, request handling, and seamless frontend-backend integration.',
      'Developed reusable, type-safe React.js components and custom hooks to deliver responsive, enterprise-grade UIs with TypeScript.',
      'Built scalable RESTful APIs leveraging LINQ optimisation, asynchronous operations, and relational data mappings.',
      'Involved in the complete SDLC — requirement analysis, system design, development, testing, code reviews, and deployment.',
      'Participated in Agile ceremonies including stand-ups, sprint planning, retrospectives, and regression testing.',
    ],
    tags: ['React.js', 'TypeScript', 'Express.js', 'ASP.NET Core', 'EF Core', 'REST API', 'SQL Server', 'Agile'],
  },
  {
    company: 'Subiksam Software Solutions Pvt Ltd',
    location: 'Coimbatore',
    role: 'Backend Developer',
    period: 'Sep 2023 – Mar 2024',
    type: 'Internship',
    accent: 'var(--blue)',
    accentBg: 'var(--teal-dim)',
    points: [
      'Handled SQL database operations including writing and maintaining SQL queries and stored procedures.',
      'Supported backend development and database integration for client-facing business applications.',
    ],
    tags: ['SQL', 'Stored Procedures', 'Backend Development', 'Database'],
  },
];

const Experience: React.FC = () => {
  const [open, setOpen] = React.useState<number>(0);

  return (
    <section id="experience" className="section" style={{ background:'#fff' }}>
      <style>{`
        @media (max-width: 768px) {
          .experience-timeline-line {
            left: 12px !important;
          }
          .experience-dot {
            left: -1px !important;
          }
          .experience-card {
            margin-left: 32px !important;
          }
          .experience-card-header {
            padding: 16px 18px !important;
          }
          .experience-card-body {
            padding: 0 18px 18px !important;
          }
        }
      `}</style>
      <div className="wrap">

        {/* Header */}
        <div className="sec-header reveal">
          <span className="sec-label">Experience</span>
          <h2 className="sec-title">
            Professional <span className="grad-text">Journey</span>
          </h2>
          <div className="divider" />
        </div>

        {/* Timeline */}
        <div style={{ maxWidth:860, margin:'0 auto', position:'relative' }}>
          {/* Vertical line */}
          <div className="experience-timeline-line" style={{
            position:'absolute', top:0, bottom:0, left:20, width:2, borderRadius:2,
            background:'linear-gradient(to bottom,var(--navy),var(--teal),transparent)',
          }} />

          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {EXPERIENCES.map((exp, i) => (
              <div key={exp.company} className="reveal-left" style={{ position:'relative' }}>
                {/* Dot */}
                <div className="experience-dot" style={{
                  position:'absolute', top:26, left:6,
                  width:28, height:28, borderRadius:'50%',
                  background: exp.accentBg, border:`2px solid #fff`,
                  boxShadow:`0 0 0 3px ${exp.accent}35`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  zIndex:2,
                }}>
                  <HiBriefcase size={13} style={{ color:exp.accent }} />
                </div>

                {/* Card */}
                <div className="experience-card" style={{
                  marginLeft:56,
                  background:'#fff',
                  border:`1.5px solid ${open===i ? exp.accent+'55' : '#e5e7eb'}`,
                  borderRadius:16, overflow:'hidden',
                  boxShadow: open===i ? `0 8px 32px ${exp.accent}14` : 'none',
                  transition:'all .3s',
                }}>
                  <button
                    className="experience-card-header"
                    style={{
                      width:'100%', textAlign:'left',
                      padding:'20px 24px', display:'flex',
                      alignItems:'flex-start', gap:16,
                      background:'none', border:'none', cursor:'pointer',
                    }}
                    onClick={() => setOpen(open===i ? -1 : i)}
                  >
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:8, marginBottom:8 }}>
                        <span style={{
                          fontSize:11, fontWeight:700, padding:'3px 12px', borderRadius:999,
                          background:exp.accentBg, color:exp.accent,
                        }}>{exp.type}</span>
                        <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'#9ca3af' }}>
                          <HiCalendar size={11}/> {exp.period}
                        </span>
                        <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'#9ca3af' }}>
                          <HiMapPin size={11}/> {exp.location}
                        </span>
                      </div>
                      <h3 style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:16, color:'var(--navy)', margin:0 }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontSize:13, fontWeight:700, color:exp.accent, marginTop:3 }}>{exp.company}</p>
                    </div>
                    <HiChevronDown size={18} style={{
                      color:'#9ca3af', marginTop:4, flexShrink:0,
                      transform: open===i ? 'rotate(180deg)' : 'none',
                      transition:'transform .3s',
                    }} />
                  </button>

                  <div style={{ maxHeight: open===i ? 600 : 0, overflow:'hidden', transition:'max-height .35s ease' }}>
                    <div className="experience-card-body" style={{ padding:'0 24px 24px', borderTop:'1px solid #f3f4f6', paddingTop:16 }}>
                      <ul style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:16 }}>
                        {exp.points.map((p, pi) => (
                          <li key={pi} style={{ display:'flex', gap:10, fontSize:13.5, color:'#4b5563', lineHeight:1.65 }}>
                            <HiCheckCircle size={15} style={{ color:'var(--teal)', flexShrink:0, marginTop:2 }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                        {exp.tags.map(t => <span key={t} className="pill">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
