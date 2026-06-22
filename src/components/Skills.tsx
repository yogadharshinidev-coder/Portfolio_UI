import React from 'react';
import {
  SiSharp, SiJavascript, SiTypescript, SiDotnet, SiReact,
  SiGithub, SiBootstrap, SiSwagger, SiTailwindcss, SiHtml5, SiCss, SiPostgresql,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import {
  HiCodeBracket, HiCircleStack, HiCpuChip,
  HiWrenchScrewdriver, HiBuildingOffice2, HiCommandLine, HiWindow,
} from 'react-icons/hi2';

interface Skill {
  name: string;
  Icon: React.ElementType;
  color: string;
  category: string;
}

const SKILLS: Skill[] = [
  { name: 'React.js',          Icon: SiReact,            color: '#61dafb', category: 'Frontend'  },
  { name: 'TypeScript',        Icon: SiTypescript,        color: '#3178c6', category: 'Frontend'  },
  { name: 'JavaScript',        Icon: SiJavascript,        color: '#f7df1e', category: 'Frontend'  },
  { name: 'HTML5',             Icon: SiHtml5,             color: '#e34f26', category: 'Frontend'  },
  { name: 'CSS3',              Icon: SiCss,               color: '#1572b6', category: 'Frontend'  },
  { name: 'Tailwind CSS',      Icon: SiTailwindcss,       color: '#06b6d4', category: 'Frontend'  },
  { name: 'Bootstrap 5',       Icon: SiBootstrap,         color: '#7952b3', category: 'Frontend'  },
  { name: 'TanStack Query',    Icon: TbBrandReactNative,  color: '#ff4154', category: 'Frontend'  },
  { name: 'C#',                Icon: SiSharp,             color: '#9b59b6', category: 'Backend'   },
  { name: 'ASP.NET Core',      Icon: SiDotnet,            color: '#512bd4', category: 'Backend'   },
  { name: 'Entity Framework',  Icon: HiCircleStack,       color: '#7c5cbf', category: 'Backend'   },
  { name: 'Express.js',        Icon: HiCodeBracket,       color: '#0f1c2d', category: 'Backend'   },
  { name: 'RESTful API',       Icon: HiCodeBracket,       color: '#2dd4bf', category: 'Backend'   },
  { name: 'MVC',               Icon: HiCpuChip,           color: '#1a4a6e', category: 'Backend'   },
  { name: 'SQL Server',        Icon: HiCircleStack,       color: '#cc2927', category: 'Database'  },
  { name: 'PostgreSQL',        Icon: SiPostgresql,        color: '#336791', category: 'Database'  },
  { name: 'Oracle DB',         Icon: HiCircleStack,       color: '#f80000', category: 'Database'  },
  { name: 'LINQ',              Icon: HiCodeBracket,       color: '#2dd4bf', category: 'Database'  },
  { name: 'Swagger',           Icon: SiSwagger,           color: '#85c40c', category: 'Tools'     },
  { name: 'GitHub',            Icon: SiGithub,            color: '#24292e', category: 'Tools'     },
  { name: 'Visual Studio',     Icon: HiWindow,            color: '#9b59b6', category: 'Tools'     },
  { name: 'VS Code',           Icon: HiCommandLine,       color: '#007acc', category: 'Tools'     },
  { name: 'ERP Systems',       Icon: HiBuildingOffice2,   color: '#1a4a6e', category: 'Domain'    },
  { name: 'Agile / SDLC',     Icon: HiWrenchScrewdriver, color: '#f97316', category: 'Domain'    },
];

// "All" removed — only category tabs
const CATS = ['Frontend', 'Backend', 'Database', 'Tools', 'Domain'];

const Skills: React.FC = () => {
  const [active, setActive] = React.useState('Frontend');
  const filtered = SKILLS.filter(s => s.category === active);

  return (
    <section id="skills" className="section section-alt">
      <style>{`
        .skill-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 28px 16px 22px;
          background: #fff;
          border: 1.5px solid #e5e7eb;
          border-radius: 18px;
          cursor: default;
          text-align: center;
          transition: border-color .25s, box-shadow .25s, transform .25s;
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--card-c1), var(--card-c2));
          opacity: 0;
          transition: opacity .25s;
        }
        .skill-card:hover { border-color: rgba(45,212,191,.35); box-shadow: 0 10px 36px rgba(45,212,191,.12); transform: translateY(-5px); }
        .skill-card:hover::before { opacity: 1; }

        .skill-icon-box {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          background: #f8fafc; border: 1.5px solid #e5e7eb;
          transition: background .25s, border-color .25s, box-shadow .25s;
        }
        .skill-card:hover .skill-icon-box {
          background: #f0fffe;
          border-color: rgba(45,212,191,.35);
          box-shadow: 0 4px 14px rgba(45,212,191,.15);
        }

        .filter-btn {
          padding: 9px 22px; border-radius: 999px;
          font-size: 13px; font-weight: 700;
          border: 1.5px solid #e5e7eb;
          cursor: pointer; transition: all .22s;
          letter-spacing: .02em; white-space: nowrap;
        }
        .filter-btn:not(.f-on) { background: #fff; color: #6b7280; }
        .filter-btn:not(.f-on):hover { border-color: rgba(45,212,191,.4); color: #2dd4bf; background: rgba(45,212,191,.05); }
        .filter-btn.f-on {
          background: linear-gradient(135deg, #0f1c2d, #1a4a6e);
          color: #fff; border-color: transparent;
          box-shadow: 0 4px 18px rgba(15,28,45,.22);
        }
      `}</style>

      <div className="wrap">

        {/* ── Header ── */}
        <div className="sec-header reveal">
          <span className="sec-label">Skills &amp; Expertise</span>
          <h2 className="sec-title">
            My <span className="grad-text">Tech Stack</span>
          </h2>
          <div className="divider" />
          <p className="sec-sub">
            Technologies I use to build modern, scalable enterprise applications.
          </p>
        </div>

        {/* ── Filter Tabs (no "All") ── */}
        <div className="reveal sd-2" style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: 10,
          marginBottom: 48,
        }}>
          {CATS.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-btn${active === cat ? ' f-on' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Skills Grid – centered ── */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 16,
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {filtered.map(({ name, Icon, color }, i) => (
            <div
              key={name}
              className="skill-card"
              style={{
                width: 140,
                ['--card-c1' as string]: color,
                ['--card-c2' as string]: '#2dd4bf',
                animation: 'scaleUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                animationDelay: `${i * 0.06}s`,
                opacity: 0,
              } as React.CSSProperties}
            >
              <div className="skill-icon-box">
                <Icon size={26} style={{ color }} />
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#0f1c2d', lineHeight: 1.3 }}>
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
