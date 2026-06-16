import React from 'react';

/**
 * @startingPoint section="Coffee" subtitle="Dual price: CLP + Lucky Points" viewport="700x150"
 */
export interface PriceTagProps {
  /** Price in Chilean pesos (integer, e.g. 3200). */
  clp: number;
  /** @default "inline" */
  layout?: 'inline' | 'stacked';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Show the Lucky Points equivalent pill. @default true */
  showPoints?: boolean;
}
export declare function PriceTag(props: PriceTagProps): JSX.Element;

/** Format CLP integer as "$3.200". */
export declare function formatCLP(clp: number): string;
/** Convert CLP to Lucky Points (10 CLP = 1 point). */
export declare function toLuckyPoints(clp: number): number;
