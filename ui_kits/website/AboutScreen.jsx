// Lucky Point Coffee — Quiénes somos
const LP_A = window.LuckyPointCoffeeDesignSystem_11711f;

function AboutScreen({ onNavigate }) {
  const C = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };
  return (
    <div style={{ ...C, paddingTop: 'var(--sp-7)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 'var(--sp-7)', alignItems: 'center' }} className="lp-hero">
        <div>
          <span className="lp-eyebrow">Quiénes somos</span>
          <h1 style={{ margin: '12px 0 0' }}>Café con raíces en el sur</h1>
          <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-body)', marginTop: 16 }}>
            Lucky Point nació en Osorno con una idea simple: servir café de especialidad, cálido y honesto, y devolverle algo a quien vuelve por más.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            Tostamos en lotes pequeños, trabajamos con productores que conocemos por nombre y preparamos cada bebida sin atajos. La cafetería es nuestro punto de encuentro; los Lucky Points, nuestra forma de decir gracias.
          </p>
          <LP_A.Button variant="primary" onClick={() => onNavigate('carta')} style={{ marginTop: 12 }}>Ver la carta</LP_A.Button>
        </div>
        <div style={{ aspectRatio: '1 / 1', borderRadius: 'var(--r-xl)', background: 'linear-gradient(150deg, var(--lp-caramel), var(--lp-coffee-600))', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.6rem', color: 'var(--lp-cream-50)', textAlign: 'center', lineHeight: 0.95 }}>Osorno<br/>· Chile ·</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 'var(--sp-4)', paddingTop: 'var(--sp-7)' }}>
        {[['2019','Año de fundación'],['+30','Bebidas en carta'],['100%','Tostado propio'],['10 CLP','= 1 Lucky Point']].map(([n, l]) => (
          <LP_A.Card key={l} variant="sand" pad="md">
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--lp-forest)', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 6 }}>{l}</div>
          </LP_A.Card>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { AboutScreen });
