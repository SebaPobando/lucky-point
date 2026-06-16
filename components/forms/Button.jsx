import React from 'react';

/**
 * Lucky Point Coffee — Button
 * Variants: primary (forest), dark (espresso/ink), gold (Lucky Points),
 * secondary (outline), ghost. Sizes: sm, md, lg. Rounded, warm, tactile.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '0.8125rem', gap: '6px' },
    md: { padding: '12px 22px', fontSize: '0.9375rem', gap: '8px' },
    lg: { padding: '16px 30px', fontSize: '1.0625rem', gap: '10px' },
  };

  const variants = {
    primary: { background: 'var(--lp-forest)', color: 'var(--lp-cream-50)', border: '2px solid var(--lp-forest)' },
    dark:    { background: 'var(--lp-espresso)', color: 'var(--lp-cream-50)', border: '2px solid var(--lp-espresso)' },
    gold:    { background: 'var(--lp-gold)', color: 'var(--lp-espresso)', border: '2px solid var(--lp-gold)' },
    secondary:{ background: 'transparent', color: 'var(--lp-espresso)', border: '2px solid var(--border-strong)' },
    ghost:   { background: 'transparent', color: 'var(--lp-coffee-600)', border: '2px solid transparent' },
  };

  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    borderRadius: 'var(--r-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease), filter var(--dur-fast) var(--ease), background var(--dur) var(--ease)',
    ...variants[variant],
    ...style,
  };

  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; };
  const onUp = (e) => { e.currentTarget.style.transform = 'scale(1)'; };
  const onEnter = (e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.06)'; };
  const onLeave = (e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'scale(1)'; };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
