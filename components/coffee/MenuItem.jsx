import React from 'react';
import { PriceTag } from './PriceTag.jsx';

/**
 * Lucky Point Coffee — MenuItem
 * A single carta row: name + description + dual price.
 * Optional `tag` (e.g. "Nuevo", "Verano") and divider.
 */
export function MenuItem({ name, description, clp, tag, divider = true }) {
  return (
    <article style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-4)',
      padding: 'var(--sp-4) 0',
      borderBottom: divider ? '1px solid var(--divider)' : 'none',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.25rem',
            color: 'var(--text-strong)', margin: 0, lineHeight: 1.1,
          }}>{name}</h3>
          {tag && (
            <span style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.625rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '3px 8px', borderRadius: 'var(--r-pill)',
              background: 'var(--lp-gold-bg)', color: '#8A5E13',
            }}>{tag}</span>
          )}
        </div>
        {description && (
          <p style={{
            margin: '5px 0 0', fontSize: '0.875rem', lineHeight: 1.5,
            color: 'var(--text-muted)', maxWidth: '46ch',
          }}>{description}</p>
        )}
      </div>
      <div style={{ flexShrink: 0, paddingTop: '2px' }}>
        <PriceTag clp={clp} layout="stacked" size="md" />
      </div>
    </article>
  );
}
