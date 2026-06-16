// Lucky Point Coffee — Puntos (loyalty program explainer)
const LP_P = window.LuckyPointCoffeeDesignSystem_11711f;

function PuntosScreen({ onNavigate, points = 1240 }) {
  const C = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };
  const steps = [
    ['Compra', 'Pide en la cafetería o en la tienda online. Cada compra suma.'],
    ['Acumula', 'Ganas 1 Lucky Point por cada 10 CLP gastados, automáticamente.'],
    ['Canjea', 'Usa tus puntos para descontar tus bebidas y productos favoritos.'],
  ];
  const rewards = [
    ['Espresso doble', 3000], ['Latte', 3800], ['Mokka Nutella', 5500], ['Café en grano 250g', 9900],
  ];

  return (
    <div style={{ ...C, paddingTop: 'var(--sp-7)' }}>
      {/* Hero balance */}
      <LP_P.Card variant="forest" pad="lg">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--sp-6)', flexWrap: 'wrap' }}>
          <div>
            <span className="lp-eyebrow" style={{ color: 'var(--lp-gold-soft)' }}>Tu saldo</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 8 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,9vw,5rem)', color: 'var(--lp-cream-50)', lineHeight: 0.9 }}>{points.toLocaleString('es-CL')}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--lp-gold-soft)' }}>Lucky Points</span>
            </div>
            <p style={{ color: 'rgba(252,248,241,0.8)', marginTop: 10, marginBottom: 0 }}>Equivalen a ${(points*10).toLocaleString('es-CL')} CLP en café.</p>
          </div>
          <LP_P.Button variant="gold" size="lg" onClick={() => onNavigate('tienda')}>Empezar a sumar</LP_P.Button>
        </div>
      </LP_P.Card>

      {/* How it works */}
      <section style={{ paddingTop: 'var(--sp-7)' }}>
        <h2 style={{ marginBottom: 'var(--sp-5)' }}>Cómo funciona</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 'var(--sp-4)' }}>
          {steps.map(([t, d], i) => (
            <LP_P.Card key={t} variant="plain" pad="md">
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--lp-gold-bg)', color: '#8A5E13', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 12 }}>{i + 1}</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 6 }}>{t}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>{d}</p>
            </LP_P.Card>
          ))}
        </div>
      </section>

      {/* Rule highlight */}
      <section style={{ paddingTop: 'var(--sp-7)' }}>
        <LP_P.Card variant="sand" pad="lg">
          <div style={{ textAlign: 'center' }}>
            <span className="lp-eyebrow">La regla</span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,6vw,3.2rem)', color: 'var(--lp-espresso)', margin: '8px 0' }}>10 CLP = 1 Lucky Point</div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '46ch', margin: '0 auto' }}>Regla temporal de lanzamiento. Sin tarjetas ni complicaciones: tus puntos viven en tu cuenta.</p>
          </div>
        </LP_P.Card>
      </section>

      {/* Rewards table */}
      <section style={{ paddingTop: 'var(--sp-7)', paddingBottom: 'var(--sp-7)' }}>
        <h2 style={{ marginBottom: 'var(--sp-5)' }}>Canjea por</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 'var(--sp-4)' }}>
          {rewards.map(([name, clp]) => {
            const cost = clp / 10;
            const ok = points >= cost;
            return (
              <LP_P.Card key={name} variant="plain" pad="md">
                <h3 style={{ fontSize: '1.35rem', marginBottom: 10 }}>{name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                  <LP_P.Badge tone={ok ? 'gold' : 'neutral'} dot>{cost.toLocaleString('es-CL')} pts</LP_P.Badge>
                  <LP_P.Button variant={ok ? 'primary' : 'secondary'} size="sm" disabled={!ok} onClick={() => alert(`Canjeado: ${name} por ${cost} Lucky Points`)}>
                    {ok ? 'Canjear' : 'Faltan pts'}
                  </LP_P.Button>
                </div>
              </LP_P.Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PuntosScreen });
