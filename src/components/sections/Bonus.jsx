import React from 'react';
import { bonusPageSpeed, bonusMobileUX } from '../../data/assignmentData';
import { Section, PartLabel, SectionTitle, SectionDesc, BonusCard } from '../ui/UIComponents';

export default function Bonus() {
  return (
    <Section>
      <PartLabel>⭐ Bonus</PartLabel>
      <SectionTitle>Performance & Mobile UX Suggestions</SectionTitle>
      <SectionDesc>Actionable improvements for speed, accessibility, and mobile experience.</SectionDesc>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <BonusCard icon="⚡" title="Page Speed Improvements" items={bonusPageSpeed} />
        <BonusCard icon="📱" title="Mobile UX Improvements"  items={bonusMobileUX}  />
      </div>
    </Section>
  );
}
