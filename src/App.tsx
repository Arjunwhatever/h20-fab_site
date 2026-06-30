import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Partnerships from './Partnerships';
import OurPlatform from './OurPlatform';
import ProblemSection from './ProblemSection';

export default function App() {
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById('nav');
      if (navElement) {
        setIsNavStuck(navElement.getBoundingClientRect().top <= 0);
      }

      const footerElement = document.getElementById('footer');
      if (footerElement) {
        setIsOverFooter(footerElement.getBoundingClientRect().top <= window.innerHeight / 2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = (
    <nav className="nav-inner">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#platform">Platform</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact +</button>
    </nav>
  );

  return (
    <>
      {/* SVG FILTER FOR GLASS DISTORTION */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <filter id="glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" />
        </filter>
      </svg>

      {/* STUCK NAV (TOP LEVEL FOR Z-INDEX) */}
      <div className={`nav stuck ${isOverFooter ? 'over-footer' : ''}`} style={{ zIndex: 9999, opacity: isNavStuck ? 1 : 0, pointerEvents: isNavStuck ? 'auto' : 'none', transition: 'opacity 0.2s ease-in-out' }}>
        {NavContent}
      </div>

      <div style={{
        position: 'relative',
        zIndex: 0,
        backgroundColor: '#F0F4F8',
        backgroundImage: 'linear-gradient(to right, color-mix(in oklab, var(--lime) 45%, transparent) 2px, transparent 2px), linear-gradient(to bottom, color-mix(in oklab, var(--lime) 45%, transparent) 2px, transparent 2px)',
        backgroundSize: '3rem 3rem'
      }}>
        {/* HERO */}
        <section className="hero" style={{ background: 'transparent', overflow: 'hidden', zIndex: 10 }}>
          <div className="hero-top">
            <img src="/image-ee111a5a.svg" alt="WaterNFabric" className="logo-img" />
            <div className="hero-signin">
              <button className="btn-glass">Sign in</button>
            </div>
          </div>

          <div className="hero-vid" style={{ height: '100%' }}>
            <video src="https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/d0b6af83-f582-4bb3-9a35-60ebdc4146b9/footer-water.mp4" autoPlay loop muted playsInline preload="auto" />
          </div>

          <div className="hero-row" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="hero-caption" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '900px' }}>
              <h2 style={{ fontFamily: '"Roboto Mono", monospace', color: 'var(--lime)', fontSize: 'clamp(3.5rem, 6.5vw, 6rem)', fontWeight: 600, letterSpacing: '-0.04em', textAlign: 'center', lineHeight: 1.1 }}>
                The garment that never forgets.
              </h2>
              <p style={{ fontFamily: '"DM Sans", sans-serif', color: 'color-mix(in oklab, var(--lilac) 85%, white)', fontSize: '1.25rem', lineHeight: 1.6, textAlign: 'justify', maxWidth: '600px', margin: '1.5rem 0 2.5rem 0' }}>
                Give every garment a digital identity by connecting factory data, sustainability information, and compliance records in one ESPR-ready Digital Product Passport.
              </p>
              <div className="hero-ctas" style={{ justifyContent: 'center' }}>
                <a href="https://calendly.com/hello-waternfabric/30min" target="_blank" rel="noreferrer" className="btn-glass-blue" style={{ textDecoration: 'none' }}>Book a Call →</a>
              </div>
            </div>
          </div>

          <div className={`nav`} id="nav" style={{ opacity: isNavStuck ? 0 : 1, pointerEvents: isNavStuck ? 'none' : 'auto', transition: 'opacity 0.2s ease-in-out' }}>
            {NavContent}
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <ProblemSection />
      </div>

      {/* PARTNERSHIPS */}
      <Partnerships />


      <OurPlatform />
      {/* GARMENT ECOSYSTEM */}
      <section id="about" className="section bg-white">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">// About us</div>
              <h2 className="h2">The <span className="italic text-gradient">breathing</span><br />hoodie.</h2>
              <p style={{ fontFamily: '"Roboto Mono", monospace', fontSize: '20px', lineHeight: '1.6', color: 'oklch(0.52 .22 255 /.8)', maxWidth: '42rem', marginTop: '1.5rem', textAlign: 'justify' }}>At Water & Fabric we start with a pin on a map. We built tools that work with what factories already have. We run lifecycle assessments, show manufacturers exactly which small changes improve their environmental score, and generate a verified Digital Product Passport. Then we keep that record open, through every owner, every resale, permanently.</p>
            </div>
            <div className="eco-wrap" style={{ margin: 0, marginLeft: '4rem' }}>
              <div className="eco-glow1" />
              <div className="eco-glow2" />
              <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }} aria-hidden>
                <defs><marker id="arr" viewBox="0 0 10 10" refX={6} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10z" fill="currentColor" /></marker></defs>
                <path d="M 55.85 2.36 A 48 48 0 0 1 88.33 21.11" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{ color: 'oklch(0.58 .24 256 /.45)' }} markerEnd="url(#arr)" />
                <path d="M 94.18 31.24 A 48 48 0 0 1 94.18 68.76" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{ color: 'oklch(0.58 .24 256 /.45)' }} markerEnd="url(#arr)" />
                <path d="M 88.33 78.89 A 48 48 0 0 1 55.85 97.64" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{ color: 'oklch(0.58 .24 256 /.45)' }} markerEnd="url(#arr)" />
                <path d="M 44.15 97.64 A 48 48 0 0 1 11.67 78.89" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{ color: 'oklch(0.58 .24 256 /.45)' }} markerEnd="url(#arr)" />
                <path d="M 5.82 68.76 A 48 48 0 0 1 5.82 31.24" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{ color: 'oklch(0.58 .24 256 /.45)' }} markerEnd="url(#arr)" />
                <path d="M 11.67 21.11 A 48 48 0 0 1 44.15 2.36" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{ color: 'oklch(0.58 .24 256 /.45)' }} markerEnd="url(#arr)" />
              </svg>
              <div className="eco-center"><img src="/image-0f7b5548.png" alt="Glass hoodie" className="float" /></div>
              
              <div className="eco-node float" style={{ left: '50.00%', top: '2.00%', animationDelay: '0s' }}>
                <div className="eco-orb icon-pop">
                  <img src="/node-img2.png" alt="Drop a pin" style={{ transform: 'scale(1.2)' }} />
                  <span className="eco-num" style={{ background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--cyan-glow) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--cyan-glow) 60%,transparent)' }}>1</span>
                </div>
                <span className="eco-label" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--cyan-glow) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--cyan-glow) 55%,transparent)' }}>Drop a pin</span>
                <span className="eco-cap">01 · Origin</span>
              </div>
              
              <div className="eco-node float" style={{ left: '91.57%', top: '26.00%', animationDelay: '0.4s' }}>
                <div className="eco-orb icon-pop">
                  <img src="/image-3eeef083.png" alt="Factory Input" style={{ filter: 'hue-rotate(-180deg) saturate(1.5)' }} />
                  <span className="eco-num" style={{ background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,oklch(0.7 0.15 45) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,oklch(0.7 0.15 45) 60%,transparent)' }}>2</span>
                </div>
                <span className="eco-label" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,oklch(0.7 0.15 45) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,oklch(0.7 0.15 45) 55%,transparent)' }}>Factory Input</span>
                <span className="eco-cap">02 · Ingestion</span>
              </div>
              
              <div className="eco-node float" style={{ left: '91.57%', top: '74.00%', animationDelay: '0.8s' }}>
                <div className="eco-orb icon-pop">
                  <img src="/what-if-custom.png?v=2" alt="What-If Simulator" style={{ transform: 'scale(1.3)' }} />
                  <span className="eco-num" style={{ background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--cyan-glow) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--cyan-glow) 60%,transparent)' }}>3</span>
                </div>
                <span className="eco-label" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--cyan-glow) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--cyan-glow) 55%,transparent)' }}>What-If Simulator</span>
                <span className="eco-cap">03 · Simulation</span>
              </div>
              
              <div className="eco-node float" style={{ left: '50.00%', top: '98.00%', animationDelay: '1.2s' }}>
                <div className="eco-orb icon-pop">
                  <img src="/image-8dc35e0a.png" alt="Product Passport" />
                  <span className="eco-num" style={{ background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--lime) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--lime) 60%,transparent)' }}>4</span>
                </div>
                <span className="eco-label" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--lime) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--lime) 55%,transparent)' }}>Product Passport</span>
                <span className="eco-cap">04 · Verified</span>
              </div>
              
              <div className="eco-node float" style={{ left: '8.43%', top: '74.00%', animationDelay: '1.6s' }}>
                <div className="eco-orb icon-pop">
                  <img src="/image-17ef5c6e.png" alt="Consumer QR Scan" />
                  <span className="eco-num" style={{ background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--cyan-glow) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--cyan-glow) 60%,transparent)' }}>5</span>
                </div>
                <span className="eco-label" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--cyan-glow) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--cyan-glow) 55%,transparent)' }}>Consumer QR Scan</span>
                <span className="eco-cap">05 · Unlock</span>
              </div>
              
              <div className="eco-node float" style={{ left: '8.43%', top: '26.00%', animationDelay: '2.0s' }}>
                <div className="eco-orb icon-pop">
                  <img src="/image-96812d28.png" alt="One-Scan Resale" />
                  <span className="eco-num" style={{ background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--lilac) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--lilac) 60%,transparent)' }}>6</span>
                </div>
                <span className="eco-label" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--lilac) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--lilac) 55%,transparent)' }}>One-Scan Resale</span>
                <span className="eco-cap">06 · Circular</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE RIBBON */}
      <div className="marquee-ribbon">
        <div className="marquee-content">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="marquee-text">
              Sanjoy Das, Dekko Legacy said "A platform starting from the supplier side is exactly what is missing." &nbsp;&bull;&nbsp; The Market Stat is "Unlocking the $700B Post-Purchase Market by 2030 (Bain x eBay)" &nbsp;&bull;&nbsp; The Value Prop is Resale, Rental & Repair: Doubling Product Lifetime Value &nbsp;&bull;&nbsp; The Enabler is Digital Product Passports (DPP): The Key to Circular Revenue &nbsp;&bull;&nbsp; The Future Outlook is From Factory Floor to Global Resale: The $700B Opportunity &nbsp;&bull;&nbsp;
            </span>
          ))}
        </div>
      </div>
      {/* CONTACT */}
      <div style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundColor: 'var(--lime)',
        backgroundImage: 'linear-gradient(to right, color-mix(in oklab, var(--primary) 45%, transparent) 2px, transparent 2px), linear-gradient(to bottom, color-mix(in oklab, var(--primary) 45%, transparent) 2px, transparent 2px)',
        backgroundSize: '3rem 3rem'
      }}>
        <section id="contact" className="section">
          <div className="wrap">
            <div className="card-wrapper stagger-grid">

              {/* Left Side: Header & Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'sticky', top: '120px' }}>
                <div>
                  <div className="eyebrow">// Contact +</div>
                  <h2 className="h2">Say <span className="italic text-gradient">hello.</span></h2>
                  <p className="body" style={{ maxWidth: '36rem', marginTop: '1rem' }}>Drop us a line, book a live walk-through, or send a quick enquiry — whichever feels right.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <a href="https://calendly.com/hello-waternfabric/30min" target="_blank" rel="noreferrer" className="glass-strong" style={{ borderRadius: '2rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                    <div className="eyebrow">// Sales demo</div>
                    <h3 style={{ fontFamily: '"DM Sans"', fontSize: '1.5rem', color: 'var(--primary)' }}>Book a live <span className="italic text-gradient">walk-through.</span></h3>
                    <p style={{ fontFamily: '"Roboto Mono"', fontSize: 16, lineHeight: '1.6', color: 'oklch(0.52 .22 255 /.7)' }}>30 minutes with the team. We'll map your supply chain on-screen.</p>
                    <span style={{ marginTop: '.5rem', fontFamily: '"Roboto Mono"', fontSize: 15, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--primary)' }}>Pick a slot →</span>
                  </a>
                  <a href="mailto:hello@waternfabric.co.uk" className="glass-strong" style={{ borderRadius: '2rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                    <div className="eyebrow">// Enquiry email</div>
                    <h3 style={{ fontFamily: '"DM Sans"', fontSize: '1.5rem', color: 'var(--primary)' }}>hello@<span className="italic text-gradient">waternfabric.co.uk</span></h3>
                    <p style={{ fontFamily: '"Roboto Mono"', fontSize: 16, lineHeight: '1.6', color: 'oklch(0.52 .22 255 /.7)' }}>Opens a pre-filled draft in your mail client.</p>
                  </a>
                </div>
              </div>

              {/* Right Side: Form */}
              <form className="glass-strong" style={{ borderRadius: '2rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }} onSubmit={(e) => { e.preventDefault(); const target = e.target as any; window.location.href = 'mailto:hello@waternfabric.co.uk?subject=Hello&body=' + encodeURIComponent(target.message.value); }}>
                <div className="eyebrow">// Direct message</div>
                <div className="grid cols-2" style={{ gap: '1rem' }}>
                  <input className="input-glass" name="name" required placeholder="Your name" />
                  <input className="input-glass" name="email" type="email" required placeholder="Email" />
                </div>
                <textarea className="input-glass" name="message" style={{ flexGrow: 1, resize: 'none', minHeight: '120px' }} required placeholder="Tell us a little about what you're working on…" defaultValue={""} />
                <button type="submit" className="btn-primary" style={{ width: 'fit-content', display: 'inline-flex', alignItems: 'center', gap: '.75rem', marginTop: '1rem' }}>
                  Send message
                  <span style={{ display: 'grid', placeItems: 'center', width: '1.25rem', height: '1.25rem', borderRadius: 999, background: 'var(--primary-fg)', color: 'var(--primary)' }}>→</span>
                </button>
              </form>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
