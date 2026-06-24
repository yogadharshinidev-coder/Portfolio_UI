import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiEnvelope, HiPhone } from 'react-icons/hi2';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yogadharshini-v-041587272',
    Icon: FaLinkedinIn,
    color: '#0A66C2',
    bg: 'rgba(10,102,194,.14)',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yogadharshini-vr',
    Icon: FaGithub,
    color: '#e2e8f0',
    bg: 'rgba(255,255,255,.08)',
  },
  {
    label: 'Email',
    href: 'mailto:yogadharshinidev@gmail.com',
    Icon: HiEnvelope,
    color: '#94bfce',
    bg: 'rgba(148,191,206,.15)',
  },
];

const TECH_TAGS = [
  'React.js', 'TypeScript', 'Express.js',
  '.NET Web API', 'C#', 'SQL Server', 'ERP Systems',
];

const Footer: React.FC = () => (
  <footer style={{
    width: '100%',
    background: 'var(--navy)',
    borderTop: '1px solid rgba(255,255,255,.07)',
    paddingTop: 52,
    paddingBottom: 32,
  }}>
    <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '0 4vw' }}>

      {/* ── Top row ── */}
      <div className="reveal" style={{
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'flex-start', justifyContent: 'space-between',
        gap: 40, marginBottom: 40,
        paddingBottom: 36, borderBottom: '1px solid rgba(255,255,255,.07)',
      }}>

        {/* Brand + bio + socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 280 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg,var(--blue),var(--teal))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 11, fontWeight: 900,
              fontFamily: 'Outfit, sans-serif',
            }}>YV</div>
            <div>
              <p style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 800, fontSize: 14, color: '#f1f5f9', margin: 0 }}>
                Yogadharshini VR
              </p>
              <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', margin: 0 }}>
                Full Stack Developer
              </p>
            </div>
          </div>

          <p style={{ fontSize: 13, color: '#cbd5e1', lineHeight: 1.72 }}>
            Building scalable enterprise web applications with React.js, Express.js &amp; .NET Web API.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 10, paddingTop: 4 }}>
            {SOCIALS.map(({ label, href, Icon, color, bg }) => {
              const isMail = href.startsWith('mailto:');
              return (
                <a
                  key={label}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: bg,
                    border: '1px solid rgba(255,255,255,.1)',
                    color, textDecoration: 'none',
                    transition: 'all .22s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(-3px)';
                    el.style.boxShadow = `0 6px 16px ${color}40`;
                    el.style.borderColor = color;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = '';
                    el.style.boxShadow = 'none';
                    el.style.borderColor = 'rgba(255,255,255,.1)';
                  }}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#94bfce', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            Navigate
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {NAV_LINKS.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{ fontSize: 14, fontWeight: 500, color: '#cbd5e1', textDecoration: 'none', transition: 'color .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#94bfce'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#cbd5e1'; }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#94bfce', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            Tech Stack
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TECH_TAGS.map(tag => (
              <span key={tag} style={{ fontSize: 13, color: '#cbd5e1' }}>
                · {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#94bfce', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            Contact
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href="mailto:yogadharshinidev@gmail.com"
              style={{ fontSize: 13, color: '#cbd5e1', textDecoration: 'none', transition: 'color .2s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#94bfce'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#cbd5e1'; }}
            >
              <HiEnvelope size={14} style={{ color: '#94bfce' }} />
              yogadharshinidev@gmail.com
            </a>
            <a
              href="tel:+919361352274"
              style={{ fontSize: 13, color: '#cbd5e1', textDecoration: 'none', transition: 'color .2s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#94bfce'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#cbd5e1'; }}
            >
              <HiPhone size={14} style={{ color: '#94bfce' }} />
              +91 9361352274
            </a>
            <span style={{ fontSize: 13, color: '#94a3b8' }}>Erode, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between', gap: 12,
      }}>
        <p style={{ fontSize: 12, color: '#94a3b8' }}>
          © {new Date().getFullYear()} Yogadharshini VR. All rights reserved.
        </p>
        <p style={{ fontSize: 12, color: '#94a3b8' }}>
          Full Stack Developer · Erode, Tamil Nadu
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
