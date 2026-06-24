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
    desc: 'The global nonprofit driving preferred fibre and materials standards in fashion.',
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
      <style dangerouslySetInnerHTML={{__html: `
        .partners-head{max-width:72rem;margin:0 auto;padding:0 1.25rem;display:flex;flex-direction:column;align-items:flex-start;gap:.9rem}
        .partners-head .eyebrow{color:var(--primary);margin:0}
        .partners-head h2{font-family:"DM Sans",sans-serif;font-weight:500;color:var(--primary);font-size:clamp(1.5rem,3.5vw,2.25rem);letter-spacing:-.02em;line-height:1.1}
        .partners-head p{font-family:"Roboto Mono",monospace;color:var(--primary);font-size:12px;max-width:34rem;margin:0;line-height:1.6}
        .partners-intro{padding:6rem 1.25rem 4.5rem;background:var(--bg)}
        .partners-sec{position:relative;overflow:hidden;padding:2.5rem 0;background:#eaf6c4;isolation:isolate;display:flex;align-items:center}
        .partners-sec::before{content:"";position:absolute;inset:0;background-image:url('https://id-preview--e58e46e6-c11b-46e7-8261-a5bb2c0146a8.lovable.app/__l5e/assets-v1/46b5c709-a59e-46b5-acf6-65705f2a71c1/lime-fabric.jpg');background-size:cover;background-position:center;z-index:-2}
        .partners-sec::after{content:"";position:absolute;left:0;right:0;top:0;height:45%;backdrop-filter:blur(8px);background:linear-gradient(180deg,rgba(234,246,196,.4) 0%,rgba(234,246,196,.15) 65%,transparent 100%);z-index:-1;pointer-events:none;mask-image:linear-gradient(180deg,#000 0%,transparent 100%);-webkit-mask-image:linear-gradient(180deg,#000 0%,transparent 100%)}
        .partners-bottom-blur{position:absolute;left:0;right:0;bottom:0;height:50%;backdrop-filter:blur(42px) saturate(120%);background:linear-gradient(0deg,rgba(234,246,196,.7) 0%,rgba(234,246,196,.35) 45%,transparent 100%);z-index:-1;pointer-events:none;mask-image:linear-gradient(0deg,#000 0%,transparent 100%);-webkit-mask-image:linear-gradient(0deg,#000 0%,transparent 100%)}
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
        .p-head{height:32%;display:flex;flex-direction:column;justify-content:flex-start}
        .p-name{font-family:"DM Sans",sans-serif;font-weight:600;color:var(--lime);font-size:20px;line-height:1;letter-spacing:-.01em;margin:0;text-transform:none}
        .p-divider{height:1px;width:100%;background:color-mix(in oklab,var(--lime) 70%,transparent);margin-top:10px;opacity:.8}
        .p-sub{font-family:"Roboto Mono",monospace;font-size:10px;line-height:1.4;color:rgba(255,255,255,.85);margin:8px 0 0;letter-spacing:.01em}
        .p-glass{position:relative;margin-top:auto;height:56%;border-radius:20px;background:rgba(255,255,255,.82);backdrop-filter:blur(24px) saturate(160%);border:1px solid rgba(255,255,255,.35);box-shadow:inset 0 1px 0 rgba(255,255,255,.7),inset 0 -1px 0 rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;padding:14px;overflow:hidden;transition:background .35s cubic-bezier(.22,1,.36,1)}
        .p-glass::after{content:"";position:absolute;top:0;left:0;right:0;height:40%;background:linear-gradient(180deg,rgba(255,255,255,.55),transparent);pointer-events:none;border-radius:20px 20px 0 0}
        .p-logo{max-width:88%;max-height:90%;object-fit:contain;transition:transform .35s cubic-bezier(.22,1,.36,1);filter:drop-shadow(0 4px 12px rgba(0,0,0,.08))}
        @media(max-width:640px){.p-card{flex:0 0 230px;height:250px;padding:16px;border-radius:24px}.p-name{font-size:18px}.p-glass{border-radius:18px}}
      `}} />

      <section className="partners-intro" aria-label="Strategic Partners">
        <div className="partners-head">
          <div>
            <div className="eyebrow">/ Partnerships</div>
            <h2>Standards we stand with.</h2>
          </div>
          <p>Aligned with the institutions, frameworks and certifications writing the rules of regenerative fashion.</p>
        </div>
      </section>

      <section className="partners-sec">
        <div className="partners-bottom-blur" />
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
