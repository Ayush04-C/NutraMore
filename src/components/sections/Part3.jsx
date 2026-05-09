import React from 'react';
import { metrics, roadmap } from '../../data/assignmentData';
import { Section, PartLabel, SectionTitle, SectionDesc, Card, CardHeader, CardBody, HighlightBox } from '../ui/UIComponents';

export default function Part3() {
  return (
    <Section>
      <PartLabel num="3">Product & Conversion Thinking</PartLabel>
      <SectionTitle>How do we measure and improve?</SectionTitle>
      <SectionDesc>Brief, product-owner-style answers to the three conversion questions.</SectionDesc>

      {/* Q1 */}
      <div style={{ marginBottom: 40 }}>
        <Card>
          <CardHeader icon="🤝" type="orange" title="Q1 — How does the design improve trust and clarity?" />
          <CardBody>
            The Nutrition Facts panel converts a vague marketing claim ("High Quality Protein") into a verifiable,
            structured fact. When a user can <em>see</em> exactly what they're putting into their body — calories,
            protein, carbs, fibre, daily values — the brand stops feeling like a promise and starts feeling like
            a fact. Health-conscious buyers don't trust brands; they trust numbers. By surfacing those numbers
            directly on the PDP, Nutramore signals transparency and confidence. Trust goes up, hesitation goes
            down, and the CTA click becomes natural.
          </CardBody>
        </Card>
      </div>

      {/* Q2 */}
      <div style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}>
          Q2 — The one metric to track
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
          {metrics.map((m) => (
            <div key={m.label} style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderTop: m.primary ? '3px solid var(--orange)' : '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '22px 20px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{m.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--dark)', marginBottom: 6 }}>{m.value}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{m.desc}</div>
            </div>
          ))}
        </div>
        <HighlightBox>
          <strong>Test approach:</strong> Run an A/B test — 50% of users see the current PDP, 50% see the
          redesigned PDP with the Nutrition Facts panel. Track add-to-cart rate for 2 weeks. Even a 5–10% lift
          would validate the change.
        </HighlightBox>
      </div>

      {/* Q3 – Roadmap */}
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 18 }}>
          Q3 — If given 2 more weeks, what's next?
        </p>
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          <div style={{ position: 'absolute', left: 7, top: 6, bottom: 6, width: 2, background: 'var(--border)' }} />
          {roadmap.map((item, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 28 }}>
              <div style={{
                position: 'absolute', left: -27, top: 4,
                width: 14, height: 14, borderRadius: '50%',
                background: 'var(--orange)',
                border: '2px solid var(--surface)',
                boxShadow: '0 0 0 2px var(--orange)',
              }} />
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 4 }}>{item.week}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)', marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 13.5, color: 'var(--mid)', lineHeight: 1.6 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
