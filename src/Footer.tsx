import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      position: 'relative', 
      width: '100%', 
      minHeight: '100vh', 
      overflow: 'hidden', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'white',
      marginTop: '4rem'
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
      <div className="glass-strong" style={{ 
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
          Every stitch has a story.<br/>We make sure it's heard.
        </h2>
        <p style={{ 
          fontFamily: '"Roboto Mono", monospace', 
          fontSize: '0.95rem', 
          color: 'var(--lime)', 
          maxWidth: '600px', 
          lineHeight: 1.6, 
          margin: 0 
        }}>
          Your garments are already telling a story. Just not loudly enough.<br/>
          Water+Fabric gives that story a permanent address.
        </p>
        <button className="btn-lime" style={{ 
          marginTop: '1rem', 
          backgroundColor: 'var(--lime)', 
          color: '#1a2a3a', 
          padding: '0.75rem 2rem', 
          borderRadius: '999px', 
          fontFamily: '"DM Sans", sans-serif', 
          fontWeight: 'bold', 
          fontSize: '0.95rem',
          border: 'none', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          Book A Demo <span>→</span>
        </button>
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
        <div style={{ 
          width: '80px', 
          height: '100px', 
          backgroundColor: '#1C27B8', 
          border: '3px solid var(--lime)', 
          borderRadius: '8px', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          <span style={{ 
            color: 'var(--lime)', 
            fontFamily: '"DM Sans", sans-serif', 
            fontSize: '2.2rem', 
            fontWeight: 'bold', 
            lineHeight: 1,
            marginTop: '-4px'
          }}>Wf</span>
          <span style={{ 
            color: 'white', 
            fontFamily: '"Roboto Mono", monospace', 
            fontSize: '0.35rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            marginTop: '8px',
            textAlign: 'center',
            lineHeight: 1.2
          }}>Water Fabric<br/><span style={{fontSize: '0.3rem', opacity: 0.7}}>Est 2026</span></span>
        </div>

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
              <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem', opacity: 0.9 }}>Book a demo</a></li>
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
