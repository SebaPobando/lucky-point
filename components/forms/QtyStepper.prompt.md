Pill quantity selector for the store and cart rows.

```jsx
const [q, setQ] = React.useState(1);
<QtyStepper value={q} min={1} max={10} onChange={setQ} />
```

`size="sm"` for dense cart lines.
