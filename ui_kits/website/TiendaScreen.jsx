// Lucky Point Coffee — Tienda (store: café en grano + accesorios)
const LP_T = window.LuckyPointCoffeeDesignSystem_11711f;

function TiendaScreen({ onAdd }) {
  const shop = window.LP_SHOP;
  const [filter, setFilter] = React.useState('todo');
  const C = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

  const tabs = [
    { id: 'todo', label: 'Todo' },
    { id: 'grano', label: 'Café en grano' },
    { id: 'accesorios', label: 'Accesorios' },
  ];
  let items = [];
  if (filter === 'todo') items = [...shop.grano, ...shop.accesorios];
  else items = shop[filter];

  const handleAdd = (it) => {
    alert(`Agregado al carrito:\n${it.name} — $${it.clp.toLocaleString('es-CL')} CLP (${Math.round(it.clp/10)} Lucky Points)`);
    onAdd && onAdd(it);
  };

  return (
    <div style={{ ...C, paddingTop: 'var(--sp-7)' }}>
      <span className="lp-eyebrow">Tienda online</span>
      <h1 style={{ margin: '10px 0 4px' }}>Llévate Lucky Point a casa</h1>
      <p style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}>
        Café de origen recién tostado y los accesorios para prepararlo como en la barra.
      </p>

      <div style={{ margin: 'var(--sp-5) 0' }}>
        <LP_T.CategoryTabs tabs={tabs} active={filter} onChange={setFilter} />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 'var(--sp-5)', paddingBottom: 'var(--sp-7)',
      }}>
        {items.map((it) => (
          <LP_T.ProductCard key={it.name} name={it.name} category={it.category} clp={it.clp} description={it.description} onAdd={handleAdd} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { TiendaScreen });
