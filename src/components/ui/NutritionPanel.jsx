import React from 'react';
import { nutritionFacts } from '../../data/assignmentData';

export default function NutritionPanel() {
  const { servingSize, servingsPerBox, calories, rows } = nutritionFacts;

  return (
    <div style={{
      background: '#FDFAF6',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      marginBottom: 20,
    }}>
      {/* Header */}
      <div style={{
        background: 'var(--dark)', color: '#fff',
        padding: '10px 18px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
          Nutrition Facts
        </span>
        <span style={{ fontSize: 11, color: '#8B7355' }}>
          {servingSize} · {servingsPerBox}
        </span>
      </div>

      {/* Calories */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 18px', borderBottom: '2px solid var(--dark)', background: '#fff',
      }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--dark)' }}>Calories</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--dark)' }}>{calories}</div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>% Daily Value*</div>
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center',
          padding: row.indent ? '7px 18px 7px 36px' : '7px 18px',
          borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
          fontSize: 13,
          background: row.highlight ? '#F5F9F0' : '#fff',
          borderTop: row.highlight ? '2px solid var(--border)' : 'none',
        }}>
          <span style={{
            flex: 1,
            fontWeight: row.bold ? 700 : 400,
            color: row.highlight ? '#2E7D32' : 'var(--dark)',
          }}>
            {row.name}
          </span>
          <span style={{
            fontWeight: 600,
            color: row.highlight ? '#2E7D32' : 'var(--dark)',
            marginRight: 12,
          }}>
            {row.amount}
          </span>
          <span style={{ fontSize: 12, color: 'var(--muted)', minWidth: 36, textAlign: 'right' }}>
            {row.dv}
          </span>
          <div style={{
            width: 60, height: 5,
            background: 'var(--border)',
            borderRadius: 3, marginLeft: 10,
          }}>
            <div style={{
              height: '100%', borderRadius: 3,
              background: row.green ? 'var(--green)' : 'var(--orange)',
              width: `${row.pct}%`,
            }} />
          </div>
        </div>
      ))}

      {/* Footer */}
      <div style={{
        padding: '8px 18px', fontSize: 11,
        color: 'var(--muted)', background: '#F5F0E8',
        borderTop: '1px solid var(--border)',
      }}>
        * Percent Daily Values based on a 2,000 calorie diet. Developed by a nutritionist with 35+ years of experience.
      </div>
    </div>
  );
}
