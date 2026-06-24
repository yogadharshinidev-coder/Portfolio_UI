import React from 'react';
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi2';

interface ContactItem { icon: React.ElementType; label: string; value: string; href: string; accent: string; }

const CONTACT_ITEMS: ContactItem[] = [
  { icon: HiEnvelope, label:'Email',    value:'yogadharshinidev@gmail.com',  href:'mailto:yogadharshinidev@gmail.com', accent:'var(--navy)' },
  { icon: HiPhone,    label:'Phone',    value:'+91 9361352274',               href:'tel:9361352274',                    accent:'var(--blue)' },
  { icon: HiMapPin,   label:'Location', value:'Erode, Tamil Nadu, India',     href:'#',                                 accent:'var(--teal)' },
];

const Contact: React.FC = () => {
  const [form, setForm] = React.useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/yogadharshinidev@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });
      setSent(true);
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <section id="contact" className="section contact-section">
      {/* Animated Background mesh & Blobs */}
      <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0, overflow:'hidden', pointerEvents:'none', zIndex:0 }}>
        <div style={{ 
          position:'absolute', top:'-10%', left:'-10%', width:500, height:500,
          borderRadius:'50%', background:'radial-gradient(circle, rgba(148,191,206,0.12) 0%, transparent 70%)',
          animation: 'float-slow 15s ease-in-out infinite' 
        }} />
        <div style={{ 
          position:'absolute', bottom:'-10%', right:'-10%', width:500, height:500,
          borderRadius:'50%', background:'radial-gradient(circle, rgba(44,82,102,0.08) 0%, transparent 70%)',
          animation: 'float-slow 12s ease-in-out infinite reverse' 
        }} />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="sec-header reveal">
          <span className="sec-label">Contact</span>
          <h2 className="sec-title">
            Let's <span className="grad-text">Connect</span>
          </h2>
          <div className="divider" />
          <p className="sec-sub">
            Open to full-time roles and new opportunities. Let's build something great together.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'2fr 3fr', gap:32, alignItems:'start' }}>

          {/* Left info */}
          <div className="reveal-left sd-1" style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {CONTACT_ITEMS.map(({ icon:Icon, label, value, href, accent }) => (
              <a
                key={label} href={href}
                className="contact-pill-card"
                style={{
                  ['--card-accent' as string]: accent,
                  ['--card-accent-border' as string]: `${accent}40`,
                  ['--card-accent-glow' as string]: `${accent}0d`,
                  ['--card-accent-dim' as string]: `${accent}12`,
                } as React.CSSProperties}
              >
                <div className="contact-icon-wrapper">
                  <Icon size={20} style={{ color:accent }} />
                </div>
                <div style={{ minWidth:0, flex:1 }}>
                  <p style={{ fontSize:10, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:3 }}>
                    {label}
                  </p>
                  <p style={{ fontSize:13.5, fontWeight:700, color:'var(--navy)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                    {value}
                  </p>
                </div>
                <span className="contact-arrow" style={{ color:'#cbd5e1', fontSize:16, flexShrink:0, transition:'transform 0.2s' }}>→</span>
              </a>
            ))}
          </div>

          {/* Right form */}
          <div className="reveal-right sd-2 contact-glass-card" style={{
            padding:'clamp(20px, 5vw, 36px)',
          }}>
            <h3 style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:18, color:'var(--navy)', marginBottom:24 }}>
              Send a Message
            </h3>

            <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }} className="contact-form-row">
                <div>
                  <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                    Your Name *
                  </label>
                  <input type="text" name="name" value={form.name} onChange={change}
                    placeholder="Enter your name" required className="contact-input-field" />
                </div>
                <div>
                  <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                    Email Address *
                  </label>
                  <input type="email" name="email" value={form.email} onChange={change}
                    placeholder="example@example.com" required className="contact-input-field" />
                </div>
              </div>

              <div>
                <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                  Subject
                </label>
                <input type="text" name="subject" value={form.subject} onChange={change}
                  placeholder="Project Inquiry / Collaboration" className="contact-input-field" />
              </div>

              <div>
                <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                  Message *
                </label>
                <textarea name="message" value={form.message} onChange={change}
                  placeholder="Tell me about your project or opportunity..." required rows={5}
                  className="contact-input-field" style={{ resize:'vertical' }} />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="contact-btn-submit"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg,var(--teal),var(--teal-mid))'
                    : loading 
                      ? '#9ca3af' 
                      : undefined,
                  boxShadow: sent
                    ? '0 6px 20px var(--teal-border)'
                    : loading 
                      ? 'none' 
                      : undefined,
                  cursor: (loading || sent) ? 'default' : 'pointer',
                }}
              >
                {loading 
                  ? 'Sending...'
                  : sent
                    ? <><HiCheckCircle size={18}/>Message Sent Successfully!</>
                    : <><HiPaperAirplane size={18} className="submit-icon"/>Send Message</>
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          overflow: hidden;
          background: #ffffff;
        }
        
        .contact-glass-card {
          background: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(148, 191, 206, 0.25) !important;
          box-shadow: 0 24px 64px rgba(38, 71, 89, 0.08) !important;
          border-radius: 24px !important;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        .contact-glass-card:hover {
          border-color: rgba(148, 191, 206, 0.5) !important;
          box-shadow: 0 32px 80px rgba(38, 71, 89, 0.12) !important;
          transform: translateY(-4px);
        }

        .contact-pill-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(229, 231, 235, 0.8);
          border-radius: 18px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .contact-pill-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 4px;
          background: var(--card-accent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .contact-pill-card:hover {
          border-color: var(--card-accent-border);
          box-shadow: 0 12px 36px var(--card-accent-glow);
          transform: translateX(4px) translateY(-2px);
        }
        .contact-pill-card:hover::before {
          opacity: 1;
        }
        .contact-pill-card:hover .contact-arrow {
          transform: translateX(4px);
          color: var(--card-accent) !important;
        }
        
        .contact-icon-wrapper {
          width: 46px; height: 46px; border-radius: 12px; flex-shrink: 0;
          background: var(--card-accent-dim);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .contact-pill-card:hover .contact-icon-wrapper {
          transform: scale(1.1) rotate(6deg);
          box-shadow: 0 4px 12px var(--card-accent-glow);
        }

        .contact-input-field {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1.5px solid #e5e7eb;
          font-size: 14px;
          color: var(--navy);
          background: rgba(250, 250, 250, 0.8);
          outline: none;
          transition: all 0.25s ease;
          font-family: 'Outfit', sans-serif;
        }
        .contact-input-field:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 4px var(--teal-dim);
          background: #ffffff;
        }

        .contact-btn-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 800;
          color: #fff;
          background: linear-gradient(135deg, var(--navy), var(--blue));
          box-shadow: 0 8px 24px var(--blue-dim);
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .contact-btn-submit::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: all 0.6s ease;
        }
        .contact-btn-submit:hover:not(:disabled) {
          background: linear-gradient(135deg, var(--blue), var(--teal));
          box-shadow: 0 12px 32px var(--teal-border);
          transform: translateY(-2px);
        }
        .contact-btn-submit:hover:not(:disabled)::before {
          left: 100%;
        }
        .contact-btn-submit:active:not(:disabled) {
          transform: translateY(0);
        }
        .contact-btn-submit .submit-icon {
          transition: transform 0.3s ease;
        }
        .contact-btn-submit:hover .submit-icon {
          transform: translate(3px, -3px) scale(1.1);
        }

        @media (max-width: 900px) {
          #contact .wrap > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .contact-form-row { grid-template-columns: 1fr !important; gap: 18px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
