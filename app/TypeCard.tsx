'use client';

import { EnneagramType } from './types';
import { Tip } from './compatibility';

interface TypeCardProps {
  type: EnneagramType;
  expanded: boolean;
  compareSelected?: boolean;
  forceExpanded?: boolean;
  onToggle?: () => void;
  onCompareToggle?: () => void;
  mode: 'list' | 'grid' | 'compare' | 'compare-selector';
  compareTips?: Tip[];
  compareWithName?: string;
}

export default function TypeCard({
  type,
  expanded,
  compareSelected,
  forceExpanded,
  onToggle,
  onCompareToggle,
  mode,
  compareTips,
  compareWithName,
}: TypeCardProps) {
  const isExpanded = forceExpanded || expanded;
  const isCompareSelector = mode === 'compare-selector';

  function handleClick() {
    if (isCompareSelector && onCompareToggle) {
      onCompareToggle();
    } else if (mode !== 'compare' && onToggle) {
      onToggle();
    }
  }

  return (
    <div
      className={[
        'type-card',
        `type-${type.num}`,
        isExpanded ? 'expanded' : '',
        compareSelected ? 'compare-selected' : '',
      ].join(' ')}
      onClick={handleClick}
    >
      <div className="card-header">
        <div className="card-emoji">{type.emoji}</div>
        <div className="card-title-group">
          <div className="card-number">Type {type.num}</div>
          <div className="card-name">{type.name}</div>
        </div>
        {!isCompareSelector && mode !== 'compare' && (
          <div className="card-chevron">▽</div>
        )}
      </div>

      <div className="card-preview">{type.traits.join(' · ')}</div>

      {!isCompareSelector && (
        <div className="card-body">
          <div className="card-content">
            <div className="card-section">
              <div className="card-label">Core Traits</div>
              <div className="core-traits">
                {type.traits.map((t) => (
                  <span key={t} className="trait-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="card-section">
              <div className="card-label">Core Fear</div>
              <div className="card-value">{type.fear}</div>
            </div>
            <div className="card-section">
              <div className="card-label">Core Desire</div>
              <div className="card-value">{type.desire}</div>
            </div>
            <div className="card-section">
              <div className="card-label">Wings</div>
              {type.wings.map((w) => (
                <div key={w.code} className="wing-card">
                  <div className="wing-name">{w.code} — {w.name}</div>
                  <div className="wing-desc">{w.desc}</div>
                </div>
              ))}
            </div>

            {compareTips && compareWithName && (
              <div className="card-section">
                <div className="card-label">Tips for getting along with {compareWithName}</div>
                <ul className="card-tips">
                  {compareTips.map((tip, i) => (
                    <li key={i}>
                      <span className="tip-emoji" aria-hidden="true">{tip.emoji}</span>
                      <span>{tip.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
