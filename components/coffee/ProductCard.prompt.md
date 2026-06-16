Store (tienda) product card for café en grano and accesorios.

```jsx
<ProductCard
  name="Etiopía Yirgacheffe" category="Café en grano" clp={12900}
  description="250g · notas florales y cítricas."
  onAdd={(it) => alert(`Agregado: ${it.name}`)} />
```

Composes `PriceTag` + `Button`. Lifts on hover. Wire `onAdd` to the cart (the brief asks for an `alert()` on buy).
