import React from 'react';
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi2';

interface ContactItem { icon: React.ElementType; label: string; value: string; href: string; accent: string; }

const CONTACT_ITEMS: ContactItem[] = [
  { icon: HiEnvelope, label:'Email',    value:'yogadharshinidev@gmail.com',  href:'mailto:yogadharshinidev@gmail.com', accent:'#0f1c2d' },
  { icon: HiPhone,    label:'Phone',    value:'+91 9361352274',               href:'tel:9361352274',                    accent:'#1a4a6e' },
  { icon: HiMapPin,   label:'Location', value:'Erode, Tamil Nadu, India',     href:'#',                                 accent:'#2dd4bf' },
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

  const inputBase: React.CSSProperties = {
    width:'100%', padding:'12px 16px', borderRadius:10,
    border:'1.5px solid #e5e7eb', fontSize:14, color:'#0f1c2d',
    background:'#fafafa', outline:'none',
    transition:'border-color .2s, box-shadow .2s',
    fontFamily:'Outfit, sans-serif',
  };

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor='#2dd4bf';
    e.target.style.boxShadow='0 0 0 3px rgba(45,212,191,.12)';
    e.target.style.background='#fff';
  };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor='#e5e7eb';
    e.target.style.boxShadow='none';
    e.target.style.background='#fafafa';
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="wrap">

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
                style={{
                  display:'flex', alignItems:'center', gap:16,
                  padding:'18px 20px', background:'#fff',
                  borderRadius:14, border:'1.5px solid #e5e7eb',
                  textDecoration:'none', transition:'all .22s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor=`${accent}50`;
                  el.style.boxShadow=`0 6px 24px ${accent}0f`;
                  el.style.transform='translateY(-2px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor='#e5e7eb';
                  el.style.boxShadow='none';
                  el.style.transform='';
                }}
              >
                <div style={{
                  width:44, height:44, borderRadius:12, flexShrink:0,
                  background:`${accent}12`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <Icon size={20} style={{ color:accent }} />
                </div>
                <div style={{ minWidth:0, flex:1 }}>
                  <p style={{ fontSize:10, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:3 }}>
                    {label}
                  </p>
                  <p style={{ fontSize:13.5, fontWeight:700, color:'#0f1c2d', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                    {value}
                  </p>
                </div>
                <span style={{ color:'#d1d5db', fontSize:16, flexShrink:0 }}>→</span>
              </a>
            ))}
          </div>

          {/* Right form */}
          <div className="reveal-right sd-2" style={{
            background:'#fff', borderRadius:18,
            border:'1.5px solid #e5e7eb', padding:'32px 32px',
            boxShadow:'0 4px 24px rgba(15,28,45,.05)',
          }}>
            <h3 style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:18, color:'#0f1c2d', marginBottom:24 }}>
              Send a Message
            </h3>

            <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                <div>
                  <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                    Your Name *
                  </label>
                  <input type="text" name="name" value={form.name} onChange={change}
                    placeholder="Enter your name" required style={inputBase} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                    Email Address *
                  </label>
                  <input type="email" name="email" value={form.email} onChange={change}
                    placeholder="example@example.com" required style={inputBase} onFocus={focus} onBlur={blur} />
                </div>
              </div>

              <div>
                <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                  Subject
                </label>
                <input type="text" name="subject" value={form.subject} onChange={change}
                  placeholder="Project Inquiry / Collaboration" style={inputBase} onFocus={focus} onBlur={blur} />
              </div>

              <div>
                <label style={{ display:'block', fontSize:11, fontWeight:700, color:'#9ca3af', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:6 }}>
                  Message *
                </label>
                <textarea name="message" value={form.message} onChange={change}
                  placeholder="Tell me about your project or opportunity..." required rows={5}
                  style={{ ...inputBase, resize:'vertical' }} onFocus={focus} onBlur={blur} />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                style={{
                  width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                  padding:'14px', borderRadius:12, border:'none',
                  cursor: (loading || sent) ? 'default' : 'pointer',
                  fontSize:14, fontWeight:700, color:'#fff',
                  background: sent
                    ? 'linear-gradient(135deg,#2dd4bf,#0ea5e9)'
                    : loading 
                      ? '#9ca3af' 
                      : 'linear-gradient(135deg,#0f1c2d,#1a4a6e)',
                  boxShadow: sent
                    ? '0 6px 20px rgba(45,212,191,.28)'
                    : loading 
                      ? 'none' 
                      : '0 6px 20px rgba(15,28,45,.2)',
                  transition:'all .25s',
                }}
                onMouseEnter={e => { if (!sent && !loading) { (e.currentTarget as HTMLElement).style.background='linear-gradient(135deg,#1a4a6e,#2dd4bf)'; }}}
                onMouseLeave={e => { if (!sent && !loading) { (e.currentTarget as HTMLElement).style.background='linear-gradient(135deg,#0f1c2d,#1a4a6e)'; }}}
              >
                {loading 
                  ? 'Sending...'
                  : sent
                    ? <><HiCheckCircle size={18}/>Message Sent Successfully!</>
                    : <><HiPaperAirplane size={18}/>Send Message</>
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .wrap > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
