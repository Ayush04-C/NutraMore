import React, { useState } from 'react';
import {
  trustPills, guaranteeItems, ingredients,
  descriptionPoints, annotations,
} from '../../data/assignmentData';
import NutritionPanel from '../ui/NutritionPanel';
import { Section, PartLabel, SectionTitle, SectionDesc, HighlightBox, AnnotationCard } from '../ui/UIComponents';

const TABS = ['Description', 'Ingredients', 'Why Nutramore?', 'Reviews'];

export default function Part2() {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section>
      <PartLabel num="2">Design Solution</PartLabel>
      <SectionTitle>Redesigned Product Detail Page</SectionTitle>
      <SectionDesc>
        High-fidelity UI mockup — with the missing Nutrition Facts panel added as a first-class component.
      </SectionDesc>

      <HighlightBox>
        <strong>Design decision:</strong> I chose to redesign the <strong>Product Detail Page</strong> because
        that is exactly where the friction occurs. I kept Nutramore's brand colours (orange + white) but softened
        the sharp edges, introduced rounded components, and placed Nutritional Facts <em>above</em> the Add to Cart
        button — because a health-conscious user needs that information before they decide, not after.
      </HighlightBox>

      {/* ── Browser Mockup ── */}
      <div style={{ background: '#F0EBE1', borderRadius: 16, padding: 24, border: '1px solid var(--border-strong)' }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', textAlign: 'center', marginBottom: 18 }}>
          ↓ Redesigned Product Detail Page — High-Fidelity UI Mockup
        </div>

        <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border-strong)', boxShadow: '0 4px 32px rgba(0,0,0,0.1)' }}>

          {/* Browser chrome */}
          <div style={{ background: '#F5F0E8', borderBottom: '1px solid var(--border)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#F08080','#F0C080','#80C880'].map((c,i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{ flex: 1, background: '#EDE8DF', borderRadius: 6, padding: '5px 12px', fontSize: 12, color: 'var(--muted)', fontFamily: 'monospace' }}>
              nutramore.in/products/all-time-favourite-healthy-cookies
            </div>
          </div>

          {/* Nav */}
          <div style={{ background: '#fff', borderBottom: '2px solid var(--orange)', padding: '14px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--orange)' }}>
              Nutra<span style={{ color: 'var(--dark)' }}>m♥re</span>
            </div>
            <div style={{ display: 'flex', gap: 24, fontSize: 13, color: 'var(--mid)' }}>
              {['Home','Shop ▾','Our Story','Our Community','Blog'].map(l => <span key={l}>{l}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 16, fontSize: 18, color: 'var(--mid)' }}>
              <span>🔍</span><span>👤</span><span>🛒</span>
            </div>
          </div>

          {/* Breadcrumb */}
          <div style={{ padding: '12px 40px', fontSize: 12, color: 'var(--muted)', background: '#FDFAF6', borderBottom: '1px solid var(--border)' }}>
            Home → Shop → Cookies → <span style={{ color: 'var(--orange)' }}>All-Time Favourite Healthy Cookies</span>
          </div>

          {/* Product main grid */}
          <div style={{ padding: '36px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

            {/* Left: image */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 14, right: 14, background: 'var(--orange)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 5, letterSpacing: 1 }}>SALE</div>
              <div style={{ background: 'linear-gradient(135deg, #FDF0E6 0%, #FFF8F0 100%)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, marginBottom: 12 }}>🍪</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['🍪','📦','🌾','✨'].map((e, i) => (
                  <div key={i} style={{ width: 60, height: 60, background: '#FDF0E6', borderRadius: 8, border: i === 0 ? '2px solid var(--orange)' : '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, cursor: 'pointer' }}>{e}</div>
                ))}
              </div>
            </div>

            {/* Right: info */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 8 }}>Cookies · Millet Snacks</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--dark)', lineHeight: 1.25, marginBottom: 14 }}>
                All-Time Favourite Healthy Cookies — Jowar + Rice-Ragi + Bajra
              </div>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ color: '#F5A623', fontSize: 15 }}>★★★★★</span>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>4.8 · 214 reviews</span>
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: 'var(--dark)' }}>₹460</span>
                <span style={{ fontSize: 18, color: 'var(--muted)', textDecoration: 'line-through' }}>₹495</span>
                <span style={{ fontSize: 12, background: '#E8F5E9', color: '#2E7D32', padding: '3px 10px', borderRadius: 20, fontWeight: 600 }}>Save ₹35</span>
              </div>

              {/* Trust pills */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                {trustPills.map((p) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'var(--orange-light)', border: '1px solid #F5C89A', color: '#9A4A0A', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 20 }}>{p}</div>
                ))}
              </div>

              {/* ★ NUTRITION PANEL — the core addition */}
              <NutritionPanel />

              {/* Guarantee strip */}
              <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', marginBottom: 20 }}>
                {guaranteeItems.map((g, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 4px', fontSize: 11, color: 'var(--mid)', textAlign: 'center', borderRight: i < guaranteeItems.length - 1 ? '1px solid var(--border)' : 'none', gap: 4 }}>
                    <span style={{ fontSize: 18 }}>{g.icon}</span>
                    <strong style={{ color: 'var(--dark)', fontSize: 11 }}>{g.label}</strong>
                    {g.sub && <span>{g.sub}</span>}
                  </div>
                ))}
              </div>

              {/* Qty + CTA */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--border-strong)', borderRadius: 8, overflow: 'hidden' }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 36, height: 44, background: '#F5F0E8', border: 'none', fontSize: 18, color: 'var(--dark)', cursor: 'pointer' }}>−</button>
                  <div style={{ width: 40, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 600, borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>{qty}</div>
                  <button onClick={() => setQty(q => q + 1)} style={{ width: 36, height: 44, background: '#F5F0E8', border: 'none', fontSize: 18, color: 'var(--dark)', cursor: 'pointer' }}>+</button>
                </div>
                <button style={{ flex: 1, background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 8, height: 44, fontSize: 14, fontWeight: 700, letterSpacing: 0.5, cursor: 'pointer' }}>ADD TO CART</button>
                <button style={{ width: 44, height: 44, background: '#fff', border: '1.5px solid var(--border-strong)', borderRadius: 8, fontSize: 20, cursor: 'pointer' }}>♡</button>
              </div>
            </div>
          </div>

          {/* Description Tabs */}
          <div style={{ padding: '0 40px 40px' }}>
            <div style={{ display: 'flex', borderBottom: '2px solid var(--border)', marginBottom: 28 }}>
              {TABS.map((t, i) => (
                <button key={t} onClick={() => setActiveTab(i)} style={{
                  padding: '12px 24px', fontSize: 13, fontWeight: 600,
                  color: activeTab === i ? 'var(--orange)' : 'var(--muted)',
                  borderBottom: activeTab === i ? '2px solid var(--orange)' : '2px solid transparent',
                  marginBottom: -2, background: 'none', border: 'none',
                  borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                  cursor: 'pointer', letterSpacing: 0.5,
                }}>{t}</button>
              ))}
            </div>

            {activeTab === 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <ul style={{ listStyle: 'none' }}>
                  {descriptionPoints.map((p, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14, fontSize: 13.5, color: 'var(--mid)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--orange)', fontSize: 10, flexShrink: 0, marginTop: 4 }}>✦</span>
                      <span><strong style={{ color: 'var(--dark)' }}>{p.title}</strong> — {p.body}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Key Claims</p>
                  <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.7 }}>Zero Maida · Zero Sugar · Zero Vegetable Fat / Palmolein Oil · Zero Preservatives · Zero Artificial Flavors or Colors</p>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Ingredients</p>
                <div>
                  {ingredients.map((ing) => (
                    <span key={ing} style={{ display: 'inline-block', background: 'var(--orange-light)', border: '1px solid #F5C89A', color: '#9A4A0A', fontSize: 12, fontWeight: 500, padding: '5px 14px', borderRadius: 20, margin: '4px 3px' }}>{ing}</span>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 2 || activeTab === 3) && (
              <p style={{ fontSize: 14, color: 'var(--muted)', fontStyle: 'italic' }}>Content for this tab would go here in the live implementation.</p>
            )}
          </div>
        </div>
      </div>

      {/* Design annotations */}
      <div style={{ marginTop: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          Design decisions & rationale
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {annotations.map((a) => (
            <AnnotationCard key={a.num} {...a} />
          ))}
        </div>
      </div>
    </Section>
  );
}
