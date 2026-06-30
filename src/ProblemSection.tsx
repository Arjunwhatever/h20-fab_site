import React from 'react';

const CARDS = [
  {
    bg: 'linear-gradient(135deg, rgba(0, 198, 255, 1) 0%, rgba(200, 180, 255, 1) 100%)', // luminous blue to soft lavender
    heading: "The Problem",
    subheading: "You answer with spreadsheets, invoices, emails, and utility bills."
  },
  {
    bg: 'linear-gradient(135deg, rgba(200, 180, 255, 1) 0%, rgba(180, 255, 150, 1) 100%)', // soft lavender to lime
    heading: "The Agitation",
    subheading: "Unverified. Unstructured. Untrusted."
  },
  {
    bg: 'linear-gradient(135deg, rgba(0, 198, 255, 1) 0%, rgba(180, 255, 150, 1) 100%)', // luminous blue to lime
    heading: "The Urgency",
    subheading: "EU has drawn the line: No Digital Product Passport by 2028. No entry into the EU market."
  },
  {
    bg: 'linear-gradient(135deg, rgba(180, 255, 150, 1) 0%, rgba(0, 198, 255, 1) 100%)', // lime to luminous blue
    heading: "The Insight",
    subheading: "The industry doesn't have a data problem. It has a compliance infrastructure problem."
  },
  {
    bg: 'linear-gradient(135deg, rgba(200, 180, 255, 1) 0%, rgba(0, 198, 255, 1) 100%)', // soft lavender to luminous blue
    heading: "The Close",
    subheading: "The manufacturers who organize their data now will be preferred. The ones who don't will be replaced."
  }
];
const SOLUTION_CARDS = [
  {
    bg: 'linear-gradient(135deg, rgba(20, 70, 50, 1) 0%, rgba(20, 120, 100, 1) 100%)', // forest green to teal
    heading: "The Entry Point",
    title: "Start with your location",
    subheading: "Drop a pin. See your water risk, regulatory pressure, and basin stress instantly. One coordinate. Immediate intelligence."
  },
  {
    bg: 'linear-gradient(135deg, rgba(20, 120, 100, 1) 0%, rgba(10, 90, 60, 1) 100%)', // teal to forest green
    heading: "The Build",
    title: "Build what you already know",
    subheading: "Fifteen minutes. Your energy, water, fibres, and certifications, structured automatically. We flag what's missing. No blank forms."
  },
  {
    bg: 'linear-gradient(135deg, rgba(10, 90, 60, 1) 0%, rgba(30, 140, 110, 1) 100%)', // forest green to lighter teal
    heading: "The Output",
    title: "Generate your Digital Product Passport",
    subheading: "Every data point compiles into an ESPR-compliant passport with a scannable QR. Updated each season. No starting from scratch."
  },
  {
    bg: 'linear-gradient(135deg, rgba(30, 140, 110, 1) 0%, rgba(10, 80, 50, 1) 100%)', // lighter teal to dark green
    heading: "The Differentiator",
    title: "Built for the factory, not the brand",
    subheading: "Every competitor extracts data from manufacturers. We serve them. That changes the price, the complexity, and everything in between."
  },
  {
    bg: 'linear-gradient(135deg, rgba(10, 80, 50, 1) 0%, rgba(20, 70, 50, 1) 100%)', // dark green to forest green
    heading: "The Resolution",
    title: "The manufacturers who act now will be preferred.",
    subheading: "Your data already exists. We give it the structure enforcement will require. The ones who wait will be scrambling. You won't be."
  }
];

export default function ProblemSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', zIndex: 20, background: 'transparent' }}>
      
      {/* FLOATING 3D ELEMENTS (Above cards to preserve their vibrant colors) */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 40, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '5%', left: '2%', transform: 'rotate(-15deg)', width: '380px', opacity: 1 }}>
          <img src="/element_6.png" className="float-heavy" style={{ width: '100%', animationDelay: '0s', animationDuration: '14s', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }} />
        </div>
        <div style={{ position: 'absolute', top: '22%', right: '0%', transform: 'rotate(25deg)', width: '360px', opacity: 1 }}>
          <img src="/element_4.png" className="float-heavy" style={{ width: '100%', animationDelay: '-4s', animationDuration: '15s', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }} />
        </div>
        <div style={{ position: 'absolute', top: '40%', left: '-5%', transform: 'rotate(10deg)', width: '420px', opacity: 1 }}>
          <img src="/element_3.png" className="float-heavy" style={{ width: '100%', animationDelay: '-8s', animationDuration: '12s', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }} />
        </div>
        <div style={{ position: 'absolute', top: '58%', right: '2%', transform: 'rotate(-10deg)', width: '350px', opacity: 1 }}>
          <img src="/element_2.png" className="float-heavy" style={{ width: '100%', animationDelay: '-12s', animationDuration: '13s', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }} />
        </div>
        <div style={{ position: 'absolute', top: '76%', left: '2%', transform: 'rotate(15deg)', width: '360px', opacity: 1 }}>
          <img src="/element_1.png" className="float-heavy" style={{ width: '100%', animationDelay: '-6s', animationDuration: '16s', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }} />
        </div>
        <div style={{ position: 'absolute', top: '90%', right: '5%', transform: 'rotate(-20deg)', width: '320px', opacity: 1 }}>
          <img src="/element_5.png" className="float-heavy" style={{ width: '100%', animationDelay: '-2s', animationDuration: '14s', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }} />
        </div>
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 30 }}>

        {/* FIRST HALF */}
        <div className="stagger-grid">

          {/* Left Side: Problem Header */}
          <div style={{ position: 'sticky', top: '40vh', height: 'fit-content', marginTop: '300px' }}>
            <div className="eyebrow">// the problem</div>
            <h2 className="h2" style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>The cost of <span className="italic text-gradient">compliance.</span></h2>
            <p className="body" style={{ marginTop: '1.5rem', maxWidth: '400px', color: 'var(--primary)', fontWeight: 500 }}>
              The European Union is rewriting the rules of the fashion industry. Brands without organized data will be locked out.
            </p>
          </div>

          {/* Right Side: Problem Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 20 }}>
            {CARDS.map((card, idx) => (
              <div key={idx} style={{
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                borderRadius: '20px',
                padding: '32px 40px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transform: 'translateZ(0)' // forces hardware acceleration for smooth blur
              }}>
                {/* Vibrant Glowing background */}
                <div style={{ position: 'absolute', inset: 0, background: card.bg }} />

                {/* Semi-transparent Dark Glass Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(10, 20, 40, 0.5), rgba(5, 10, 20, 0.65))', backdropFilter: 'blur(16px) saturate(130%)', WebkitBackdropFilter: 'blur(16px) saturate(130%)' }} />

                {/* Text Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.5rem', color: '#fff', margin: '0 0 0.75rem 0', fontWeight: 600, letterSpacing: '-0.02em', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                    {card.heading}
                  </h3>
                  <p style={{ fontFamily: '"Roboto Mono", monospace', fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                    {card.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* DIVIDER */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', margin: '4rem 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '25px', color: 'var(--primary)', fontWeight: 600, padding: '0 1.5rem', whiteSpace: 'nowrap' }}>
            "Worth the read. Promise."
          </div>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        {/* SECOND HALF */}
        <div className="stagger-grid">

          {/* Left Side: Solution Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 20 }}>
            {SOLUTION_CARDS.map((card, idx) => (
              <div key={`sol-${idx}`} style={{
                width: '100%',
                maxWidth: '600px',
                position: 'relative',
                borderRadius: '20px',
                padding: '32px 40px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transform: 'translateZ(0)' // forces hardware acceleration for smooth blur
              }}>
                {/* Vibrant Glowing background */}
                <div style={{ position: 'absolute', inset: 0, background: card.bg }} />

                {/* Semi-transparent Dark Glass Overlay */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(10, 20, 40, 0.5), rgba(5, 10, 20, 0.65))', backdropFilter: 'blur(16px) saturate(130%)', WebkitBackdropFilter: 'blur(16px) saturate(130%)' }} />

                {/* Text Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.5rem', color: '#fff', margin: '0 0 0.25rem 0', fontWeight: 600, letterSpacing: '-0.02em', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
                    {card.heading}
                  </h3>
                  {card.title && (
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1.125rem', color: 'var(--lime)', margin: '0 0 0.75rem 0', fontWeight: 500, letterSpacing: '-0.01em' }}>
                      {card.title}
                    </p>
                  )}
                  <p style={{ fontFamily: '"Roboto Mono", monospace', fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                    {card.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Solution Header */}
          <div style={{ position: 'sticky', top: '40vh', height: 'fit-content', marginTop: '450px' }}>
            <div className="eyebrow">// how we solve it</div>
            <h2 className="h2" style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>We give factories the tools to<br /><span className="italic text-gradient">answer back.</span></h2>
          </div>

        </div>

      </div>
    </section>
  );
}
