import React from 'react';

/**
 * @startingPoint section="Coffee" subtitle="Store product card with add button" viewport="360x440"
 */
export interface ProductCardProps {
  name: string;
  /** Category label shown over the image, e.g. "Café en grano". */
  category?: string;
  description?: string;
  /** Price in CLP. */
  clp: number;
  /** Image URL; falls back to a warm placeholder block. */
  image?: string;
  /** Button label. @default "Agregar" */
  cta?: string;
  /** Called with { name, clp } when the button is pressed. */
  onAdd?: (item: { name: string; clp: number }) => void;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
