import React from 'react';

export default function Footer() {
  return (
    <footer id="footer" style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white'
    }}>
      <style>
        {`
          /* Custom styles for footer */
        `}
      </style>

      {/* Background Video */}
      <video
        src="/water_removed.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />

      {/* Subtle bottom gradient for readability of footer text */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to top, rgba(15, 35, 55, 0.9), transparent)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Center Glass Card */}
      <div className="glass-clear" style={{
        position: 'relative',
        zIndex: 2,
        padding: '3rem 4rem',
        borderRadius: '1.5rem',
        maxWidth: '700px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '2.5rem',
          lineHeight: 1.2,
          color: 'var(--lime)',
          margin: 0,
          fontWeight: 600
        }}>
          Every stitch has a story.<br />We make sure it's heard.
        </h2>
        <p style={{
          fontFamily: '"Roboto Mono", monospace',
          fontSize: '0.95rem',
          color: 'var(--lime)',
          maxWidth: '600px',
          lineHeight: 1.6,
          margin: 0
        }}>
          Whether you are a factory in Dhaka, a brand in London, or a consumer who cares.<br />
          <span className="italic" style={{ fontWeight: 'bold', fontSize: '1.05rem', color: 'var(--cyan-glow)', textShadow: '0 0 12px color-mix(in oklab, var(--cyan-glow) 60%, transparent)' }}>Water+Fabric is built for you.</span>
        </p>
        <a href="https://calendly.com/hello-waternfabric/30min" target="_blank" rel="noreferrer" className="btn-glass" style={{ marginTop: '1rem', textDecoration: 'none', display: 'inline-flex' }}>
          Book A Demo <span>→</span>
        </a>
      </div>

      {/* Footer Bottom Elements */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '4rem',
        right: '4rem',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}>

        {/* Left: Logo */}
        <img src="/image-ee111a5a.svg" alt="WaterNFabric" className="logo-img" />

        {/* Right: Links */}
        <div style={{
          display: 'flex',
          gap: '4rem',
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{
              color: 'var(--lime)',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              margin: '0 0 1rem 0'
            }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem', opacity: 0.9 }}>About</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem', opacity: 0.9 }}>Built for</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{
              color: 'var(--lime)',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              margin: '0 0 1rem 0'
            }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="https://calendly.com/hello-waternfabric/30min" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem', opacity: 0.9 }}>Book a demo</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        color: 'rgba(255,255,255,0.4)',
        fontFamily: '"Roboto Mono", monospace',
        fontSize: '0.65rem',
        letterSpacing: '0.1em'
      }}>
        © 2026 Water Fabric. All rights reserved.
      </div>
    </footer>
  );
}
