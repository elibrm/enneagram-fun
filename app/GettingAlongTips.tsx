'use client';

import { EnneagramType } from '@/data/types';
import { compatibility } from '@/data/compatibility';

interface Props {
  typeA: EnneagramType;
  typeB: EnneagramType;
}

export default function GettingAlongTips({ typeA, typeB }: Props) {
  const lower = typeA.num < typeB.num ? typeA : typeB;
  const higher = typeA.num < typeB.num ? typeB : typeA;

  const key = `${lower.num}-${higher.num}`;
  const tip = compatibility[key];

  if (!tip) return null;

  // forType1 belongs to the lower-numbered type, forType2 to the higher-numbered type
  // Render in the order the user selected (typeA left, typeB right)
  const tipsForA = typeA.num === lower.num ? tip.forType1 : tip.forType2;
  const tipsForB = typeB.num === lower.num ? tip.forType1 : tip.forType2;

  return (
    <div className="getting-along">
      <h2 className="getting-along-header">Tips for Getting Along</h2>
      <div className="getting-along-grid">
        <div className={`getting-along-col type-${typeA.num}`}>
          <h3>Tips for {typeA.name}</h3>
          <ul>
            {tipsForA.map((t, i) => (
              <li key={i}><span>{t.emoji}</span> {t.text}</li>
            ))}
          </ul>
        </div>
        <div className={`getting-along-col type-${typeB.num}`}>
          <h3>Tips for {typeB.name}</h3>
          <ul>
            {tipsForB.map((t, i) => (
              <li key={i}><span>{t.emoji}</span> {t.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
