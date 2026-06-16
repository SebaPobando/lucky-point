import React from 'react';

/**
 * Lucky Point Coffee — Card
 * Surface container. variant: plain (white), sand, dark, forest.
 * `interactive` adds hover lift. `pad` controls inner padding.
 */
export function Card({
  children,
  variant = 'plain',
  interactive = false,
  pad = 'md',
  style = {},
  ...rest
}) {
  const variants = {
    plain:  { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border)' },
    sand:   { background: 'var(--surface-sand)', color: 'var(--text-body)', border: '1px solid var(--border)' },
    dark:   { background: 'var(--surface-dark)', color: 'var(--text-on-dark)', border: '1px solid transparent' },
    forest: { background: 'var(--surface-forest)', color: 'var(--text-on-dark)', border: '1px solid transparent' },
  };
  const pads = { none: 0, sm: 'var(--sp-4)', md: 'var(--sp-5)', lg: 'var(--sp-6)' };

  const base = {
    borderRadius: 'var(--r-lg)',
    padding: pads[pad],
    boxShadow: 'var(--shadow-sm)',
    transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    overflow: 'hidden',
    ...variants[variant],
    ...style,
  };

  const onEnter = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };
  const onLeave = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  };

  return (
    <div style={base} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {children}
    </div>
  );
}
