import React from 'react';
import { part1Cards } from '../../data/assignmentData';
import { Section, PartLabel, SectionTitle, SectionDesc, Card, CardHeader, CardBody } from '../ui/UIComponents';

export default function Part1() {
  return (
    <Section>
      <PartLabel num="1">User & UX Thinking</PartLabel>
      <SectionTitle>Who is the user, and where are they stuck?</SectionTitle>
      <SectionDesc>Understanding the user before designing any solution.</SectionDesc>

      {part1Cards.map((card, i) => (
        <Card key={i}>
          <CardHeader icon={card.icon} type={card.type} tag={card.tag} title={card.title} />
          <CardBody>{card.body}</CardBody>
        </Card>
      ))}
    </Section>
  );
}
