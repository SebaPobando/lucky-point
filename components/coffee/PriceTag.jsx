import React from 'react';

/** Format a CLP integer as "$3.200" (Chilean grouping). */
export function formatCLP(clp) {
  return '$' + Math.round(clp).toLocaleString('es-CL');
}
/** Temporary rule: 10 CLP = 1 Lucky Point. */
export function toLuckyPoints(clp) {
  return Math.round(clp / 10);
}

/**
 * Lucky Point Coffee — PriceTag
 * Brand-critical dual price: CLP value + equivalent Lucky Points.
 * layout: "inline" (CLP · points on one line) | "stacked".
 * size: sm | md | lg.
 */
export function PriceTag({ clp, layout = 'inline', size = 'md', showPoints = true }) {
  const points = toLuckyPoints(clp);
  const sizes = {
    sm: { price: '0.95rem', pts: '0.7rem' },
    md: { price: '1.15rem', pts: '0.78rem' },
    lg: { price: '1.6rem', pts: '0.9rem' },
  };

  const priceEl = (
    <span style={{
      fontFamily: 'var(--font-body)', fontWeight: 700,
      fontSize: sizes[size].price, color: 'var(--text-strong)',
      lineHeight: 1, whiteSpace: 'nowrap',
    }}>{formatCLP(clp)}</span>
  );

  const pointsEl = showPoints && (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      fontFamily: 'var(--font-body)', fontWeight: 700,
      fontSize: sizes[size].pts, color: '#8A5E13',
      background: 'var(--lp-gold-bg)',
      padding: '3px 9px', borderRadius: 'var(--r-pill)',
      lineHeight: 1, whiteSpace: 'nowrap',
    }}>
      <span aria-hidden="true" style={{
        width: 12, height: 12, borderRadius: '50%',
        background: 'var(--lp-gold)', color: 'var(--lp-espresso)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '8px', fontWeight: 900,
      }}>★</span>
      {points.toLocaleString('es-CL')} pts
    </span>
  );

  return (
    <span style={{
      display: 'inline-flex',
      flexDirection: layout === 'stacked' ? 'column' : 'row',
      alignItems: layout === 'stacked' ? 'flex-start' : 'center',
      gap: layout === 'stacked' ? '6px' : '10px',
    }}>
      {priceEl}
      {pointsEl}
    </span>
  );
}
