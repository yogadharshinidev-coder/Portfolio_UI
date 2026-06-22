import React, { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
// avatar image removed — using letter 'Y' instead

const NAV_LINKS = [
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'education',  label: 'Education'  },
  { id: 'contact',    label: 'Contact'    },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = '';
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          color: #334155;
          letter-spacing: .02em;
          transition: all .28s cubic-bezier(0.22, 1, 0.36, 1);
          white-space: nowrap;
          z-index: 1;
        }
        .nav-link::before {
          content: ''; position: absolute; inset: 0; border-radius: 999px;
          background: linear-gradient(90deg, rgba(45,212,191,0.06), rgba(26,74,110,0.04));
          opacity: 0; z-index: -1;
          transform: translateY(6px) scale(0.98); transition: all .28s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover { color: #0f1c2d; transform: translateY(-3px); }
        .nav-link:hover::before { opacity: 1; transform: translateY(0) scale(1); }
        .nav-link.nav-active { color: #083344; font-weight: 800; }
        .nav-link.nav-active::before { background: linear-gradient(90deg, rgba(45,212,191,0.14), rgba(26,74,110,0.08)); opacity: 1; transform: scale(1); }

        .nav-cta {
          position: relative;
          display: inline-flex; align-items: center; justify-content: center;
          gap: 10px; padding: 12px 26px; border-radius: 999px;
          background: linear-gradient(135deg, #06b6d4, #0f1724);
          color: #fff; font-size: 14px; font-weight: 800;
          text-decoration: none; letter-spacing: .04em;
          box-shadow: 0 8px 28px rgba(6,182,212,0.12);
          transition: transform .25s ease, box-shadow .25s ease;
          white-space: nowrap; overflow: hidden;
        }
        .nav-cta .arrow { opacity: 0.9; transform: translateX(0); transition: transform .22s ease; }
        .nav-cta:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 40px rgba(6,182,212,0.18); }
        .nav-cta:hover .arrow { transform: translateX(6px); }

        .logo-avatar {
          border-radius: 50%; display:flex; align-items:center; justify-content:center;
          transition: transform .22s cubic-bezier(0.22, 1, 0.36, 1);
          /* simple single round gradient, no outer ring or shadow */
          background: radial-gradient(circle at 30% 25%, #2dd4bf 0%, #06b6d4 45%, #0f4a6e 100%);
        }
        .logo-avatar:hover { transform: scale(1.04); }
        .logo-avatar .initial { color: #fff; }
        .logo-name { line-height:1.1; }
        .logo-title { font-family: 'Outfit, sans-serif'; font-weight:900; font-size:15px; color:#081426; margin:0; letter-spacing:-0.02em; }
        .logo-subtitle { font-size:11px; font-weight:800; color:#2dd4bf; margin:0; text-transform:uppercase; letter-spacing:.08em; }

        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-cta-wrap { display: none !important; }
          .nav-toggle  { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-toggle  { display: none !important; }
          .nav-mobile  { display: none !important; }
        }
      `}</style>

      <header style={{
        position: 'fixed', top: scrolled ? 16 : 0, left: 0, right: 0, zIndex: 200,
        margin: '0 auto', width: '100%', maxWidth: scrolled ? '1200px' : '100%',
        padding: scrolled ? '0 16px' : '0 4vw',
        transition: 'all .4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      }}>
        <div style={{
          width: '100%',
          background: scrolled ? 'rgba(255,255,255,0.65)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderRadius: scrolled ? 999 : 0,
          border: scrolled ? '1px solid rgba(255,255,255,0.8)' : '1px solid transparent',
          boxShadow: scrolled ? '0 12px 32px rgba(15,28,45,.06), inset 0 0 0 1px rgba(255,255,255,0.5)' : 'none',
          padding: scrolled ? '6px 12px 6px 20px' : '20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all .4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        }}>

          {/* ── Logo ── */}
          <a href="#hero" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none', flexShrink:0 }}>
            <div className="logo-avatar" style={{
              width: scrolled ? 36 : 48, height: scrolled ? 36 : 48, flexShrink: 0,
              transition: 'all .28s cubic-bezier(0.22, 1, 0.36, 1)'
            }}>
              <div className="initial" style={{
                fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: '#fff',
                fontSize: scrolled ? 15 : 18, lineHeight: 1
              }}>Y</div>
            </div>
            <div className="logo-name" style={{ transition: 'transform .4s', transform: scrolled ? 'scale(0.95)' : 'scale(1)', transformOrigin: 'left center', marginLeft: 8 }}>
              <p className="logo-title">Yogadharshini VR</p>
              <p className="logo-subtitle">Full Stack Developer</p>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="nav-desktop" style={{ display:'flex', alignItems:'center', gap:4 }}>
            {NAV_LINKS.map(l => (
              <a key={l.id} href={`#${l.id}`} className={`nav-link${active === l.id ? ' nav-active' : ''}`}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="nav-cta-wrap">
            <a href="#contact" className="nav-cta">Hire Me <span className="arrow">→</span></a>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setOpen(o => !o)}
            className="nav-toggle"
            style={{ 
              background:'rgba(15,28,45,0.05)', border:'none', cursor:'pointer', 
              padding:10, borderRadius: '50%', color:'#0f1c2d', display:'none',
              transition: 'background .2s'
            }}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={20}/> : <HiMenuAlt3 size={20}/>}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <div className="nav-mobile" style={{
          position: 'absolute', top: '100%', left: 16, right: 16, marginTop: 12,
          maxHeight: open ? 500 : 0, overflow:'hidden',
          transition:'all .4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: 24,
          border: open ? '1px solid rgba(255,255,255,0.8)' : 'none',
          boxShadow: open ? '0 24px 64px rgba(15,28,45,.12)' : 'none',
          opacity: open ? 1 : 0,
        }}>
          <div style={{ padding:'12px 16px 18px', display:'flex', flexDirection:'column', gap:8 }}>
            <div style={{ display:'flex', alignItems:'center', gap:12, padding:'8px 4px 12px', borderBottom:'1px solid rgba(15,28,45,0.04)' }}>
              <div className="logo-avatar" style={{ width:48, height:48 }}>
                <div className="initial" style={{ fontFamily: 'Outfit, sans-serif', fontWeight:900, color:'#fff', fontSize:18 }}>Y</div>
              </div>
              <div style={{ lineHeight:1 }}>
                <p className="logo-title" style={{ margin:0 }}>Yogadharshini VR</p>
                <p className="logo-subtitle" style={{ margin:0 }}>Full Stack Developer</p>
              </div>
            </div>
            {NAV_LINKS.map(l => (
              <a
                key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}
                style={{
                  padding:'14px 18px', borderRadius:14,
                  fontSize:15, fontWeight:700, textDecoration:'none',
                  color: active === l.id ? '#1a4a6e' : '#4b5563',
                  background: active === l.id ? 'rgba(45,212,191,.15)' : 'transparent',
                  transition:'all .2s',
                }}
              >{l.label}</a>
            ))}
            <a
              href="#contact" onClick={() => setOpen(false)}
              style={{
                marginTop:16, padding:'16px', borderRadius:16,
                fontSize:15, fontWeight:800, textDecoration:'none', textAlign:'center',
                background:'linear-gradient(135deg,#0f1c2d,#1a4a6e)', color:'#fff',
                boxShadow:'0 8px 24px rgba(15,28,45,.2)'
              }}
            >Hire Me →</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
