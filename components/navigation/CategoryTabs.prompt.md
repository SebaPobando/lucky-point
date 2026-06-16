Scrollable pill tabs to switch carta categories (Café, Dulces, Té, Verano…).

```jsx
const [cat, setCat] = React.useState('cafe');
<CategoryTabs active={cat} onChange={setCat}
  tabs={[{id:'cafe',label:'Café'},{id:'dulces',label:'Café dulces'},{id:'te',label:'Té e infusiones'}]} />
```

Active pill is filled forest green; scrolls horizontally on mobile.
