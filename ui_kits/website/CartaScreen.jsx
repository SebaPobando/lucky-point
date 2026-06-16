// Lucky Point Coffee — Carta (interactive digital menu)
const LP_C = window.LuckyPointCoffeeDesignSystem_11711f;

function CartaScreen() {
  const menu = window.LP_MENU;
  const [active, setActive] = React.useState(menu[0].id);
  const cat = menu.find(c => c.id === active);
  const C = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

  return (
    <div style={{ ...C, paddingTop: 'var(--sp-7)' }}>
      <span className="lp-eyebrow">Carta digital</span>
      <h1 style={{ margin: '10px 0 4px' }}>Nuestra carta</h1>
      <p style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}>
        Cada precio muestra su valor en pesos y su equivalente en Lucky Points (10 CLP = 1 punto).
      </p>

      <div style={{
        position: 'sticky', top: 68, zIndex: 10, background: 'var(--surface-page)',
        paddingTop: 'var(--sp-4)', paddingBottom: 'var(--sp-3)', marginBottom: 'var(--sp-3)',
      }}>
        <LP_C.CategoryTabs tabs={menu.map(c => ({ id: c.id, label: c.label }))} active={active} onChange={setActive} />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'var(--sp-4) var(--sp-8)', paddingBottom: 'var(--sp-7)',
      }}>
        {cat.items.map((it, i) => (
          <LP_C.MenuItem key={it.name} name={it.name} clp={it.clp} description={it.description} tag={it.tag} divider={i < cat.items.length - 1} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { CartaScreen });
