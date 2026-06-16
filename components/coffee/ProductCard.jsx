import React from 'react';
import { PriceTag } from './PriceTag.jsx';
import { Button } from '../forms/Button.jsx';

/**
 * Lucky Point Coffee — ProductCard
 * Tienda product: image, category, name, blurb, dual price, add button.
 * Falls back to a warm placeholder block when no image is given.
 */
export function ProductCard({ name, category, description, clp, image, cta = 'Agregar', onAdd }) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)', overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      }}>
      {/* Image / placeholder */}
      <div style={{
        position: 'relative', aspectRatio: '4 / 3',
        background: image ? `center/cover url(${image})`
          : 'linear-gradient(135deg, var(--lp-cream-200), var(--lp-cream-300))',
      }}>
        {!image && (
          <span style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: '2rem',
            color: 'var(--lp-coffee-400)', opacity: 0.6, textAlign: 'center', padding: '0 16px',
          }}>{name}</span>
        )}
        {category && (
          <span style={{
            position: 'absolute', top: 12, left: 12,
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.625rem',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '5px 11px', borderRadius: 'var(--r-pill)',
            background: 'rgba(42,28,18,0.78)', color: 'var(--lp-cream-50)',
            backdropFilter: 'blur(4px)',
          }}>{category}</span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--sp-5)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', flex: 1 }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', margin: 0, lineHeight: 1.05, color: 'var(--text-strong)' }}>{name}</h3>
          {description && (
            <p style={{ margin: '6px 0 0', fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>{description}</p>
          )}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
          <PriceTag clp={clp} layout="inline" size="md" />
          <Button variant="primary" block onClick={() => onAdd && onAdd({ name, clp })}>{cta}</Button>
        </div>
      </div>
    </div>
  );
}
