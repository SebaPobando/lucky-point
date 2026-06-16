Pill-shaped, warm button for all primary actions and "Comprar" / "Agregar" CTAs across the café site.

```jsx
<Button variant="primary" size="md" onClick={() => {}}>Ver la carta</Button>
<Button variant="gold" iconLeft={<span>★</span>}>Canjear puntos</Button>
```

Variants: `primary` (dark green / verde oscuro — default CTA), `dark` (espresso/ink), `gold` (Lucky Points actions), `secondary` (outline), `ghost` (low-emphasis). Sizes `sm | md | lg`. Use `block` for full-width mobile CTAs. Buttons scale down slightly on press and brighten on hover.
