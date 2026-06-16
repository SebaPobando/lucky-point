# Lucky Point Coffee — Website UI Kit

A high-fidelity, mobile-first recreation of the Lucky Point Coffee website, built entirely from the design-system components and tokens.

## Screens (`index.html` is an interactive click-through)
- **Inicio** (`HomeScreen.jsx`) — hero, value props, featured menu, points banner.
- **Quiénes somos** (`AboutScreen.jsx`) — brand story + stats.
- **Carta** (`CartaScreen.jsx`) — interactive digital menu; category pills switch sections; every item shows the dual CLP / Lucky Points price. Data from the real menu PDF (`menu-data.js`).
- **Tienda** (`TiendaScreen.jsx`) — store for *café en grano* and *accesorios*; "Agregar" buttons fire an `alert()` (per brief).
- **Puntos** (`PuntosScreen.jsx`) — loyalty explainer: balance, how-it-works, the 10 CLP = 1 pt rule, and a rewards canjear grid.

## Composition
All screens consume `window.LuckyPointCoffeeDesignSystem_11711f` (Button, Card, Badge, PriceTag, MenuItem, ProductCard, CategoryTabs, …) — no primitive is re-implemented here. Chrome (header/footer) lives in `SiteChrome.jsx`.

## Notes
- Mobile-first: the top nav collapses below 760px and hero grids stack.
- `menu-data.js` holds the full carta (9 categories) plus an illustrative store catalogue.
- This is a visual/interaction recreation. There was **no source codebase** (the `SebaPobando/lucky-point` repo is empty), so layout decisions follow the brand brief and the menu PDF, not an existing site.
