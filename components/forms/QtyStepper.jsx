import React from 'react';

/**
 * Lucky Point Coffee — QtyStepper
 * Compact quantity control for the tienda / cart. Rounded pill.
 */
export function QtyStepper({ value = 1, min = 1, max = 99, onChange, size = 'md' }) {
  const dims = size === 'sm'
    ? { btn: 30, font: '0.95rem', num: 32 }
    : { btn: 38, font: '1.05rem', num: 42 };

  const set = (n) => { const c = Math.max(min, Math.min(max, n)); onChange && onChange(c); };

  const btn = {
    width: dims.btn, height: dims.btn,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: 'none', cursor: 'pointer',
    background: 'transparent', color: 'var(--lp-espresso)',
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: dims.font,
    borderRadius: 'var(--r-pill)',
    transition: 'background var(--dur-fast) var(--ease)',
  };
  const hover = (e, on) => { e.currentTarget.style.background = on ? 'var(--surface-sand)' : 'transparent'; };

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      background: 'var(--surface-card)',
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--r-pill)', padding: '3px',
    }}>
      <button style={btn} onClick={() => set(value - 1)} onMouseEnter={(e)=>hover(e,1)} onMouseLeave={(e)=>hover(e,0)} aria-label="Quitar uno">−</button>
      <span style={{
        minWidth: dims.num, textAlign: 'center',
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.95rem',
        color: 'var(--text-strong)',
      }}>{value}</span>
      <button style={btn} onClick={() => set(value + 1)} onMouseEnter={(e)=>hover(e,1)} onMouseLeave={(e)=>hover(e,0)} aria-label="Agregar uno">+</button>
    </div>
  );
}
