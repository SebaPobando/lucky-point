import React from 'react';

/**
 * Lucky Point Coffee — CategoryTabs
 * Horizontal scrollable pill tabs for carta categories.
 */
export function CategoryTabs({ tabs = [], active, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: 'var(--sp-2)', overflowX: 'auto',
      padding: '4px 0', WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
    }}>
      {tabs.map((t) => {
        const key = typeof t === 'string' ? t : t.id;
        const label = typeof t === 'string' ? t : t.label;
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => onChange && onChange(key)}
            style={{
              flexShrink: 0, cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem',
              padding: '9px 18px', borderRadius: 'var(--r-pill)',
              border: '2px solid ' + (isActive ? 'var(--lp-forest)' : 'var(--border-strong)'),
              background: isActive ? 'var(--lp-forest)' : 'transparent',
              color: isActive ? 'var(--lp-cream-50)' : 'var(--lp-coffee-600)',
              transition: 'all var(--dur) var(--ease)', whiteSpace: 'nowrap',
            }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
