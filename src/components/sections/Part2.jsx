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
    <Section style={{ maxWidth: 1150 }}>
      <PartLabel num="2">Design Solution</PartLabel>
      <SectionTitle>Redesigned Product Detail Page</SectionTitle>
      <SectionDesc>
        High-fidelity UI mockup — with a fluid layout, horizontal Nutrition Facts panel, and brand storytelling.
      </SectionDesc>

      <HighlightBox>
        <strong>Design decision:</strong> I chose to redesign the <strong>Product Detail Page</strong> to offer a more fluid reading experience. The browser frame has been removed to focus entirely on the UI. The Nutritional Facts panel is now horizontal, taking full width below the main product details. Ingredients, brand story, and reviews are stacked to tell a cohesive story.
      </HighlightBox>

      {/* ── Webpage Mockup ── */}
      <div style={{ background: '#F0EBE1', borderRadius: 16, padding: 24, border: '1px solid var(--border-strong)' }}>
        <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border-strong)', boxShadow: '0 4px 32px rgba(0,0,0,0.1)' }}>

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

          <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', gap: 48 }}>
            
            {/* Product main grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
              {/* Left: image */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 14, right: 14, background: 'var(--orange)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 5, letterSpacing: 1, zIndex: 10 }}>SALE</div>
                  <div style={{ borderRadius: 'var(--radius)', border: '1px solid var(--border)', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, overflow: 'hidden' }}>
                    <img src="https://nutramore.in/wp-content/uploads/2023/06/moong-cookies-image-2.jpg" alt="Nutramore Cookies" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {['🍪','📦','🌾','✨'].map((e, i) => (
                      <div key={i} style={{ width: 60, height: 60, background: '#FDF0E6', borderRadius: 8, border: i === 0 ? '2px solid var(--orange)' : '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, cursor: 'pointer' }}>{e}</div>
                    ))}
                  </div>
                </div>

                {/* Guarantee strip moved from right to left */}
                <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden', marginTop: 32 }}>
                  {guaranteeItems.map((g, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 4px', fontSize: 11, color: 'var(--mid)', textAlign: 'center', borderRight: i < guaranteeItems.length - 1 ? '1px solid var(--border)' : 'none', gap: 4 }}>
                      <span style={{ fontSize: 18 }}>{g.icon}</span>
                      <strong style={{ color: 'var(--dark)', fontSize: 11 }}>{g.label}</strong>
                      {g.sub && <span>{g.sub}</span>}
                    </div>
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

                {/* Description summary */}
                <div style={{ marginBottom: 20 }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {descriptionPoints.slice(0, 3).map((p, i) => (
                      <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8, fontSize: 13, color: 'var(--mid)', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--orange)', fontSize: 10, marginTop: 3 }}>✦</span>
                        <span><strong style={{ color: 'var(--dark)' }}>{p.title}</strong> — {p.body}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust pills */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
                  {trustPills.map((p) => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'var(--orange-light)', border: '1px solid #F5C89A', color: '#9A4A0A', fontSize: 11, fontWeight: 600, padding: '5px 12px', borderRadius: 20 }}>{p}</div>
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

            {/* Horizontal Nutrition Panel */}
            <div style={{ width: '100%' }}>
              <NutritionPanel layout="horizontal" />
            </div>

          {/* Description Tabs */}
          <div style={{ padding: '0 40px 40px', marginTop: 40 }}>
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
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
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

            {activeTab === 2 && (
              <div style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7, maxWidth: 800 }}>
                <h4 style={{ fontSize: 18, color: 'var(--orange)', fontFamily: 'var(--font-display)', marginBottom: 16 }}>A Mother’s Care, A Daughter’s Dream, and a Promise of Health in Every Bite</h4>
                <p style={{ marginBottom: 16 }}>
                  Nutramore is not just about healthy snacks—it’s about two women on a mission to make the world healthier, one bite at a time. It’s the story of a mother’s lifelong dedication to healing through food and a daughter’s dream to take that care to every home.
                </p>
                <p style={{ marginBottom: 16 }}>
                  Ratnaprabha is an experienced Nutritionist and consultant with over 35 years of experience of working with eminent people in the corporates, government, individuals and even with tribal communities. Inventing life enhancing and nutritionally complete food has been in her DNA.
                </p>
                <p style={{ marginBottom: 16 }}>
                  Watching her mother’s unwavering commitment, Pallavi—an Engineer and credit analyst with 12 years of successful Corporate career —felt a spark. She saw not just recipes, but a vision: to take this love and expertise to every home and transform everyday food into life-enhancing nutrition without sacrificing taste, convenience, or joy.
                </p>
                <p style={{ fontWeight: 600, color: 'var(--dark)', borderLeft: '3px solid var(--orange)', paddingLeft: 16, marginTop: 24 }}>
                  <strong>Our Mission:</strong> Nutramore is on a mission to inspire healthier and happier families and communities by serving differentiated, authentic, and world’s best nutritionally balanced foods that are instantly loved.
                </p>
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
                  <span style={{ color: '#F5A623', fontSize: 18 }}>★★★★★</span>
                  <span style={{ fontSize: 14, color: 'var(--dark)', fontWeight: 600 }}>4.8 / 5.0</span>
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>(Based on 214 reviews)</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  {/* Dummy Review 1 */}
                  <div style={{ background: '#FDFAF6', padding: 20, borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>Ananya S.</div>
                        <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 600, marginTop: 2 }}>✓ Verified Buyer</div>
                      </div>
                      <span style={{ color: '#F5A623', fontSize: 14 }}>★★★★★</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6, margin: 0 }}>
                      "Absolutely love these cookies! Being completely gluten-free and having zero maida makes me feel so good about snacking. The taste is incredibly rich."
                    </p>
                  </div>
                  {/* Dummy Review 2 */}
                  <div style={{ background: '#FDFAF6', padding: 20, borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>Rahul M.</div>
                        <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 600, marginTop: 2 }}>✓ Verified Buyer</div>
                      </div>
                      <span style={{ color: '#F5A623', fontSize: 14 }}>★★★★★</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6, margin: 0 }}>
                      "Perfect snack for my kids. I usually worry about sugar content, but Nutramore has perfectly balanced the sweetness. Will definitely order again!"
                    </p>
                  </div>
                  {/* Dummy Review 3 */}
                  <div style={{ background: '#FDFAF6', padding: 20, borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>Neha K.</div>
                        <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 600, marginTop: 2 }}>✓ Verified Buyer</div>
                      </div>
                      <span style={{ color: '#F5A623', fontSize: 14 }}>★★★★☆</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6, margin: 0 }}>
                      "Really good quality ingredients. I can literally taste the millets. It's a bit pricey but worth it for the health benefits."
                    </p>
                  </div>
                  {/* Dummy Review 4 */}
                  <div style={{ background: '#FDFAF6', padding: 20, borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>Vikram T.</div>
                        <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 600, marginTop: 2 }}>✓ Verified Buyer</div>
                      </div>
                      <span style={{ color: '#F5A623', fontSize: 14 }}>★★★★★</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6, margin: 0 }}>
                      "I've been looking for a healthy office snack for ages. These cookies are delicious and don't make me feel sluggish. Great packaging too."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          </div>

          {/* Related Products */}
          <div style={{ padding: '60px 40px', background: '#FAFAFA', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--dark)', textAlign: 'center', marginBottom: 40, fontWeight: 500 }}>Related Products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24 }}>
              {[
                { title: 'Breakfast Premix', price: '₹250.00', btn: 'Add To Cart', img: 'https://nutramore.in/wp-content/uploads/2025/04/cat2.jpg' },
                { title: 'Savoury Snacks', price: '₹165.00 - ₹1,262.00', btn: 'Select Options', img: 'https://nutramore.in/wp-content/uploads/2025/04/cat.jpg' },
                { title: 'Moong Almond Pistachio ...', price: '₹180.00 - ₹1,377.00', btn: 'Select Options', img: 'https://nutramore.in/wp-content/uploads/2023/06/moong-cookies-image-2.jpg' },
                { title: 'Jowar Chocolate Cookies', price: '₹165.00 - ₹1,262.00', btn: 'Select Options', img: 'https://nutramore.in/wp-content/uploads/2025/04/bajra-cat.jpg' },
              ].map((prod, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ background: '#FDF0E6', borderRadius: 8, aspectRatio: '1', marginBottom: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={prod.img} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--orange)', textAlign: 'center', margin: '0 0 12px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{prod.title}</h3>
                  <div style={{ fontSize: 13, color: 'var(--mid)', textAlign: 'center', fontWeight: 600, marginBottom: 16 }}>{prod.price}</div>
                  <button style={{ marginTop: 'auto', width: '100%', padding: '10px 0', background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                    {prod.btn}
                  </button>
                </div>
              ))}
            </div>
            {/* Carousel Arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32 }}>
              <button style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 16, color: 'var(--dark)' }}>{'<'}</button>
              <button style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 16, color: 'var(--dark)' }}>{'>'}</button>
            </div>
          </div>

          {/* Footer */}
          <div>
            <div style={{ background: '#ED7E29', padding: '60px 40px', color: '#fff', display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1fr 1fr', gap: 40 }}>
              {/* Brand */}
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 700, lineHeight: 1, marginBottom: 8 }}>
                  Nutra<span style={{ color: '#fff' }}>m♥re</span><span style={{ fontSize: 12, verticalAlign: 'top' }}>™</span>
                </div>
                <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>Your fitness, our pride</div>
              </div>

              {/* Contact Us */}
              <div>
                <h4 style={{ fontSize: 20, fontFamily: 'var(--font-display)', margin: '0 0 20px 0', fontWeight: 500 }}>Contact Us</h4>
                <div style={{ display: 'flex', gap: 12, marginBottom: 16, fontSize: 13, lineHeight: 1.5 }}>
                  <span>📍</span>
                  <span>Ganraj Sweets, 2, Building A Flat no. 203, Muktai Mathawad Pragan, Rambaug Colony Road, Kothrud, Pune, Pune, Maharashtra, 411038</span>
                </div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 16, fontSize: 13 }}>
                  <span>📞</span>
                  <span>+917420915791</span>
                </div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 24, fontSize: 13 }}>
                  <span>✉️</span>
                  <span>hello@nutramore.in</span>
                </div>
                {/* Social Icons */}
                <div style={{ display: 'flex', gap: 12 }}>
                  {['f', 'ig', 'yt'].map(icon => (
                    <div key={icon} style={{ width: 32, height: 32, borderRadius: '50%', background: '#62A346', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>{icon}</div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{ fontSize: 20, fontFamily: 'var(--font-display)', margin: '0 0 20px 0', fontWeight: 500 }}>Quick Links</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, lineHeight: 2 }}>
                  {['Privacy Policy', 'Terms & Conditions', 'Shipping Policy', 'Return & Refund Policy', 'About Us'].map(l => (
                    <li key={l} style={{ cursor: 'pointer' }}>{l}</li>
                  ))}
                </ul>
              </div>

              {/* Important Note */}
              <div>
                <h4 style={{ fontSize: 20, fontFamily: 'var(--font-display)', margin: '0 0 20px 0', fontWeight: 500 }}>Important Note</h4>
                <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  We accept all UPI payment methods like PhonePe, Gpay, Paytm, all Debit/Credit Cards, Netbanking, and most Wallets.
                </p>
              </div>
            </div>
            
            {/* Copyright Strip */}
            <div style={{ background: '#7CB342', padding: '16px 40px', fontSize: 13, color: '#1B3E0C', fontWeight: 600 }}>
              Copyright @ 2026| Right Reserved To NutraMore
            </div>
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
