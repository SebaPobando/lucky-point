// Lucky Point Coffee — menu data extracted from the official carta PDF.
// Prices in CLP. Lucky Points = CLP / 10 (computed by PriceTag).
window.LP_MENU = [
  { id: 'cafe', label: 'Café', items: [
    { name: 'Long Black', clp: 3200, description: 'Espresso doble vertido sobre agua caliente.' },
    { name: 'Espresso Doble', clp: 3000, description: '36 g extraídos a 9 bar, alta concentración de sabores.' },
    { name: 'Short Black', clp: 3200, description: 'Espresso simple vertido sobre agua caliente.' },
    { name: 'Filtrado', clp: 3800, description: 'Vertido de agua sobre cama de café en filtro de papel.' },
    { name: 'Latte', clp: 3800, description: 'Espresso simple con leche texturizada y una sutil espuma.' },
    { name: 'Capuccino', clp: 3800, description: 'Espresso doble con leche y espuma en partes iguales.' },
    { name: 'Flat White', clp: 3800, description: 'Espresso doble con leche y espuma en partes iguales.' },
  ]},
  { id: 'dulces', label: 'Café dulces', items: [
    { name: 'Mokka', clp: 4200, description: 'Espresso doble emulsionado con chocolate, leche y espuma.' },
    { name: 'Bombom', clp: 4200, description: 'Espresso doble con leche condensada, leche y espuma.' },
    { name: 'Vaniglia', clp: 4200, description: 'Espresso doble con sirup de vainilla macerada y leche.' },
    { name: 'Mokka Blanco', clp: 4200, description: 'Espresso doble emulsionado con chocolate blanco y leche.' },
    { name: 'Mokka Nutella', clp: 5500, tag: 'Favorito', description: 'Espresso doble emulsionado con nutella y leche.' },
  ]},
  { id: 'choco', label: 'Chocolatozos', items: [
    { name: 'Nutellatte', clp: 5500, description: 'Mezcla de nutella y leche texturizada.' },
    { name: 'Chocolate Blanco', clp: 5000, description: 'Chocolate blanco, crema, leche condensada y leche.' },
    { name: 'Chocolate Caliente', clp: 5000, description: 'Chocolate de leche, crema, cacao amargo y leche.' },
  ]},
  { id: 'te', label: 'Té e infusiones', items: [
    { name: 'Té Negro', clp: 3000, description: 'Mezcla natural de té negro tradicional.' },
    { name: 'Infusión Roibos', clp: 3000, description: 'Infusión de hojas de rooibos.' },
    { name: 'Té Chai', clp: 3000, description: 'Té con canela, cardamomo, jengibre y clavo. Leche +500.' },
    { name: 'Té Cedrón', clp: 3000, description: 'Té de cedrón con cáscaras de naranja.' },
    { name: 'Matcha Latte', clp: 4500, description: 'Té matcha con leche texturizada.' },
    { name: 'Matcha Latte Vainilla', clp: 5000, description: 'Matcha con leche y syrup casero de vainilla.' },
  ]},
  { id: 'jugos', label: 'Jugos', items: [
    { name: 'Jugo de Piña', clp: 4000, description: 'Jugo natural de piña.' },
    { name: 'Jugo de Mango', clp: 4000, description: 'Jugo natural de mango.' },
    { name: 'Jugo de Frambuesa', clp: 4000, description: 'Jugo natural de frambuesa.' },
    { name: 'Limonada', clp: 4000, description: 'Limonada natural.' },
    { name: 'Jugo de Naranja', clp: 3500, description: 'Jugo natural de naranja.' },
    { name: 'Agua Natural', clp: 2500, description: 'Agua natural.' },
  ]},
  { id: 'verano', label: 'Carta verano', items: [
    { name: 'Aerocano', clp: 4500, tag: 'Verano', description: 'Espresso doble texturizado con agua y hielo.' },
    { name: 'Filtrado Frío', clp: 4200, description: 'Filtrado recibido sobre cama de hielo.' },
    { name: 'Espresso Frío', clp: 3300, description: 'Doble shot de espresso sobre cama de hielo.' },
    { name: 'Cold Brew', clp: 4500, description: 'Café infusionado en frío por 24 horas.' },
    { name: 'Espresso Tonic', clp: 5500, description: 'Espresso y agua tónica.' },
    { name: 'Iced Vaniglia', clp: 5000, description: 'Doble shot, leche texturizada en frío y sirup de vainilla.' },
    { name: 'Iced Capuccino', clp: 4500, description: 'Doble shot con leche texturizada en frío.' },
    { name: 'Iced Latte', clp: 4500, description: 'Un shot de espresso y leche fría.' },
    { name: 'Iced Moka', clp: 5000, description: 'Doble shot, leche en frío emulsionada con chocolate.' },
    { name: 'Iced Bombón', clp: 5000, description: 'Doble shot, leche en frío con leche condensada.' },
    { name: 'Matcha Latte Frío', clp: 5000, description: 'Matcha suave mezclado con leche, cremoso y equilibrado.' },
    { name: 'Matcha Vainilla Frío', clp: 6000, description: 'Matcha con leche fría y un toque de vainilla.' },
  ]},
  { id: 'sandwich', label: 'Sándwich', items: [
    { name: 'Ave Pimentón', clp: 5500, description: 'Ciabatta, pollo desmenuzado, lechuga y mayo de morrones.' },
    { name: 'Croissant', clp: 5500, description: 'Hojaldre horneado, relleno con jamón y queso.' },
    { name: 'Tostadas Palta y Huevo', clp: 7000, description: 'Masa madre, dos huevos, palta, sal, pimienta y oliva.' },
    { name: 'Huevo Tocino Queso', clp: 7000, description: 'Masa madre, huevo frito, tocino y queso mantecoso.' },
    { name: 'Baba Ganoush', clp: 5500, description: 'Masa madre, salteado de morrón, berenjena y tomate.' },
    { name: 'Mechada con Queso', clp: 6000, description: 'Masa madre, carne mechada jugosa y queso derretido.' },
    { name: 'Caprese', clp: 8000, description: 'Masa madre, cherry, queso cabra, albahaca y oliva.' },
    { name: 'El Serrano', clp: 8000, description: 'Masa madre, jamón serrano, brie, rúcula y oliva.' },
    { name: 'Tostadas con Palta', clp: 5500, description: 'Masa madre, palta laminada, sal, pimienta y oliva.' },
  ]},
  { id: 'pasteleria', label: 'Pastelería', items: [
    { name: 'Cheesecake Matcha', clp: 5000, description: 'Base cremosa de matcha con corazón de limón.' },
    { name: 'Tiramisú', clp: 6000, description: 'Bizcocho al café, crema de mascarpone y cacao.' },
    { name: 'Tartaleta de Frambuesa', clp: 4500, description: 'Base crujiente, crema suave y frambuesas frescas.' },
    { name: 'Pie de Limón', clp: 3500, description: 'Base crujiente, crema de limón y merengue ligero.' },
    { name: 'Galletón', clp: 3000, description: 'Oreo o limón, suave por dentro y crocante por fuera.' },
    { name: 'Barra Proteína Chocolate', clp: 4000, description: 'Whey, creatina, chocolate bitter, frutos secos y coco.' },
    { name: 'Barquillos', clp: 2000, description: 'Crujientes y rellenos de manjar cremoso.' },
    { name: 'Barra Proteína Semillas', clp: 3000, description: 'Almendras, maní, semillas, cranberry y chocolate.' },
  ]},
  { id: 'bolleria', label: 'Bollería', items: [
    { name: 'Croissant de Nutella', clp: 5000, description: 'Hojaldre crujiente relleno de Nutella cremosa.' },
    { name: 'NY Roll Pistacho', clp: 5000, description: 'Masa hojaldrada rellena de crema de pistacho.' },
    { name: 'Rollo de Canela', clp: 4000, description: 'Masa suave con canela y glaseado dulce.' },
    { name: 'Media Luna', clp: 2000, description: 'Masa hojaldrada, suave por dentro y dorada por fuera.' },
  ]},
];

// Store catalogue (café en grano + accesorios) — illustrative, brand-consistent.
window.LP_SHOP = {
  grano: [
    { name: 'Etiopía Yirgacheffe', category: 'Café en grano', clp: 12900, description: '250g · Notas florales, cítricas y miel.' },
    { name: 'Colombia Huila', category: 'Café en grano', clp: 11500, description: '250g · Caramelo, panela y naranja.' },
    { name: 'Brasil Cerrado', category: 'Café en grano', clp: 10900, description: '250g · Chocolate, maní y cuerpo suave.' },
    { name: 'Blend Lucky Point', category: 'Café en grano', clp: 9900, description: '250g · Nuestra mezcla de casa, equilibrada.' },
  ],
  accesorios: [
    { name: 'Prensa Francesa 350ml', category: 'Accesorios', clp: 18900, description: 'Vidrio borosilicato y filtro de acero.' },
    { name: 'Cafetera V60', category: 'Accesorios', clp: 14500, description: 'Dripper cerámico para filtrado pour-over.' },
    { name: 'Mug Lucky Point', category: 'Accesorios', clp: 7900, description: 'Taza de gres esmaltado, 300ml.' },
    { name: 'Filtros de papel V60', category: 'Accesorios', clp: 4900, description: 'Pack 100 unidades, sin blanqueador.' },
  ],
};
