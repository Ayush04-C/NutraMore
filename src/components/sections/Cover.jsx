import React from 'react';

export default function Cover() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#1A1209',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: -120, right: -120,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, #E8650A22 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle, #2E7D3218 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        background: '#E8650A', color: '#fff',
        fontSize: 11, fontWeight: 600, letterSpacing: 2,
        textTransform: 'uppercase', padding: '6px 18px',
        borderRadius: 40, marginBottom: 36,
      }}>
        Digital Product & UX Intern — Selection Assignment
      </div>

      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 52,
        color: '#fff', letterSpacing: -1, marginBottom: 6, textAlign: 'center',
      }}>
        Nutra<span style={{ color: '#E8650A' }}>m</span>ore
      </div>
      <div style={{
        fontSize: 13, color: '#8B7355', letterSpacing: 3,
        textTransform: 'uppercase', marginBottom: 56,
      }}>
        Your Fitness. Our Pride.
      </div>

      {/* Title */}
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 36,
        color: '#F5EDE0', textAlign: 'center',
        maxWidth: 600, lineHeight: 1.25, marginBottom: 14,
      }}>
        UX Audit & Product Detail Page Redesign
      </div>
      <div style={{
        fontSize: 15, color: '#8B7355',
        textAlign: 'center', maxWidth: 480, marginBottom: 60,
      }}>
        A focused UX analysis of Nutramore's product experience, with a redesigned
        Product Detail Page and conversion strategy.
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: 'Selected User',   value: 'Health-Conscious Working Professional' },
          { label: 'Design Focus',    value: 'Product Detail Page' },
          { label: 'Core Fix',        value: 'Nutritional Transparency' },
        ].map((m) => (
          <div key={m.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: '#5A4535', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{m.label}</div>
            <div style={{ fontSize: 15, color: '#E8DFD0', fontWeight: 500 }}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
