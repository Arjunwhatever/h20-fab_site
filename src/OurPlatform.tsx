import React from 'react';

const icons = {
  qr: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
      <path d="M2,2v8h8V2H2z M8,8H4V4h4V8z M14,2v8h8V2H14z M20,8h-4V4h4V8z M2,14v8h8v-8H2z M8,20H4v-4h4V20z" />
      <rect x="14" y="14" width="3" height="3" />
      <rect x="19" y="14" width="3" height="3" />
      <rect x="14" y="19" width="3" height="3" />
      <rect x="19" y="19" width="3" height="3" />
    </svg>
  ),
  hearts: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      {/* Left loop */}
      <path d="M 6.5 14 C 2 10 2 6 6 3.5 C 9 1.5 11 4 11.5 6.5" />
      <polyline points="9 6.5, 11.5 6.5, 11.5 4" />
      {/* Right loop */}
      <path d="M 12.5 6.5 C 13 4 15 1.5 18 3.5 C 22 6 22 10 17.5 14" />
      <polyline points="17.5 11.5, 17.5 14, 20.5 14" />
      {/* Bottom loop */}
      <path d="M 16.5 15.5 L 12 20.5 L 7.5 15.5" />
      <polyline points="7.5 18, 7.5 15.5, 10 15.5" />
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M2,9 C5,5 7,13 10,9 C13,5 15,13 18,9 C21,5 23,13 23,9" />
      <path d="M2,15 C5,11 7,19 10,15 C13,11 15,19 18,15 C21,11 23,19 23,15" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
      <path d="M8,4 C3.582,4 0,7.134 0,11 C0,12.784 0.841,14.4 2.185,15.548 C1.851,17.067 0.551,17.884 0.551,17.884 C0.551,17.884 2.801,17.884 4.545,16.801 C5.242,17.094 5.974,17.234 6.74,17.332 C6.347,16.326 6.13,15.201 6.13,14 C6.13,9.029 10.607,5 16.13,5 C15.688,4.422 14.887,4 14,4 H8 Z" />
      <path d="M16.5,7 C11.806,7 8,10.134 8,14 C8,17.866 11.806,21 16.5,21 C17.391,21 18.243,20.852 19.037,20.584 C20.655,21.584 22.738,21.584 22.738,21.584 C22.738,21.584 21.536,20.828 21.226,19.421 C22.47,18.356 23.25,16.858 23.25,15 C23.25,11.134 19.444,7 16.5,7 Z" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
};

const products = [
  {
    title: 'Water Basin Risk',
    desc: 'Map every supplier against live basin stress indices.',
    icon: 'wave',
    bg: 'radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--cyan-glow) 80%, transparent), transparent 70%), radial-gradient(circle at 80% 80%, var(--primary), transparent 70%), var(--bg)'
  },
  {
    title: 'Life Cycle Assessment',
    desc: 'Cradle-to-gate impact you can actually read.',
    icon: 'hearts',
    bg: 'radial-gradient(circle at 80% 20%, color-mix(in oklab, var(--lilac) 80%, transparent), transparent 70%), radial-gradient(circle at 20% 80%, var(--primary), transparent 70%), var(--bg)'
  },
  {
    title: 'What-If-Simulator',
    desc: 'We show factories exactly which small, realistic changes would most improve their environmental score.',
    icon: 'gear',
    bg: 'radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--lime) 60%, transparent), transparent 70%), radial-gradient(circle at 0% 100%, var(--cyan-glow), transparent 70%), var(--bg)'
  },
  {
    title: 'Digital Product Passport',
    desc: 'ESPR-compliant passports carrying all product data.',
    icon: 'qr',
    bg: 'radial-gradient(circle at 20% 80%, var(--primary), transparent 70%), radial-gradient(circle at 80% 20%, color-mix(in oklab, var(--lilac) 80%, transparent), transparent 70%), var(--bg)'
  }
];

export default function OurPlatform() {
  return (
    <section id="platform" className="section" style={{ 
      position: 'relative', 
      overflow: 'hidden',
      backgroundColor: '#F0F4F8',
      backgroundImage: 'linear-gradient(to right, color-mix(in oklab, var(--lime) 45%, transparent) 2px, transparent 2px), linear-gradient(to bottom, color-mix(in oklab, var(--lime) 45%, transparent) 2px, transparent 2px)',
      backgroundSize: '3rem 3rem'
    }}>
      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        
        <div className="stagger-grid" style={{ gap: '8rem' }}>
          {/* Left Column: 2x2 Grid of Cards */}
          <div className="platform-grid">
            {products.map((product, idx) => (
              <div key={idx} className="platform-card">
                {/* Blurred vibrant background */}
                <div className="platform-card-bg" style={{ background: product.bg }} />

                {/* Frosted glass overlay to blur the backdrop and provide contrast */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(10, 20, 40, 0.4), rgba(5, 10, 20, 0.65))', backdropFilter: 'blur(32px) saturate(150%)', WebkitBackdropFilter: 'blur(32px) saturate(150%)', borderRadius: 'inherit', border: '1px solid rgba(255,255,255,0.1)' }} />

                {/* Icon colored with lime */}
                <div className="platform-card-icon" style={{ color: 'var(--lime)', zIndex: 2 }}>
                  {icons[product.icon as keyof typeof icons]}
                </div>

                {/* Text content */}
                <div className="platform-card-content" style={{ zIndex: 2 }}>
                  <h3 style={{ fontFamily: '"DM Sans"', fontSize: '1.5rem', color: '#fff', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                    {product.title}
                  </h3>
                  <p style={{ fontFamily: '"Roboto Mono"', fontSize: '16px', lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: '0.75rem 0 0', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column: Static Header */}
          {/* Right Column: Static Header */}
          <div style={{ marginTop: '360px' }}>
            <div className="eyebrow">// Our platform</div>
            <h2 className="h2" style={{ marginTop: '1.5rem' }}>Four products,<br /><span className="italic text-gradient">one thread.</span></h2>
            <p className="body" style={{ maxWidth: '42rem', marginTop: '1.5rem' }}>
              A complete ecosystem from factory floor to end consumer. Designed to bring total transparency to the garment lifecycle.
            </p>
            <button className="btn-glass" style={{ marginTop: '2rem' }}>Contact Sales for Pricing</button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
