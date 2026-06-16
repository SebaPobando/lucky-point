/* @ds-bundle: {"format":3,"namespace":"LuckyPointCoffeeDesignSystem_11711f","components":[{"name":"MenuItem","sourcePath":"components/coffee/MenuItem.jsx"},{"name":"PriceTag","sourcePath":"components/coffee/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/coffee/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QtyStepper","sourcePath":"components/forms/QtyStepper.jsx"},{"name":"CategoryTabs","sourcePath":"components/navigation/CategoryTabs.jsx"}],"sourceHashes":{"components/coffee/MenuItem.jsx":"d9901a21e021","components/coffee/PriceTag.jsx":"a012ec94c4eb","components/coffee/ProductCard.jsx":"22bd0d71acaa","components/core/Badge.jsx":"3a3503ffb8e7","components/core/Card.jsx":"737ca124b564","components/forms/Button.jsx":"0b34410bbc87","components/forms/Input.jsx":"2131ca8c040b","components/forms/QtyStepper.jsx":"8d667865063d","components/navigation/CategoryTabs.jsx":"2d7b4ecefd79","ui_kits/website/AboutScreen.jsx":"6b8cc4191773","ui_kits/website/CartaScreen.jsx":"d67093fab6c4","ui_kits/website/HomeScreen.jsx":"9ca62564cef5","ui_kits/website/PuntosScreen.jsx":"ec489323ee37","ui_kits/website/SiteChrome.jsx":"60f0835f63d6","ui_kits/website/TiendaScreen.jsx":"e2588062c264","ui_kits/website/menu-data.js":"6e8773a01c6b"},"inlinedExternals":[],"unexposedExports":[{"name":"formatCLP","sourcePath":"components/coffee/PriceTag.jsx"},{"name":"toLuckyPoints","sourcePath":"components/coffee/PriceTag.jsx"}]} */

(() => {

const __ds_ns = (window.LuckyPointCoffeeDesignSystem_11711f = window.LuckyPointCoffeeDesignSystem_11711f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/coffee/PriceTag.jsx
try { (() => {
/** Format a CLP integer as "$3.200" (Chilean grouping). */
function formatCLP(clp) {
  return '$' + Math.round(clp).toLocaleString('es-CL');
}
/** Temporary rule: 10 CLP = 1 Lucky Point. */
function toLuckyPoints(clp) {
  return Math.round(clp / 10);
}

/**
 * Lucky Point Coffee — PriceTag
 * Brand-critical dual price: CLP value + equivalent Lucky Points.
 * layout: "inline" (CLP · points on one line) | "stacked".
 * size: sm | md | lg.
 */
function PriceTag({
  clp,
  layout = 'inline',
  size = 'md',
  showPoints = true
}) {
  const points = toLuckyPoints(clp);
  const sizes = {
    sm: {
      price: '0.95rem',
      pts: '0.7rem'
    },
    md: {
      price: '1.15rem',
      pts: '0.78rem'
    },
    lg: {
      price: '1.6rem',
      pts: '0.9rem'
    }
  };
  const priceEl = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: sizes[size].price,
      color: 'var(--text-strong)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, formatCLP(clp));
  const pointsEl = showPoints && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: sizes[size].pts,
      color: '#8A5E13',
      background: 'var(--lp-gold-bg)',
      padding: '3px 9px',
      borderRadius: 'var(--r-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--lp-gold)',
      color: 'var(--lp-espresso)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '8px',
      fontWeight: 900
    }
  }, "\u2605"), points.toLocaleString('es-CL'), " pts");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: layout === 'stacked' ? 'column' : 'row',
      alignItems: layout === 'stacked' ? 'flex-start' : 'center',
      gap: layout === 'stacked' ? '6px' : '10px'
    }
  }, priceEl, pointsEl);
}
Object.assign(__ds_scope, { formatCLP, toLuckyPoints, PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coffee/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/coffee/MenuItem.jsx
try { (() => {
/**
 * Lucky Point Coffee — MenuItem
 * A single carta row: name + description + dual price.
 * Optional `tag` (e.g. "Nuevo", "Verano") and divider.
 */
function MenuItem({
  name,
  description,
  clp,
  tag,
  divider = true
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-4) 0',
      borderBottom: divider ? '1px solid var(--divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.1
    }
  }, name), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.625rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--lp-gold-bg)',
      color: '#8A5E13'
    }
  }, tag)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '5px 0 0',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      paddingTop: '2px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    clp: clp,
    layout: "stacked",
    size: "md"
  })));
}
Object.assign(__ds_scope, { MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coffee/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Lucky Point Coffee — Badge
 * Small status / category pill. tone: neutral, forest, gold, dark, danger.
 * Optional `dot`.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {}
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-sand)',
      color: 'var(--lp-coffee-700)'
    },
    forest: {
      background: 'rgba(32,57,43,0.12)',
      color: 'var(--lp-forest)'
    },
    gold: {
      background: 'var(--lp-gold-bg)',
      color: '#8A5E13'
    },
    dark: {
      background: 'var(--lp-espresso)',
      color: 'var(--lp-cream-50)'
    },
    danger: {
      background: 'rgba(178,59,46,0.12)',
      color: 'var(--lp-danger)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.6875rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 'var(--r-pill)',
      ...tones[tone],
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucky Point Coffee — Card
 * Surface container. variant: plain (white), sand, dark, forest.
 * `interactive` adds hover lift. `pad` controls inner padding.
 */
function Card({
  children,
  variant = 'plain',
  interactive = false,
  pad = 'md',
  style = {},
  ...rest
}) {
  const variants = {
    plain: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    sand: {
      background: 'var(--surface-sand)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent'
    },
    forest: {
      background: 'var(--surface-forest)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent'
    }
  };
  const pads = {
    none: 0,
    sm: 'var(--sp-4)',
    md: 'var(--sp-5)',
    lg: 'var(--sp-6)'
  };
  const base = {
    borderRadius: 'var(--r-lg)',
    padding: pads[pad],
    boxShadow: 'var(--shadow-sm)',
    transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    overflow: 'hidden',
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };
  const onLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucky Point Coffee — Button
 * Variants: primary (forest), dark (espresso/ink), gold (Lucky Points),
 * secondary (outline), ghost. Sizes: sm, md, lg. Rounded, warm, tactile.
 */
function Button({
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
    sm: {
      padding: '8px 16px',
      fontSize: '0.8125rem',
      gap: '6px'
    },
    md: {
      padding: '12px 22px',
      fontSize: '0.9375rem',
      gap: '8px'
    },
    lg: {
      padding: '16px 30px',
      fontSize: '1.0625rem',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--lp-forest)',
      color: 'var(--lp-cream-50)',
      border: '2px solid var(--lp-forest)'
    },
    dark: {
      background: 'var(--lp-espresso)',
      color: 'var(--lp-cream-50)',
      border: '2px solid var(--lp-espresso)'
    },
    gold: {
      background: 'var(--lp-gold)',
      color: 'var(--lp-espresso)',
      border: '2px solid var(--lp-gold)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--lp-espresso)',
      border: '2px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--lp-coffee-600)',
      border: '2px solid transparent'
    }
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
    ...style
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = 'brightness(1.06)';
  };
  const onLeave = e => {
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.transform = 'scale(1)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/coffee/ProductCard.jsx
try { (() => {
/**
 * Lucky Point Coffee — ProductCard
 * Tienda product: image, category, name, blurb, dual price, add button.
 * Falls back to a warm placeholder block when no image is given.
 */
function ProductCard({
  name,
  category,
  description,
  clp,
  image,
  cta = 'Agregar',
  onAdd
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: image ? `center/cover url(${image})` : 'linear-gradient(135deg, var(--lp-cream-200), var(--lp-cream-300))'
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '2rem',
      color: 'var(--lp-coffee-400)',
      opacity: 0.6,
      textAlign: 'center',
      padding: '0 16px'
    }
  }, name), category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.625rem',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '5px 11px',
      borderRadius: 'var(--r-pill)',
      background: 'rgba(42,28,18,0.78)',
      color: 'var(--lp-cream-50)',
      backdropFilter: 'blur(4px)'
    }
  }, category)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      margin: 0,
      lineHeight: 1.05,
      color: 'var(--text-strong)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: '0.85rem',
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    clp: clp,
    layout: "inline",
    size: "md"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    block: true,
    onClick: () => onAdd && onAdd({
      name,
      clp
    })
  }, cta))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/coffee/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucky Point Coffee — Input
 * Clean text field on cream. Optional label, hint, leading icon, error.
 */
function Input({
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
    boxShadow: focused ? 'var(--shadow-focus)' : 'none'
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
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.8125rem',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: input,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: error ? 'var(--lp-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QtyStepper.jsx
try { (() => {
/**
 * Lucky Point Coffee — QtyStepper
 * Compact quantity control for the tienda / cart. Rounded pill.
 */
function QtyStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  size = 'md'
}) {
  const dims = size === 'sm' ? {
    btn: 30,
    font: '0.95rem',
    num: 32
  } : {
    btn: 38,
    font: '1.05rem',
    num: 42
  };
  const set = n => {
    const c = Math.max(min, Math.min(max, n));
    onChange && onChange(c);
  };
  const btn = {
    width: dims.btn,
    height: dims.btn,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    color: 'var(--lp-espresso)',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: dims.font,
    borderRadius: 'var(--r-pill)',
    transition: 'background var(--dur-fast) var(--ease)'
  };
  const hover = (e, on) => {
    e.currentTarget.style.background = on ? 'var(--surface-sand)' : 'transparent';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--r-pill)',
      padding: '3px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => set(value - 1),
    onMouseEnter: e => hover(e, 1),
    onMouseLeave: e => hover(e, 0),
    "aria-label": "Quitar uno"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: dims.num,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '0.95rem',
      color: 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => set(value + 1),
    onMouseEnter: e => hover(e, 1),
    onMouseLeave: e => hover(e, 0),
    "aria-label": "Agregar uno"
  }, "+"));
}
Object.assign(__ds_scope, { QtyStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QtyStepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTabs.jsx
try { (() => {
/**
 * Lucky Point Coffee — CategoryTabs
 * Horizontal scrollable pill tabs for carta categories.
 */
function CategoryTabs({
  tabs = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      overflowX: 'auto',
      padding: '4px 0',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none'
    }
  }, tabs.map(t => {
    const key = typeof t === 'string' ? t : t.id;
    const label = typeof t === 'string' ? t : t.label;
    const isActive = key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onChange && onChange(key),
      style: {
        flexShrink: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '0.875rem',
        padding: '9px 18px',
        borderRadius: 'var(--r-pill)',
        border: '2px solid ' + (isActive ? 'var(--lp-forest)' : 'var(--border-strong)'),
        background: isActive ? 'var(--lp-forest)' : 'transparent',
        color: isActive ? 'var(--lp-cream-50)' : 'var(--lp-coffee-600)',
        transition: 'all var(--dur) var(--ease)',
        whiteSpace: 'nowrap'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { CategoryTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
// Lucky Point Coffee — Quiénes somos
const LP_A = window.LuckyPointCoffeeDesignSystem_11711f;
function AboutScreen({
  onNavigate
}) {
  const C = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...C,
      paddingTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)',
      gap: 'var(--sp-7)',
      alignItems: 'center'
    },
    className: "lp-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow"
  }, "Qui\xE9nes somos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0'
    }
  }, "Caf\xE9 con ra\xEDces en el sur"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-body)',
      marginTop: 16
    }
  }, "Lucky Point naci\xF3 en Osorno con una idea simple: servir caf\xE9 de especialidad, c\xE1lido y honesto, y devolverle algo a quien vuelve por m\xE1s."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Tostamos en lotes peque\xF1os, trabajamos con productores que conocemos por nombre y preparamos cada bebida sin atajos. La cafeter\xEDa es nuestro punto de encuentro; los Lucky Points, nuestra forma de decir gracias."), /*#__PURE__*/React.createElement(LP_A.Button, {
    variant: "primary",
    onClick: () => onNavigate('carta'),
    style: {
      marginTop: 12
    }
  }, "Ver la carta")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      borderRadius: 'var(--r-xl)',
      background: 'linear-gradient(150deg, var(--lp-caramel), var(--lp-coffee-600))',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.6rem',
      color: 'var(--lp-cream-50)',
      textAlign: 'center',
      lineHeight: 0.95
    }
  }, "Osorno", /*#__PURE__*/React.createElement("br", null), "\xB7 Chile \xB7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))',
      gap: 'var(--sp-4)',
      paddingTop: 'var(--sp-7)'
    }
  }, [['2019', 'Año de fundación'], ['+30', 'Bebidas en carta'], ['100%', 'Tostado propio'], ['10 CLP', '= 1 Lucky Point']].map(([n, l]) => /*#__PURE__*/React.createElement(LP_A.Card, {
    key: l,
    variant: "sand",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2rem',
      color: 'var(--lp-forest)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, l)))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CartaScreen.jsx
try { (() => {
// Lucky Point Coffee — Carta (interactive digital menu)
const LP_C = window.LuckyPointCoffeeDesignSystem_11711f;
function CartaScreen() {
  const menu = window.LP_MENU;
  const [active, setActive] = React.useState(menu[0].id);
  const cat = menu.find(c => c.id === active);
  const C = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...C,
      paddingTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow"
  }, "Carta digital"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 4px'
    }
  }, "Nuestra carta"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, "Cada precio muestra su valor en pesos y su equivalente en Lucky Points (10 CLP = 1 punto)."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 68,
      zIndex: 10,
      background: 'var(--surface-page)',
      paddingTop: 'var(--sp-4)',
      paddingBottom: 'var(--sp-3)',
      marginBottom: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(LP_C.CategoryTabs, {
    tabs: menu.map(c => ({
      id: c.id,
      label: c.label
    })),
    active: active,
    onChange: setActive
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 'var(--sp-4) var(--sp-8)',
      paddingBottom: 'var(--sp-7)'
    }
  }, cat.items.map((it, i) => /*#__PURE__*/React.createElement(LP_C.MenuItem, {
    key: it.name,
    name: it.name,
    clp: it.clp,
    description: it.description,
    tag: it.tag,
    divider: i < cat.items.length - 1
  }))));
}
Object.assign(window, {
  CartaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CartaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Lucky Point Coffee — Home screen
const LP_H = window.LuckyPointCoffeeDesignSystem_11711f;
function HomeScreen({
  onNavigate,
  onAdd
}) {
  const C = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  const featured = (window.LP_MENU.find(c => c.id === 'verano') || window.LP_MENU[0]).items.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...C,
      paddingTop: 'var(--sp-8)',
      paddingBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
      gap: 'var(--sp-7)',
      alignItems: 'center'
    },
    className: "lp-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow"
  }, "Caf\xE9 de especialidad \xB7 Osorno"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      margin: '14px 0 0'
    }
  }, "Tu punto de la suerte para un buen caf\xE9"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-body)',
      marginTop: 16,
      maxWidth: '40ch'
    }
  }, "Tostamos en peque\xF1os lotes y servimos cada taza con cuidado. Y cada compra te acerca a tu pr\xF3ximo caf\xE9 gratis con Lucky Points."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(LP_H.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('carta')
  }, "Ver la carta"), /*#__PURE__*/React.createElement(LP_H.Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('puntos')
  }, "C\xF3mo funcionan los puntos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--r-xl)',
      background: 'linear-gradient(150deg, var(--lp-coffee-500), var(--lp-espresso))',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 22,
      right: 24,
      width: 92,
      height: 92,
      borderRadius: '50%',
      background: 'var(--lp-gold)',
      color: 'var(--lp-espresso)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      lineHeight: 0.9,
      textAlign: 'center',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.5rem'
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontFamily: 'var(--font-body)',
      fontWeight: 700
    }
  }, "PUNTOS")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--lp-cream-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '2.2rem',
      lineHeight: 0.95
    }
  }, "Reci\xE9n", /*#__PURE__*/React.createElement("br", null), "tostado"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(252,248,241,0.78)',
      fontSize: '0.85rem',
      marginTop: 8,
      marginBottom: 0
    }
  }, "Granos de origen, seleccionados a mano."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...C,
      paddingBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
      gap: 'var(--sp-4)'
    }
  }, [['Tostado propio', 'Lotes pequeños, frescura garantizada cada semana.'], ['Lucky Points', 'Juntas puntos en cada compra y los canjeas por café.'], ['Origen trazable', 'Sabemos de qué finca viene cada grano que servimos.']].map(([t, d]) => /*#__PURE__*/React.createElement(LP_H.Card, {
    key: t,
    variant: "sand",
    pad: "md"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...C,
      paddingBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--sp-5)',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow"
  }, "De la carta"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 8
    }
  }, "Favoritos de la casa")), /*#__PURE__*/React.createElement(LP_H.Button, {
    variant: "ghost",
    onClick: () => onNavigate('carta')
  }, "Ver carta completa \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))',
      gap: 'var(--sp-5)'
    }
  }, featured.map(it => /*#__PURE__*/React.createElement(LP_H.Card, {
    key: it.name,
    variant: "plain",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.5rem'
    }
  }, it.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-muted)',
      margin: '6px 0 14px',
      minHeight: 38
    }
  }, it.description), /*#__PURE__*/React.createElement(LP_H.PriceTag, {
    clp: it.clp,
    layout: "inline",
    size: "md"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...C,
      paddingBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(LP_H.Card, {
    variant: "forest",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '46ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow",
    style: {
      color: 'var(--lp-gold-soft)'
    }
  }, "Programa de fidelizaci\xF3n"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--lp-cream-50)',
      margin: '8px 0 10px'
    }
  }, "10 CLP = 1 Lucky Point"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(252,248,241,0.8)',
      margin: 0
    }
  }, "Acumula puntos con cada compra, en la cafeter\xEDa o en la tienda online, y canj\xE9alos por tus bebidas favoritas.")), /*#__PURE__*/React.createElement(LP_H.Button, {
    variant: "gold",
    size: "lg",
    onClick: () => onNavigate('puntos')
  }, "Conocer el programa")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PuntosScreen.jsx
try { (() => {
// Lucky Point Coffee — Puntos (loyalty program explainer)
const LP_P = window.LuckyPointCoffeeDesignSystem_11711f;
function PuntosScreen({
  onNavigate,
  points = 1240
}) {
  const C = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  const steps = [['Compra', 'Pide en la cafetería o en la tienda online. Cada compra suma.'], ['Acumula', 'Ganas 1 Lucky Point por cada 10 CLP gastados, automáticamente.'], ['Canjea', 'Usa tus puntos para descontar tus bebidas y productos favoritos.']];
  const rewards = [['Espresso doble', 3000], ['Latte', 3800], ['Mokka Nutella', 5500], ['Café en grano 250g', 9900]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...C,
      paddingTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(LP_P.Card, {
    variant: "forest",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow",
    style: {
      color: 'var(--lp-gold-soft)'
    }
  }, "Tu saldo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(3rem,9vw,5rem)',
      color: 'var(--lp-cream-50)',
      lineHeight: 0.9
    }
  }, points.toLocaleString('es-CL')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem',
      color: 'var(--lp-gold-soft)'
    }
  }, "Lucky Points")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(252,248,241,0.8)',
      marginTop: 10,
      marginBottom: 0
    }
  }, "Equivalen a $", (points * 10).toLocaleString('es-CL'), " CLP en caf\xE9.")), /*#__PURE__*/React.createElement(LP_P.Button, {
    variant: "gold",
    size: "lg",
    onClick: () => onNavigate('tienda')
  }, "Empezar a sumar"))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 'var(--sp-5)'
    }
  }, "C\xF3mo funciona"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
      gap: 'var(--sp-4)'
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement(LP_P.Card, {
    key: t,
    variant: "plain",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--lp-gold-bg)',
      color: '#8A5E13',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '1.3rem',
      marginBottom: 12
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(LP_P.Card, {
    variant: "sand",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow"
  }, "La regla"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem,6vw,3.2rem)',
      color: 'var(--lp-espresso)',
      margin: '8px 0'
    }
  }, "10 CLP = 1 Lucky Point"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '46ch',
      margin: '0 auto'
    }
  }, "Regla temporal de lanzamiento. Sin tarjetas ni complicaciones: tus puntos viven en tu cuenta.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 'var(--sp-7)',
      paddingBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 'var(--sp-5)'
    }
  }, "Canjea por"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
      gap: 'var(--sp-4)'
    }
  }, rewards.map(([name, clp]) => {
    const cost = clp / 10;
    const ok = points >= cost;
    return /*#__PURE__*/React.createElement(LP_P.Card, {
      key: name,
      variant: "plain",
      pad: "md"
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.35rem',
        marginBottom: 10
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(LP_P.Badge, {
      tone: ok ? 'gold' : 'neutral',
      dot: true
    }, cost.toLocaleString('es-CL'), " pts"), /*#__PURE__*/React.createElement(LP_P.Button, {
      variant: ok ? 'primary' : 'secondary',
      size: "sm",
      disabled: !ok,
      onClick: () => alert(`Canjeado: ${name} por ${cost} Lucky Points`)
    }, ok ? 'Canjear' : 'Faltan pts')));
  }))));
}
Object.assign(window, {
  PuntosScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PuntosScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// Lucky Point Coffee — site header (nav) and footer
const LP = window.LuckyPointCoffeeDesignSystem_11711f;
function SiteHeader({
  route,
  onNavigate,
  points = 1240,
  cartCount = 0
}) {
  const links = [{
    id: 'home',
    label: 'Inicio'
  }, {
    id: 'about',
    label: 'Quiénes somos'
  }, {
    id: 'carta',
    label: 'Carta'
  }, {
    id: 'tienda',
    label: 'Tienda'
  }, {
    id: 'puntos',
    label: 'Puntos'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(252,248,241,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      color: 'var(--lp-espresso)',
      lineHeight: 1
    }
  }, "Lucky Point"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.6rem',
      letterSpacing: '0.36em',
      color: 'var(--lp-forest)'
    }
  }, "COFFEE")), /*#__PURE__*/React.createElement("nav", {
    className: "lp-nav",
    style: {
      display: 'flex',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      border: 'none',
      background: route === l.id ? 'var(--surface-sand)' : 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '0.875rem',
      color: route === l.id ? 'var(--lp-espresso)' : 'var(--lp-coffee-500)',
      padding: '8px 14px',
      borderRadius: 'var(--r-pill)',
      transition: 'background var(--dur) var(--ease)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('puntos'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      cursor: 'pointer',
      background: 'var(--lp-gold-bg)',
      color: '#8A5E13',
      border: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '0.8rem',
      padding: '7px 13px',
      borderRadius: 'var(--r-pill)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: '50%',
      background: 'var(--lp-gold)',
      color: 'var(--lp-espresso)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 9,
      fontWeight: 900
    }
  }, "\u2605"), points.toLocaleString('es-CL'), " pts"), /*#__PURE__*/React.createElement(LP.Button, {
    variant: "dark",
    size: "sm",
    onClick: () => onNavigate('tienda')
  }, "Carrito", cartCount ? ` · ${cartCount}` : ''))));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--lp-espresso)',
      color: 'var(--text-on-dark)',
      marginTop: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--sp-8) var(--gutter) var(--sp-6)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem',
      lineHeight: 0.95
    }
  }, "Lucky Point", /*#__PURE__*/React.createElement("br", null), "Coffee"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-mut)',
      fontSize: '0.85rem',
      marginTop: 12,
      maxWidth: '28ch'
    }
  }, "Caf\xE9 de especialidad en el coraz\xF3n de Osorno, Chile.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--lp-gold-soft)',
      fontSize: '0.7rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Explorar"), ['Carta', 'Tienda', 'Puntos', 'Quiénes somos'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate(['carta', 'tienda', 'puntos', 'about'][i]),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-on-dark-mut)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      padding: 0
    }
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--lp-gold-soft)',
      fontSize: '0.7rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Vis\xEDtanos"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-mut)',
      fontSize: '0.875rem',
      margin: 0,
      lineHeight: 1.7
    }
  }, "Osorno, Los Lagos", /*#__PURE__*/React.createElement("br", null), "Lun\u2013S\xE1b \xB7 8:30\u201320:00", /*#__PURE__*/React.createElement("br", null), "hola@luckypoint.cl"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '16px var(--gutter)',
      textAlign: 'center',
      color: 'var(--text-on-dark-mut)',
      fontSize: '0.75rem'
    }
  }, "\xA9 2026 Lucky Point Coffee \xB7 Hecho con cari\xF1o en el sur de Chile"));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TiendaScreen.jsx
try { (() => {
// Lucky Point Coffee — Tienda (store: café en grano + accesorios)
const LP_T = window.LuckyPointCoffeeDesignSystem_11711f;
function TiendaScreen({
  onAdd
}) {
  const shop = window.LP_SHOP;
  const [filter, setFilter] = React.useState('todo');
  const C = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--gutter)'
  };
  const tabs = [{
    id: 'todo',
    label: 'Todo'
  }, {
    id: 'grano',
    label: 'Café en grano'
  }, {
    id: 'accesorios',
    label: 'Accesorios'
  }];
  let items = [];
  if (filter === 'todo') items = [...shop.grano, ...shop.accesorios];else items = shop[filter];
  const handleAdd = it => {
    alert(`Agregado al carrito:\n${it.name} — $${it.clp.toLocaleString('es-CL')} CLP (${Math.round(it.clp / 10)} Lucky Points)`);
    onAdd && onAdd(it);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...C,
      paddingTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp-eyebrow"
  }, "Tienda online"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 4px'
    }
  }, "Ll\xE9vate Lucky Point a casa"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, "Caf\xE9 de origen reci\xE9n tostado y los accesorios para prepararlo como en la barra."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--sp-5) 0'
    }
  }, /*#__PURE__*/React.createElement(LP_T.CategoryTabs, {
    tabs: tabs,
    active: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 'var(--sp-5)',
      paddingBottom: 'var(--sp-7)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(LP_T.ProductCard, {
    key: it.name,
    name: it.name,
    category: it.category,
    clp: it.clp,
    description: it.description,
    onAdd: handleAdd
  }))));
}
Object.assign(window, {
  TiendaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TiendaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/menu-data.js
try { (() => {
// Lucky Point Coffee — menu data extracted from the official carta PDF.
// Prices in CLP. Lucky Points = CLP / 10 (computed by PriceTag).
window.LP_MENU = [{
  id: 'cafe',
  label: 'Café',
  items: [{
    name: 'Long Black',
    clp: 3200,
    description: 'Espresso doble vertido sobre agua caliente.'
  }, {
    name: 'Espresso Doble',
    clp: 3000,
    description: '36 g extraídos a 9 bar, alta concentración de sabores.'
  }, {
    name: 'Short Black',
    clp: 3200,
    description: 'Espresso simple vertido sobre agua caliente.'
  }, {
    name: 'Filtrado',
    clp: 3800,
    description: 'Vertido de agua sobre cama de café en filtro de papel.'
  }, {
    name: 'Latte',
    clp: 3800,
    description: 'Espresso simple con leche texturizada y una sutil espuma.'
  }, {
    name: 'Capuccino',
    clp: 3800,
    description: 'Espresso doble con leche y espuma en partes iguales.'
  }, {
    name: 'Flat White',
    clp: 3800,
    description: 'Espresso doble con leche y espuma en partes iguales.'
  }]
}, {
  id: 'dulces',
  label: 'Café dulces',
  items: [{
    name: 'Mokka',
    clp: 4200,
    description: 'Espresso doble emulsionado con chocolate, leche y espuma.'
  }, {
    name: 'Bombom',
    clp: 4200,
    description: 'Espresso doble con leche condensada, leche y espuma.'
  }, {
    name: 'Vaniglia',
    clp: 4200,
    description: 'Espresso doble con sirup de vainilla macerada y leche.'
  }, {
    name: 'Mokka Blanco',
    clp: 4200,
    description: 'Espresso doble emulsionado con chocolate blanco y leche.'
  }, {
    name: 'Mokka Nutella',
    clp: 5500,
    tag: 'Favorito',
    description: 'Espresso doble emulsionado con nutella y leche.'
  }]
}, {
  id: 'choco',
  label: 'Chocolatozos',
  items: [{
    name: 'Nutellatte',
    clp: 5500,
    description: 'Mezcla de nutella y leche texturizada.'
  }, {
    name: 'Chocolate Blanco',
    clp: 5000,
    description: 'Chocolate blanco, crema, leche condensada y leche.'
  }, {
    name: 'Chocolate Caliente',
    clp: 5000,
    description: 'Chocolate de leche, crema, cacao amargo y leche.'
  }]
}, {
  id: 'te',
  label: 'Té e infusiones',
  items: [{
    name: 'Té Negro',
    clp: 3000,
    description: 'Mezcla natural de té negro tradicional.'
  }, {
    name: 'Infusión Roibos',
    clp: 3000,
    description: 'Infusión de hojas de rooibos.'
  }, {
    name: 'Té Chai',
    clp: 3000,
    description: 'Té con canela, cardamomo, jengibre y clavo. Leche +500.'
  }, {
    name: 'Té Cedrón',
    clp: 3000,
    description: 'Té de cedrón con cáscaras de naranja.'
  }, {
    name: 'Matcha Latte',
    clp: 4500,
    description: 'Té matcha con leche texturizada.'
  }, {
    name: 'Matcha Latte Vainilla',
    clp: 5000,
    description: 'Matcha con leche y syrup casero de vainilla.'
  }]
}, {
  id: 'jugos',
  label: 'Jugos',
  items: [{
    name: 'Jugo de Piña',
    clp: 4000,
    description: 'Jugo natural de piña.'
  }, {
    name: 'Jugo de Mango',
    clp: 4000,
    description: 'Jugo natural de mango.'
  }, {
    name: 'Jugo de Frambuesa',
    clp: 4000,
    description: 'Jugo natural de frambuesa.'
  }, {
    name: 'Limonada',
    clp: 4000,
    description: 'Limonada natural.'
  }, {
    name: 'Jugo de Naranja',
    clp: 3500,
    description: 'Jugo natural de naranja.'
  }, {
    name: 'Agua Natural',
    clp: 2500,
    description: 'Agua natural.'
  }]
}, {
  id: 'verano',
  label: 'Carta verano',
  items: [{
    name: 'Aerocano',
    clp: 4500,
    tag: 'Verano',
    description: 'Espresso doble texturizado con agua y hielo.'
  }, {
    name: 'Filtrado Frío',
    clp: 4200,
    description: 'Filtrado recibido sobre cama de hielo.'
  }, {
    name: 'Espresso Frío',
    clp: 3300,
    description: 'Doble shot de espresso sobre cama de hielo.'
  }, {
    name: 'Cold Brew',
    clp: 4500,
    description: 'Café infusionado en frío por 24 horas.'
  }, {
    name: 'Espresso Tonic',
    clp: 5500,
    description: 'Espresso y agua tónica.'
  }, {
    name: 'Iced Vaniglia',
    clp: 5000,
    description: 'Doble shot, leche texturizada en frío y sirup de vainilla.'
  }, {
    name: 'Iced Capuccino',
    clp: 4500,
    description: 'Doble shot con leche texturizada en frío.'
  }, {
    name: 'Iced Latte',
    clp: 4500,
    description: 'Un shot de espresso y leche fría.'
  }, {
    name: 'Iced Moka',
    clp: 5000,
    description: 'Doble shot, leche en frío emulsionada con chocolate.'
  }, {
    name: 'Iced Bombón',
    clp: 5000,
    description: 'Doble shot, leche en frío con leche condensada.'
  }, {
    name: 'Matcha Latte Frío',
    clp: 5000,
    description: 'Matcha suave mezclado con leche, cremoso y equilibrado.'
  }, {
    name: 'Matcha Vainilla Frío',
    clp: 6000,
    description: 'Matcha con leche fría y un toque de vainilla.'
  }]
}, {
  id: 'sandwich',
  label: 'Sándwich',
  items: [{
    name: 'Ave Pimentón',
    clp: 5500,
    description: 'Ciabatta, pollo desmenuzado, lechuga y mayo de morrones.'
  }, {
    name: 'Croissant',
    clp: 5500,
    description: 'Hojaldre horneado, relleno con jamón y queso.'
  }, {
    name: 'Tostadas Palta y Huevo',
    clp: 7000,
    description: 'Masa madre, dos huevos, palta, sal, pimienta y oliva.'
  }, {
    name: 'Huevo Tocino Queso',
    clp: 7000,
    description: 'Masa madre, huevo frito, tocino y queso mantecoso.'
  }, {
    name: 'Baba Ganoush',
    clp: 5500,
    description: 'Masa madre, salteado de morrón, berenjena y tomate.'
  }, {
    name: 'Mechada con Queso',
    clp: 6000,
    description: 'Masa madre, carne mechada jugosa y queso derretido.'
  }, {
    name: 'Caprese',
    clp: 8000,
    description: 'Masa madre, cherry, queso cabra, albahaca y oliva.'
  }, {
    name: 'El Serrano',
    clp: 8000,
    description: 'Masa madre, jamón serrano, brie, rúcula y oliva.'
  }, {
    name: 'Tostadas con Palta',
    clp: 5500,
    description: 'Masa madre, palta laminada, sal, pimienta y oliva.'
  }]
}, {
  id: 'pasteleria',
  label: 'Pastelería',
  items: [{
    name: 'Cheesecake Matcha',
    clp: 5000,
    description: 'Base cremosa de matcha con corazón de limón.'
  }, {
    name: 'Tiramisú',
    clp: 6000,
    description: 'Bizcocho al café, crema de mascarpone y cacao.'
  }, {
    name: 'Tartaleta de Frambuesa',
    clp: 4500,
    description: 'Base crujiente, crema suave y frambuesas frescas.'
  }, {
    name: 'Pie de Limón',
    clp: 3500,
    description: 'Base crujiente, crema de limón y merengue ligero.'
  }, {
    name: 'Galletón',
    clp: 3000,
    description: 'Oreo o limón, suave por dentro y crocante por fuera.'
  }, {
    name: 'Barra Proteína Chocolate',
    clp: 4000,
    description: 'Whey, creatina, chocolate bitter, frutos secos y coco.'
  }, {
    name: 'Barquillos',
    clp: 2000,
    description: 'Crujientes y rellenos de manjar cremoso.'
  }, {
    name: 'Barra Proteína Semillas',
    clp: 3000,
    description: 'Almendras, maní, semillas, cranberry y chocolate.'
  }]
}, {
  id: 'bolleria',
  label: 'Bollería',
  items: [{
    name: 'Croissant de Nutella',
    clp: 5000,
    description: 'Hojaldre crujiente relleno de Nutella cremosa.'
  }, {
    name: 'NY Roll Pistacho',
    clp: 5000,
    description: 'Masa hojaldrada rellena de crema de pistacho.'
  }, {
    name: 'Rollo de Canela',
    clp: 4000,
    description: 'Masa suave con canela y glaseado dulce.'
  }, {
    name: 'Media Luna',
    clp: 2000,
    description: 'Masa hojaldrada, suave por dentro y dorada por fuera.'
  }]
}];

// Store catalogue (café en grano + accesorios) — illustrative, brand-consistent.
window.LP_SHOP = {
  grano: [{
    name: 'Etiopía Yirgacheffe',
    category: 'Café en grano',
    clp: 12900,
    description: '250g · Notas florales, cítricas y miel.'
  }, {
    name: 'Colombia Huila',
    category: 'Café en grano',
    clp: 11500,
    description: '250g · Caramelo, panela y naranja.'
  }, {
    name: 'Brasil Cerrado',
    category: 'Café en grano',
    clp: 10900,
    description: '250g · Chocolate, maní y cuerpo suave.'
  }, {
    name: 'Blend Lucky Point',
    category: 'Café en grano',
    clp: 9900,
    description: '250g · Nuestra mezcla de casa, equilibrada.'
  }],
  accesorios: [{
    name: 'Prensa Francesa 350ml',
    category: 'Accesorios',
    clp: 18900,
    description: 'Vidrio borosilicato y filtro de acero.'
  }, {
    name: 'Cafetera V60',
    category: 'Accesorios',
    clp: 14500,
    description: 'Dripper cerámico para filtrado pour-over.'
  }, {
    name: 'Mug Lucky Point',
    category: 'Accesorios',
    clp: 7900,
    description: 'Taza de gres esmaltado, 300ml.'
  }, {
    name: 'Filtros de papel V60',
    category: 'Accesorios',
    clp: 4900,
    description: 'Pack 100 unidades, sin blanqueador.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/menu-data.js", error: String((e && e.message) || e) }); }

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QtyStepper = __ds_scope.QtyStepper;

__ds_ns.CategoryTabs = __ds_scope.CategoryTabs;

})();
