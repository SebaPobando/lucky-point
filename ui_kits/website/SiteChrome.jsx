// Lucky Point Coffee — site header (nav) and footer
const LP = window.LuckyPointCoffeeDesignSystem_11711f;

function SiteHeader({ route, onNavigate, points = 1240, cartCount = 0 }) {
  const links = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Quiénes somos' },
    { id: 'carta', label: 'Carta' },
    { id: 'tienda', label: 'Tienda' },
    { id: 'puntos', label: 'Puntos' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(252,248,241,0.86)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <button onClick={() => onNavigate('home')} style={{
          border: 'none', background: 'none', cursor: 'pointer', display: 'flex',
          alignItems: 'baseline', gap: 8, padding: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--lp-espresso)', lineHeight: 1 }}>Lucky Point</span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.36em', color: 'var(--lp-forest)' }}>COFFEE</span>
        </button>

        <nav className="lp-nav" style={{ display: 'flex', gap: 4 }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => onNavigate(l.id)} style={{
              border: 'none', background: route === l.id ? 'var(--surface-sand)' : 'transparent',
              cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.875rem',
              color: route === l.id ? 'var(--lp-espresso)' : 'var(--lp-coffee-500)',
              padding: '8px 14px', borderRadius: 'var(--r-pill)', transition: 'background var(--dur) var(--ease)',
            }}>{l.label}</button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => onNavigate('puntos')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, cursor: 'pointer',
            background: 'var(--lp-gold-bg)', color: '#8A5E13', border: 'none',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.8rem',
            padding: '7px 13px', borderRadius: 'var(--r-pill)',
          }}>
            <span style={{ width: 15, height: 15, borderRadius: '50%', background: 'var(--lp-gold)', color: 'var(--lp-espresso)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 900 }}>★</span>
            {points.toLocaleString('es-CL')} pts
          </button>
          <LP.Button variant="dark" size="sm" onClick={() => onNavigate('tienda')}>
            Carrito{cartCount ? ` · ${cartCount}` : ''}
          </LP.Button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer style={{ background: 'var(--lp-espresso)', color: 'var(--text-on-dark)', marginTop: 'var(--sp-9)' }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--sp-8) var(--gutter) var(--sp-6)',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--sp-6)',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', lineHeight: 0.95 }}>Lucky Point<br/>Coffee</div>
          <p style={{ color: 'var(--text-on-dark-mut)', fontSize: '0.85rem', marginTop: 12, maxWidth: '28ch' }}>
            Café de especialidad en el corazón de Osorno, Chile.
          </p>
        </div>
        <div>
          <h4 style={{ color: 'var(--lp-gold-soft)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12 }}>Explorar</h4>
          {['Carta', 'Tienda', 'Puntos', 'Quiénes somos'].map((t, i) => (
            <div key={t} style={{ marginBottom: 8 }}>
              <button onClick={() => onNavigate(['carta','tienda','puntos','about'][i])} style={{ background: 'none', border: 'none', color: 'var(--text-on-dark-mut)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: 0 }}>{t}</button>
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ color: 'var(--lp-gold-soft)', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12 }}>Visítanos</h4>
          <p style={{ color: 'var(--text-on-dark-mut)', fontSize: '0.875rem', margin: 0, lineHeight: 1.7 }}>
            Osorno, Los Lagos<br/>Lun–Sáb · 8:30–20:00<br/>hola@luckypoint.cl
          </p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '16px var(--gutter)', textAlign: 'center', color: 'var(--text-on-dark-mut)', fontSize: '0.75rem' }}>
        © 2026 Lucky Point Coffee · Hecho con cariño en el sur de Chile
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
