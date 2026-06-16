import React from 'react';

/**
 * Lucky Point Coffee — Input
 * Clean text field on cream. Optional label, hint, leading icon, error.
 */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `lp-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);

  const wrap = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'var(--surface-card)',
    border: `2px solid ${error ? 'var(--lp-danger)' : focused ? 'var(--lp-forest)' : 'var(--border-strong)'}`,
    borderRadius: 'var(--r-md)',
    padding: '0 14px',
    transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)',
    boxShadow: focused ? 'var(--shadow-focus)' : 'none',
  };

  const input = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9375rem',
    color: 'var(--text-strong)',
    padding: '13px 0',
    minWidth: 0,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.8125rem',
          color: 'var(--text-body)',
        }}>{label}</label>
      )}
      <div style={wrap}>
        {iconLeft && <span style={{ color: 'var(--text-muted)', display: 'flex' }}>{iconLeft}</span>}
        <input
          id={fieldId}
          style={input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{
          fontSize: '0.75rem',
          color: error ? 'var(--lp-danger)' : 'var(--text-muted)',
        }}>{error || hint}</span>
      )}
    </div>
  );
}
