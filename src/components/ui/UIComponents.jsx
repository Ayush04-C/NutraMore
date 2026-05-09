import React from 'react';

// ── Section Wrapper ──────────────────────────────────────────────────────────
export function Section({ children, style }) {
  return (
    <section style={{
      maxWidth: 900,
      margin: '0 auto',
      padding: '80px 40px',
      borderTop: '1px solid var(--border)',
      ...style,
    }}>
      {children}
    </section>
  );
}

// ── Part Label ───────────────────────────────────────────────────────────────
export function PartLabel({ num, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      {num && (
        <div style={{
          width: 22, height: 22, background: 'var(--orange)', color: '#fff',
          borderRadius: '50%', fontSize: 10, display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontWeight: 700,
        }}>{num}</div>
      )}
      <span style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 2,
        textTransform: 'uppercase', color: 'var(--orange)',
      }}>{children}</span>
    </div>
  );
}

// ── Section Title ────────────────────────────────────────────────────────────
export function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 32, color: 'var(--dark)',
      marginBottom: 8, lineHeight: 1.2,
    }}>{children}</h2>
  );
}

// ── Section Desc ─────────────────────────────────────────────────────────────
export function SectionDesc({ children }) {
  return (
    <p style={{
      fontSize: 15, color: 'var(--muted)',
      maxWidth: 560, marginBottom: 40,
    }}>{children}</p>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────
export function Card({ children, style }) {
  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '28px 32px',
      marginBottom: 16,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── Card Header ──────────────────────────────────────────────────────────────
export function CardHeader({ icon, type = 'orange', tag, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 12 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, fontSize: 20, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: type === 'green' ? 'var(--green-light)' : 'var(--orange-light)',
      }}>{icon}</div>
      <div>
        {tag === 'friction' && (
          <span style={{
            display: 'inline-block', background: '#FEF2E6',
            border: '1px solid #F5C89A', color: '#9A4A0A',
            fontSize: 12, fontWeight: 700, padding: '4px 12px',
            borderRadius: 20, marginBottom: 6,
          }}>Critical Friction</span>
        )}
        {tag === 'impact' && (
          <span style={{
            display: 'inline-block', background: 'var(--green-light)',
            border: '1px solid #A5D6A7', color: '#1B5E20',
            fontSize: 12, fontWeight: 700, padding: '4px 12px',
            borderRadius: 20, marginBottom: 6,
          }}>Conversion Impact</span>
        )}
        <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--dark)' }}>{title}</div>
      </div>
    </div>
  );
}

// ── Card Body ─────────────────────────────────────────────────────────────────
export function CardBody({ children }) {
  return (
    <div style={{ fontSize: 14.5, color: 'var(--mid)', lineHeight: 1.7, paddingLeft: 54 }}>
      {children}
    </div>
  );
}

// ── Highlight Box ─────────────────────────────────────────────────────────────
export function HighlightBox({ children }) {
  return (
    <div style={{
      background: 'var(--orange-light)',
      borderLeft: '4px solid var(--orange)',
      borderRadius: '0 8px 8px 0',
      padding: '16px 20px',
      marginBottom: 20,
      fontSize: 14,
      color: '#5A3010',
      lineHeight: 1.65,
    }}>
      {children}
    </div>
  );
}

// ── Annotation Card ───────────────────────────────────────────────────────────
export function AnnotationCard({ num, title, body }) {
  return (
    <div style={{
      background: '#fff',
      border: '1.5px dashed var(--orange-mid)',
      borderRadius: 10,
      padding: '16px 18px',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--orange)', marginBottom: 6, letterSpacing: 1, textTransform: 'uppercase' }}>{num}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)', marginBottom: 5 }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--mid)', lineHeight: 1.6 }}>{body}</div>
    </div>
  );
}

// ── Bonus Card ────────────────────────────────────────────────────────────────
export function BonusCard({ icon, title, items }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '24px',
    }}>
      <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 10 }}>{title}</div>
      <ul style={{ listStyle: 'none' }}>
        {items.map((item, i) => (
          <li key={i} style={{
            fontSize: 13, color: 'var(--mid)', padding: '6px 0',
            borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
            display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.5,
          }}>
            <span style={{ color: 'var(--orange)', flexShrink: 0, fontSize: 12, marginTop: 2 }}>→</span>
            <span><strong style={{ color: 'var(--dark)' }}>{item.title}:</strong> {item.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
