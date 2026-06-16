import React from 'react';

/**
 * Lucky Point Coffee — Badge
 * Small status / category pill. tone: neutral, forest, gold, dark, danger.
 * Optional `dot`.
 */
export function Badge({ children, tone = 'neutral', dot = false, style = {} }) {
  const tones = {
    neutral: { background: 'var(--surface-sand)', color: 'var(--lp-coffee-700)' },
    forest:  { background: 'rgba(32,57,43,0.12)', color: 'var(--lp-forest)' },
    gold:    { background: 'var(--lp-gold-bg)', color: '#8A5E13' },
    dark:    { background: 'var(--lp-espresso)', color: 'var(--lp-cream-50)' },
    danger:  { background: 'rgba(178,59,46,0.12)', color: 'var(--lp-danger)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.6875rem',
      letterSpacing: '0.06em', textTransform: 'uppercase',
      padding: '5px 11px', borderRadius: 'var(--r-pill)',
      ...tones[tone], ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
