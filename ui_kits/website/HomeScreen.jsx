// Lucky Point Coffee — Home screen
const LP_H = window.LuckyPointCoffeeDesignSystem_11711f;

function HomeScreen({ onNavigate, onAdd }) {
  const C = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };
  const featured = (window.LP_MENU.find(c => c.id === 'verano') || window.LP_MENU[0]).items.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section style={{ ...C, paddingTop: 'var(--sp-8)', paddingBottom: 'var(--sp-7)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 'var(--sp-7)', alignItems: 'center' }} className="lp-hero">
          <div>
            <span className="lp-eyebrow">Café de especialidad · Osorno</span>
            <h1 style={{ fontSize: 'var(--fs-display)', margin: '14px 0 0' }}>Tu punto de la suerte para un buen café</h1>
            <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-body)', marginTop: 16, maxWidth: '40ch' }}>
              Tostamos en pequeños lotes y servimos cada taza con cuidado. Y cada compra te acerca a tu próximo café gratis con Lucky Points.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
              <LP_H.Button variant="primary" size="lg" onClick={() => onNavigate('carta')}>Ver la carta</LP_H.Button>
              <LP_H.Button variant="secondary" size="lg" onClick={() => onNavigate('puntos')}>Cómo funcionan los puntos</LP_H.Button>
            </div>
          </div>
          <div style={{
            aspectRatio: '4 / 5', borderRadius: 'var(--r-xl)',
            background: 'linear-gradient(150deg, var(--lp-coffee-500), var(--lp-espresso))',
            position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)',
            display: 'flex', alignItems: 'flex-end', padding: 'var(--sp-6)',
          }}>
            <div style={{ position: 'absolute', top: 22, right: 24, width: 92, height: 92, borderRadius: '50%', background: 'var(--lp-gold)', color: 'var(--lp-espresso)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', lineHeight: 0.9, textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
              <span style={{ fontSize: '1.5rem' }}>★</span>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>PUNTOS</span>
            </div>
            <div style={{ color: 'var(--lp-cream-50)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', lineHeight: 0.95 }}>Recién<br/>tostado</div>
              <p style={{ color: 'rgba(252,248,241,0.78)', fontSize: '0.85rem', marginTop: 8, marginBottom: 0 }}>Granos de origen, seleccionados a mano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section style={{ ...C, paddingBottom: 'var(--sp-7)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 'var(--sp-4)' }}>
          {[
            ['Tostado propio', 'Lotes pequeños, frescura garantizada cada semana.'],
            ['Lucky Points', 'Juntas puntos en cada compra y los canjeas por café.'],
            ['Origen trazable', 'Sabemos de qué finca viene cada grano que servimos.'],
          ].map(([t, d]) => (
            <LP_H.Card key={t} variant="sand" pad="md">
              <h3 style={{ fontSize: '1.4rem', marginBottom: 6 }}>{t}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>{d}</p>
            </LP_H.Card>
          ))}
        </div>
      </section>

      {/* Featured menu */}
      <section style={{ ...C, paddingBottom: 'var(--sp-7)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--sp-5)', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <span className="lp-eyebrow">De la carta</span>
            <h2 style={{ marginTop: 8 }}>Favoritos de la casa</h2>
          </div>
          <LP_H.Button variant="ghost" onClick={() => onNavigate('carta')}>Ver carta completa →</LP_H.Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 'var(--sp-5)' }}>
          {featured.map((it) => (
            <LP_H.Card key={it.name} variant="plain" pad="md">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                <h3 style={{ fontSize: '1.5rem' }}>{it.name}</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '6px 0 14px', minHeight: 38 }}>{it.description}</p>
              <LP_H.PriceTag clp={it.clp} layout="inline" size="md" />
            </LP_H.Card>
          ))}
        </div>
      </section>

      {/* Points banner */}
      <section style={{ ...C, paddingBottom: 'var(--sp-7)' }}>
        <LP_H.Card variant="forest" pad="lg">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-6)', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '46ch' }}>
              <span className="lp-eyebrow" style={{ color: 'var(--lp-gold-soft)' }}>Programa de fidelización</span>
              <h2 style={{ color: 'var(--lp-cream-50)', margin: '8px 0 10px' }}>10 CLP = 1 Lucky Point</h2>
              <p style={{ color: 'rgba(252,248,241,0.8)', margin: 0 }}>Acumula puntos con cada compra, en la cafetería o en la tienda online, y canjéalos por tus bebidas favoritas.</p>
            </div>
            <LP_H.Button variant="gold" size="lg" onClick={() => onNavigate('puntos')}>Conocer el programa</LP_H.Button>
          </div>
        </LP_H.Card>
      </section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
