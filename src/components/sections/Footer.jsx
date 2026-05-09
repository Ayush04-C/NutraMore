import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#1A1209',
      textAlign: 'center',
      padding: '40px',
      color: '#5A4535',
      fontSize: 13,
    }}>
      <p>
        Submitted for{' '}
        <strong style={{ color: '#E8650A' }}>Digital Product & UX Intern — Nutramore Health Foods</strong>
      </p>
      <p style={{ marginTop: 8, fontSize: 12 }}>
        Designed with user empathy, product thinking, and conversion mindset · 2026
      </p>
    </footer>
  );
}
