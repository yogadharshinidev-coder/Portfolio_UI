import React, { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Skills    from './components/Skills';
import Experience from './components/Experience';
import Projects  from './components/Projects';
import Education from './components/Education';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // For progress bars, trigger the width animation
            if (entry.target.classList.contains('progress-fill')) {
              const target = entry.target as HTMLElement;
              target.style.width = target.getAttribute('data-width') || '0%';
            }
          } else {
            entry.target.classList.remove('visible');
            if (entry.target.classList.contains('progress-fill')) {
              const target = entry.target as HTMLElement;
              target.style.width = '0%';
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .progress-fill'
    );
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div style={{ width:'100%', minHeight:'100vh', background:'#ffffff' }}>
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* Floating Scroll to Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 99,
            width: 48, height: 48, borderRadius: '50%',
            background: 'linear-gradient(135deg,#0f1c2d,#1a4a6e)',
            color: '#fff', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(15,28,45,.25)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <HiArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
