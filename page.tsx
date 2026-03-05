'use client';

import { useState } from 'react';
import { types } from '@/data/types';
import TypeCard from '@/components/TypeCard';
import { compatibility, Tip } from '@/data/compatibility';

type View = 'list' | 'grid' | 'compare';

export default function Home() {
  const [view, setView] = useState<View>('list');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [compareSelections, setCompareSelections] = useState<number[]>([]);

  function toggleCard(num: number) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  }

  function expandAll() {
    setExpandedIds(new Set(types.map((t) => t.num)));
  }

  function collapseAll() {
    setExpandedIds(new Set());
  }

  function handleSetView(v: View) {
    setView(v);
    setCompareSelections([]);
  }

  function toggleCompare(num: number) {
    setCompareSelections((prev) => {
      const idx = prev.indexOf(num);
      if (idx > -1) return prev.filter((n) => n !== num);
      if (prev.length < 2) return [...prev, num];
      return [prev[1], num];
    });
  }

  const compareTypes = compareSelections.map((n) => types.find((t) => t.num === n)!);

  function getCompareTips(thisType: number, otherType: number): Tip[] | undefined {
    const lower = Math.min(thisType, otherType);
    const higher = Math.max(thisType, otherType);
    const tip = compatibility[`${lower}-${higher}`];
    if (!tip) return undefined;
    return thisType === lower ? tip.forType1 : tip.forType2;
  }

  function pluralName(name: string) {
    // All 9 type names follow "The X" — strip "The " and add "s"
    return name.replace(/^The /, '') + 's';
  }

  return (
    <>
      <header>
        <h1>Enneagram Explorer</h1>
        <p>Click any type to explore its core traits, fears, desires, and wings</p>
      </header>

      <div className="controls">
        <button
          className={view === 'list' ? 'active' : ''}
          onClick={() => handleSetView('list')}
        >
          All Types
        </button>
        <button
          className={view === 'grid' ? 'active' : ''}
          onClick={() => handleSetView('grid')}
        >
          Grid
        </button>
        <button
          className={view === 'compare' ? 'active' : ''}
          onClick={() => handleSetView('compare')}
        >
          Compare
        </button>
        <button onClick={expandAll}>Expand All</button>
        <button onClick={collapseAll}>Collapse All</button>
      </div>

      {view === 'compare' && (
        <div className="compare-hint visible">
          Select two types below to compare them side by side
        </div>
      )}

      <div className="container">
        {view === 'compare' ? (
          <>
            <div className="compare-view" style={{ marginBottom: '24px' }}>
              {compareTypes[0] ? (
                <TypeCard
                  type={compareTypes[0]}
                  expanded={false}
                  forceExpanded
                  mode="compare"
                  compareTips={compareTypes[1] ? getCompareTips(compareTypes[0].num, compareTypes[1].num) : undefined}
                  compareWithName={compareTypes[1] ? pluralName(compareTypes[1].name) : undefined}
                />
              ) : (
                <div className="compare-placeholder">Select a first type below</div>
              )}
              {compareTypes[1] ? (
                <TypeCard
                  type={compareTypes[1]}
                  expanded={false}
                  forceExpanded
                  mode="compare"
                  compareTips={compareTypes[0] ? getCompareTips(compareTypes[1].num, compareTypes[0].num) : undefined}
                  compareWithName={compareTypes[0] ? pluralName(compareTypes[0].name) : undefined}
                />
              ) : (
                <div className="compare-placeholder">Select a second type below</div>
              )}
            </div>

            <div className="grid-view">
              {types.map((type) => (
                <TypeCard
                  key={type.num}
                  type={type}
                  expanded={false}
                  compareSelected={compareSelections.includes(type.num)}
                  mode="compare-selector"
                  onCompareToggle={() => toggleCompare(type.num)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={view === 'grid' ? 'grid-view' : 'list-view'}>
            {types.map((type) => (
              <TypeCard
                key={type.num}
                type={type}
                expanded={expandedIds.has(type.num)}
                mode={view}
                onToggle={() => toggleCard(type.num)}
              />
            ))}
          </div>
        )}
      </div>

      <footer>
        Based on Riso-Hudson Enneagram typology
      </footer>
    </>
  );
}
