import React from 'react';

const PARTNERS = [
  {
    id: 1,
    name: 'GOTS',
    desc: 'Global Organic Textile Standard.',
    logo: 'https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/347a60f2-3de2-4303-bb10-61e00ec66325/gots.png'
  },
  {
    id: 2,
    name: 'ZDHC',
    desc: 'Zero Discharge of Hazardous Chemicals.',
    logo: 'https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/9cb213e6-a8ce-420d-bbf9-2f6a6cd147ba/zdhc.svg'
  },
  {
    id: 3,
    name: 'European Commission',
    desc: 'Platform is built around this regulation.',
    logo: 'https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/126eaf46-7187-4353-a288-145136230327/european-commission.svg'
  },
  {
    id: 4,
    name: 'WRI Aqueduct',
    desc: 'Relevant to the water usage metrics.',
    logo: 'https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/0c47c187-91c8-4459-b55e-a2394c9ee493/wri.png'
  },
  {
    id: 5,
    name: 'Textile Exchange',
    desc: 'Fibres. Standards. Global.',
    logo: 'https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/4aba754e-570d-479a-90ce-ce2c2e70dee4/textile-exchange.png'
  },
  {
    id: 6,
    name: 'Higg Index',
    desc: 'Formerly the Sustainable Apparel Coalition.',
    logo: 'https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/332ac5e2-30c1-448e-98a0-4bb8cc608a1d/higg-index.png'
  }
];

export default function Partnerships() {
  // Use a 20s animation duration as requested by the user
  const trackStyle = `
    .marquee-track {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      width: max-content;
      animation: marquee 20s linear infinite;
      padding: 0 1rem;
    }
  `;

  // We duplicate the array to ensure smooth infinite scrolling
  const cards = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .partners-sec{position:relative;overflow:hidden;padding:6rem 0;background:var(--lime);isolation:isolate;display:flex;flex-direction:column;align-items:flex-start;gap:4rem}
        .marquee{position:relative;width:100%;overflow:hidden;mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
        ${trackStyle}
        .marquee:hover .marquee-track{animation-play-state:paused}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(calc(-100% / 3))}}
        @keyframes card-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes card-sheen{0%{transform:translateX(-120%) skewX(-18deg)}60%,100%{transform:translateX(220%) skewX(-18deg)}}
        .p-card{position:relative;flex:0 0 260px;height:280px;border-radius:28px;padding:20px;background:oklch(0.58 0.24 256);box-shadow:inset 0 0 0 1px rgba(255,255,255,.18);display:flex;flex-direction:column;overflow:hidden;animation:card-float 6s ease-in-out infinite;transition:transform .35s cubic-bezier(.22,1,.36,1);will-change:transform}
        .p-card:nth-child(2n){animation-delay:-2s}
        .p-card:nth-child(3n){animation-delay:-4s}
        .p-card::before{content:"";position:absolute;inset:0;border-radius:28px;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);transform:translateX(-120%) skewX(-18deg);animation:card-sheen 9s ease-in-out infinite;pointer-events:none;mix-blend-mode:overlay}
        .p-card:nth-child(2n)::before{animation-delay:-3s}
        .p-card:nth-child(3n)::before{animation-delay:-6s}
        .p-card:hover{transform:scale(1.03) translateY(-2px)}
        .p-card:hover .p-glass{background:rgba(255,255,255,.9)}
        .p-card:hover .p-logo{transform:translateY(-6px)}
        .p-head{height:44%;display:flex;flex-direction:column;justify-content:flex-start}
        .p-name{font-family:"DM Sans",sans-serif;font-weight:600;color:var(--lime);font-size:20px;line-height:1;letter-spacing:-.01em;margin:0;text-transform:none}
        .p-divider{height:1px;min-height:1px;flex-shrink:0;width:100%;background:color-mix(in oklab,var(--lime) 70%,transparent);margin-top:10px;opacity:.8}
        .p-sub{font-family:"Roboto Mono",monospace;font-size:16px;line-height:1.6;color:rgba(255,255,255,.85);margin:8px 0 0;letter-spacing:.01em}
        .p-glass{position:relative;margin-top:auto;height:46%;border-radius:20px;background:rgba(255,255,255,.82);backdrop-filter:blur(24px) saturate(160%);border:1px solid rgba(255,255,255,.35);box-shadow:inset 0 1px 0 rgba(255,255,255,.7),inset 0 -1px 0 rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;padding:14px;overflow:hidden;transition:background .35s cubic-bezier(.22,1,.36,1)}
        .p-glass::after{content:"";position:absolute;top:0;left:0;right:0;height:40%;background:linear-gradient(180deg,rgba(255,255,255,.55),transparent);pointer-events:none;border-radius:20px 20px 0 0}
        .p-logo{max-width:88%;max-height:90%;object-fit:contain;transition:transform .35s cubic-bezier(.22,1,.36,1);filter:drop-shadow(0 4px 12px rgba(0,0,0,.08))}
        @media(max-width:640px){.p-card{flex:0 0 230px;height:250px;padding:16px;border-radius:24px}.p-name{font-size:18px}.p-glass{border-radius:18px}}
      `}} />

      <section className="partners-sec">
        <div className="wrap" style={{ width: '100%', maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>
          <div>
            <h2 className="h2" style={{ color: 'var(--primary)' }}>Standards we <span className="italic" style={{ color: 'var(--primary)' }}>stand with.</span></h2>
            <p className="body" style={{ marginTop: '1.5rem', maxWidth: '34rem', color: 'var(--primary)', fontWeight: 500 }}>Aligned with the frameworks shaping the future of fashion</p>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track" id="partners-track">
            {cards.map((partner, i) => (
              <div key={i} className="p-card">
                <div className="p-head">
                  <h3 className="p-name">{partner.name}</h3>
                  <div className="p-divider"></div>
                  <p className="p-sub">{partner.desc}</p>
                </div>
                <div className="p-glass">
                  <img src={partner.logo} alt={partner.name} className="p-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
