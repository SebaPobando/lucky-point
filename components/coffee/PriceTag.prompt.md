Brand-critical dual price — always show CLP **and** the Lucky Points equivalent (10 CLP = 1 point). Use everywhere a price appears.

```jsx
<PriceTag clp={3200} />              {/* $3.200 · 320 pts */}
<PriceTag clp={5500} layout="stacked" size="lg" />
```

Helpers `formatCLP(clp)` → `"$3.200"` and `toLuckyPoints(clp)` → `320` are exported for custom layouts. Never display a CLP price without its points equivalent.
