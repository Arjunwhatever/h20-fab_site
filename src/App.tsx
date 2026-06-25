import React, { useEffect } from 'react';
import Footer from './Footer';
import Partnerships from './Partnerships';

export default function App() {
  return (
    <>
      <div>
  {/* HERO */}
  <section className="hero">
    <div className="hero-top">
      <img src="/image-ee111a5a.svg" alt="WaterNFabric" className="logo-img" />
      <div className="hero-signin">
        <button className="btn-lime">Sign in</button>
      </div>
    </div>
    <div className="hero-vid">
      <video src="https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/d0b6af83-f582-4bb3-9a35-60ebdc4146b9/footer-water.mp4" autoPlay loop muted playsInline preload="auto" />
    </div>
    <div className="hero-row">
      <h1 className="wordmark"><span>Water</span><svg viewBox="0 0 120 80" aria-hidden fill="none" stroke="currentColor" strokeWidth={14} strokeLinecap="round"><path d="M10 70 C 10 20, 50 20, 60 50 C 70 80, 110 80, 110 30" /></svg><span>Fabric</span></h1>
      <div className="hero-caption">
        <h2>The garment that never forgets.</h2>
        <p>Give every garment a digital identity by connecting factory data, sustainability information, and compliance records in one ESPR-ready Digital Product Passport.</p>
        <div className="hero-ctas">
          <span className="cta-flat">Book a Demo →</span>
          <span className="cta-flat">See a Live DPP ↗</span>
        </div>
      </div>
    </div>
    <div className="nav" id="nav">
      <nav className="nav-inner">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Platform</a></li>
          <li><a href="#">Built For</a></li>
          <li><a href="#">For You</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <button className="btn-primary">Contact +</button>
      </nav>
    </div>
  </section>
  {/* PARTNERSHIPS */}
  <Partnerships />
  {/* DATA INTEGRITY */}
  <section className="section">
    <div className="wrap">
      <div className="grid cols-12" style={{rowGap: '3rem', alignItems: 'start'}}>
        <div style={{gridColumn: 'span 5'}}>
          <div className="eyebrow">// Our data integrity</div>
          <h2 className="h2">Numbers you can <span className="italic">trust</span><br />— line by line.</h2>
          <p className="body" style={{marginTop: '1.5rem', maxWidth: '28rem'}}>Every figure we publish is built on bills, sensors and reconciliation — cross-checked across sources, never guessed.</p>
          <div className="glass" style={{display: 'inline-flex', alignItems: 'center', gap: '.5rem', borderRadius: 999, padding: '.5rem 1rem', marginTop: '1.75rem'}}><span style={{width: 8, height: 8, borderRadius: 999, background: 'var(--lime)', boxShadow: '0 0 12px var(--lime)'}} /><span style={{fontFamily: '"Roboto Mono"', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.18em', color: 'oklch(0.52 .22 255 /.8)'}}>ESPR-ready · Built for brands &amp; you</span></div>
        </div>
        <ol className="rail" style={{gridColumn: 'span 7'}}>
          <li className="pillar" style={{marginLeft: 0}}>
            <div className="pill-num" style={{background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,.95), color-mix(in oklab,var(--cyan-glow) 45%,white) 75%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.85),0 8px 18px -6px color-mix(in oklab,var(--cyan-glow) 60%,transparent)'}}>01</div>
            <div className="glass pill-card"><h3>Evidence-Based</h3><p className="body">We don't guess — we use real utility bills, dyehouse logs and shipment data as the source of truth.</p></div>
          </li><li className="pillar" style={{marginLeft: '2rem'}}>
            <div className="pill-num" style={{background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,.95), color-mix(in oklab,var(--lilac) 45%,white) 75%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.85),0 8px 18px -6px color-mix(in oklab,var(--lilac) 60%,transparent)'}}>02</div>
            <div className="glass pill-card"><h3>Cross-Checking</h3><p className="body">Numbers are reconciled across multiple independent sources before anything earns a place on the passport.</p></div>
          </li><li className="pillar" style={{marginLeft: 0}}>
            <div className="pill-num" style={{background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,.95), color-mix(in oklab,var(--lime) 45%,white) 75%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.85),0 8px 18px -6px color-mix(in oklab,var(--lime) 60%,transparent)'}}>03</div>
            <div className="glass pill-card"><h3>Progressive Trust</h3><p className="body">Factories grow a reputation score the longer they stay honest. Transparency compounds.</p></div>
          </li><li className="pillar" style={{marginLeft: '2rem'}}>
            <div className="pill-num" style={{background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,.95), color-mix(in oklab,var(--cyan-glow) 45%,white) 75%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.85),0 8px 18px -6px color-mix(in oklab,var(--cyan-glow) 60%,transparent)'}}>04</div>
            <div className="glass pill-card"><h3>Privacy</h3><p className="body">The factory chooses exactly who sees what. Sensitive data is shared on invitation — never by default.</p></div>
          </li>
        </ol>
      </div>
    </div>
  </section>
  {/* FEATURE GRID (lilac) */}
  <div className="lilac-bg">
    <section className="section">
      <div className="wrap">
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3.5rem', flexWrap: 'wrap'}}>
          <div>
            <div className="eyebrow">// The platform</div>
            <h2 className="h2">Three tools.<br /><span className="italic">One thread.</span></h2>
          </div>
          <p className="body" style={{maxWidth: '24rem'}}>Compliance for the team upstairs. A passport worth sharing for the person wearing the shirt.</p>
        </div>
        <div className="grid cols-3">
          <article className="feature glass">
            <div className="row"><img src="/image-21ecd8cd.png" alt="" className="icon-pop" /><span style={{fontFamily: '"Roboto Mono"', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.2em', color: 'oklch(0.52 .22 255 /.6)'}}>01 · Water</span></div>
            <h3>Water Basin Risk</h3>
            <p className="body" style={{marginTop: '.75rem'}}>Map every supplier against live basin stress, drought and pollution indices. Reduce risk before it reaches the runway.</p>
          </article><article className="feature glass">
            <div className="row"><img src="/image-218e7c69.png" alt="" className="icon-pop" /><span style={{fontFamily: '"Roboto Mono"', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.2em', color: 'oklch(0.52 .22 255 /.6)'}}>02 · LCA</span></div>
            <h3>Life Cycle Assessment</h3>
            <p className="body" style={{marginTop: '.75rem'}}>Cradle-to-gate impact you can actually read — modelled per SKU, methodology-aligned, audit-ready.</p>
          </article><article className="feature glass">
            <div className="row"><img src="/image-a0701697.png" alt="" className="icon-pop" /><span style={{fontFamily: '"Roboto Mono"', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.2em', color: 'oklch(0.52 .22 255 /.6)'}}>03 · DPP</span></div>
            <h3>Digital Product Passport</h3>
            <p className="body" style={{marginTop: '.75rem'}}>ESPR-compliant passports in minutes. One QR carries fibre, water, repair and resale data downstream.</p>
          </article>
        </div>
      </div>
    </section>
  </div>
  {/* GARMENT ECOSYSTEM */}
  <section className="section">
    <div className="wrap">
      <div style={{ marginBottom: '3.5rem' }}>
        <div className="eyebrow">// Cradle to resale</div>
        <h2 className="h2">The <span className="italic">breathing</span><br />hoodie.</h2>
        <p style={{ fontFamily: '"Roboto Mono", monospace', fontSize: '12px', lineHeight: '1.6', color: 'oklch(0.52 .22 255 /.8)', maxWidth: '42rem', marginTop: '1.5rem' }}>We don't just create compliance documents. We create living product identities that remain active, verified and commercially valuable long after the first sale.</p>
      </div>
      <div className="eco-wrap">
        <div className="eco-glow1" />
        <div className="eco-glow2" />
        <svg viewBox="0 0 100 100" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none'}} aria-hidden>
          <defs><marker id="arr" viewBox="0 0 10 10" refX={6} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10z" fill="currentColor" /></marker></defs>
          <path d="M 55.85 8.41 A 42 42 0 0 1 87.75 31.59" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{color: 'oklch(0.58 .24 256 /.45)'}} markerEnd="url(#arr)" /><path d="M 91.36 42.71 A 42 42 0 0 1 79.18 80.21" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{color: 'oklch(0.58 .24 256 /.45)'}} markerEnd="url(#arr)" /><path d="M 69.72 87.08 A 42 42 0 0 1 30.28 87.08" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{color: 'oklch(0.58 .24 256 /.45)'}} markerEnd="url(#arr)" /><path d="M 20.82 80.21 A 42 42 0 0 1 8.64 42.71" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{color: 'oklch(0.58 .24 256 /.45)'}} markerEnd="url(#arr)" /><path d="M 12.25 31.59 A 42 42 0 0 1 44.15 8.41" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.8 1.2" style={{color: 'oklch(0.58 .24 256 /.45)'}} markerEnd="url(#arr)" />
        </svg>
        <div className="eco-center"><img src="/image-0f7b5548.png" alt="Glass hoodie" className="float" /></div>
        <div className="eco-node float" style={{left: '50.00%', top: '8.00%', animationDelay: '0s'}}>
          <div className="eco-orb icon-pop">
            <img src="/image-3eeef083.png" alt="Factory Input" />
            <span className="eco-num" style={{background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--cyan-glow) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--cyan-glow) 60%,transparent)'}}>1</span>
          </div>
          <span className="eco-label" style={{background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--cyan-glow) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--cyan-glow) 55%,transparent)'}}>Factory Input</span>
          <span className="eco-cap">01 · Origin</span>
        </div><div className="eco-node float" style={{left: '89.94%', top: '37.02%', animationDelay: '0.4s'}}>
          <div className="eco-orb icon-pop">
            <img src="/image-8dc35e0a.png" alt="SHA-256 Locked DPP" />
            <span className="eco-num" style={{background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--lilac) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--lilac) 60%,transparent)'}}>2</span>
          </div>
          <span className="eco-label" style={{background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--lilac) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--lilac) 55%,transparent)'}}>SHA-256 Locked DPP</span>
          <span className="eco-cap">02 · Sealed</span>
        </div><div className="eco-node float" style={{left: '74.69%', top: '83.98%', animationDelay: '0.8s'}}>
          <div className="eco-orb icon-pop">
            <img src="/image-17ef5c6e.png" alt="Consumer QR Scan" />
            <span className="eco-num" style={{background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--cyan-glow) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--cyan-glow) 60%,transparent)'}}>3</span>
          </div>
          <span className="eco-label" style={{background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--cyan-glow) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--cyan-glow) 55%,transparent)'}}>Consumer QR Scan</span>
          <span className="eco-cap">03 · Unlock</span>
        </div><div className="eco-node float" style={{left: '25.31%', top: '83.98%', animationDelay: '1.2s'}}>
          <div className="eco-orb icon-pop">
            <img src="/image-69ff21b6.png" alt="Wear-Milestone Rewards" />
            <span className="eco-num" style={{background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--lime) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--lime) 60%,transparent)'}}>4</span>
          </div>
          <span className="eco-label" style={{background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--lime) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--lime) 55%,transparent)'}}>Wear-Milestone Rewards</span>
          <span className="eco-cap">04 · Loyalty</span>
        </div><div className="eco-node float" style={{left: '10.06%', top: '37.02%', animationDelay: '1.6s'}}>
          <div className="eco-orb icon-pop">
            <img src="/image-96812d28.png" alt="One-Scan Resale" />
            <span className="eco-num" style={{background: 'radial-gradient(circle at 30% 25%,rgba(255,255,255,.98),color-mix(in oklab,var(--lime) 45%,white) 80%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),inset 0 0 0 1px rgba(255,255,255,.6),0 6px 14px -4px color-mix(in oklab,var(--lime) 60%,transparent)'}}>5</span>
          </div>
          <span className="eco-label" style={{background: 'linear-gradient(135deg,rgba(255,255,255,.85),color-mix(in oklab,var(--lime) 22%,white))', backdropFilter: 'blur(14px) saturate(160%)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.9),0 6px 14px -8px color-mix(in oklab,var(--lime) 55%,transparent)'}}>One-Scan Resale</span>
          <span className="eco-cap">05 · Return</span>
        </div>
      </div>
    </div>
  </section>

  {/* JOURNAL (lilac) */}
  <div className="lilac-bg">
    <section className="section">
      <div className="wrap">
        <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem'}}>
          <div><div className="eyebrow">// Journal</div><h2 className="h2">From the <span className="italic">basin.</span></h2></div>
          <a href="#" style={{fontFamily: '"Roboto Mono"', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', color: 'oklch(0.52 .22 255 /.7)', textDecoration: 'underline', textUnderlineOffset: 4}}>All posts →</a>
        </div>
        <div className="journal" style={{backgroundImage: 'url("data:image/jpeg'}}>
          <div className="journal-overlay" />
          <div className="journal-grid">
            <div style={{gridColumn: '1/span 2', gridRow: 2}}>
              <div className="frosted">
                <div style={{fontFamily: '"Roboto Mono"', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.2em', color: 'oklch(0.52 .22 255 /.7)', marginBottom: '1rem'}}>More reading</div>
                <a href="#" style={{display: 'flex', justifyContent: 'space-between', gap: '1rem'}}><span style={{fontFamily: '"DM Sans"', fontSize: '1rem', color: 'var(--primary)'}}>The QR is the new care label</span><span style={{fontFamily: '"Roboto Mono"', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.1em', color: 'oklch(0.52 .22 255 /.6)'}}>3 min</span></a><a href="#" style={{display: 'flex', justifyContent: 'space-between', gap: '1rem', borderTop: '1px solid rgba(255,255,255,.3)', paddingTop: '1rem', marginTop: '1rem'}}><span style={{fontFamily: '"DM Sans"', fontSize: '1rem', color: 'var(--primary)'}}>Gamifying repair without greenwashing</span><span style={{fontFamily: '"Roboto Mono"', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.1em', color: 'oklch(0.52 .22 255 /.6)'}}>5 min</span></a><a href="#" style={{display: 'flex', justifyContent: 'space-between', gap: '1rem', borderTop: '1px solid rgba(255,255,255,.3)', paddingTop: '1rem', marginTop: '1rem'}}><span style={{fontFamily: '"DM Sans"', fontSize: '1rem', color: 'var(--primary)'}}>ESPR, in plain language</span><span style={{fontFamily: '"Roboto Mono"', fontSize: 10, textTransform: 'uppercase', letterSpacing: '.1em', color: 'oklch(0.52 .22 255 /.6)'}}>6 min</span></a>
              </div>
            </div>
            <div style={{gridColumn: '3/span 3', gridRow: 2}}>
              <div className="frosted" style={{padding: '2.5rem', background: 'linear-gradient(180deg,oklch(1 0 0 /.36),oklch(1 0 0 /.2))', boxShadow: 'inset 0 1px 0 0 oklch(1 0 0 /.6),0 8px 32px -8px oklch(0.58 0.24 256 /.2)'}}>
                <div style={{display: 'inline-flex', alignItems: 'center', gap: '.5rem', border: '1px solid rgba(255,255,255,.5)', background: 'rgba(255,255,255,.3)', borderRadius: 999, padding: '.5rem 1rem', fontFamily: '"Roboto Mono"', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--primary)', backdropFilter: 'blur(12px)'}}><span style={{width: 6, height: 6, borderRadius: 999, background: 'var(--lilac)'}} />Featured · 4 min read</div>
                <h3 style={{fontFamily: '"DM Sans"', fontSize: '3rem', color: 'var(--primary)', marginTop: '1.5rem', lineHeight: '1.05'}}>What a <span className="italic">river</span> knows about your hoodie.</h3>
                <p className="body" style={{maxWidth: '36rem', marginTop: '1.25rem'}}>Inside the Aral, the Cauvery and the Ebro — three basins where fashion left a fingerprint. We map how a single dyehouse decision ripples through 4,200 km of waterway, and how a Digital Product Passport lets a customer in Berlin feel that distance.</p>
                <button className="btn-primary" style={{marginTop: '2rem', background: 'rgba(255,255,255,.4)', color: 'var(--primary)', border: '1px solid rgba(255,255,255,.5)', backdropFilter: 'blur(12px)', display: 'inline-flex', alignItems: 'center', gap: '.75rem'}}>Read more <span style={{display: 'grid', placeItems: 'center', width: '1.5rem', height: '1.5rem', borderRadius: 999, background: 'var(--primary)', color: 'var(--primary-fg)'}}>→</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* ABOUT */}
  <section className="section">
    <div className="wrap">
      <div className="about glass-strong">
        <img className="flower float" src="/image-1976c49a.jpeg" alt="" />
        <img className="heart float" src="/image-0417c82b.jpeg" alt="" style={{animationDelay: '2s'}} />
        <div style={{maxWidth: '42rem'}}>
          <div className="eyebrow">// About us</div>
          <h2 className="h2">We're <span className="italic">imaginative,</span> gentle, and human.</h2>
          <p className="body" style={{marginTop: '1.5rem', fontSize: '1rem'}}>WaterNFabric is the bridge between an ESPR spreadsheet and a person standing in their closet on a Tuesday morning. We build traceability that feels like jewellery — light to wear, hard to fake, and quietly powerful.</p>
          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', fontFamily: '"Roboto Mono"', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', color: 'oklch(0.52 .22 255 /.7)'}}>
            <span className="glass-tint tag">ESPR aligned</span>
            <span className="glass-tint tag">ISO 14044</span>
            <span className="glass-tint tag">GRI water</span>
            <span className="glass-tint tag">EU DPP-ready</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CONTACT (lilac) */}
  <div className="lilac-bg">
    <section id="contact" className="section">
      <div className="wrap">
        <div style={{marginBottom: '3rem'}}>
          <div className="eyebrow">// Contact +</div>
          <h2 className="h2">Say <span className="italic">hello.</span></h2>
          <p className="body" style={{maxWidth: '36rem', marginTop: '1rem'}}>Drop us a line, book a live walk-through, or send a quick enquiry — whichever feels right.</p>
        </div>
        <div className="grid cols-3">
          <form className="glass-strong" style={{gridColumn: 'span 2', borderRadius: '2rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem'}} onSubmit={(e) => { e.preventDefault(); const target = e.target as any; window.location.href='mailto:hello@waternfabric.co.uk?subject=Hello&body='+encodeURIComponent(target.message.value); }}>
            <div className="eyebrow">// Direct message</div>
            <div className="grid cols-2" style={{gap: '1rem'}}>
              <input className="input-glass" name="name" required placeholder="Your name" />
              <input className="input-glass" name="email" type="email" required placeholder="Email" />
            </div>
            <textarea className="input-glass" name="message" rows={5} required placeholder="Tell us a little about what you're working on…" defaultValue={""} />
            <button type="submit" className="btn-primary" style={{width: 'fit-content', display: 'inline-flex', alignItems: 'center', gap: '.75rem'}}>Send message <span style={{display: 'grid', placeItems: 'center', width: '1.25rem', height: '1.25rem', borderRadius: 999, background: 'var(--primary-fg)', color: 'var(--primary)'}}>→</span></button>
          </form>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <a href="https://cal.com/waternfabric/demo" target="_blank" rel="noreferrer" className="glass-strong" style={{borderRadius: '2rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.75rem'}}>
              <div className="eyebrow">// Sales demo</div>
              <h3 style={{fontFamily: '"DM Sans"', fontSize: '1.5rem', color: 'var(--primary)'}}>Book a live <span className="italic">walk-through.</span></h3>
              <p style={{fontFamily: '"Roboto Mono"', fontSize: 12, lineHeight: '1.6', color: 'oklch(0.52 .22 255 /.7)'}}>30 minutes with the team. We'll map your supply chain on-screen.</p>
              <span style={{marginTop: '.5rem', fontFamily: '"Roboto Mono"', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.2em', color: 'var(--primary)'}}>Pick a slot →</span>
            </a>
            <a href="mailto:hello@waternfabric.co.uk" className="glass-strong" style={{borderRadius: '2rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.75rem'}}>
              <div className="eyebrow">// Enquiry email</div>
              <h3 style={{fontFamily: '"DM Sans"', fontSize: '1.5rem', color: 'var(--primary)'}}>hello@<span className="italic">waternfabric.co.uk</span></h3>
              <p style={{fontFamily: '"Roboto Mono"', fontSize: 12, lineHeight: '1.6', color: 'oklch(0.52 .22 255 /.7)'}}>Opens a pre-filled draft in your mail client.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
<Footer />
    </>
  );
}
