import React from 'react';
import { HiCheckCircle, HiArrowTopRightOnSquare, HiArchiveBox, HiDocumentCheck, HiGlobeAlt, HiTrophy } from 'react-icons/hi2';
import { SiReact, SiTypescript, SiDotnet, SiBootstrap } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GrOracle } from 'react-icons/gr';

interface ProjectItem {
  title: string;
  subtitle: React.ReactNode;
  badge: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  accent: string;
  accentBg: string;
  link?: string;
  highlights: React.ReactNode[];
  stack: {
    name: string;
    Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
    color: string;
  }[];
}

const PROJECTS: ProjectItem[] = [
  {
    title:    'ERP Inventory Management System',
    subtitle: (
      <span>
        <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Frontend:</strong> React.js, TypeScript
      </span>
    ),
    badge:    'Enterprise ERP',
    icon:     HiArchiveBox,
    accent:   'var(--navy)',
    accentBg: 'var(--blue-dim)',
    highlights: [
      (
        <>
          Built <strong>React.js frontend</strong> using <strong>TanStack React Query</strong> for efficient server-state management, caching, background refetching, and API synchronization.
        </>
      ),
      (
        <>
          Designed clean, reusable <strong>React components</strong> using functional components and hooks, ensuring a <strong>professional, responsive, and user-friendly UI</strong>.
        </>
      ),
      (
        <>
          Enhanced application performance and reliability through <strong>background data refetching, query invalidation, and optimized API interaction</strong>.
        </>
      ),
    ],
    stack: [
      { name: 'React.js',       Icon: SiReact,           color: '#61dafb' },
      { name: 'TypeScript',     Icon: SiTypescript,       color: '#3178c6' },
      { name: 'TanStack Query', Icon: TbBrandReactNative, color: '#ff4154' },
    ],
  },
  {
    title:    'ERP Certification Management System',
    subtitle: (
      <span>
        <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Backend:</strong> ASP.NET Core MVC, Entity Framework Core , <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Frontend:</strong> Bootstrap 5 , <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Database:</strong> Oracle
      </span>
    ),
    badge:    'ASP.NET Core MVC',
    icon:     HiDocumentCheck,
    accent:   'var(--blue)',
    accentBg: 'var(--teal-dim)',
    highlights: [
      (
        <>
          Developed a Certification Auditing and Maintenance system using <strong>ASP.NET Core MVC</strong> and <strong>Entity Framework Core</strong> to manage the complete certification lifecycle, including expiry tracking, renewal workflows, and CBS system integration.
        </>
      ),
      (
        <>
          Designed a <strong>responsive and user-friendly interface</strong> using <strong>Bootstrap 5</strong>, delivering a clean and professional UI aligned with enterprise standards.
        </>
      ),
    ],
    stack: [
      { name: 'ASP.NET Core MVC', Icon: SiDotnet,    color: '#512bd4' },
      { name: 'EF Core',          Icon: SiDotnet,    color: '#512bd4' },
      { name: 'Bootstrap 5',      Icon: SiBootstrap, color: '#7952b3' },
      { name: 'Oracle DB',        Icon: GrOracle,    color: '#ea1b22' },
    ],
  },
  {
    title:    'Official Company Website · NavaNala Technologies',
    subtitle: (
      <span>
        <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>Website:</strong>{' '}
        <a
          href="https://navanalatech.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--teal)', fontWeight: 600, textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
        >
          navanalatech.com
        </a>
      </span>
    ),
    badge:    'Live Production',
    icon:     HiGlobeAlt,
    accent:   'var(--teal)',
    accentBg: 'rgba(56, 107, 130, 0.12)',
    link:     'https://navanalatech.com',
    highlights: [
      (
        <>
          Contributed to the UI design and development of the company&apos;s official website.
        </>
      ),
      (
        <>
          Recognized with an award for my contribution to the official company website.
        </>
      ),
    ],
    stack: [
      { name: 'UI / UX Design',  Icon: HiGlobeAlt, color: '#2C5266' },
      { name: 'Web Development', Icon: SiBootstrap, color: '#386B82' },
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
          Enterprise ERP solutions and web applications built with modern technologies and best practices.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: 24,
      }}>
        {PROJECTS.map((proj, i) => (
          <div
            key={proj.title}
            className={`reveal-scale sd-${i + 1}`}
            style={{
              background: '#fff',
              border: '1.5px solid #e5e7eb',
              borderRadius: 20,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all .3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = `0 16px 48px ${proj.accent}14`;
              el.style.borderColor = `${proj.accent}40`;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = '';
              el.style.boxShadow = 'none';
              el.style.borderColor = '#e5e7eb';
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${proj.accent}, var(--teal))` }} />

            {/* Card header */}
            <div style={{
              padding: '24px 28px 20px',
              background: `linear-gradient(135deg, ${proj.accentBg}, #fff)`,
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
            }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: proj.accentBg,
                border: `1px solid ${proj.accent}20`,
                flexShrink: 0,
              }}>
                <proj.icon size={26} style={{ color: proj.accent }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '3px 12px',
                  borderRadius: 999,
                  background: proj.accentBg,
                  color: proj.accent,
                  display: 'inline-block',
                  marginBottom: 8,
                }}>{proj.badge}</span>
                <h3 style={{
                  fontFamily: 'Outfit,sans-serif',
                  fontWeight: 800,
                  fontSize: 16.5,
                  color: 'var(--navy)',
                  lineHeight: 1.3,
                  margin: 0,
                }}>
                  {proj.title}
                </h3>
                <div style={{ fontSize: 12.5, color: '#64748b', marginTop: 5, lineHeight: 1.45 }}>
                  {proj.subtitle}
                </div>
              </div>
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit website"
                  style={{
                    color: proj.accent,
                    background: proj.accentBg,
                    padding: 6,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    textDecoration: 'none',
                    transition: 'transform .2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.15)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <HiArrowTopRightOnSquare size={16} />
                </a>
              ) : (
                <HiArrowTopRightOnSquare size={16} style={{ color: '#d1d5db', flexShrink: 0 }} />
              )}
            </div>

            {/* Card body */}
            <div style={{ padding: '22px 28px 24px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0, listStyle: 'none' }}>
                {proj.highlights.map((h, hi) => {
                  const isAward = proj.title.includes('Official') && hi === 1;
                  return (
                    <li key={hi} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: '#4b5563', lineHeight: 1.65 }}>
                      {isAward ? (
                        <HiTrophy size={16} style={{ color: '#d97706', flexShrink: 0, marginTop: 2 }} />
                      ) : (
                        <HiCheckCircle size={16} style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }} />
                      )}
                      <span style={{ flex: 1 }}>{h}</span>
                    </li>
                  );
                })}
              </ul>

              <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid #f3f4f6', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {proj.stack.map(({ name, Icon, color }) => (
                  <span key={name} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '5px 12px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    background: `${color}12`,
                    color,
                    border: `1px solid ${color}28`,
                  }}>
                    <Icon size={12} />{name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

